const express = require('express');
const app = express();
const PORT = 3003;
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

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})