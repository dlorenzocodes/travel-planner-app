const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});

module.exports = app;

