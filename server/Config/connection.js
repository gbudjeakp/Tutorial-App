const mysql  = require('mysql');

//Database setup done here
//Creating database connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'nodemysql'
})

//Establishing the connection 
db.connect((err)=>{
    if(err){
     console.log(err)
    } else{
    console.log("MYSQL Database Established")
    }
})



module.exports = db; 