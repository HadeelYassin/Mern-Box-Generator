import React, {useState} from 'react'

export const Color = (props) => {
    const[color, setColor]= useState("");
    const addColor= (e)=>{
        e.preventDefault();
        props.addToState(color);
    }

    return (
        <div>
           <form onSubmit={addColor}>
               <label>Color</label>
               <input type="text" onChange={(e) => setColor(e.target.value)} value={color}></input>
               <button type="submit">Add color</button>
               </form> 
        </div>
    )
}
export default Color
