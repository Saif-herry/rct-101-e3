import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCreds,setLoginCreds]=useState({});
  const {login}=useContext(AuthContext)
  const handleChange= (e) =>{
    const {name, value}= e.target;
    setLoginCreds({
        ...loginCreds,
        [name]:value,
    })
}
const handleSubmit = (e) =>{
e.preventDefault();
login()

};  
  return (
    <div>
      <form 
      onSubmit={handleSubmit}
      style={{
display:"flex",
flexDirection:"column",
maxWidth:"250px",
margin:"auto",
gap:"10px"

      }}
      >
      <input data-cy="login-email" 
      name='email'
      type="text"
       placeholder='Enter Email'
       onChange={handleChange}
      />
      <input data-cy="login-password"
      name='password'
      type="password"
       placeholder='Enter Password..'
       onChange={handleChange}
      />
      <button  type="submit" data-cy="login-submit"><Link to="/product">Login</Link></button>
      </form>
    </div>
  );
};

export default Login;
