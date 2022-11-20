

import React from "react";

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
      <h2>*ExpenseItems*</h2>
      <Expenses items={LocationOfExpenditure}/>
    </div>
  )
}
export default App;