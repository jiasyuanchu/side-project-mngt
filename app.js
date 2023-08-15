const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 3000


app.engine('hbs', handlebars({ extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('this is home page.')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})


module.exports = app