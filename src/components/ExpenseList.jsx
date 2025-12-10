import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Your Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        expenses.map((exp) => (
          <ExpenseItem key={exp.id} exp={exp} deleteExpense={deleteExpense} />
        ))
      )}
    </div>
  );
}
