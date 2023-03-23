import React, { useState } from 'react';
import Card from '../UI/Card';

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [toggle , setToggle] = useState(false)
    const [enteredtitle , setEnteredtitle] = useState('')
    const [enteredamount , setEnteredamount] = useState('')
    const [enteredlocation , setEnteredlocation] = useState('')
    const [entereddate , setEntereddate] = useState('')
    const submitHandler=(e)=>{
        e.preventDefault();
        let expensedata = {
            title:enteredtitle,
            amount:+enteredamount,
            location:enteredlocation,
            date:new Date(entereddate)
        }
        props.onSaveExpenseData(expensedata)
        // console.log(expensedata)
        setEnteredtitle('')
        setEnteredamount('')
        setEnteredlocation('')
        setEntereddate('')
        setToggle(!toggle)
    }
    const titleHandler =(e)=>{
        setEnteredtitle(e.target.value)
    }
    const amountHandler =(e)=>{
        setEnteredamount(e.target.value)
    }
    const locationHandler=(e)=>{
        setEnteredlocation(e.target.value)
    }
    const dateHandler=(e)=>{
        setEntereddate(e.target.value)
    }
      
  return (
    
        <>
        {toggle ? 
        <form  onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
        <label className='new-expense__control label'>Title</label>
  <input name='title' type="text" className="'new-expense__control input" value={enteredtitle} onChange={titleHandler} />
  </div>
  <div className='new-expense__control'>
  <label className='new-expense__control label' >Amount</label>
  <input name='amount' type='number' className="'new-expense__control input" value={enteredamount} onChange={amountHandler}/>
  </div>
  <div className='new-expense__control'>
  <label className='new-expense__control label' >Location</label>
  <input name="location" type='text' className="'new-expense__control input" value={enteredlocation} onChange={locationHandler}/>
  </div>
  <div className='new-expense__control'>
  <label className='new-expense__control label' >Date</label>
  <input name='date' type='date' className="'new-expense__control input" value={entereddate} onChange={dateHandler} min="2020-01-01" max='2024-12-31'/>
  </div>
  <button type='submit' className="expense-item__actions">Add Expense</button>
  <button type='submit' className="expense-item__actions">cancel</button>
  </div>
        </form>
        : <>
            <button type='submit' className="expense-item__actions" onClick={()=>setToggle(!toggle)}>Add Expense</button>
        </> }
        </>
    
    
  )
}

export default ExpenseForm