import {readFileSync} from 'fs'

// const inlineCSS = readFileSync('../../dist/js/index.css');
// const inlineJS = readFileSync('../../dist/js/main.js');

export const Template = (html, state) => {
	return (`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="theme-color" content="#0a64a0"/>
    <link rel="manifest" href="/manifest.json">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0"/>
    <title>COER</title>
    <script>
	if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
    }
    </script>
</head>
<body>
<style>
	    * {
	        margin: 0;
	        padding: 0;
	        border: 0;
	      }
		html {
		    margin: 0;
	        padding: 0;
	        height: 100%;
	        width: 100%;
		}
	     body{
	        margin: 0;
	        padding: 0;
	        height: 100%;
	        width: 100%;
			-webkit-background-size: cover;
			background-size: cover;
	    }

		@media screen {
			.HomePage{
	   		width: 100%;
	   	}
	 		.HomeButtonBox {
	   		height: calc(100% - 172px);
	   	}
	}

	@media screen and (min-width: 720px) {
			.HomeButtonBox {
				height: calc(100% - 190px);
			}
	}

		@media screen and (min-width: 1160px) {
			body {
			}
		}
</style>
	<script type="text/javascript" src="/commons.js"></script>
	<!--<script>window.__STATE__=${JSON.stringify(state)}</script>-->
	<script type="text/javascript" src="/main.js"></script>
</body>
</html>`);
};

