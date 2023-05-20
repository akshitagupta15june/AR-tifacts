const express = require('express')
const router = express.Router()
const multer = require('multer')
const vendor = require('../Modal/VendorModal')
const upload = multer({ dest: 'uploads/' })
router.post('/', upload.array('files', 12), async (req, res) => {
    const data = req.body
    console.log(data)
    const { name, email, first_address, address, tel, companyNo } = data
    const store = await vendor.create({ name: name, email: email, streetAddress: first_address, landmark: address, contactNumber: Number(tel), companyRegisterationNumber: Number(companyNo) })
    res.send(store)
    //    const {name,email,first_address, }
})

module.exports = router