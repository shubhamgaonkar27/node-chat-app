const path = require('path');
const publicPath = path.join(__dirname, '../public');

const express = require('express');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.get('/app', (req, res) => {
    res.send('hello');
});


app.listen(3000, () => {
    console.log(`Server started on port ${port}`);
});