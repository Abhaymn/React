

function ExpenseItem(props){
    return (
        <div >
            <p>{props.item} {props.amount} {props.type}</p>
            
        </div>
    )
}

export default ExpenseItem;