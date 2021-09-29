const {Router} = require('express')
const router = Router()



router.get('/', (req, res) => {
    res.render('index')
})

router.get('/stat', (req, res) => {
    res.render('stat')
})

module.exports = router 