const express = require('express')
const app = express()
const port = 3000


console.log(module)
app.use((req, res, next) => {
  console.log('request is sent')
  next()
})

app.get('/', (req, res, next) => {
  res.send('Hello World!')
})

app.get('/:name', (req, res, next) => {
  res.send('Hello World!')
  const options = {
    root: path.join(__dirname, 'public'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.name
  res.sendFile(fileName, options, (err) => {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})