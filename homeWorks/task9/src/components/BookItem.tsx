import { Book } from "../redux/libraryAction"


const BookItem = ({book, getBook}:{book:Book, getBook(book:Book):void}) => {
  return <div onClick={()=>getBook(book)} className="bookItem">{book.title+" / "+book.author} </div>
}

export default BookItem