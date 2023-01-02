import React from 'react'

const Header = ({title}) => {
  // in place of the props -->destructing the props.
  return (
    <div className='bg-slate-900 text-3xl w-full h-14  text-slate-50 flex justify-center items-center  font-bold'>
        <nav>
        {title}
        </nav>
    </div>
  )
}

export default Header