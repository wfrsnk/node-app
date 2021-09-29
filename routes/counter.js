const {Router} = require('express')
const router = Router()
var counter = 0;

router.get('/', (req, res) => {

    res.render('index', {
        index: counter
    })
})

router.get('/stat', (req, res) => {
    ++counter
    res.render('stat', {
        index: counter
    })
   
})

router.get('/about', (req, res) => {
    res.render('about', {
        name: 'Artem',
    })
})  



module.exports = router 