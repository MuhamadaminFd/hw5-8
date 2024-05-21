import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import {cartSlice} from './cartSlice'
import { setCart } from '../slices/cartSlice';

const fetchAllCart = createAsyncThunk('cart/fetchAll', async (payload, thunkApi) => {
    try {
        const response = await api.getCart();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue('Download failed');
    }
});


const createItem = (book, item = {}, quantity) => {
    const { total = 0, count = 0 } = item;
    return {
        title: book.title,
        count: count + quantity,
        total: total + book.price * quantity,
        id: book.id,
    };
};


const addBookToCart = createAsyncThunk('cart/addItem', async (payload, thunkApi) => {
    const state = thunkApi.getState();
    const { cart } = state.cart;
    const { books } = state.bookList;
    const cartItem = cart.find(el => el.id === payload);
    const book = books.find(el => el.id === payload);

    if (cartItem) {
        const newItem = {
            ...cartItem,
            total: cartItem.total + book.price,
            count: cartItem.count + 1,
        };

        await api.editCartItem(newItem);
        const newCartItems = cart.map(item => item.id === payload ? newItem : item);
        return thunkApi.dispatch(setCart(newCartItems));
    } else {
        const newItem = createItem(book, {}, 1);
        await api.addToCart(newItem);
        const newCartItems = [...cart, newItem];
        return thunkApi.dispatch(setCart(newCartItems));
    }
});


const clearCart = createAsyncThunk('cart/clear', async (payload, thunkApi) => {
    try {
        await api.clearCart();
        return thunkApi.dispatch(setCart([]));
    } catch (err) {
        return thunkApi.rejectWithValue('Clear failed');
    }
});

export default fetchAllCart;
export { addBookToCart, clearCart };
