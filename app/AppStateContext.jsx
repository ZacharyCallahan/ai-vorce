"use client"
import { createContext, useReducer } from "react"

const intialState = {
    // default state when app first loads
    user: null,
}
const reducer = (state, action) => {
    // allows you to dispatch actions to change state of app
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            }
        case "LOGOUT":
            return {
                ...state,
                user: null,
            }
        default:
            return state
    }
    
    
}
const AppStateContext = createContext()
const AppStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState)
    // state is the current state of the app, dispatch is a function that allows you to dispatch actions in the reducer to change state of app
    return (
        <AppStateContext.Provider>
            {children}
        </AppStateContext.Provider>
    );
}

export default AppStateProvider;