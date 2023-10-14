const express = require('express')
const app = express()
const port = 3000

// 首頁重新導入restaurants
app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

// restaurants載入清單
app.get('/restaurants', (req, res) => {
  res.send('restaurant list')
})

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  res.send(`restaurant: ${id}`)
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})