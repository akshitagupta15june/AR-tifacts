const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
app.get('/', (req, res) => {
    res.send('API is Running')
})

app.listen(process.env.SERVER_HOST, () => {
    console.log('Server is running on 5000')
})
