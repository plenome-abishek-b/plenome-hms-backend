const CSVModel = require('../models/csvImport.model');


exports.createCSV = (req, res) => {
    let CSVData = req.body;
    if (!Array.isArray(CSVData)) {
      CSVData = [CSVData];
    }
  
    const insertData = CSVData.map((data) => new CSVModel(data));
  
    CSVModel.createCSV(insertData, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Error while inserting data' });
      } else {
        const insertId = result.insertId; // Access the insertId property directly
        res.json({ status: true, message: 'Details added successfully', data: [insertId] }); // Wrap insertId in an array for consistency with the response structure
      }
    });
  };
  
