// src/App.jsx
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'; // assuming you already made this
// (Later we will also import Register if needed)

function App() {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Dashboard</Link>
        <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        {/* You can add more routes like register later */}
      </Routes>
    </div>
  );
}

export default App;
