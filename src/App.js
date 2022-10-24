import axios from 'axios';
import { useEffect, useState } from 'react';
import List from './components/List';
import Loading from './components/Loading';
import SearchBar from './components/SearchBar';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [nextPage, setNextPage] = useState(1)
  const [page, setPage] = useState(1)

  useEffect(() => {
    handleGetData(page);
  }, []);


  function handleGetData(pageNum) {
    // console.log('zzzzzzz', nextPage)
    axios.post('https://api.spacexdata.com/v4/launches/query', {
      "query": {},
      "options": {
        "page": pageNum
      }
    })
    .then(function (response) {
      // handle success
      setNextPage(response.data.nextPage)
      setData(response.data.docs)


      setLoading(false)
    })
    .catch(function (error) {
      // handle error
      setError(true)
      console.log(error);
    });
  }

  return (
    <main className='flex flex-col justify-start items-center'>
      <SearchBar />
      
      {loading? (<Loading />) : (<List data={data} setData={setData} handleGetData={handleGetData} nextPage={nextPage} loading={loading} />)}
      {error && <div>Error occured</div>}
      

      
      
    </main>

  );
}

export default App;
