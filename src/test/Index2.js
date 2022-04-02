import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, delCart } from './slice'

const Index2 = () => {
  const carts = useSelector(state => state.cart)
  
  const [cart, setCart] = useState([])
  const dispatch = useDispatch()
  const handAdd = ()=>{
    dispatch(addCart(cart))
  }

  const handDel = (index)=>{
    dispatch(delCart(index))
  }
  return (
    <>
      <input placeholder='text here' onChange={e=>setCart(e.target.value)}></input>
      <button onClick={handAdd}>click</button>
      <ul>
        {carts.map((value, index) => (
          <li key={index}>{value}
            <button onClick={()=>handDel(index)}>x</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Index2