import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            console.log(current(state));// can't log state directly gives some proxyb object
            // mutate the state
            state.items.length = 0;
            // state = {items: []} doesn't work
            // or return new state
            // return {items: []}
        },
    }
})

console.log("slice");
console.log(cartSlice);
export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;