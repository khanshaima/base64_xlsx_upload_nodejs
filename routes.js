const express = require('express');
const router = express.Router();
const uploadFileController = require('./xlsxReadController');

router.get('/', (req, res) => {
  res.send('NodeJS excel upload');
});

router.post('/uploadxl', uploadFileController.uploadFile);

module.exports = router;