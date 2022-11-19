import ExpenseItem from "./components/ExpenseItem";


function App(){
  const LocationOfExpenditure=[
    {
      item:'Food',
      amount:10,
      type:'Rs'
    },
    {
      item:'Petrol',
      amount:100,
      type:'Rs'
    },
    {
      item:'Movies',
      amount:200,
      type:'Rs'
    }
  ]
  return (
    <div>
      <h2>*ExpenseItems*</h2>
      <ExpenseItem item={ LocationOfExpenditure[0].item}
      amount={ LocationOfExpenditure[0].amount}
      type={ LocationOfExpenditure[0].type}>
      </ExpenseItem>
      <ExpenseItem item={ LocationOfExpenditure[1].item}
      amount={ LocationOfExpenditure[1].amount}
      type={ LocationOfExpenditure[1].type}
      ></ExpenseItem>
       <ExpenseItem item={ LocationOfExpenditure[2].item}
      amount={ LocationOfExpenditure[2].amount}
      type={ LocationOfExpenditure[2].type}
      ></ExpenseItem>
    </div>
  )
}
export default App;