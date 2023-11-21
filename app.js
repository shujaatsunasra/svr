// server/app.js
const express = require('express');
const { connectDB } = require('./db/connection');
const landRecordsRouter = require('./routes/land_records');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/land-records', landRecordsRouter);

// Start the server
const PORT = process.env.PORT || 2020;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
