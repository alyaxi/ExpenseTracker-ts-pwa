import React from 'react';
import './App.css';
import {GlobalState} from "./components/Context/GlobalState"
import {Header} from "./components/Header"
import {IncomeExpenses} from "./components/IncomeExpenses";
import {AddTransaction} from "./components/AddTransaction";
import {Balance} from "./components/Balance";
import {TransactionList} from "./components/TransactionList";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const App:React.FC<{}> = () => {
  const matches = useMediaQuery('(min-width:320px)');

  return (
    <>
    <GlobalState>
      <Header/>
      <div className="container">
      {`{ minWidth: 320 } matches: ${matches}`}
      <Balance/>
      <IncomeExpenses />
      <TransactionList/>
      <AddTransaction/>
      </div>

    </GlobalState>
    </>
  );
}

export default App;
