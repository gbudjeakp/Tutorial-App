const router = require('express').Router()

router.route('/login').post((req, res) => {
const {email, password} = req.body
console.log(`Here is your passowrd ${password} and your email ${email}`)
  })


router.route("/register").post((req, res)=>{
  const {fName, email, password} = req.body

 console.log(`${fName} has Registered to our app as ${password}`)
})

module.exports = router;

