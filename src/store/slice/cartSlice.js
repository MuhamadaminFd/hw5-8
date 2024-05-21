import { createSlice } from '@reduxjs/toolkit'
import fethAllCart from '../reducer/cartReducer';

const initialState = {
    cart: [],
    cartError: '',
    cartLoading: false,
};
const cartSlice = createSlice({
    initialState,
    name: 'Cart',
    reducers : {
        setCart: (state, action)=> {
            state.cart = action.payload ; 
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fethAllCart.padding, (state,action) => {
            state.cart = [];
            state.cartError = '';
            state.cartLoading = true ;
        });
        builder.addCase(fethAllCart.fulfilled, (state,action) => {
            state.cart = [];
            state.cartLoading = false ;
        });
        builder.addCase(fethAllCart.rejected, (state,action) => {
            state.cart = [];
            state.cartLoading = true ;
        });
    },
});

const cartReducers = cartSlice.reducer;

export const {setCart} = cartSlice.actions;
export default cartReducers;