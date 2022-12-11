import React from "react";

import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';
import './Expenses';

const ExpenseItem=(props)=>{
    const click=()=>{
        console.log('clicked..');
    }
    return (
<Card className='expense-item'>
<div className="expense-item">
            <ExpenseDate date ={props.date} />
    		


            <ExpenseDetails item={props.item} amount={props.amount} />
            </div>
            <button onClick={click}>Delete</button>
            </Card>
    )
}
export default ExpenseItem;