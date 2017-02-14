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
    <script src="/static/commons.js" type="text/javascript"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
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

        .loading-div {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        svg {
            position: absolute;
        }

        svg ellipse {
            -webkit-transform-origin: center;
            transform-origin: center;
        }

        svg:nth-of-type(1) ellipse {
            stroke: #F1725D;
            cx: 25px;
            stroke-width: 3px;
            -webkit-animation: jump 600ms infinite ease-in-out;
            animation: jump 600ms infinite ease-in-out;
            opacity: .7;
            -webkit-animation-delay: 0ms;
            animation-delay: 0ms;
        }

        svg:nth-of-type(2) ellipse {
            stroke: #38BDAB;
            cx: 65px;
            stroke-width: 3px;
            -webkit-animation: jump 600ms infinite ease-in-out;
            animation: jump 600ms infinite ease-in-out;
            opacity: .7;
            -webkit-animation-delay: 75ms;
            animation-delay: 75ms;
        }

        svg:nth-of-type(3) ellipse {
            stroke: #9D30A5;
            cx: 105px;
            stroke-width: 3px;
            -webkit-animation: jump 600ms infinite ease-in-out;
            animation: jump 600ms infinite ease-in-out;
            opacity: .7;
            -webkit-animation-delay: 150ms;
            animation-delay: 150ms;
        }

        svg:nth-of-type(4) ellipse {
            stroke: #B779E2;
            cx: 145px;
            stroke-width: 3px;
            -webkit-animation: jump 600ms infinite ease-in-out;
            animation: jump 600ms infinite ease-in-out;
            opacity: .7;
            -webkit-animation-delay: 225ms;
            animation-delay: 225ms;
        }

        svg:nth-of-type(5) ellipse {
            stroke: #683893;
            cx: 185px;
            stroke-width: 3px;
            -webkit-animation: jump 600ms infinite ease-in-out;
            animation: jump 600ms infinite ease-in-out;
            opacity: .7;
            -webkit-animation-delay: 300ms;
            animation-delay: 300ms;
        }

        svg:nth-of-type(6) ellipse {
            fill: #333333;
            opacity: .05;
            rx: 0;
            ry: 0;
            cx: 25px;
            cy: 48px;
            -webkit-animation: shadow 600ms infinite ease-in-out;
            animation: shadow 600ms infinite ease-in-out;
            -webkit-animation-delay: 0ms;
            animation-delay: 0ms;
        }

        svg:nth-of-type(7) ellipse {
            fill: #333333;
            opacity: .05;
            rx: 0;
            ry: 0;
            cx: 65px;
            cy: 48px;
            -webkit-animation: shadow 600ms infinite ease-in-out;
            animation: shadow 600ms infinite ease-in-out;
            -webkit-animation-delay: 75ms;
            animation-delay: 75ms;
        }

        svg:nth-of-type(8) ellipse {
            fill: #333333;
            opacity: .05;
            rx: 0;
            ry: 0;
            cx: 105px;
            cy: 48px;
            -webkit-animation: shadow 600ms infinite ease-in-out;
            animation: shadow 600ms infinite ease-in-out;
            -webkit-animation-delay: 150ms;
            animation-delay: 150ms;
        }

        svg:nth-of-type(9) ellipse {
            fill: #333333;
            opacity: .05;
            rx: 0;
            ry: 0;
            cx: 145px;
            cy: 48px;
            -webkit-animation: shadow 600ms infinite ease-in-out;
            animation: shadow 600ms infinite ease-in-out;
            -webkit-animation-delay: 225ms;
            animation-delay: 225ms;
        }

        svg:nth-of-type(10) ellipse {
            fill: #333333;
            opacity: .05;
            rx: 0;
            ry: 0;
            cx: 185px;
            cy: 48px;
            -webkit-animation: shadow 600ms infinite ease-in-out;
            animation: shadow 600ms infinite ease-in-out;
            -webkit-animation-delay: 300ms;
            animation-delay: 300ms;
        }

        @-webkit-keyframes jump {
            40% {
                -webkit-transform: translateY(20px) scale(1.3);
                transform: translateY(20px) scale(1.3);
                opacity: .9;
            }
            40% {
                rx: 10px;
                ry: 10px;
                stroke-width: 3px;
            }
            45% {
                rx: 15px;
                ry: 7px;
                stroke-width: 4px;
            }
            55% {
                rx: 10px;
                ry: 10px;
            }
        }

        @keyframes jump {
            40% {
                -webkit-transform: translateY(20px) scale(1.3);
                transform: translateY(20px) scale(1.3);
                opacity: .9;
            }
            40% {
                rx: 10px;
                ry: 10px;
                stroke-width: 3px;
            }
            45% {
                rx: 15px;
                ry: 7px;
                stroke-width: 4px;
            }
            55% {
                rx: 10px;
                ry: 10px;
            }
        }

        @-webkit-keyframes shadow {
            45% {
                opacity: .15;
                rx: 10px;
                ry: 3px;
                -webkit-transform: translateY(5px) scale(1.3);
                transform: translateY(5px) scale(1.3);
            }
        }

        @keyframes shadow {
            45% {
                opacity: .15;
                rx: 10px;
                ry: 3px;
                -webkit-transform: translateY(5px) scale(1.3);
                transform: translateY(5px) scale(1.3);
            }
        }
  		@media screen { 
 			.HomePageLayout {
    			height: 100%;
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
    <link rel="stylesheet" href="/static/index.css" media="none" onload="if(media!='all')media='all'">
</head>
<body>

<div id="root" class="root">
    ${StaticString}
</div>

<script src="/static/main.js" type="text/javascript"></script>
<script type="text/javascript">
	if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}
</script>
</body>
</html>`);
};