import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions'

const App = () => {
  const currState = useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch()
  // console.log(currState)
  return (
    <>
      <div className='container d-flex flex-column justify-content-center'>
        <div className=''>
          <h1>Increment/Decrement Counter</h1>
          <h4>Using React and Redux</h4>
          <div className='d-flex flex-row justify-content-center'>
            <button type='' className='btn btn-success' onClick={()=>dispatch(decNumber())}><span>-</span></button>
            <p>{currState}</p>
            <button className='btn btn-success' type='' onClick={()=>dispatch(incNumber(5))}><span>+</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App