const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.post('/register', userCtrl.registerUser)

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/all_infor', auth, authAdmin, userCtrl.getUsersAll)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor', auth,  userCtrl.getUser)

router.delete('/delete/:id', auth, authAdmin, userCtrl.deleteUser)
module.exports = router