import ExpenseItem from './ExpenseItem';
import './Expense.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
const Expense =({data})=>{
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
    return(
        <Card className="expenses">
            <ExpensesFilter  selected={filteredYear}
            onChangeFilter={filterChangeHandler}
            />
            {data.map((ele,index)=><ExpenseItem data={ele} key={index}/>)}
        </Card>
    )
}
export default Expense