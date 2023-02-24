import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './counterslice'


function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div style={{ textAlign: "center"}}>
        <div style={{ textAlign: "center"}}>
        <h1>{count}</h1>
        </div>
        
        <button style={{ backgroundColor: "green" , width: "150px", height: "50px", marginRight: "50px"}}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button style={{ backgroundColor: "yellow", width: "150px", height: "50px", marginRight: "50px"}}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button style={{ backgroundColor: "red", width: "150px", height: "50px"}}
          aria-label="Decrement value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter;