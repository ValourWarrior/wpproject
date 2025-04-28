// src/components/AddExpense.jsx
import React, { useState } from 'react';

function AddExpense() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Expense Added:', { title, amount, category });

    // Here we'll later call the backend to save the expense

    setTitle('');
    setAmount('');
    setCategory('');
  };

  return (
    <div className="add-expense-container">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category (e.g., Food, Travel)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
