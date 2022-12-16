import React from "react"

import ExpenseItem from "./ExpenseItem";

const ExpensesList=props=>{
    let expensesContent=<p>No expenses</p>;

   if (props.items.length===0){
    return <h2>no expenses</h2>
   }

return <ul >
    {items.map((expense)=>(
        <ExpenseItem 
        key={expense.id}
        item={expense.item}
         amount={expense.amount}
          date={expense.date}
          />
          ))}
</ul>

};

export default ExpensesList;