import { useState } from "react";
import "./Expenseitem.css";

const ExpenseDetails = (props) => {
  const [price , setPrice] = useState(props.amount)
  const clickHandler =(e)=>{
    setPrice('10000')
  }
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <p>{`Location - ${props.location}`}</p>
      <div className="expense-item__price">{`₹ ${price}`}</div>
      <button className="expense-item__change" onClick={clickHandler}>Change</button>
    </div>
  );
};
export default ExpenseDetails;
