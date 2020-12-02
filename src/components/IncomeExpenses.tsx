import React, { useContext} from 'react'
import {UserContext} from "./Context/GlobalState";
import Paper from '@material-ui/core/Paper';
import '../App.css';




export const IncomeExpenses: React.FC<{}> = () => {
    const { state } = useContext(UserContext);
    const { transactions } = state;
    const amount = transactions.map((transaction) => transaction.amount);
    const initial = 0;
    const income = amount
    .filter((items) => items > 0)
    .reduce((previous, current) => (previous += current), initial)
    .toFixed(2);

  const expense = (
    amount
      .filter((items) => items < 0)
      .reduce((previous, current) => (previous += current), initial) * 1
  ).toFixed(2);
    return (
        <div className="inc-exp-div">
        <div>
        <Paper variant="outlined" className="paper1">
            <h4>Income</h4>
            <p id="money-plus" className="money plus">
            {income}</p></Paper>
        </div>
        <div>
        <Paper variant="outlined" className="paper2">
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">
             {expense}
             </p>
             </Paper>
        </div>

        </div>
    )
}
