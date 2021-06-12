require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()
app.use(express.json())
app.use(cookieParser())
// setup router


app.use('/user', require('./routes/userRouter'))


// ket noi mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Ket noi toi mongodb')
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})