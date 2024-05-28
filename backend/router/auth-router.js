const express = require('express')
const router = express.Router()
const { login, register } = require('../controllers/auth-controller')
const validate = require('../middlewares/validate-middleware')
const signUpSchema = require('../validators/auth-validator')

router.route('/login').post(login)
router.route('/register').post(validate(signUpSchema), register)

module.exports = router