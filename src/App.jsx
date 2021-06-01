import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BookCard from "./components/Card";
import Navbar from "./components/Navbar";

import IncrementCounter from "./components/IncrementCounter";
import DecrementCounter from "./components/DecrementCounter";

import Filters from "./containers/Filters";

function App() {
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const dispatch = useDispatch();

  const setPageNo = () => {};
  // const searchCriteria = useSelector((state) => state.filters.state)
  const val = useSelector((state) => state.counter.count);
  const authorChanged = useSelector((state) => state.filter.authorName);
  const library = useSelector((state) => state.library.books);

  const decrementCounterJsx = val === 0 ? "" : <DecrementCounter value={val} />;

  const getLibrary = async () => {
    const response = await fetch(
      `http://nyx.vima.ekt.gr:3000/api/books/?page=${val}&itemsPerPage=${itemsPerPage}&filters=[]`,
      {
        method: "POST",
      }
    );
    const jsonResponse = await response
      .json()
      .then((jsonResponse) => {
        dispatch({
          type: "listLibrary",
          payload: jsonResponse.books,
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getLibrary();
  }, [getLibrary, library]);

  return (
    <>
      <Navbar />
      <Filters />

      <div className={styles.pageNav}>
        {decrementCounterJsx}
        <p>{val}</p>
        <IncrementCounter value={val} />
      </div>

      <div className={styles.returnedBooks}>
        {library.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>

      <div className={styles.pageNav}>
        {decrementCounterJsx}
        <p>{val}</p>
        <IncrementCounter value={val} />
      </div>
    </>
  );
}

export default App;
