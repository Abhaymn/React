import React from "react";

const ExpensesFilter=(props)=>{
    const downChangeHandler=(event)=>{
    props.onChangeFilter(event.target.value);
};

return(
    <div>
        <div>
            <label>Filter by year</label>
            <select value={props.selected} onChange={downChangeHandler}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
            </select>
        </div>
    </div>
)
}

export default ExpensesFilter;