const PatientLoginCredentialModel = require('../models/patientLoginCredentials.model');

exports.getCredentials = (req,res)=>{
    let updatedQuery = 'select patients.patient_name,users.user_id as patient_id, users.username,users.password from users join patients on patients.id = users.user_id '
    let updatedValue = []

    if(req.query.search){
        updatedQuery += ' where patients.patient_name like ? or users.user_id like ? or users.username like ? ';
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
    }

    PatientLoginCredentialModel.setQuery(updatedQuery,updatedValue);
    PatientLoginCredentialModel.GetCredentials((err,credentials)=>{
        if(err)
        res.send(err);

        console.log('patient login credentials ',credentials);
        res.send(credentials);
    })


}