import React from "react";

import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';
import Expenses from "./Expenses";

const ExpenseItem=(props)=>{
    return (
<Card className='expense-item'>
      
            
		<div className='expense-item'>
            <ExpenseDate date ={props.date} />
            <ExpenseDetails item={props.item} amount={props.amount} />
        
		</div>
            </Card>
    )
}
export default ExpenseItem;