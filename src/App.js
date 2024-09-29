import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import './index.css'; 

function App() {
  const [city, setCity] = useState('Chennai');
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
      <h1 className="text-4xl font-bold mb-6">Weather App</h1>
      <div className="mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 border rounded-lg text-lg"
          placeholder="Enter City"
        />
      </div>
      <WeatherCard city={city} />
    </div>
  );
}

export default App;
