
const chargeTypeModuleModel = require('../models/chargeTypeModule.model')

exports.getModule = (req,res)=>{
    chargeTypeModuleModel.getModule ((err,module)=>{
        if(err)
        res.send(err);
     
        console.log('Bill Detail  ',module);
        res.send(module);
    })

}


exports.createModule = (req,res) =>{
    let moduleData = req.body;
    if (!Array.isArray(moduleData)) {
        moduleData = [moduleData];
      }
      const insertData = moduleData.map((data) => new chargeTypeModuleModel(data)
      );
      chargeTypeModuleModel.createModule(insertData, (err, detail) => {
        if (err) {
          res.send(err);
        } else {
          const ids = detail.map((item) => item.insertId);  
          res.json({ status: true, message: 'detail added successfully'
          , data: ids 
        });
        }
      });
}