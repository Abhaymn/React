import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
   const[isEditing,setIsEditing]= useState(false);
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditHandler=()=>{
        setIsEditing(true);
    }

    const stopEditingHandler=()=>{
        setIsEditing(false);
    }

    return(
    <div>
       {!isEditing && (
       <button onClick={startEditHandler}>Add New Expense</button>
       )}
       {isEditing && (
       <ExpenseForm 
       onSaveExpenseData={onSaveExpenseDataHandler} 
       onCancel={stopEditingHandler} 
       />
       )}
    </div>
    );
};


export default NewExpense ;