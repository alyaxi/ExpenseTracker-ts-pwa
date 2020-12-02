import React from 'react';
import {UserContext} from "./Context/GlobalState";
import '../App.css';



export const Balance: React.FC<{}> = () => {
    const {state} = React.useContext(UserContext)
    const {transactions} = state
    const amount = transactions.map((transactions) => transactions.amount)
    console.log(amount);
    const total = amount.reduce((prev, current) => prev += current,0 ).toFixed(2)
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">{total}</h1>
        </div>
    )
}
