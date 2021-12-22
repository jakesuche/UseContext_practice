import { createContext, useState, useReducer } from 'react'

export const  AppContext = createContext()

const Myreducer = (state, action) => {
    switch(action.type) {
        case "ADD_STATE":
            return{
                ...state, names:action.payload
            }
        case "REMOVE_STATE":
            return {
                ...state,names:[]
            }
        default:
            return{
                state
            }
    }

}




const TodoState = ({ children}) => {
    const iniTodoState = {
        names:[]
    }

    const [state, dispatch] = useReducer(Myreducer,iniTodoState)

    const addTodo = (todo) => {
        dispatch({
            type:"ADD_STATE",
            payload:todo
        })
    }

    const removeTodo = (todo) => {
        dispatch({
            type:'REMOVE_STATE',
        })
    }

  
    return (
        <AppContext.Provider value={{value:'this is value', addTodo, removeTodo}}>
            {children}
        </AppContext.Provider>
    )
}

export default TodoState