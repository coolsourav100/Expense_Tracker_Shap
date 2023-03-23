
import './Expense.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
const Expense =({data})=>{
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filterExpense = data.filter((ele,index)=>{
        return ele.date.getFullYear().toString()==filteredYear
    })
    return(
        <li>
        <Card className="expenses">
            <ExpensesFilter  selected={filteredYear}
            onChangeFilter={filterChangeHandler}
            />
            <ExpenseList item={filterExpense}/>
        </Card>
        </li>
    )
}
export default Expense