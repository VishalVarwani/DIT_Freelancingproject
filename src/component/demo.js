import React, {useState} from 'react'

export default function Demo() {
    const [text, newText]= useState(0);

    const increment = () => {
            newText(text 
                * 3 , alert(text + 1))

    }
  return (
    <div>
      <h1> this number is currently {text} </h1><br/> <br/>
      <button style={{display:"flex"}}className='btn btn-primary' onClick={increment}> click</button>
    </div>
  )
}
