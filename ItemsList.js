import React from 'react';

const ItemsList = ({items,handleCheck,handleDelete}) => {
  console.log(items)
  return (
    <ul>
       {items.map((item)=>(
         <li className='item' key={item.id}>
           <input type="checkbox"
           checked={item.checked} 
           onChange={()=>handleCheck(item.id)}/>
           <label>{item.item}</label>
           <button onClick={()=>handleDelete(item.id)}>Delete</button>
         </li>
       ))}
     </ul> 
  )
}

export default ItemsList