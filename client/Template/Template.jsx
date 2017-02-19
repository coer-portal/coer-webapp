export const Template = (html, state) => {
	return (`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="theme-color" content="#0a64a0"/>
    <link rel="manifest" href="/manifest.json">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0"/>
    <title>COER</title>
    <style>
    	* {margin:0;padding:0;border:none;}
    	html,body{height:100%;width:100%;margin:0;padding:0; font-family:sans-serif;}
    	#root{width:100%;height:100%;margin:0;padding:0;}
    	#loader{height: 100%;width:100%;margin:0;padding:0;}
    	.cssload-container{position:relative}.cssload-whirlpool,.cssload-whirlpool::after,.cssload-whirlpool::before{position:absolute;top:50%;left:50%;border:1px solid #ccc;border-left-color:#000;border-radius:974px;-o-border-radius:974px;-ms-border-radius:974px;-webkit-border-radius:974px;-moz-border-radius:974px}.cssload-whirlpool{margin:-24px 0 0 -24px;height:49px;width:49px;animation:cssload-rotate 1.15s linear infinite;-o-animation:cssload-rotate 1.15s linear infinite;-ms-animation:cssload-rotate 1.15s linear infinite;-webkit-animation:cssload-rotate 1.15s linear infinite;-moz-animation:cssload-rotate 1.15s linear infinite}.cssload-whirlpool::before{content:"";margin:-22px 0 0 -22px;height:43px;width:43px;animation:cssload-rotate 1.15s linear infinite;-o-animation:cssload-rotate 1.15s linear infinite;-ms-animation:cssload-rotate 1.15s linear infinite;-webkit-animation:cssload-rotate 1.15s linear infinite;-moz-animation:cssload-rotate 1.15s linear infinite}.cssload-whirlpool::after{content:"";margin:-28px 0 0 -28px;height:55px;width:55px;animation:cssload-rotate 2.3s linear infinite;-o-animation:cssload-rotate 2.3s linear infinite;-ms-animation:cssload-rotate 2.3s linear infinite;-webkit-animation:cssload-rotate 2.3s linear infinite;-moz-animation:cssload-rotate 2.3s linear infinite}@keyframes cssload-rotate{100%{transform:rotate(360deg)}}@-o-keyframes cssload-rotate{100%{-o-transform:rotate(360deg)}}@-ms-keyframes cssload-rotate{100%{-ms-transform:rotate(360deg)}}@-webkit-keyframes cssload-rotate{100%{-webkit-transform:rotate(360deg)}}@-moz-keyframes cssload-rotate{100%{-moz-transform:rotate(360deg)}}
    </style>
</head>
<body>
	<div id="root" class="root">
		<div class="cssload-container" id="loader">
			<div class="cssload-whirlpool"></div>
		</div>
	</div>
	<script>
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('./sw.js').then(function (reg) {
			console.log('Successfully registered service worker', reg);
			}).catch(function (err) {
				console.warn('Error whilst registering service worker', err);
			})
		}
	</script>
	<script type="text/javascript" src="/commons.js" async></script>
	<script type="text/javascript" src="/main.js" async></script>
</body>
</html>`);
};

