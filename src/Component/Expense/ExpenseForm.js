import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [userInput , setUserInput] = useState({
        enteredtitle:"",
        enteredamount:"",
        enteredlocation:"",
        entereddate:""
    })
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(userInput)
    }
    const titleHandler =(e)=>{
        setUserInput((prevState)=>{
            return {...prevState , enteredtitle:e.target.value}
        })
    }
    const amountHandler =(e)=>{
        setUserInput((prevState)=>{
            return {...prevState , enteredamount:e.target.value}
        })
    }
    const locationHandler=(e)=>{
        setUserInput((prevState)=>{
            return {...prevState , enteredlocation:e.target.value}
        })
    }
    const dateHandler=(e)=>{
        setUserInput((prevState)=>{
            return {...prevState , entereddate:e.target.value}
        })
    }
    console.log(userInput)   
  return (

        <form  onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
        <label className='new-expense__control label'>Title</label>
  <input name='title' type="text" className="'new-expense__control input"  onChange={titleHandler} />
  </div>
  <div className='new-expense__control'>
  <label className='new-expense__control label' >Amount</label>
  <input name='amount' type='number' className="'new-expense__control input" onChange={amountHandler}/>
  </div>
  <div className='new-expense__control'>
  <label className='new-expense__control label' >Location</label>
  <input name="location" type='text' className="'new-expense__control input" onChange={locationHandler}/>
  </div>
  <div className='new-expense__control'>
  <label className='new-expense__control label' >Date</label>
  <input name='date' type='date' className="'new-expense__control input" onChange={dateHandler} min="2020-01-01" max='2024-12-31'/>
  </div>
  <button type='submit' className="expense-item__actions">Add Expense</button>
  </div>
        </form>
    
  )
}

export default ExpenseForm