const express = require('express')
const { engine } = require('express-handlebars') //使用express-handlebars
const app = express()
const port = 3000
const restaurants = require('./public/jsons/restaurant.json').results

// 把樣板引擎交給express-handlebars
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

// 呼叫靜態檔案json
app.use(express.static('public'))

// 首頁重新導入restaurants
app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

// restaurants載入清單
app.get('/restaurants', (req, res) => {
  res.render('index', { restaurants: restaurants })
})

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  const restaurant = restaurants.find((restaurant) => restaurant.id.toString() === id)
  res.render('show', { restaurant })
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})