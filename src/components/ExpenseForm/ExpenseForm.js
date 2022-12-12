import React from "react";


const ExpenseForm=()=>{


    const titleChangeHandler=(event)=>{
        console.log(event.target.value);
    };
    

    return <form>
        <div>
            <div>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div>
                <label>Amount</label>
                <input type='number'/>
            </div>
            <div>
                <label>Date</label>
                <input type='date'/>
            </div>

        </div>
        <div>
            <button type='submit'>Add New</button>
        </div>
    </form>
};

export default ExpenseForm;