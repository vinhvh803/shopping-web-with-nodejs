const express = require('express');
const ejs = require('ejs');

const app = express();
const PORT = 3000;

app.use(express.static('client'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server run at http://localhost:${PORT}`);
})

app.get('/', function (req, res) {
    res.render('pages/index')
})