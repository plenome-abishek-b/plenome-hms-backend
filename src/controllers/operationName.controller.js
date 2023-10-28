const OperationNameModel = require('../models/operationName.model')

exports.getName= (req,res)=>{

    let updatedQuery = 'select * from operation'
    let updatedValue = [];
    if(req.query.category){
        updatedQuery += ' where category_id = ? ';
        updatedValue.push(req.query.category);

    }

    OperationNameModel.setQuery(updatedQuery,updatedValue);

    OperationNameModel.getName((err,name)=>{
        if(err)
        res.send(err);
     
        console.log('name ',name);
        res.send(name);
    
    })
}