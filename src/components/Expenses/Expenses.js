import React, { useState } from "react";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const selectedYearExpense = (enteredYear) => {
    console.log(enteredYear);
    setSelectedYear(enteredYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (

    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onYearExpense={selectedYearExpense}
      />

      <ExpensesChart expenses={filteredExpense} />


      <ExpensesList items={filteredExpense} />


    </Card>
  );
};

export default Expenses;
