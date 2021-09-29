const express = require('express')
const expressHbr = require('express-handlebars')
const countRoutes = require('./routes/counter')



 
const PORT = process.env.PORT || 80

const app = express()
const hbs = expressHbr.create({
    defaultLayout: "main",
    extname: "hbs"
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.static('public'));

app.use(countRoutes)
app.listen(PORT, () => {
    console.log("Server has been started...");
})