import express from 'express'
import compression from 'compression'
import path from 'path'
import {Template} from '../client/Template/Template'
import spdy from 'spdy'
import fs from 'fs'
import forceHTTPS from './forceHTTPS'
import {h} from 'preact'
import render from 'preact-render-to-string'
import configureStore from './configureStore'

const app = express(),
	PORT = process.env.PORT || 5000;

app.disable('x-powered-by');

app.use(compression());

app.use(forceHTTPS);

// Directory where images are stored
app.use('/assets', express.static(path.resolve(process.cwd(), 'dist', 'assets')));

// This path is used to serve js files
app.use('/', express.static(path.resolve(process.cwd(), 'dist', 'js')));

// For Letsencrypt
app.use('/.well-known', express.static(path.resolve(process.cwd(), 'dist', '.well-known')));

// mainfest.json
app.get('/manifest.json', (req, res) => {
	res.sendFile(path.resolve(process.cwd(), 'dist', 'manifest.json'));
});

// service worker
app.get('/sw.js', (req, res) => {
	res.sendFile(path.resolve(process.cwd(), 'dist', 'sw.js'));
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

// const createPreloadedState = () => ({});
//
// const createAppShell = (store) => {
// 	const state = store.getState(),
// 		html = render(<App store={store}/>);
// 	return Template({html, state});
// };
//
//
// app.get('*', (req, res) => {
// 	const store = configureStore(createPreloadedState(), create)
// });

app.get('*', (req, res )=> {
	res.send(Template())
});