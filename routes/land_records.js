// server/routes/land_records.js
const express = require('express');
const router = express.Router();
const landRecordsController = require('../controllers/land_records');

router.get('/', landRecordsController.getAllLandRecords);
router.post('/', landRecordsController.createLandRecord);

module.exports = router;
