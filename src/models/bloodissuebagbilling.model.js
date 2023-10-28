var dbconn = require('../../config/db.config');

var bag_name = function(bag){
    this.id = bag.id;

}

let query = ''
let values = ['']

bag_name.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

bag_name.get_bag_name = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('test name fetched');
            result(null,res);
        }
    })
}

module.exports = bag_name;