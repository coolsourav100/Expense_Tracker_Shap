import "./Expenseitem.css";

const ExpenseDetails = (props) => {
  const clickHandler =(e)=>{
    let d = document.activeElement.parentElement.parentElement
    d.remove()
  }
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <p>{`Location - ${props.location}`}</p>
      <div className="expense-item__price">{`₹ ${props.amount}`}</div>
      <button className="expense-item__delete" onClick={clickHandler}>Delete</button>
    </div>
  );
};
export default ExpenseDetails;
