import React from "react";

import ExpenseItem from './ExpenseItem';

import Card from '../UI/Card';
import './Expenses.css';



const Expenses=(props)=>{
    return (
       
        <Card className='expenses'>
        <ExpenseItem item={ props.items[0].item}
        amount={props.items[0].amount}
        date={props.items[0].date}
        />
        <ExpenseItem items={ props.item[1].item}
        amount={ props.items[1].amount}
        date={ props.items[1].date}
        />
         <ExpenseItem item={ props.items[2].item}
        amount={ props.items[2].amount}
        date={props.items[2].date}
        />
       </Card>
       
     )
}
export default Expenses;