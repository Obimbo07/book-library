/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qFGIAu5467sPlr449Jtw/books';
const initialState = {
  books: [],
  isLoading: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (err) {
    throw new Error('Failed to Fetch book');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  try {
    await axios.post(baseUrl, newBook);
    return newBook;
  } catch (err) {
    throw new Error('Error adding book');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (item_id) => {
  try {
    await axios.delete(`${baseUrl}/${item_id}`);
    return item_id;
  } catch (err) {
    throw new Error(err);
  }
});
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const bookData = action.payload;
        const bookArray = Object.keys(bookData).map((item_id) => ({
          item_id,
          ...bookData[item_id][0],
        }));
        state.isLoading = false;
        state.books = bookArray;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        const newBook = action.payload;
        state.books.push(newBook);
      })
      .addCase(addBook.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const ItemIdtoRemove = action.payload;
        state.isLoading = false;
        state.books = state.books.filter((book) => book.item_id !== ItemIdtoRemove);
      })
      .addCase(removeBook.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default booksSlice;
