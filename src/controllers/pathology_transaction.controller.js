var PathologyTransaction = require('../models/pathology_transaction.model');

exports.create_transaction = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.send({ success: true, message: 'Add the details' });
  } else {
    const transactionData = new PathologyTransaction(req.body);

    PathologyTransaction.createTransaction(transactionData, (err, pathology) => {
      if (err) {
        res.send(err);
      } else {
        res.json({
          status: true,
          message: 'Transaction added successfully',
          data: pathology.insertId,
        });
      }
    });
  }
};