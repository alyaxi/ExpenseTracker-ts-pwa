import React from "react";
import { AppBar, Toolbar, Typography} from '@material-ui/core';





export const Header: React.FC<{}> = () => {
   

  return (
    <div >
      <AppBar position="static" className="header">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit">
          Expense Tracker 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
