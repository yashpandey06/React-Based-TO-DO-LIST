import React from 'react'

const Footer = ({ length }) => {
    let date=new Date();
    
    
  return (
    <div>
        <footer className='bg-slate-800 text-slate-50 grid place-content-center w-full py-1'>
         
            <p> { length } List {length===1 ? "item":"items"}</p>
        </footer>
    </div>
  )
}

export default Footer