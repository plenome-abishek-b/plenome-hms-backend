var dbconn = require('../../config/db.config');
var inventory_issue_item = function(issue){
    this.id = issue.id;
    this.issue_type = issue.issue_type;
    this.issue_to = issue.issue_to;
    this.issue_by = issue.issue_by;
    this.issue_date = issue.issue_date;
    this.return_date = issue.return_date;
    this.item_category_id = issue.item_category_id;
    this.item_id = issue.item_id;
    this.quantity = issue.quantity;
    this.note = issue.note;
    this.is_returned = issue.is_returned;
    this.is_active = issue.is_active;
    this.created_at = issue.created_at;
}

let query = '';
let value = [];

inventory_issue_item.setQuery = (updatedquery,updatedvalue)=>{
    query = updatedquery;
    value = updatedvalue;
}

inventory_issue_item.getissue_item = (result)=>{
    dbconn.query(query,value,(err,res)=>{
        console.log(query);
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('list item fetched');
            result(null,res)
        }
    })
}

inventory_issue_item.createissue_item = (itemdata,result)=>{
    dbconn.query('insert into item_issue SET ?',itemdata,(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('issue item inserted successfully');
            result(null,res)

        }
    })
}

module.exports = inventory_issue_item;