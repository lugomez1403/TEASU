const express = require('express');
const router = express.Router();

// Ruta del index
router.get('/', (req, res) => {
    res.send('Hello World!')
});


module.exports = router;