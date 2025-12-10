import { useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalDisplay from "./components/TotalDisplay";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(expense) {
    setExpenses([...expenses, expense]);
  }

  function deleteExpense(id) {
    const updated = expenses.filter((item) => item.id !== id);
    setExpenses(updated);
  }

  return (
    <div className="app">
      <h1>Simple Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />

      <TotalDisplay expenses={expenses} />
    </div>
  );
}
