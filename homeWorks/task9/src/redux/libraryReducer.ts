import { uid } from "uid";
import { Book, libraryAction } from "./libraryAction";

interface ILibraryState {
  books: Book[];
}
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

export default function libraryReducer(
  state: ILibraryState = initialState,
  action: libraryAction
): ILibraryState {
  switch (action.type) {
    case "library/addBook":
      return {
        ...state,
        books: [
          ...state.books,
          { isbn: uid(),
            ...action.payload,
          },
        ],
      };
    case "library/editBook":
    {  
      const newBooks = state.books.map((item)=>
        item.isbn === action.payload.isbn ? action.payload : item);
      
      
    return {
      books: newBooks
      };
    }
    case "library/removeBook":
    {  
    const newBooks = state.books.filter((item)=>item.isbn !== action.payload.isbn);
    return {      
        books: newBooks
      };
    }
    default:
      return state;
  }
}
