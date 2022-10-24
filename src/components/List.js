import React, { useEffect, useState } from 'react'
import Items from './Items'

function List(props) {

  // console.log(props.data)
  const [listEnd, setListEnd] = useState(5);
  
  const spaceXItems = props.data.slice(0,listEnd).map( (data) => {
    return <Items key={data.id} data={data} />
  })


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    // console.log('Fetch more list items!');
    setListEnd( (prevData) => {
      return prevData + 5
    })
  }

  
  
  return (
    <section className="rounded-xl border-2 border-gray-100 bg-white w-4/6 px-4 py-4 sm:px-6 lg:px-8">
      {spaceXItems}
    </section>


  )
}

export default List