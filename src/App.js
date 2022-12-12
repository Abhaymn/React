

import React from "react";

import NewExpense from "./components/ExpenseForm/NewExpense";

import Expenses from './components/Expenses/Expenses';


const App=()=>{
  const LocationOfExpenditure=[
    {
      item:'Food',
      amount:10,
      date:new Date(2021,5,12)
    },
    {
      item:'Petrol',
      amount:100,
      date:new Date(2022,4,12)
    },
    {
      item:'Movies',
      amount:200,
      date:new Date(2022,6,11)
    }
  ]
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},'ExpenseItems!'),
  //   React.cloneElement(Expenses,{items:LocationOfExpenditure})

  // );
  return (
    <div>
      <NewExpense/>
      <Expenses items={LocationOfExpenditure}/>
    </div>
  )
}
export default App;