import React, { useState } from 'react'
import './Signup.css'

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setFname] = useState("")

    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePassword = (e) => {
      setPassword(e.target.value);
    };


    const handleFname = (e) =>{
      setFname(e.target.value)
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      alert("User Added")
      
      const userData = {
        fName: fName,
        email: email,
        password: password,
      };
  
     try{
      const add = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
    console.log(add)
     }catch(err){
       console.error()
     }
    };

    return (
        <div>
     <div className="Heading">
        <h1>Signup to Tutorial</h1>
        <div className="App">
          <form onSubmit={handleSubmit}>

          <input
              placeholder="Enter Full Name"
              type="fName"
              onChange={handleFname}
            />

            <input
              placeholder="Enter Email"
              type="email"
              onChange={handleEmail}
            />
            <input
              placeholder=" Enter Password"
              type="password"
              onChange={handlePassword}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
          <a href="#">Have an account already? Login</a>
        </div>
      </div>
        </div>
    )
}

export default Signup
