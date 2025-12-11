import { useState, useEffect } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalDisplay from "./components/TotalDisplay";

export default function App() {
  // 1. Load from localStorage on first render
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(expense) {
    setExpenses([...expenses, expense]);
  }

  function deleteExpense(id) {
    const updated = expenses.filter((item) => item.id !== id);
    setExpenses(updated);
  }

  return (
    <div className="app">
      <h1>Monthly Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />

      <TotalDisplay expenses={expenses} />
    </div>
  );
}
