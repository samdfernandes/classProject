const express = require('express');
const app = express();
const PORT = 3003;
const bookmarksController = require('./controlers/bookmarks.js')
const mongoose = require('mongoose')
const cors = require('cors')
const whitelist = ['http://localhost:3000']
// const corsOptions = {
//     origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//         callback(null,true)
//     } else {
//         callback(new Error('Not allowed by CORS'))
//     }
//     }
// }

// app.use(cors(corsOptions))
app.use(express.json());
app.use('/bookmarks', bookmarksController)

app.get('/', (req, res) => {
    res.redirect('/bookmarks')
})

mongoose.connection.on('error', err => console.log(err.message + 'is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/holidays', {useNewUrlParser: true})
mongoose.connection.once('open', () => {
    console.log('connected to mongoose..')
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})