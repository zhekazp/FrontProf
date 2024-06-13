export type Book = {
    isbn?: string; 
    title: string; 
    author: string;
    year: number;
}

export type libraryAction = 
|{
  type: "library/addBook";
  payload: Book
}
| {type: "library/editBook", 
   payload: Book 
}
| {type: "library/removeBook", 
    payload: {isbn: string} 
 }


