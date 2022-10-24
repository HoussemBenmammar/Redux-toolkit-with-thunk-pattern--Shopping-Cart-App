import { uiActions } from "./ui-slice"
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from "./cart-slice"

export const sendCartData = (cart) => {
    return (dispatch)=>{
      dispatch(uiActions.showNotification({
        message : "Sending request",
        type: "warning" ,
        open : true
    }))
      const sendRequest = async () =>{
        //send state as sending request 
        
        const res = await fetch('https://redux-http-56c44-default-rtdb.firebaseio.com/cartitems.json',
        {
        method:"PUT",
        body:JSON.stringify(cart)
        }
        )
        const data =await res.json()
        console.log("data sent" , data);
        dispatch(uiActions.showNotification({
            message : "Request sent to database successfully",
            type: "success" ,
            open : true
        }))
    }
    try {
      sendRequest()
    }
    catch(err) {
      dispatch(uiActions.showNotification({
        message : "Sending request failed",
        type: "error" ,
        open : true
    }))
    }
    
    }
  }
  
  export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async() => {
            const res = await fetch('https://redux-http-56c44-default-rtdb.firebaseio.com/cartitems.json')
            const data = await res
            return data
        }
        try {
             const cartData = await fetchHandler()
             dispatch(cartActions.addToCart(cartData))
        }
        catch {
            dispatch(uiActions.showNotification({
                message : "Sending request failed",
                type: "error" ,
                open : true
            })) 
        }
    } 
  }

  export const getTotal = () => {
    return async (dispatch) => {
        const fetchHandler = async() => {
            const res = await fetch('https://redux-http-56c44-default-rtdb.firebaseio.com/cartitems.json')
            const data = await res
            return data.itemsList
        }
        try {
             const cartData = await fetchHandler()
             return cartData
        }
        catch {
            dispatch(uiActions.showNotification({
                message : "Sending request failed",
                type: "error" ,
                open : true
            })) 
        }
    } 
  }