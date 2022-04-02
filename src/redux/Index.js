// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addTodo, delTodo } from './slice'

// const Index = () => {
//     const todos = useSelector(state => state.todos)
//     const [todo, setTodo] = useState([])
//     const dispatch = useDispatch()

//     const handleClick = ()=>{
//         dispatch(addTodo(todo))
//     }

//     const handleDel = ()=>{
//         dispatch(delTodo(todo))
//     }
//   return (
//     <>
//         <input placeholder='Type here' onChange={e=>setTodo(e.target.value)}></input>
//         <button onClick={handleClick}>click</button>
        
//             <ul>
//                 {todos.map((e, index)=>(
//                     <li key={index}>{e}
//                         <button onClick={handleDel}>x</button>
//                     </li>
//                 ))}
//             </ul>
//     </>
//   )
// }

// export default Index