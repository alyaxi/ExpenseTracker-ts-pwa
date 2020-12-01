import React, { useContext } from "react";
import { UserContext } from "./Context/GlobalState";
import {Transaction} from "./Transaction";
import {
    Accordion ,
      AccordionSummary,
       AccordionDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const TransactionList: React.FC<{}> = () => {
  const { state } = useContext(UserContext);
  const { transactions } = state;
  console.log(transactions);
  

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div  className="typography-heading">History</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul id="list" className="list">
                {transactions.map((items)=> <Transaction key={items.id} {...items}/>)}
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

