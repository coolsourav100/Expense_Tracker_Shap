import ExpenseItem from "./Component/ExpenseItem";

function App() {
  const expences = [
    {title:"Car Insurance" , amount: 2000 , date : new Date(2023 , 2 , 21), location :'Kolkata'},
    {title:"Hotel Rent" , amount: 1000 , date : new Date(2023 , 2 , 15), location:'Pune'},
    {title:"Flight" , amount: 5000 , date : new Date(2023 , 1 , 10), location :'Delhi'},
    {title:"Maintance" , amount: 3000 , date : new Date(2023 , 0 , 12), location :'Goa'},
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {expences.map((ele,index)=><ExpenseItem data={ele} key={index}/>)}
    </div>
  );
}

export default App;
