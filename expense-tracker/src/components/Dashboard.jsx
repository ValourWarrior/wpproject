import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  // Mock expense data
  useEffect(() => {
    setExpenses([
      { id: 1, name: 'Groceries', amount: 50, category: 'Food' },
      { id: 2, name: 'Rent', amount: 500, category: 'Housing' },
    ]);
  }, []);

  useEffect(() => {
    const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    setTotal(totalAmount);
  }, [expenses]);

  return (
    <div>
      <h2>Your Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.name} - ${expense.amount} ({expense.category})
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Dashboard;
