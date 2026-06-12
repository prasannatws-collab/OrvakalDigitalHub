import { useState, useEffect } from 'react';

export const useWeatherClock = () => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const getGreetingKey = (): 'greetingMorning' | 'greetingEvening' | 'greetingNight' => {
    const hour = new Date().getHours();
    if (hour < 12) return 'greetingMorning';
    if (hour < 18) return 'greetingEvening';
    return 'greetingNight';
  };

  return { timeString, getGreetingKey };
};
