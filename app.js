const path = require('path')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser') // simplifies access to request body
const app = express()  // make express app
const port = process.env.PORT || 8081
const logfile = '/access.log'

// Automatic mailing
const fs = require('fs')



// ADD THESE COMMENTS AND IMPLEMENTATION HERE 
// 1 set up the view engine
// 2 include public assets and use bodyParser
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request
// 6 respond with 404 if a bad URI is requested

console.log(process.env);

// 1 set up the view engine
app.set('views', path.resolve(__dirname, 'views')) // path to views
app.set('view engine', 'ejs') // specify our view engine

// 2 include public assets and use bodyParser
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
var accessLogStream = fs.createWriteStream(path.join(__dirname, logfile), { flags: 'a' })
app.use(logger('dev'))
app.use(logger('combined', { stream: accessLogStream }))



// 4 http GET default page at /
app.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render('index.ejs')
})

app.get('/index', function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render('index.ejs')
})

// 4 http GET /tic-tac-toe
app.get('/book', function (req, res) {
  res.render('book.ejs')
})



// 4 http GET /contact
app.get('/contact', function (req, res) {
  res.render('contact.ejs')
})

// 5 http POST /contact


 



// 6 this will execute for all unknown URIs not specifically handled
app.get(function (req, res) {
  res.render('404')
})

// Listen for an application request on designated port
app.listen(port, function () {
  console.log('\nWeb app started and listening on http://localhost:' + port + '.')
  
})
