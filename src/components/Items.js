import React from 'react'

function Items() {
  return (
    <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-8">

      <div className="justify-between sm:flex">
        <div className="ml-3 hidden flex-shrink-0 sm:block">
          <img
            alt="Image"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Building a SaaS product as a software developer
          </h3>
          <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
        </div>
      </div>
    </div>
  )
}

export default Items