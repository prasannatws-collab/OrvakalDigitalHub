export interface WeatherData {
  temperature: number;
  apparentTemperature: number;
  conditionCode: number;
  humidity: number;
  windSpeed: number;
  rainChance: number;
  sunrise: string;
  sunset: string;
  aqi: number;
  uvIndex: number;
}

export interface IWeatherService {
  fetchWeather(latitude?: number, longitude?: number): Promise<WeatherData>;
}

export interface LocalizedString {
  en: string;
  te: string;
  hi: string;
}

export const defaultWeatherData: WeatherData = {
  temperature: 36,
  apparentTemperature: 39,
  conditionCode: 0,
  humidity: 48,
  windSpeed: 10,
  rainChance: 5,
  sunrise: "5:48 AM",
  sunset: "6:44 PM",
  aqi: 38,
  uvIndex: 2
};

export class MockWeatherService implements IWeatherService {
  async fetchWeather(_latitude?: number, _longitude?: number): Promise<WeatherData> {
    return { ...defaultWeatherData };
  }
}

export class OpenMeteoWeatherService implements IWeatherService {
  async fetchWeather(latitude = 15.68401, longitude = 78.174366): Promise<WeatherData> {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&hourly=precipitation_probability&daily=sunrise,sunset,uv_index_max&timezone=auto&forecast_days=1`;
    const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi`;

    // Fetch both endpoints concurrently
    const [weatherRes, aqiRes] = await Promise.all([
      fetch(weatherUrl),
      fetch(aqiUrl)
    ]);

    if (!weatherRes.ok) {
      throw new Error(`Weather API failed with status ${weatherRes.status}`);
    }
    if (!aqiRes.ok) {
      throw new Error(`Air Quality API failed with status ${aqiRes.status}`);
    }

    const weatherData = await weatherRes.json();
    const aqiData = await aqiRes.json();

    const current = weatherData.current;
    const daily = weatherData.daily;
    const hourly = weatherData.hourly;

    if (!current || !daily) {
      throw new Error("Invalid response format from Weather API");
    }

    // Find precipitation probability for the current hour
    let rainChance = 0;
    if (hourly && hourly.time && hourly.precipitation_probability) {
      const currentHourStr = current.time.slice(0, 13) + ":00";
      const index = hourly.time.indexOf(currentHourStr);
      if (index !== -1) {
        rainChance = hourly.precipitation_probability[index];
      } else {
        rainChance = hourly.precipitation_probability[0] || 0;
      }
    }

    // Parse values
    const temperature = Math.round(current.temperature_2m ?? 36);
    const apparentTemperature = Math.round(current.apparent_temperature ?? 39);
    const conditionCode = current.weather_code ?? 0;
    const humidity = Math.round(current.relative_humidity_2m ?? 48);
    const windSpeed = Math.round(current.wind_speed_10m ?? 10);
    const aqi = Math.round(aqiData.current?.us_aqi ?? 38);
    const uvIndex = Math.round(daily.uv_index_max?.[0] ?? 2);

    const sunrise = formatTimeFromISO(daily.sunrise?.[0] ?? "2026-06-13T05:48");
    const sunset = formatTimeFromISO(daily.sunset?.[0] ?? "2026-06-13T18:44");

    return {
      temperature,
      apparentTemperature,
      conditionCode,
      humidity,
      windSpeed,
      rainChance,
      sunrise,
      sunset,
      aqi,
      uvIndex
    };
  }
}

// Coordinator with automatic fallback
export class WeatherService implements IWeatherService {
  private primaryService = new OpenMeteoWeatherService();
  private fallbackService = new MockWeatherService();

  async fetchWeather(latitude = 15.68401, longitude = 78.174366): Promise<WeatherData> {
    try {
      return await this.primaryService.fetchWeather(latitude, longitude);
    } catch (error) {
      console.warn("Primary weather API fetch failed. Falling back to default mock data.", error);
      return await this.fallbackService.fetchWeather(latitude, longitude);
    }
  }
}

// Localized helper mappers
export function getConditionTranslations(code: number): LocalizedString {
  // WMO weather codes mapping
  if (code === 0) {
    return { en: "Clear Sky", te: "నిర్మలమైన ఆకాశం", hi: "साफ आसमान" };
  }
  if (code === 1 || code === 2 || code === 3) {
    return { en: "Partly Cloudy", te: "పాక్షికంగా మేఘావృతం", hi: "आंशिक रूप से बादल" };
  }
  if (code === 45 || code === 48) {
    return { en: "Foggy", te: "పొగమంచు", hi: "कोहरा" };
  }
  if (code === 51 || code === 53 || code === 55) {
    return { en: "Light Drizzle", te: "చినుకులు", hi: "हल्की बूंदाबांदी" };
  }
  if (code === 56 || code === 57 || code === 66 || code === 67) {
    return { en: "Freezing Rain", te: "శీతల వర్షం", hi: "जमी हुई बारिश" };
  }
  if (code === 61 || code === 63 || code === 65) {
    return { en: "Rainy", te: "వర్షం", hi: "बारिश" };
  }
  if (code === 71 || code === 73 || code === 75 || code === 77 || code === 85 || code === 86) {
    return { en: "Snowy", te: "మంచు కురుస్తోంది", hi: "बर्फबारी" };
  }
  if (code === 80 || code === 81 || code === 82) {
    return { en: "Rain Showers", te: "వాన జల్లులు", hi: "बौछारें" };
  }
  if (code === 95 || code === 96 || code === 99) {
    return { en: "Thunderstorm", te: "ఉరుములతో కూడిన వర్షం", hi: "आंधी-तूफान" };
  }
  return { en: "Clear, Sun Shining", te: "ఎండగా ఉంది", hi: "मौसम साफ है" };
}

export function getAQIStatus(aqi: number): LocalizedString {
  if (aqi <= 50) {
    return { en: "Good", te: "మంచిది", hi: "अच्छा" };
  }
  if (aqi <= 100) {
    return { en: "Moderate", te: "మధ్యస్థం", hi: "मध्यम" };
  }
  if (aqi <= 150) {
    return { en: "Sensitive Groups", te: "సున్నితమైనది", hi: "संवेदनशील" };
  }
  if (aqi <= 200) {
    return { en: "Unhealthy", te: "అనారోగ్యకరం", hi: "अस्वास्थ्यकर" };
  }
  return { en: "Hazardous", te: "ప్రమాదకరం", hi: "खतरनाक" };
}

export function getUVStatus(uv: number): LocalizedString {
  if (uv <= 2) {
    return { en: "Low", te: "తక్కువ", hi: "कम" };
  }
  if (uv <= 5) {
    return { en: "Moderate", te: "మధ్యస్థం", hi: "मध्यम" };
  }
  if (uv <= 7) {
    return { en: "High", te: "ఎక్కువ", hi: "उच्च" };
  }
  if (uv <= 10) {
    return { en: "Very High", te: "చాలా ఎక్కువ", hi: "बहुत उच्च" };
  }
  return { en: "Extreme", te: "తీవ్రమైనది", hi: "अत्यधिक" };
}

export function formatTimeFromISO(isoStr: string): string {
  if (!isoStr) return '';
  const parts = isoStr.split('T');
  const timePart = parts[1] || parts[0];
  if (!timePart) return '';

  const timeOnly = timePart.substring(0, 5); // HH:MM
  const [hourStr, minStr] = timeOnly.split(':');
  if (!hourStr || !minStr) return isoStr;

  const hour = parseInt(hourStr, 10);
  if (isNaN(hour)) return isoStr;

  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minStr} ${ampm}`;
}
