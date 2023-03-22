import ExpenseItem from './ExpenseItem';
import './Expense.css'
import Card from '../UI/Card';
const Expense =({data})=>{
//    console.log(props)
    return(
        <Card className="expenses">
            {data.map((ele,index)=><ExpenseItem data={ele} key={index}/>)}
        </Card>
    )
}
export default Expense