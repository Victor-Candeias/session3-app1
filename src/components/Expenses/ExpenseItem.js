import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expenseTitle);

  const clickHandler = () => {
    console.log("Clicked!!!!");

    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      {/* apenas pode ter um root element */}
      <ExpenseDate expenseDate={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">€{props.expensePrice}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
