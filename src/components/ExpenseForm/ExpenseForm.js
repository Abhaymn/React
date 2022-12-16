import React ,{useState} from "react";


const ExpenseForm=(props)=>{

    const[enteredItem,setEnteredItem]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
           

    const itemChangeHandler=(event)=>{
        setEnteredItem(event.target.value);
    };
    
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };

    const submitHandler=(event)=>{

        event.preventDefault();

        const expenseData={
            item:enteredItem,
            amount:enteredAmount,
            date:new Date(enteredDate)

        };
        props.onSaveExpenseData(expenseData);

        setEnteredItem('');
        setEnteredAmount('');
        setEnteredDate('');

    };
    return (
        <form onSubmit={submitHandler}>
        <div>
            <div>
                <label>Item</label>
                <input type='text' onChange={itemChangeHandler}/>
            </div>
            <div>
                <label>Amount</label>
                <input type='number'onChange={amountChangeHandler}/>
            </div>
            <div>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler}/>
            </div>

        </div>
        <div>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add New</button>
        </div>
    </form>
    )
};


export default ExpenseForm;