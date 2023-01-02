import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='SeachBox border  flex  justify-center items-center my-4' onSubmit={(e)=>e.preventDefault}>
        <label htmlFor='Search Item'></label>
            <input
                type="text"
                role="searchbox"
                id="searchBar"
                placeholder='Search'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
    </form>
  )
}

export default SearchItem