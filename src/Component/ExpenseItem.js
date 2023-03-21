import React from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./Expenseitem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date} />
      <ExpenseDetails
        amount={props.data.amount}
        location={props.data.location}
        title={props.data.title}
      />
    </Card>
  );
};
export default ExpenseItem;
