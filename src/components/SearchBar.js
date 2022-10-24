import React from 'react'

function SearchBar() {
  return (

    <section className="w-4/6 py-8">
      <div>
        <label htmlFor="search" className="sr-only">Searchbar</label>

        <div className="relative">
          <input
            type="search"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Search"
          />
        </div>
      </div>
    </section>

  )
}

export default SearchBar