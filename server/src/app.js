const path = require('path');

const express = require('express');

const staticPath = path.join(__dirname, '..', 'dist');
const app = express();

app.use('/', express.static(staticPath));

app.get('/api', (req, res) => {
    res.send('Hello, world!');
});

module.exports = app;
