var dbConn = require('../../config/db.config');

var Graph = function(graph){
    this.id = graph.id
}

Graph.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}

Graph.getGraph = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Graph  fetched ');
            result(null,res);
        }
    })
}

module.exports = Graph