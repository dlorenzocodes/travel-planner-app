const path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static('dist'));


app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile('dist/index.html')
})




const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening to port ${port}...`));