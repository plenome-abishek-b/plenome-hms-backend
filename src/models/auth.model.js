var dbConn = require('../../config/db.config');

class Staff {
    static findByEmail(email, callback) {
      dbConn.query('SELECT * FROM staff WHERE email = ?', [email], (error, results) => {
        if (error) {
          console.error('Error executing MySQL query: ' + error.stack);
          return callback(error, null);
        }
  
        if (results.length === 0) {
          return callback(null, null);
        }
  
        const staff = results[0];
        return callback(null, staff);
      });
    }
  }
  
  module.exports = Staff;