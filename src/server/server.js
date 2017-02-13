import express from 'express'

const app = express();

app.get('/', (req, res) => {
	res.send("FUCK YOU")
});

app.listen(3000);