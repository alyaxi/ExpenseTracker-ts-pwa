import React, {useContext, useState } from 'react';
import {UserContext} from "./Context/GlobalState"
import { FormControl, TextField, Button } from "@material-ui/core";
import '../App.css';


export const AddTransaction: React.FC<{}> = () => {
    const [description, setDescription] = useState<string>("")
    const [amount, setAmount] = useState<number>(0)
    const {dispatch} = useContext(UserContext)

    const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(
            {
                type: "ADD_TRANSACTION",
                payload: {
                    id: Math.floor(Math.random() * 1000),
                    description,
                    amount: +amount
                },
                
        })
        setDescription("")

        setAmount(0)
    }

    return (
        <>
        <div className="main-transaction-div">
        <h3>Add New Transaction</h3>
        <form onSubmit={submitHandle} autoComplete="off">
        <div className="form-label-div">
        <FormControl className="form-label-text" fullWidth>
        <TextField type="text" variant="filled" required label="Enter text" id="tex-field" value={description} onChange={(e: any) => {setDescription(e.target.value)}}/>
        </FormControl>
        <FormControl className="form-label-text" fullWidth>
        <TextField type="number" variant="filled" required label="Enter amount" id="tex-field" value={amount} onChange={(e: any) => {setAmount (parseInt(e.target.value))}}/>
        </FormControl>
        <p>negative - expense, positive - income</p>
        </div>
        <Button type="submit" variant="contained" className="btn" fullWidth>Add Transaction</Button>

        </form>
        </div>

        </>
    )
}

