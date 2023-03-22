import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const onSaveExpenseDataHandler=(enterExpenseData)=>{
    const expensedata = {
      ...enterExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expensedata)
    // console.log(expensedata)
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense