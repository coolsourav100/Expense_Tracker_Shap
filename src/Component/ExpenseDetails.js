import "./Expenseitem.css";

const ExpenseDetails = (props) => {
  console.log(props);
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <p>{`Location - ${props.location}`}</p>
      <div className="expense-item__price">{`₹ ${props.amount}`}</div>
    </div>
  );
};
export default ExpenseDetails;
