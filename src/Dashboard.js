import React from 'react';

function Dashboard({ steps, calories }) {
  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Dashboard</h2>
      <p><strong>Steps:</strong> {steps}</p>
      <p><strong>Calories:</strong> {calories}</p>
    </div>
  );
}

export default Dashboard;
