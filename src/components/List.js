import React from 'react'
import Items from './Items'

function List() {
  return (
    <section className="rounded-xl border-2 border-gray-100 bg-white w-5/6 px-4 py-16 sm:px-6 lg:px-8">
      <Items />
      <Items />
      <Items />
      <Items />
    </section>


  )
}

export default List