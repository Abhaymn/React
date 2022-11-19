import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){
    return (

		<div className='expense-item'>

            <ExpenseDate date ={props.date} />
            <ExpenseDetails item={props.item} amount={props.amount} />
		</div>

)
}
export default ExpenseItem;