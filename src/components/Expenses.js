import "./Expenses.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  let items = props.items;
  return (
    <div className="expenses">
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />

      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />

      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />

      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </div>
  );
}
