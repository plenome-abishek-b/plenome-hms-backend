const B_ComponentsModel = require('../models/Bcomponent.model')

exports.GetB_Components = (req,res) =>{
    B_ComponentsModel.getComponents ((err,Components)=>{
        if(err)
        res.send(err);
     
        console.log('components ',Components);
        res.send(Components);
    })
}