import React from 'react'
import Items from './Items'

function List(props) {

  console.log(props.data)
  
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