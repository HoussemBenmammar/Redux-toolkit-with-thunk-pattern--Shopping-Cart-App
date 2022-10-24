import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from 'react-redux'
import Notification from "./components/Notification";
import { cartActions } from "./store/cart-slice";

import {sendCartData , fetchData} from "./store/cart-actions"

let isfirstRender = true

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)
  const dispatch = useDispatch()
  
    useEffect(()=>{
      if(isfirstRender) {
        isfirstRender=false
        return    
      }
      dispatch(sendCartData(cart))
    },[cart.itemsList , dispatch])
  
  return (
    <div className="App">
      <Notification type={notification.type} message={notification.message} />
      {!isLoggedIn && <Auth />}
      { isLoggedIn && <Layout /> }
    </div>
  );
}

export default App;
