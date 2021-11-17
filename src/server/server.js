const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('src/client'));


app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile('/client/view/template.html', {root: __dirname + '/..'})
})




const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening to port ${port}...`));