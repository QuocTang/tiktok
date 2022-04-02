import React from 'react'
import Contact from './Contact';
import { useState } from 'react'
// import Index from './redux/Index'
import Index2 from './test/Index2';

const App = () => {
  const [count, setCount] = useState(0)
  const handlClickT = ()=>{
    {count > 0 && setCount(count-1)}
     
}
  const handlClickC = ()=>{
    setCount(count+1)
}
const changed = (e)=>{
  setCount(e.target.value)
}
  return (
  <>
   {/* <Index/> */}
  <h1>{count}</h1>
  <Contact clickC={handlClickC} clickT={handlClickT} changed={changed}/>
    <Index2/>

  </>
  
  )

}

export default App