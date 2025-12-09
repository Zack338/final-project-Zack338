export default function ExpenseItem({ exp, deleteExpense }) {
  return (
    <div className="expense-item">
      <p>
        <strong>{exp.name}</strong> — {exp.category} — ${exp.amount}
      </p>

      <button onClick={() => deleteExpense(exp.id)}>Delete</button>
    </div>
  );
}
