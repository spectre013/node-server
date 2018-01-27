const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;


var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('scream', (text) => {
    return text.toUpperCase();
})

app.get('/',(req, res) => {
    res.render('welcome',{
        pageTitle: 'Welcome',
        message: 'Welcome to My page!'
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        pageTitle: 'About Page'
    });
});

app.use(express.static(__dirname+'/public'));
app.listen(port, () => {
    console.log(`Servers is up on port ${port}`)
});