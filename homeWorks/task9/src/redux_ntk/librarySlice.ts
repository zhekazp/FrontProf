import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";



const initialState = {
  books: [
    {
      isbn: "1",
      title: "Harry Potter",
      author: "J.K. Rowling",
      year: 1997,
    },
  ],
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push( { isbn: uid(), ...action.payload });
    },
    editBook(state, action) {
      state.books = state.books.map((item) =>
        item.isbn === action.payload.isbn ? action.payload : item
      );
    },
    removeBook(state, action) {
        state.books =state.books.filter((item)=>item.isbn !== action.payload.isbn);
    }
  },
});

export const{addBook, editBook, removeBook} = librarySlice.actions;
export default librarySlice;
