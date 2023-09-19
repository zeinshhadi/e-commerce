const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({name:"hanin"});
  console.log("Hello Hanin");
})
app.post('/', (req, res) => {
    res.json({name:"maya"});
    console.log("Hello Hanin");
  })

app.listen(port, () => {
  console.log(`Hanin app listening on port ${port}`)
})