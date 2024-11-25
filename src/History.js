import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function History({ history }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>History</h2>
      {history.length === 0 ? (
        <p>No history available. Add some metrics!</p>
      ) : (
        <>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Date</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Steps</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Calories</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{entry.date}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{entry.steps}</td>
                  <td style={{ border: '1px solid #ccc', padding: '8px' }}>{entry.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={history}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="steps" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="calories" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
}

export default History;
