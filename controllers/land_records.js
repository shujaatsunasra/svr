// server/controllers/land_records.js
const LandRecord = require('../models/land_records');

class LandRecordsController {
  async getAllLandRecords(req, res) {
    try {
      // Use the find method to retrieve all land records from the existing collection
      const landRecords = await LandRecord.find();

      // Log the retrieved data to the console
      console.log('All Land Records:', landRecords);

      // Send the data as JSON response
      res.json(landRecords);
    } catch (error) {
      console.error('Error retrieving land records:', error.message);
      res.status(500).send('Internal Server Error');
    }
  }

  async createLandRecord(req, res) {
    try {
      const newLandRecord = await LandRecord.create(req.body);
      res.json(newLandRecord);
    } catch (error) {
      console.error('Error creating land record:', error.message);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = new LandRecordsController();
