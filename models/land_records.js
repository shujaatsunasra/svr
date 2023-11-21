// server/models/land_records.js
const mongoose = require('mongoose');

// Define the schema for land records
const landRecordSchema = new mongoose.Schema(
  {
    recordId: { type: String, required: true },
    owner: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, required: true },
    additionalInfo: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    collection: 'land_records', // Specify the collection name explicitly
  }
);

// Create the LandRecord model
const LandRecord = mongoose.model('LandRecord', landRecordSchema);

module.exports = LandRecord;
