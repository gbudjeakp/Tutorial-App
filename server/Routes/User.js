const router = require("express").Router();
const db = require("../Config/connection")
// const jwt = require("jsonwebtoken");
// const cookie = require("cookie");
// const bcrypt = require("bcrypt");

router.route("/register").post((req, res) => {
  const { fName, email, password } = req.body;
  
  const userData = {name: fName, email: email, password: password}
  const addUser = 'INSERT INTO users SET ?'
  const isExist = 'SELECT email from users WHERE email = ?'
  
   db.query(isExist, [email], (error, result)=>{
     if(error){
       console.log(error)
     }
     if(result.length > 0){
       return res.status(500).json({message: "Email Already Exist"})
     } else{
      
  db.query(addUser, userData, (err, result)=>{
    if(err){
      console.log(err)
    } else{
      res.status(200).json( {message: "User has been added"})
    }
 });
     }
   })
  // Here is login to print 
  console.log(`${fName} has Registered to our app as ${email}`);
});

router.route("/login").post((req, res) => {
  const { email, password } = req.body;
  console.log(`Here is your passowrd ${password} and your email ${email}`);
});


router.route("/allusers").get((req, res) => {
  console.log("Here are all the users");
  const allUsers = "SELECT * FROM  users ;";
});

module.exports = router;
