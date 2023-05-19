const router = require('express').Router();
const AuthenController = require('./authen-controller');

//ลองใส่เอง ไม่งั้นไม่รู้ว่าต่อถูกป่าว
router.get('/register', (req, res) => {
    console.log(req.body)
    res.send('Hello')
})

// router.post('/login', (req, res) => {
//     console.log(req.body)
//     res.json('helloooo login')
// })
router.post('/login', AuthenController.login)
router.post('/token', AuthenController.validateToken)

// router.post('/register', (req, res) => {
//     console.log(req.body)
//     res.json('hello registerrrrrr')
// })

router.post('/register', AuthenController.register)

module.exports = router;