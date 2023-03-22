import { useState } from "react";
import Expense from "./Component/Expense/Expense";
import NewExpense from "./Component/Expense/NewExpense";
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const expences = [
    {title:"Car Insurance" , amount: 2000 , date : new Date(2023 , 2 , 21), location :'Kolkata'},
    {title:"Hotel Rent" , amount: 1000 , date : new Date(2023 , 2 , 15), location:'Pune'},
    {title:"Flight" , amount: 5000 , date : new Date(2023 , 1 , 10), location :'Delhi'},
    {title:"Maintance" , amount: 3000 , date : new Date(2023 , 0 , 12), location :'Goa'},
  ];
  const [edata ,setEdata] = useState([...expences])
  const addExpenseHandler=(expense)=>{
    setEdata([...edata,expense])
    console.log(edata)
  }
  return (
      
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense data={edata}/>
    </div>
  );
}

export default App;
