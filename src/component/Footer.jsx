import React, { useContext } from 'react'
import { CounterContext } from './Context'

const Footer = () => {

const {setCounter} = useContext(CounterContext)
const handlerClick = () => {
  setCounter(prevState => prevState + 1)
}

  return (
    <div>
      <button onClick={handlerClick}>+1</button>
    </div>
  )
}

export default Footer