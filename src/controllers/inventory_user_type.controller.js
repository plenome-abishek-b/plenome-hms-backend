const user_typemodel = require('../models/inventory_user_type.model');
exports.getuser_type = (req,res)=>{
    user_typemodel.getuser_type((err,user_type)=>{
        if(err)
        res.send(err);

        console.log('user type',user_type);
        res.send(user_type);
    })
}