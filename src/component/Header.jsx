import React, { useContext } from 'react'
import {CounterContext} from "./Context"



const Header = () => {
  const {counter} = useContext(CounterContext);



  return (
    <div>Current Counter: {counter}</div>
  )
}

export default Header