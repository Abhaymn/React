import ExpenseItem from "./components/ExpenseItem";


function App(){
  const LocationOfExpenditure=[
    {
      item:'Food',
      amount:10,
      date:new Date(2021,5,12)
    },
    {
      item:'Petrol',
      amount:100,
      date:new Date(2022,4,12)
    },
    {
      item:'Movies',
      amount:200,
      date:new Date(2022,6,11)
    }
  ]
  return (
    <div>
      <h2>*ExpenseItems*</h2>
      <ExpenseItem item={ LocationOfExpenditure[0].item}
      amount={ LocationOfExpenditure[0].amount}
      date={ LocationOfExpenditure[0].date}
      ></ExpenseItem>
      <ExpenseItem item={ LocationOfExpenditure[1].item}
      amount={ LocationOfExpenditure[1].amount}
      date={ LocationOfExpenditure[1].date}
      ></ExpenseItem>
       <ExpenseItem item={ LocationOfExpenditure[2].item}
      amount={ LocationOfExpenditure[2].amount}
      date={ LocationOfExpenditure[2].date}
      ></ExpenseItem>
    </div>
  )
}
export default App;