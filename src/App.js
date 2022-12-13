

import React from "react";

import NewExpense from "./components/ExpenseForm/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";

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
    },
  ];

  const addExpenseHandler=expense=>{
    console.log('in app.js');
    console.log(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},'ExpenseItems!'),
  //   React.cloneElement(Expenses,{items:LocationOfExpenditure})

  // );
  return (
    <div>
      <ExpenseItem/>
      
      <NewExpense onAssExpense={addExpenseHandler}/>
      <Expenses items={LocationOfExpenditure}/>
    </div>
  )
}
export default App;