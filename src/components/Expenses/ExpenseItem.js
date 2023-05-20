import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        {/* apenas pode ter um root element */}
        <ExpenseDate expenseDate={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">€{props.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
