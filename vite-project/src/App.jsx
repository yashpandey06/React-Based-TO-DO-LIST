import { useState } from 'react'
import Header from './Components/Header'
import SearchItem from './Components/SearchItem'
import AddItems from './Components/AddItems'
import Content from './Components/Content'
import Footer from './Components/Footer'


function App() {
  const [nav, setNav] = useState([
    
  ]);
  const [newItem,setNewItem]=useState('');
  const [search,setSearch]=useState('');

  const handelChange=(id)=>{
  // id which is clicked
    const list=nav.map((items)=>items.id===id ? {...items,checked:!items.checked}:items)
    setNav(list);
    localStorage("MySoppingList",JSON.stringify(list))
  }
   const handleDelete=(id)=>{
 
      const list=nav.filter((item)=>item.id!==id)
    
      setNav(list)
      localStorage("MySoppingList",JSON.stringify(list))

   };
   const handelSubmit=(e)=>{
    
    e.preventDefault();
    if(!newItem)
    return;
    
    Additems(newItem);
    setNewItem('');
   }
   const Additems=(item)=>{
    const id=nav.length ? nav[nav.length-1].id+1:1;
    const mynewItem={item,id,checked:false}
    const list=[...nav,mynewItem]
    setNav(list)
    localStorage("MySoppingList",JSON.stringify(list))
   }

 return (
<>
  <div className='App flex-col m-auto justify-center items-center w-full h-full  '>
        <Header
               title="The Grocery List"
        />

        
        <AddItems 
              newItem={newItem}
              setNewItem={setNewItem}
              handelSubmit={handelSubmit}
        />
        <SearchItem 
              search={search}
              setSearch={setSearch}
        />

        <Content
              nav={nav.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
              setNav={setNav}
              handelChange={handelChange}
              handleDelete={handleDelete}
        />
        <Footer
        length={nav.length}
        />
  </div>
</>
 )
  
}

export default App
