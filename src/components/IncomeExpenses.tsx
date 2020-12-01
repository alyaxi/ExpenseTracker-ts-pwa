import React from 'react'
import {UserContext} from "./Context/GlobalState";
import Paper from '@material-ui/core/Paper';



export const IncomeExpenses: React.FC<{}> = () => {
    const {state} = React.useContext(UserContext)
    const {transactions} = state
    const amount = transactions.map((transactions) => transactions.amount)
    const income = amount.filter(item => item > 0).reduce((acc, item) => acc += item).toFixed(2)
    const expense = amount.filter(item => item < 0).reduce((acc, item) => acc += item) * 1
    return (
        <div className="inc-exp-div">
        <div>
        <Paper variant="outlined"><h4>Income</h4> {income}</Paper>
        </div>
        <div>
        <Paper variant="outlined"><h4>Expense</h4> {expense}</Paper>
        </div>

        </div>
    )
}
