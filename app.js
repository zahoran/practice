const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'hbs');

console.log(__dirname);

app.use(express.static(path.join(__dirname, '/public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Zita'
    });
});

app.get('/about', (req, res) => {
    res.send('Ai us!');
});

app.listen(port, () => {
    console.log('Server has started on port' + port);
})