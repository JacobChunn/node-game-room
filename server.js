const http = require('http');
const fs = require('fs').promises;
const path = require('path')
const express = require('express');

const app = express();

const port = 8080;
const host = 'localhost';

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/html/index.html'));
})

app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})