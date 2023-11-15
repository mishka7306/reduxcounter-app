import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/counterSlice'

function Counter() {

  //state to hold value from input box
  const [range , setRange] = useState("")

  //hook to dispatch a funct in action .//dispatch means action n akathulla logic ne call cheyua
  const dispatch = useDispatch()
  //component can access the state by using useSelector hook
    const count = useSelector((state)=>state.counter.value)
  
//to see range
console.log(range);

  return (
    <>
    <div className='d-flex align-items-center justify-content-center w-100 mb-5 flex-column mt-5'>
    <h1 style={{fontsize:'90px',color:'white'}}>{count}</h1>
    <div className='mt-5'>
        <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3 '>Decrement</button>
        {/* number method is used to convert string into number */ }
        <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
        <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-3'>Increment</button>
    </div>
    </div>
    {/* input box*/ }
    <div>
      <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control w-100 mt-3' placeholder='enter the range' style={{bordercolor:'blue'}} />
   
    </div>
    </>
  )
}

export default Counter