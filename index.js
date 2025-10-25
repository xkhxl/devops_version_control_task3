const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('<h1>Hello from nodejs-demo-app!<h1>'));

app.get('/status',(req,res) => {
	res.json({ status:'ok', uptime: process.uptime(), timestamp: Date.now() });
});

console.log('Starting app...');

app.listen(port, () => console.log(`Server listening on ${port}`));
