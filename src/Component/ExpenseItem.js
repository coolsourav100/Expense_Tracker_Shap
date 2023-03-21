import React from "react";
import './Expenseitem.css'

const ExpenseItem = (props) => {
  console.log(props)
  return (
    <div className="expense-item">
      <div>{props.data.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <p>{`Location - ${props.data.locationOfExpenditure}`}</p>
        <div className="expense-item__price">{`₹ ${props.data.amount}`}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
