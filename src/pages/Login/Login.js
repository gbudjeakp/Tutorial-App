import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email: email,
        password: password,
      };
      const add = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const response = await add.json()
      console.log(response.message)
    } catch (err) {
      console.error();
    }
  };

  return (
    <div className="Heading">
      <h1>Login to Tutorial</h1>
      <div className="App">
        <form onSubmit={handleSubmit}>
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
        {/* <a href="#">Don't have an account? SignUp</a> */}
      </div>
    </div>
  );
}

export default Login;
