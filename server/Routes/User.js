const router = require("express").Router();
const db = require("../Config/connection");
const jwt = require("jsonwebtoken");
// const cookie = require("cookie");
const bcrypt = require("bcrypt");

router.route("/register").post(async (req, res) => {
  try {
    const { fName, email, password } = req.body;
    let hashPassword = await bcrypt.hash(password, 8);
    const userData = { name: fName, email: email, password: hashPassword };
    const addUser = "INSERT INTO users SET ?";
    const isExist = "SELECT email from users WHERE email = ?";

    db.query(isExist, [email], (error, result) => {
      if (error) {
        console.log(error);
      }
      if (result.length > 0) {
        return res.status(409).json({ message: "Email Already Exist" });
      } else {
        db.query(addUser, userData, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            return res.status(200).json({ message: "User Added" });
          }
        });
      }
    });
  } catch (err) {
    console.error(err);
  }
});

//This route handles log-in validation
router.route("/login").post(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please Enter Email and Password" });
    } else {
      const userInDatabase = "SELECT * FROM users WHERE email = ?";
      db.query(userInDatabase, [email], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          //Creating the Token for Logged In User
          const user = result[0].id;
          const token = jwt.sign({ user: user }, "secretkeyforjwt", {
            expiresIn: "20d",
          });
          
          //Comparing hashpassword to password enterd
          bcrypt.compare(password, result[0].password)
          res.status(200).json({ message: "User Logged In" });
          console.log(result);
        }
      });
    }
  } catch (err) {
    return res.status(500).json({ message: "Error Somewhere" });
  }
});

//This route send all the users to the front-end
router.route("/allusers").get((req, res) => {
  const allUsers = "SELECT * FROM  users ;";
  db.query(allUsers, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result[0].name);
    }
  });
  return res.status(200).json();
});

module.exports = router;
