const path = require('path');
const publicPath = path.join(__dirname, '../public');

const express = require('express');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.render(publicPath + '/index.html');
// });


app.listen(3000, () => {
    console.log(`Server started on post ${port}`);
});