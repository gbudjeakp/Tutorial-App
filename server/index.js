const express = require("express");
const cors = require("cors")
const port = 5000
const app = express()
const cookieParser = require("cookie-parser")
const db = require("./Config/connection")
const userRoutes = require("./Routes/User")


app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser());

app.use('/users', userRoutes)

app.get("/createdb", (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result)=>{
        if(err){
        console.log(err)
        } else{
            res.send('Database created')
            console.log(result)
        }    
    })
})
  

  

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
