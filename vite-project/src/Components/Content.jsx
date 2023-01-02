
import { BsTrash } from "react-icons/bs";
const Content = ({nav,handelChange,handleDelete}) => {
 
return (
    <div>
      <main className=" my-4 grid place-items-center ">
        {console.log(nav.length)}
        {nav.length!=0 ?(
          <ul className="flex-col justify-center items-center mx-4 w-1/2 ">
            {nav.map((n) => (
            
              <li className="item  my-4 flex justify-center items-center p-4 bg-slate-200 shadow-md text-lg" key={n.id}>
              
                <input 
              
                type="checkbox" 
                onChange={()=>handelChange(n.id)}
                checked={n.checked} 
                name="" id="" 
                className="mr-auto"
                />

              <div className="cursor-pointer"
              onClick={()=>handelChange(n.id)}
              style={(n.checked) ? {textDecoration:'line-through'}:null}
              >
                {n.item}
              </div>
                <BsTrash 
                onClick={()=>handleDelete(n.id)}
                role="button"
                tabIndex="0"
                className="ml-auto"
                size={25} />
              </li>
            ))}
          </ul>
        ):(
          <p className="text-4xl my-6 py-6 text-slate-300">List is empty</p>
        )} 
      </main>
    </div>
  );
};

export default Content;
