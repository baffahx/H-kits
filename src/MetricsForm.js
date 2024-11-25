import React, { useState } from 'react';

function MetricsForm({ updateMetrics }) {
  const [steps, setSteps] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMetrics({
      steps: steps ? parseInt(steps) : 0,
      calories: calories ? parseInt(calories) : 0,
    });
    setSteps('');
    setCalories('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>
        <label>
          Steps:
          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Enter steps"
            style={{ marginLeft: '10px', padding: '5px', width: '100px' }}
          />
        </label>
      </div>
      <div>
        <label>
          Calories:
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="Enter calories"
            style={{ marginLeft: '10px', padding: '5px', width: '100px' }}
          />
        </label>
      </div>
      <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Update Metrics
      </button>
    </form>
  );
}

export default MetricsForm;
