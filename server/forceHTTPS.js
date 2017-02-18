module.exports = function requireHTTPS(req, res, next) {
	if (!req.secure || req.headers['x-forwarded-proto'] == "http" && process.env.NODE_ENV == "production") {
		return res.redirect('https://' + req.get('host') + req.url);
	}
	if (!req.secure || req.headers['x-forwarded-proto'] == "http") {
		return res.redirect('https://' + req.get('host') + ':5000' + req.url);
	}
	next();
};