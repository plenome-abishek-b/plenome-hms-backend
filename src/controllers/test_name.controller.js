var test_name = require('../models/test_name.model');

exports.get_test_name = (req,res)=>{
    let updatedquery = 'select * from pathology'
    let updatedvalues = [];

    if(req.query.test_name){
        updatedquery = 'select * from pathology where id = ?'
        updatedvalues.push(req.query.test_name);
    }

    test_name.setvalues(updatedquery,updatedvalues);
    test_name.get_test_name((err,test_name)=>{
        if(err)
        res.send(err);

        console.log('test name is needed',test_name);
        res.send(test_name);

    })
}