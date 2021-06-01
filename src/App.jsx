import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BookCard from "./components/Card";
import Navbar from "./components/Navbar";

import IncrementCounter from "./components/IncrementCounter";
import DecrementCounter from "./components/DecrementCounter";

import Filters from "./containers/Filters";

function App() {
  const [library, setLibrary] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  // const dispatch = useDispatch();

  const setPageNo = () => {};
  // const searchCriteria = useSelector((state) => state.filters.state)
  const val = useSelector((state) => state.counter.count);
  const authorChanged = useSelector((state) => state.filter.authorName);
  // const reduxLibrary = useSelector((state) => state.library.books);
  const decrementCounterJsx = val === 0 ? "" : <DecrementCounter value={val} />;

  const getLibrary = () => {
    fetch(
      `http://nyx.vima.ekt.gr:3000/api/books/?page=${val}&itemsPerPage=${itemsPerPage}&filters=[]`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setLibrary(res.books);
      })
      .catch((error) => console.log(error));
  };

  // const reduxGetLibrary = async () => {
  //   const response = await fetch(`https://nyx.vima.ekt.gr:3000/api/books/?page=1&itemsPerPage=20&filters=[]`, {
  //         method: "POST"
  //     })
  //   const jsonResponse = await response.json()
  //     // .then(response => response.json())
  //     .then(jsonResponse => {
  //       dispatch({
  //         type: "listLibrary",
  //         payload: jsonResponse.books
  //     })
  //   })
  //     .catch(error => console.log(error))
  // }

  useEffect(() => {
    getLibrary();
  }, [getLibrary]);

  // useEffect(() => {
  //   reduxGetLibrary()
  // }, [])


  // console.log(searchCriteria);

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
