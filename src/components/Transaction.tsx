import React from 'react';
import {Second} from "./Types/Types";
import {UserContext} from "./Context/GlobalState";
import {
  List,
   ListItem,
    ListItemAvatar,
     ListItemSecondaryAction,
      ListItemText,
       Avatar,
        IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import '../App.css';

export const Transaction: React.FC<Second> = (transactions) => {
    const sign = transactions.amount < 0 ? "-" : "+";
    const {dispatch} = React.useContext(UserContext)
    const deleteHandle = () => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: transactions.id
        })
    }
    return (
        <div>
          <div>
            <List  className={transactions.amount < 0 ? "minus" : "plus"}>
            
                <ListItem className="list-1">
                  <ListItemAvatar >
                    <Avatar className="list-icon">
                      <AttachMoneyIcon  />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    className="list-text"
                    primary={<span>{sign}
                    {Math.abs(transactions.amount)}</span>}
                    secondary={transactions.description}
                  />
                  <ListItemSecondaryAction >
                    <IconButton  edge="end" aria-label="delete" className="delete-btn">
                      <DeleteIcon onClick={deleteHandle}/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
    
        </div>

    )
}
