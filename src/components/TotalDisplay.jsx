export default function TotalDisplay({ expenses }) {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return <h2>Total Spent: ${total}</h2>;
}
