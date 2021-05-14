const router = require("express").Router();
const db = require("../Config/connection");
// const jwt = require("jsonwebtoken");
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
   console.error(err)
  }
});

//This route handles log-in validation
router.route("/login").post((req, res) => {
  const { email, password } = req.body;
  console.log(`Here is your passowrd ${password} and your email ${email}`);
});

//This route send all the users to the front-end
router.route("/allusers").get((req, res) => {
  console.log("Here are all the users");
  const allUsers = "SELECT * FROM  users ;";
});

module.exports = router;
