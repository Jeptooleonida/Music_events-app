import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search-container">
    <input
    className="search-bar"
    type="text"
    placeholder="Search artist name here ..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>

  )
}

export default Search
