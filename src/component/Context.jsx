import React, { useState, createContext } from 'react'



export const CounterContext = createContext({});

const Context = ({children}) => {

const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{counter, setCounter}}>
        {children}
    </CounterContext.Provider>
  )
}

export default Context