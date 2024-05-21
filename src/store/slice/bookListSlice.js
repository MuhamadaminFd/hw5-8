import { createSlice } from '@reduxjs/toolkit'
import fetchAllCart from '../reducer/cartReducer';

const initialState = {
    books: [],
    isLoading: false,
    isError: '',
};

const bookListSlice = createSlice({
    name: 'BookList',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(featchAllBooks.pending, (state, action) => {
            state.books = [];
            state.isError = '';
            state.isLoading = true;
        });
        builder.addCase(featchAllBooks.fulfilled, (state, action) => {
            state.books = action.payload;
            state.isLoading = false;
        });
        builder.addCase(featchAllBooks.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        });
    },
});

const bookListReduces = bookListSlice.reducer

export const { setBooks } = bookListSlice.actions;
export default bookListReduces