import List from './components/List';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <main className='bg-gray-200 flex flex-col justify-start items-center overflow-auto mb-4'>
      <SearchBar />
      <List />
    </main>

  );
}

export default App;
