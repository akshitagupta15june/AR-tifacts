const express = require('express')
const app = express()
const color = require('colors')
const path = require('path');
const connectdb = require('./config/connectdb')
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
connectdb()
app.get('/', (req, res) => {
    res.send('API is Running')
})

app.listen(process.env.SERVER_HOST, () => {
    console.log('Server is running on 5000'.yellow.bold)
})

const postData = require('../htmlFiles/postData.js');
