const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { name: 'Slava' })
})

app.get('/education', (req, res) => {
  res.render('index', { name: 'Amir' })
})

app.get('/api/test', (req, res) => {
  res.json({ name: 'Dalya' })
})

app.get('/api/test/2', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify({ name: 'Dalya' }))
})

app.get('/api/test/3', (req, res) => {
  res.send('./static/pic.jpg')
})

app.use(express.static('static'))

app.get('*', function (req, res) {
  res.status(404).send('Not Found')
});

app.listen(port, (error) => {
  if (!error)
    console.log("Server is successfully running, app is listening on port " + port)
  else
    console.log("Error occurred, server can't start", error);
});