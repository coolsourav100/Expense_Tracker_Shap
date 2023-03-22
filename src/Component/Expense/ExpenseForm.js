import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../UI/Card';

const ExpenseForm = () => {
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log('Submit Data')
    }
    const changeHandler =(e)=>{
        console.log(e.target.value)
    }
  return (

        <form className='expense-item' onSubmit={submitHandler}>
        <div className="expense-item">
        <label>Title</label>
  <input name='title' type="text" className="expense-item" onChange={changeHandler}/>
</div>
<div className="expense-item">
  <label  >Amopunt</label>
  <input name='amount' type='number' className="expense-item" onChange={changeHandler}/>
  </div>
<div className="expense-item">
  <label  >Location</label>
  <input name="location" type='text' className="expense-item" onChange={changeHandler}/>
  </div>
<div className="expense-item">
  <label  >Date</label>
  <input name='date' type='date' className="expense-item" onChange={changeHandler}/>
  </div>
  <button type='submit' className="expense-item__btn">Add Expense</button>
        </form>
    
  )
}

export default ExpenseForm