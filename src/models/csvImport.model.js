

var dbConn = require('../../config/db.config');

var CSV = function(medicine) {
  this.id = medicine.id;
  this.medicine_name = medicine.medicine_name;
  this.medicine_category_id = medicine.medicine_category_id;
  this.medicine_image = medicine.medicine_image;
  this.medicine_company = medicine.medicine_company;
  this.medicine_composition = medicine.medicine_composition;
  this.medicine_group = medicine.medicine_group;
  this.unit = medicine.unit;
  this.min_level = medicine.min_level;
  this.reorder_level = medicine.reorder_level;
  this.vat = medicine.vat;
  this.unit_packing = medicine.unit_packing;
  this.vat_ac = medicine.vat_ac;
  this.note = medicine.note;
  this.is_active = medicine.is_active;
  this.created_at = medicine.created_at;
}

CSV.createCSV = (csvData, result) => {
    const values = csvData.map((data) => [
      data.medicine_name,
      data.medicine_category_id,
      data.medicine_image,
      data.medicine_company,
      data.medicine_composition,
      data.medicine_group,
      data.unit,
      data.min_level,
      data.reorder_level,
      data.vat,
      data.unit_packing,
      data.vat_ac,
      data.note,
      data.is_active,
      data.created_at
    ]);
  
    dbConn.query(
      'INSERT INTO pharmacy (medicine_name, medicine_category_id, medicine_image, medicine_company, medicine_composition, medicine_group, unit, min_level, reorder_level, vat, unit_packing, vat_ac, note, is_active, created_at) VALUES ?',
      [values],
      (err, res) => {
        if (err) {
          console.log(err);
          console.log('Error while inserting data');
          result(err, null);
        } else {
          console.log('Medicine details data inserted successfully');
          const insertId = res.insertId;
          result(null, { insertId: insertId }); // Pass an object with the insertId to the callback function
        }
      }
    );
  };
  
  module.exports = CSV;