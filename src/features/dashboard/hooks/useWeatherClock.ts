import { useState, useEffect } from 'react';
import { WeatherService, defaultWeatherData } from '../services/weatherService';
import type { WeatherData } from '../services/weatherService';

const weatherService = new WeatherService();

export const useWeatherClock = () => {
  const [timeString, setTimeString] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData>(defaultWeatherData);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setWeatherLoading(true);
        const data = await weatherService.fetchWeather();
        setWeatherData(data);
        setWeatherError(null);
      } catch (err: any) {
        console.error("Failed to load weather data:", err);
        setWeatherError(err?.message || "Failed to load weather data");
      } finally {
        setWeatherLoading(false);
      }
    };

    fetchWeather();
    // Refresh weather every 15 minutes
    const interval = setInterval(fetchWeather, 900000);
    return () => clearInterval(interval);
  }, []);

  const getGreetingKey = (): 'greetingMorning' | 'greetingEvening' | 'greetingNight' => {
    const hour = new Date().getHours();
    if (hour < 12) return 'greetingMorning';
    if (hour < 18) return 'greetingEvening';
    return 'greetingNight';
  };

  return { 
    timeString, 
    getGreetingKey, 
    weatherData, 
    weatherLoading, 
    weatherError 
  };
};
