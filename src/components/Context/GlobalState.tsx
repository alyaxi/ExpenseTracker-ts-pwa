import React, {useReducer, Dispatch} from 'react';
import {First, Actions} from '../Types/Types'



const initalState: First = {
    transactions: [
      
    ]
} 

export const UserContext = React.createContext<{
    state: First;
    dispatch: Dispatch<Actions>;
  }>({ state: initalState, dispatch: () => null });

const reducer = (state: First, action: Actions) => {
    switch (action.type) {
    case "ADD_TRANSACTION":
         return{
             ...state,
            transactions: [
                ...state.transactions,
                {
                    id: action.payload.id,
                    amount: action.payload.amount,
                    description: action.payload.description
                }
            ]
         }
    case "DELETE_TRANSACTION":
        return{
            ...state,
            transactions: state.transactions.filter((transactions)=>{
               return transactions.id !== action.payload
            })
        }
        default :
            return state;
        
    }
};
export const GlobalState:React.FC<{}> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initalState);
    console.log(state, dispatch);
    
  
    console.log(children);
    return(
        
        <UserContext.Provider value={{state, dispatch}}>
        {children}
        
        </UserContext.Provider>

    
    )
  };