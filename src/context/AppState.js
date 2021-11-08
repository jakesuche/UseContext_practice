import React, { useState} from 'react'
import AppContext from './context'


const AppState = ({children}) =>{

  const [value, setValue] = useState('this state is coming from context')
  return (
    <AppContext.Provider value={{message:value, setValue}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState
