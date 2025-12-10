export default function ExpenseItem({ exp, deleteExpense }) {
  return (
    <tr>
      <td>{exp.name}</td>
      <td>{exp.category}</td>
      <td>${exp.amount.toFixed(2)}</td>
      <td>
        <button onClick={() => deleteExpense(exp.id)}>Delete</button>
      </td>
    </tr>
  );
}
