const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.send('I m a vendor')
})

module.exports = router