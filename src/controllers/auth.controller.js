// controller/AuthController.js
const bcrypt = require('bcrypt');
const Staff = require('../models/auth.model');

class AuthController {
  static login(req, res) {
    const { email, password } = req.body;
    

    Staff.findByEmail(email, (error, staff) => {
      if (error) {
        console.error('Error finding staff member:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      if (!staff) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const storedPassword = staff.password;
      const trimmedPassword = password.trim();

      bcrypt.compare(trimmedPassword, storedPassword, (bcryptError, isMatch) => {
        console.log(trimmedPassword,storedPassword,'password')
        if (bcryptError) {
          console.error('Error comparing bcrypt hashes:', bcryptError);
          return res.status(500).json({ message: 'Internal Server Error' });
        }
        console.log(isMatch,'ismatch')  

        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Authentication successful
        return res.status(200).json({ message: 'Authentication successful' });
      });
    });
  }
}

module.exports = AuthController;
