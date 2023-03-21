import ExpenseItem from './ExpenseItem';
import './Expense.css'
import Card from './Card';
const Expense =()=>{
    const expences = [
        {title:"Car Insurance" , amount: 2000 , date : new Date(2023 , 2 , 21), location :'Kolkata'},
        {title:"Hotel Rent" , amount: 1000 , date : new Date(2023 , 2 , 15), location:'Pune'},
        {title:"Flight" , amount: 5000 , date : new Date(2023 , 1 , 10), location :'Delhi'},
        {title:"Maintance" , amount: 3000 , date : new Date(2023 , 0 , 12), location :'Goa'},
      ];
    return(
        <Card className="expenses">
            {expences.map((ele,index)=><ExpenseItem data={ele} key={index}/>)}
        </Card>
    )
}
export default Expense