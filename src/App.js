

import React,{useState} from "react";

import NewExpense from "./components/ExpenseForm/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";

import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES=[
  {
    id:'e1',
    item:'Food',
    amount:10,
    date:new Date(2021,5,12)
  },
  {
    id:'e2',
    item:'Petrol',
    amount:100,
    date:new Date(2022,4,12)
  },
  {
    id:'e3',
    item:'Movies',
    amount:200,
    date:new Date(2022,6,11)
  },
];

const App=()=>{

 const [expenses,setExpenses]= useState(DUMMY_EXPENSES);
  

  const addExpenseHandler=expense=>{
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses]
    });
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
      <Expenses items={expenses}/>
    </div>
  )
}
export default App;