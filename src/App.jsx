import logo from './logo.svg';
import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Typography } from '@material-ui/core';

import BookCard from "./components/Card"
import InputField from "./components/InputField"

import IncrementCounter from "./components/IncrementCounter"
import DecrementCounter from "./components/DecrementCounter"

function App() {
  const [library, setLibrary] =useState([])
  // const [pageNo, setPageNo] =useState(1)
  const [itemsPerPage, setItemsPerPage] =useState(20)

  const setPageNo = () => {}
  // const setItemsPerpage = () => {}
  const val = useSelector((state) => state.counter.count)
  const authorChanged = useSelector((state) => state.filter.authorName)

  console.log(val);

  const decrementCounterJsx = val === 0 ? "": <DecrementCounter value={val} /> ;

  const getLibrary = () => { 
   fetch(`http://nyx.vima.ekt.gr:3000/api/books/?page=${val}&itemsPerPage=${itemsPerPage}&filters=[]`, { 
      method: "POST"
    })
    .then(res => res.json())
    .then(res => {
      setLibrary(res.books)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => { 
    getLibrary()
  }, [])


  console.log(authorChanged);

  return (
    <>
    <Typography variant="h1">Get Ground</Typography>


    <div className={styles.searchBar}>
      <InputField placeholder={"Marquez"} label={"Author"} type={"text"}/>
      <InputField placeholder={"2000"} label={"ID"} type={"number"} />
      <InputField placeholder={"A thousand splendid suns"} label={"Title"} type={"text"} stateType={"pageNo"}/>
    </div>


    <div className={styles.pageNav}>
      {decrementCounterJsx}
      <p>{val}</p>
      <IncrementCounter value={val} />
    </div>  
    
    <div className={styles.returnedBooks}>     
      {
      library.map((book) => { 
        return (
          <BookCard key={book.id} book={book} />
        )
      })
      }
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
