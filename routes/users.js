const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('we re on users')
});

module.exports = router;