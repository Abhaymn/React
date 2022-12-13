import React ,{useState} from "react";


const ExpenseForm=(props)=>{

    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
           

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
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
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)

        };
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };
    return (
        <form onSubmit={submitHandler}>
        <div>
            <div>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
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
            <button type='submit'>Add New</button>
        </div>
    </form>
    )
};

export default ExpenseForm;