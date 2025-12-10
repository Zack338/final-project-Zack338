import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((exp) => (
              <ExpenseItem
                key={exp.id}
                exp={exp}
                deleteExpense={deleteExpense}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
