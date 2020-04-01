const express = require('express')
const mongoose = require('mongoose')
const morgan = require("morgan");
require('dotenv').config()
const cors = require('cors')
const app = express()
const commentController = require('./controllers/usercontroller.js')

//.env Config
const PORT = process.env.PORT || 9000
const mongoURI = process.env.MONGODB_URI

//cors setup
// const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }


app.use(cors());

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"))
app.use(express.json())
app.use(morgan("tiny"))
app.use('/covidstats', commentController)

//DatabaseConnection
// mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
// mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect( mongoURI , {
    useNewUrlParser: true ,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})


app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
  })
  ///