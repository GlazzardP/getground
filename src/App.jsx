import logo from './logo.svg';
import styles from './App.module.scss';
import { useEffect, useState } from 'react';
// import Async from 'react-async';


import BookCard from "./components/Card"

// Material UI
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function App() {
  const [library, setLibrary] =useState([])
  const [pageNo, setPageNo] =useState(1)
  const [itemsPerPage, setItemsPerPage] =useState(20)



  const getLibrary = () => { 
   fetch(`http://nyx.vima.ekt.gr:3000/api/books/?page=${pageNo}&itemsPerPage=${itemsPerPage}&filters=[]`, { 
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

  // console.log(library);

  
  return (
    <>
    <Typography variant="h1" align="center">
      GetGround

    </Typography>

    <div>     
      {
      library.map((book) => { 
        return (
          <BookCard key={book.id} book={book} />
        )
      })
      }
    </div>
    <Button variant="contained" onClick={() => {setPageNo(pageNo - 1)}}>Preious Page</Button>
    <p>{pageNo}</p>

    <Button variant="contained" onClick={() => {setPageNo(pageNo + 1)}}>Next Page</Button>
    {/* <Pagination count={10} color="primary" /> */}

    </>
  );
}

export default App;
