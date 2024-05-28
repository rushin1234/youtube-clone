require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const authRouter = require('./router/auth-router')
const connectDb = require('./utils/db')

app.use(express.json())
app.use('/auth', authRouter)


app.get('/', (req, res) => {
    res.send('HI')
})
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Listening at port: ${port}`);
    })
})
