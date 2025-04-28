// src/components/BudgetOverview.jsx
import React from 'react';

function BudgetOverview() {
  // Later we will pass real data here as props
  const totalBudget = 50000; // For example
  const totalSpent = 20000;
  const remaining = totalBudget - totalSpent;

  return (
    <div className="budget-overview-container">
      <h2>Budget Overview</h2>
      <div className="budget-info">
        <p><strong>Total Budget:</strong> ₹{totalBudget}</p>
        <p><strong>Spent:</strong> ₹{totalSpent}</p>
        <p><strong>Remaining:</strong> ₹{remaining}</p>
      </div>
    </div>
  );
}

export default BudgetOverview;
