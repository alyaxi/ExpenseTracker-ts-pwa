import React from 'react';
import {Second} from "./Types/Types";
import {UserContext} from "./Context/GlobalState";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';







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
            <List className={transactions.amount < 0 ? "minus" : "plus"}>
            
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AttachMoneyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<span>{sign}
                    {Math.abs(transactions.amount)}</span>}
                    secondary={transactions.description}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon  className="delete-btn" onClick={deleteHandle}/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
    
        </div>

    )
}
