const PrefixSettingsModel = require('../models/PrefixSetting.model')
exports.getPrefixSettings= (req,res)=>{

    
    let updatedQuery = ' select * from prefixes '
    let updatedValues = []

    
    PrefixSettingsModel.setQuery(updatedQuery,updatedValues)
    PrefixSettingsModel.getPrefixSettings ((err,Prefix)=>{
            if(err)
            res.send(err);
         
            console.log('Prefix ',Prefix);
            res.send(Prefix);
        })
    }


    exports.updatePrefixSettings = (req,res)=>{

        let updatedQuery = '';
        let updatedValues = []
    
        if(req.query.id){
            updatedQuery = 'update prefixes SET ? where id = ?'
            updatedValues.push(req.query.id)
        }
        PrefixSettingsModel.setQuery(updatedQuery,updatedValues)
        const PrefixSettingsdATA = new PrefixSettingsModel(req.body);
        console.log(req.body,"jjjjj");
        console.log(PrefixSettingsdATA,"aaaaaaaaa");
        if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
            res.send({success:false,message:'please fill all fields'});
        }else{
            PrefixSettingsModel.updatePrefixSettings(PrefixSettingsdATA,(err,userStaff)=>{
                if(err){
                res.send(err);
            }else{
                if(PrefixSettingsdATA.id == updatedValues[0]){
    
                    res.json({status:true,message:' User Staff Settings updated successfully',data:PrefixSettingsdATA.id});
                }
                else{
                    res.json({status:false,message:'the id of the post value and the id given must be same'})
                }
    
            }
            })
        }
    }