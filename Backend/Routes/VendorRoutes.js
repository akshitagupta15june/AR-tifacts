const express = require('express')
var QRCode = require('qrcode')
const router = express.Router()
const vendor = require('../Modal/VendorModal')


router.post('/', async (req, res) => {
    const data = req.body
    console.log(data)
    const url = await QRCode.toDataURL(data.companyNo)     //convert data into qr code.(return qrcode image URI)
    const { name, email, first_address, address, tel, companyNo, product, productImg } = data
    const check = await vendor.findOne({ email: email })
    if (check) {
        res.status(400).send('Email already exists')
        return
    }
    const store = await vendor.create({ name: name, email: email, streetAddress: first_address, landmark: address, contactNumber: Number(tel), companyRegisterationNumber: Number(companyNo), product: product, productImg: productImg, QRImgURI: url })
    res.status(200).send(store)

})

module.exports = router