import React from 'react'

function Items(props) {

  const flight_year = new Date(props.data.date_local);
  let year = flight_year.getFullYear();

  let image = 'https://via.placeholder.com/150'

  if (props.data.links.flickr.original[0]) {
    image = props.data.links.flickr.original[0]
  }

  return (
    <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-8">

      <div className="justify-left gap-2 sm:flex">
        <div className="ml-3 hidden flex-shrink-0 sm:block">
          <img
            alt="Image"
            src={image}
            // src="https://via.placeholder.com/150"
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {props.data.flight_number} : {props.data.name} ({year})
          </h3>
          <p className="mt-1 text-xs font-medium text-gray-600 text-ellipsis overflow-hidden">{props.data.details}</p>
        </div>
      </div>
    </div>
  )
}

export default Items