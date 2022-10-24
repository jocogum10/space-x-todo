import React, { useEffect } from 'react'
import Items from './Items'

function List(props) {

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [props.nextPage]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    props.handleGetData(props.nextPage);
  }

  const spaceXItems = props.data.map( (data) => {
      return <Items key={data.id} data={data} />
    })
  
  return (
    <section className="rounded-xl border-2 border-gray-100 bg-white w-4/6 px-4 py-4 sm:px-6 lg:px-8">
      {spaceXItems}
    </section>


  )
}

export default List