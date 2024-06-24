import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const appStore = configureStore({

    reducer: {
        cart: cartReducer
    }
});

console.log("store");
console.log(cartReducer);
export default appStore;