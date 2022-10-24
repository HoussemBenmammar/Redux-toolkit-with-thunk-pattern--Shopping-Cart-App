import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'
const Header = () => {
  const auth = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const logOut= () =>{
    dispatch(authActions.logout())
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button className="logout" onClick={logOut}>Log Out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
