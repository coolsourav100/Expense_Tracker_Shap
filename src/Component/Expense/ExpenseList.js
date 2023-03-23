
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'
const ExpenseList =(props)=>{
    
    if(props.item.length == 0){
        return <h2 className='expenses-list__fallback'>No Expense Found</h2>
    }
    if(props.item.length == 1){
        return (
            <>
        <h2 className='expenses-list__fallback'>Only single Expense here . Please ad more...</h2>
        {props.item.map((ele,index)=><ExpenseItem data={ele} key={ele.id}/>)}
        </>
        )
    }
    return(
        <ul className='expenses-list'>
            {props.item.map((ele,index)=><ExpenseItem data={ele} key={ele.id}/>)}
        </ul>
    )
}
export default ExpenseList