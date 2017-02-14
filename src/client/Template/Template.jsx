// const LoadingBox = `<div class='loading-div'>
// 	<svg height='80' width='210'>
// 	<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
// 	</svg>
// 	<svg height='80' width='210'>
// 	<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
// 	</svg>
// 	<svg height='80' width='210'>
// 	<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
// 	</svg>
// 	<svg height='80' width='210'>
// 	<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
// 	</svg>
// 	<svg height='80' width='210'>
// 	<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
// 	</svg>
// 	<svg height='80' width='210'>
// 	<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
// 	</svg>
// 	<svg height='80' width='210'>
// 	<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
// 	</svg>
// 	<svg height='80' width='210'>
// 	<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
// 	</svg>
// 	<svg height='80' width='210'>
// 	<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
// 	</svg>
// 	<svg height='80' width='210'>
// 	<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
// 	</svg>
// 	</div>`;

export const Template = (StaticString) => {
	return (`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="theme-color" content="#0a64a0"/>
    <link rel="manifest" href="/manifest.json">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0"/>
    <title>COER Portal</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            border: 0;
          }

        html, body {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
        }

        #root {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            background: url("/assets/bg_login.png");
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
  			#root {
    			background: url("/assets/bg_login.png");
    		}
    	}
    	
    </style>
</head>
<body>
<link rel="stylesheet" href="/index.css" media="none" onload="if(media!='all')media='all'">
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
<script src="/commons.js" type="text/javascript"></script>
<script src="/vendor.js" type="text/javascript"></script>
<div id="root" class="root">
    ${StaticString}
</div>
<script src="/main.js" type="text/javascript"></script>
</body>
</html>`);
};

// <script type="text/javascript">
// 	if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js').then(function(reg) {
//         console.log('Successfully registered service worker', reg);
//     }).catch(function(err) {
//         console.warn('Error whilst registering service worker', err);
//     });