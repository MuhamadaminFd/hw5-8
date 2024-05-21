import { configureStore } from "@reduxjs/toolkit";
import bookListReducers from "./slice/bookListSlice";
import cartReducers from "./slice/cartSlice";


const rootReducer = {
    bookList: bookListReducers,
    cart: cartReducers
};


const store = configureStore ({
    reducer:rootReducer,
});

export default store;