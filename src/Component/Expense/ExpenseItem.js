import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./Expenseitem.css";

const ExpenseItem = (props) => {
  console.log(props)
  return (
    <Card className="expense-item">
      {props.filterdata==props.data.date.getFullYear() ? 
      ( <><ExpenseDate date={props.data.date} /><ExpenseDetails
          amount={props.data.amount}
          location={props.data.location}
          title={props.data.title} /></> ) : null }

    </Card>
  );
};
export default ExpenseItem;
