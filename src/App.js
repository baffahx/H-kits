import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import MetricsForm from './MetricsForm';
import History from './History';
import { saveToLocalStorage, getFromLocalStorage } from './localStorage';

function App() {
  const [metrics, setMetrics] = useState({ steps: 0, calories: 0 });
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedMetrics = getFromLocalStorage('metrics');
    const storedHistory = getFromLocalStorage('history');
    if (storedMetrics) setMetrics(storedMetrics);
    if (storedHistory) setHistory(storedHistory);
  }, []);

  useEffect(() => {
    saveToLocalStorage('metrics', metrics);
    saveToLocalStorage('history', history);
  }, [metrics, history]);

  const updateMetrics = (newMetrics) => {
    const updatedMetrics = {
      steps: metrics.steps + (newMetrics.steps || 0),
      calories: metrics.calories + (newMetrics.calories || 0),
    };
    setMetrics(updatedMetrics);
    setHistory([
      ...history,
      { ...updatedMetrics, date: new Date().toLocaleString() },
    ]);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>H-kits App</h1>
      <Dashboard steps={metrics.steps} calories={metrics.calories} />
      <MetricsForm updateMetrics={updateMetrics} />
      <History history={history} />
    </div>
  );
}

export default App;
