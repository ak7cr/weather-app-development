import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherCard({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'your_api_key';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
        setError(null); 
      } catch (err) {
        setError('City not found or API error');
      }
    };
    fetchWeather();
  }, [city]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
