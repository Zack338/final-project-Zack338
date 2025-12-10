import { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Simple validation
    if (name.trim() === "" || category.trim() === "" || amount === "") {
      setError("Please fill out all fields.");
      return;
    }

    if (isNaN(amount) || Number(amount) <= 0) {
      setError("Amount must be a positive number.");
      return;
    }

    const newExpense = {
      id: crypto.randomUUID(),
      name,
      category,
      amount: Number(amount),
    };

    addExpense(newExpense);

    // Reset form
    setName("");
    setCategory("");
    setAmount("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}
