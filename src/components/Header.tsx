import React from "react";
import { makeStyles, AppBar, Toolbar, Typography,IconButton} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));


export const Header: React.FC<{}> = () => {
   
      const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >

          </IconButton>
          <Typography variant="h6" color="inherit">
          Expense Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
