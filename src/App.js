import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("")
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState("")

  let [featchedData, setFeatchedData] = useState([]);
  let { info, results } = featchedData;
  
  // console.log(pageNumber);

  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      setFeatchedData(data)

    })()

  }, [api])

  
  return (
    <div className="App">
      <h1 className="text-center my-5 ubuntu">Rick & Morty <span className="text-primary">wiki</span></h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Search setPageNumber={setPageNumber} setSearch={setSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Filters setSpecies={setSpecies} setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber}/>
          </div>
          <div className="col-8">

            <div className="row">
              <Cards results={results} />
            </div>
            <div className="row">
              <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
