// src/pages/Dashboard.jsx
import React from 'react';
import BudgetOverview from '../components/BudgetOverview';
import AddExpense from '../components/AddExpense';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <BudgetOverview />
      <AddExpense />
    </div>
  );
}

export default Dashboard;
