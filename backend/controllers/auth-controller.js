const User = require('../models/user-model')
const bcryptjs = require('bcryptjs')

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const userExists = await User.findOne({ email: email })

        if (!userExists) {
            return res.json({ msg: "Invalid credentials" })
        }

        const user = await userExists.comparePassword(password)

        if (user) {
            return res.status(200).json({
                msg: "Login successful!",
                token: await userExists.generateToken(),
                userId: userExists._id.toString()
            })
        }
        else {
            return res.json({ msg: "Invalid email or password" })
        }

    } catch (error) {
        return res.status(500).json({ msg: "internal server error" })
    }
}

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body

        const userExists = await User.findOne({ email: email })

        if (userExists) {
            return res.status(400).json({ msg: 'email already exists' })
        }

        //hash password
        // const saltRound = 10
        // const hash_password = await bcryptjs.hash(password, saltRound)

        const userCreated = await User.create({ username, email, phone, password })
        return res.status(200).json({
            msg: "Registration successful!",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        })

    } catch (error) {
        return res.status(500).json({ msg: "internal server error" })
    }
}

module.exports = { login, register }