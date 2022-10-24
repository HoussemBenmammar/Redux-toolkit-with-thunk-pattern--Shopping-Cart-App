import React from "react";

import "./Auth.css";
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'

const Auth = () => {

  const auth = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const handleSubmit =(e) =>{
    e.preventDefault()
    dispatch(authActions.login())
  }

  return (
    <div className="container">
      <p>{auth}</p>
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit" >
          Login
        </button>
        
      </form>
    </div>
  );
};

export default Auth;
