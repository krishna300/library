import React, { useContext } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { AppContext } from '../context/AppContext';

const Header = () => {

  const {query, setQuery} = useContext(AppContext)
  return (
    <div className='p-2 mx-auto text-center '>
      <h1 className='text-5xl mb-5 mt-5 font-medium'>Library</h1>
      <p>Browse for assets needed to report and present analysis</p>

      <div className='mt-10 flex justify-center '>

        <div className='bg-white flex items-center justify-start border w-[50vw] p-3'>
          <IoSearchOutline />
          <input
            className='focus:outline-none ml-2 w-full'
            placeholder='Type to search...'
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
          />
        </div>
      </div>

    </div>
  )
}

export default Header
