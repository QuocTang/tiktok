import React from 'react'
import { useState } from 'react'

const Contact = (props) => {
    
    
    
    
  return (
    <div>
        <h1>contact <br/>
        </h1>
        <button onClick={props.clickC}>click +</button>
        <button onClick={props.clickT}>click -</button>
        <input type="text" onChange={props.changed}></input>
    
    </div>
   
  )
}

export default Contact