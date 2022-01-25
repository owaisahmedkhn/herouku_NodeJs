import express from 'express'
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send("Hello World!, Your Node .mjs Server is running and listening at Port:"+ port + "<br/> Now this is automatic deployed with heroku. make any changes at github and its done automatically. Hurray !!")
})

app.get('/water', (req, res) => {
    res.send("Hello World!, Take the water 1!")
  })

app.get('/food', (req, res) => {
    res.send("Hello World!, here is your food !!")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
