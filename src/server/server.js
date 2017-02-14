import express from 'express'
import compression from 'compression'
import path from 'path'
import React from 'react'
import {match, RouterContext} from 'react-router'
import {renderToString} from 'react-dom/server'
import {Template} from '../client/Template/Template'
import spdy from 'spdy'
import fs from 'fs'
import forceHTTPS from '../forceHTTPS'

const app = express(),
	PORT = process.env.PORT || 5000,
	MockBrowser = require('mock-browser').mocks.MockBrowser;

global.document = MockBrowser.createDocument();
global.window = MockBrowser.createWindow();

app.disable('x-powered-by');

app.use(compression());

app.use(forceHTTPS);


app.use('/assets', express.static(path.resolve(process.cwd(), 'dist', 'assets')));

app.use('/static', express.static(path.resolve(process.cwd(), 'dist', 'js')));

app.use('/.well-known', express.static(path.resolve(process.cwd(), 'dist', '.well-known')));

app.get('/manifest.json', (req, res) => {
	res.sendFile(path.resolve(process.cwd(), 'dist', 'manifest.json'));
});

app.get('/sw.js', (req, res) => {
	res.sendFile(path.resolve(process.cwd(), 'dist', 'sw.js'));
});


app.get('/*', (req, res) => {
	const Routes = require('../client/routes.index');
	match({routes: Routes, location: req.url}, (err, redirect, RenderProps) => {
		if (err) {
			res.status(500).write(err.message);
			res.end();
		} else if (RenderProps) {
			new Promise((resolve, reject) => {
				const string = renderToString(<RouterContext {...RenderProps}/>);
				if (string) {
					resolve(string);
				} else {
					reject(<h1>Not Found</h1>)
				}
			}).then(result => {
				res.status(200).write(Template(result));
				res.end();
			});
		}
		else {
			res.status(404).write("<h1>Not Found</h1>");
			res.end();
		}

	});
});
if (process.env.NODE_ENV == "production") {

	let options = {
		key: fs.readFileSync('/etc/letsencrypt/live/coer-backend.ishanjain.me/privkey.pem'),
		ca: fs.readFileSync('/etc/letsencrypt/live/coer-backend.ishanjain.me/chain.pem'),
		cert: fs.readFileSync('/etc/letsencrypt/live/coer-backend.ishanjain.me/fullchain.pem')
	};
	// https/2 server
	spdy.createServer(options, app).listen(443, error => {
		if (error) throw error;
		process.stdout.write(`Server is now running on https://localhost:443\n\n`);
	});

	// http server that'll redirect users to https
	app.listen(80, err => {
		if (err) throw err;
		process.stdout.write(`Server started on PORT: 80
            `);
	});
} else {

	let localOptions = {
		key: fs.readFileSync(path.resolve('key.pem')),
		cert: fs.readFileSync(path.resolve('cert.pem'))
	};
	// https/2 server
	spdy.createServer(localOptions, app).listen(443, error => {
		if (error) throw error;
		process.stdout.write(`Server is now running on https://localhost:443\n\n`);
	});

	// http server that'll redirect users to https
	app.listen(80, err => {
		if (err) throw err;
		process.stdout.write(`Server started on PORT: 80\n\n`)
	})
}
