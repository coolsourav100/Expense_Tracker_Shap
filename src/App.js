import { useState } from "react";
import Expense from "./Component/Expense/Expense";
import NewExpense from "./Component/Expense/NewExpense";

const DUMMY_Expences = [
  {id:"e1",title:"Car Insurance" , amount: 2000 , date : new Date(2023 , 2 , 21), location :'Kolkata'},
  {id:"e2",title:"Hotel Rent" , amount: 1000 , date : new Date(2023 , 2 , 15), location:'Pune'},
  {id:"e3",title:"Flight" , amount: 5000 , date : new Date(2023 , 1 , 10), location :'Delhi'},
  {id:"e4",title:"Maintance" , amount: 3000 , date : new Date(2023 , 0 , 12), location :'Goa'},
];
function App() {
  
  const [expenses ,setExpenses] = useState(DUMMY_Expences)
  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]
    })
    console.log(expenses)
  }
  
  return (
      
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense data={expenses}/>
    </div>
  );
}

export default App;
