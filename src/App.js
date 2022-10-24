import axios from 'axios';
import { useEffect, useState } from 'react';
import List from './components/List';
import Loading from './components/Loading';
import SearchBar from './components/SearchBar';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v4/launches/')
  .then(function (response) {
    // handle success
    setData(response.data)
    setLoading(false)
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  }, []);

  return (
    <main className='bg-gray-200 flex flex-col justify-start items-center h-screen overflow-auto'>
      <SearchBar />
      
      {loading? (<Loading />) : (<List data={data}/>)}

      
      
    </main>

  );
}

export default App;
