import React from 'react'
import { useParams } from 'react-router-dom'

const SearchItem = () => {
    const {term}=useParams();
  return (
    <div>
      <h1>Search items..{term}</h1>
    </div>
  )
}

export default SearchItem
