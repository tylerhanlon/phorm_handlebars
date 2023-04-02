const express = require('express');

const app = express();

const port = 1337;

const dir = __dirname + "/"

var handlebars = require('express-handlebars').create({defaultLayout: 'main'})
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.static('public/css'))
app.use(express.static('public/js'))
app.use(express.static('public/images'))

app.get('/', function(request, response) {
    response.render('index', {title: 'Home'})
})

app.get('/index', function(request, response) {
    response.render('index', {title: 'Home'})
})

app.get('/signup', function(request, response) {
    response.render('signup', {title: "Signup"})
})

app.get('/groups', function(request, response) {
    response.render('groups', {title: 'Groups'})
})

app.get('/training', function(request, response) {
    response.render('training', {title: 'Training'})
})

app.get('/taiSummary', function(request, response) {
    response.render('taiSummary.html')
})

app.get('/morganSummary', function(request, response) {
    response.render('morganSummary.html')
})

app.get('/peterSummary', function(request, response) {
    response.render('peterSummary.html')
})

app.get('/amandaSummary', function(request, response) {
    response.render('amandaSummary.html')
})

app.use(function(req, res) {
    res.status(404)
    res.render('404', {title: 'Page not found!'})
})

app.use(function(err, req, res, next) {
    res.status(500)
    res.render('500')
})



app.listen(port, function() {
    console.log("Listening on http://localhost:" + port + ' press ctrl+c to quit')
})