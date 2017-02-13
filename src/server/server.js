import express from 'express'
import compression from 'compression'
import path from 'path'
import React from 'react'
import {match, RouterContext} from 'react-router'
import {renderToString} from 'react-dom/server'
import {Template} from '../client/Template/Template.jsx'

const app = express(),
	PORT = 5000,
	MockBrowser = require('mock-browser').mocks.MockBrowser;

global.document = MockBrowser.createDocument();
global.window = MockBrowser.createWindow();

app.use(compression());

app.use('/assets', express.static(path.resolve(process.cwd(), 'dist', 'assets')));

app.get('/client.bundle.js', (req, res) => {
	res.sendFile(path.resolve(process.cwd(), 'dist', 'client.bundle.js'));
});

app.disable('x-powered-by');

app.get('/*', (req, res) => {
	const Routes = require('../client/routes.index.jsx');
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

app.listen(PORT, (err) => {
	if (err) throw err;
	process.stdout.write(`Server Started on http://localhost:${PORT}\n`);
});