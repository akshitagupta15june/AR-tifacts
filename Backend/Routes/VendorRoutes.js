const express = require('express')
const router = express.Router()
const multer = require('multer')
const vendor = require('../Modal/VendorModal')
const upload = multer({ dest: 'uploads/' })
router.post('/', async (req, res) => {
    const data = req.body
    console.log(data)
    const { name, email, first_address, address, tel, companyNo, product, productImg } = data
    const check = await vendor.findOne({ email: email })
    if (check) {
        res.status(400).send('Email already exists')
        return
    }
    const store = await vendor.create({ name: name, email: email, streetAddress: first_address, landmark: address, contactNumber: Number(tel), companyRegisterationNumber: Number(companyNo), product: product, productImg: productImg })
    res.send(store)
    //    const {name,email,first_address, }
})

module.exports = router