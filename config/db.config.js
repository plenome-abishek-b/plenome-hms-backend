const mysql = require('mysql2');

//create here mysql connection

const dbCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Shek@123',
    database: 'plenome_HMS'
});

dbCon.connect(function(error){
    if(error) throw error;
    console.log('Database connected successfully!!!');
    }
)



module.exports = dbCon;