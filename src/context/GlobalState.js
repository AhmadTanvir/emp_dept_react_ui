import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = 
{
    departments: 
    [
        {
            id: 1,
            departmentname: 'Finishing',
            // status: 'active'
        },
        {
            id: 2,
            departmentname: 'Dying',
            // status: 'active'
        },
        {
            id: 3,
            departmentname: 'Iron',
            // status: 'inactive'
        },
        {
            id: 4,
            departmentname: 'Finishing',
            // status: 'active'
        }
    ]
};

// Create Context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

 //Actions
const removeDepartment = (id) => {
    dispatch({
        type: 'REMOVE_DEPARTMENT',
        payload: id
    })
}
const addDepartment = (department) => {
    dispatch({
        type: 'ADD_DEPARTMENT',
        payload: department
    })
}
const editDepartment = (department) => {
    dispatch({
        type: 'EDIT_DEPARTMENT',
        payload: department
    })
}

    return(
        <GlobalContext.Provider value={{ 
            departments: state.departments,
            removeDepartment,
            addDepartment,
            editDepartment,
         }}>
            {children}
        </GlobalContext.Provider>
    )
}