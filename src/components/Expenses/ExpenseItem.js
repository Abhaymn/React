import React,{useState} from "react";

import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';
import './Expenses';

const ExpenseItem=(props)=>{

    const [amount,setAmount]= useState(props.amount);

    const click=()=>{
        setAmount(100);
        console.log(amount);
    }
    return (
<Card className='expense-item'>
<div className="expense-item">
            <ExpenseDate date ={props.date} />
    		


            <ExpenseDetails item={props.item} amount={props.amount} />
            </div>
            <button onClick={click}>update</button>
            </Card>
    )
}
export default ExpenseItem;