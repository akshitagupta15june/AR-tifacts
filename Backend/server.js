const express = require('express')
const app = express()
app.use(express.json())
const color = require('colors')
const path = require('path');
const vendor = require('./Modal/VendorModal')
const vendorRoute = require('./Routes/VendorRoutes')
const connectdb = require('./config/connectdb')
const cors = require('cors')
app.use(cors())
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
connectdb()
app.use('/vendor', vendorRoute)
app.get('/', async (req, res) => {
    const data = await vendor.find({})
    if (data) {
        res.status(200).send(data)
    }
})

app.listen(process.env.SERVER_HOST, () => {
    console.log('Server is running on 5000'.yellow.bold)
})


