import React from "react";

import ExpenseItem from './ExpenseItem';

import Card from '../UI/Card';
import './Expenses.css';



const Expenses=(props)=>{
    return (
      <div>
        <Card className='expenses'>
          
          {
            props.item.map((expense)=>(
            <ExpenseItem 
            key={expense.id}
            item={expense.item}
             amount={expense.amount}
              date={expense.date}
              />
              ))
          }
       </Card>
       </div>  
     )
}
export default Expenses;