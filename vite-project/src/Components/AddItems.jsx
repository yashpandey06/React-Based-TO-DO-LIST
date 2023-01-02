import React from 'react'
import {FaPlus} from 'react-icons/fa';
const AddItems = ({newItem,setNewItem,handelSubmit}) => {
  return (
        <form className='addForm flex justify-center items-center my-4 max-w-1/2 border border-slate-200 py-4' onSubmit={handelSubmit}>
            <label htmlFor='addItem' className='mr-4 font-bold text-2xl '>ADD ITEM</label>
            <input 
            className=' mr-2 border border-slate-500 rounded-lg'
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add'
            required
            value={newItem}
            onChange={(e)=>{setNewItem(e.target.value)}}
            />
            <button 
            className='border p-2 mr-4 border-slate-500 rounded-lg '
            type='submit'
            aria-label='Add Item'
            
            >
                <FaPlus />
            </button>

        </form>
  )
}

export default AddItems