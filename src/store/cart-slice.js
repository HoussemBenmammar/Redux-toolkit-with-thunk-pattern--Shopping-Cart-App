import {createSlice, current} from '@reduxjs/toolkit'
import { uiActions } from "../store/ui-slice";
import _ from 'lodash';



const cartSlice = createSlice({
  name: 'cart',
  initialState: {
      itemsList: [],
      totalQuantity: 0,
      showCart: false
  },
  reducers : {
    addToCart(state, action) {     
     const newItem = action.payload;
     // to check if item is already available
     const existingItem = state.itemsList.find((item) => item.id === newItem.id);
    if (existingItem) {
      existingItem.quantity++
      existingItem.totalPrice+=newItem.price
    }
    else {
      state.itemsList.push({
        id:newItem.id,
        price:newItem.price,
        quantity:1,
        name:newItem.name,
        totalPrice:newItem.price,
      })
      state.totalQuantity++
    }
  } , 
  removeFromCart(state,action) {
    const removedId = action.payload;
    const removedItem = state.itemsList.find((item) => item.id === removedId);
    if (removedItem.quantity===1) {
      state.itemsList = _.without(state.itemsList, removedItem)
      // console.log("item listes after delete" , state.itemsList);
    }
    else {
      removedItem.quantity--
      removedItem.totalPrice-=removedItem.price
    }
  },
  showCart (state) {
    state.showCart=!state.showCart
  },
}
})


export const cartActions = cartSlice.actions
export default cartSlice 
 