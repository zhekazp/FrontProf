import { useState } from "react";
import { Book } from "../redux/libraryAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BookItem from "./BookItem";

export default function BookManager() {
  const startState: Book = {
    year: 0,
    title: "",
    author: "",
  };

  const [book, setBook] = useState(startState);

  const [current, setCurrent] = useState("");

  const [infoAdd, setInfoAdd] = useState({ status: false, info: "" });

  const [errors, setErrors] = useState([0, 0, 0]);

  const dispatch = useDispatch();

  const books = useSelector((state: RootState) => state.library);

  const getBook = (book: Book) => {
    setBook({ ...book });
    setCurrent(book.isbn!);
    setErrors([0, 0, 0]);
  };

  const handleChange = (newValue: Book) => {
    setBook(newValue);
  };
  const handleChangeNumber = (newValue: string) => {
    setErrors([errors[0], errors[1], 0]);
    if (newValue.length === 0) {
      setBook({ ...book, year: 0 });
    } else if (/^\d+$/.test(newValue) && newValue.length < 5) {
      setBook({ ...book, year: Number(newValue) });
    }
  };
  const showInfo = (info: string) => {
    setInfoAdd({ status: true, info: info });
    setTimeout(() => {
      setInfoAdd({ status: false, info: "" });
    }, 2000);
  };
  const del = () => {
    if (current === "") {
      showInfo("Choose a book");
    } else {
      showInfo("The book was deleted");
      dispatch({
        type: "library/removeBook",
        payload: { isbn: current },
      });
      setCurrent("");
      setBook(startState);
    }
  };

  const checkInputs = () => {
    const newErrors = [0, 0, 0];

    if (book.title.trim().length === 0) {
      newErrors[0] = 1;
    }
    if (book.author.trim().length === 0) {
      newErrors[1] = 1;
    }
    if (book.year > new Date().getFullYear()) {
      newErrors[2] = 1;
    }
    return newErrors;
  };

  const edit = () => {
    if (current === "") {
      showInfo("Choose a book");
    } else {
      const newErrors = checkInputs();
      setErrors(newErrors);
      if (newErrors.reduce((a, b) => a + b) === 0) {
        showInfo("The book was edited");
        console.log(current);

        dispatch({
          type: "library/editBook",
          payload: { ...book, isbn: current },
        });
        setCurrent("");
        setBook(startState);
      }
    }
  };

  const add = () => {
    document.getElementsByClassName("buttons")[0].classList.add("hide");
    const newErrors = checkInputs();
    setErrors(newErrors);
    if (newErrors.reduce((a, b) => a + b) === 0) {
      dispatch({
        type: "library/addBook",
        payload: { title: book.title, author: book.author, year: book.year },
      });
      showInfo("The book was added");
      setBook(startState);
    }

    document.getElementsByClassName("buttons")[0].classList.remove("hide");
  };
  return (
    <label>
      <div className="infoDiv">
        {infoAdd.status ? <p>{infoAdd.info}</p> : <></>}
      </div>
      <div className="task">
        {books.books.map((item) => (
          <BookItem key={item.isbn} getBook={getBook} book={item} />
        ))}
      </div>
      <div className="inputs">
        <label htmlFor="title">Title:</label>
        <div className="infoDiv">
          <p className={errors[0] !== 0 ? "error showErrors" : "error"}>
            Can`t be Empty
          </p>
        </div>
        <input
          onChange={(e) => {
            handleChange({
              title: e.target.value,
              author: book.author,
              year: book.year,
            });
            setErrors([0, errors[1], errors[2]]);
          }}
          type="text"
          value={book.title}
          id="title"
        />
      </div>
      <div className="inputs">
        <label htmlFor="author">Author:</label>
        <div className="infoDiv">
          <p className={errors[1] !== 0 ? "error showErrors" : "error"}>
            Can`t be Empty
          </p>
        </div>
        <input
          onChange={(e) => {
            handleChange({
              title: book.title,
              author: e.target.value,
              year: book.year,
            });
            setErrors([errors[0], 0, errors[2]]);
          }}
          type="text"
          value={book.author}
          id="author"
        />
      </div>
      <div className="inputs">
        <label htmlFor="year">Year:</label>
        <div className="infoDiv">
          <p className={errors[2] !== 0 ? "error showErrors" : "error"}>
            Year is more then curren
          </p>
        </div>
        <input
          onChange={(e) => handleChangeNumber(e.target.value)}
          type="text"
          value={book.year}
          id="year"
        />
      </div>
      <div className="buttons">
        <button onClick={() => add()}>Add book</button>
        <button
          onClick={() => {
            setBook(startState);
            setCurrent("");
          }}
        >
          Clear
        </button>
        <button onClick={edit}>Edit</button>
        <button onClick={del}>DEl</button>
      </div>
    </label>
  );
}
