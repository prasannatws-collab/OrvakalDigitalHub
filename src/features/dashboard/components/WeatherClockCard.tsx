import { CloudSun, Clock, Droplets, Wind, Shield, Activity } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { useWeatherClock } from '../hooks/useWeatherClock';
import { getConditionTranslations, getAQIStatus, getUVStatus } from '../services/weatherService';

export const WeatherClockCard = () => {
  const { t, lang } = useLanguage();
  const { timeString, getGreetingKey, weatherData, weatherLoading } = useWeatherClock();

  const localizedCondition = getConditionTranslations(weatherData.conditionCode)[lang];
  const localizedAqiStatus = getAQIStatus(weatherData.aqi)[lang];
  const localizedUvStatus = getUVStatus(weatherData.uvIndex)[lang];

  const humidityText = lang === 'en' ? `Humidity: ${weatherData.humidity}%` 
                     : lang === 'te' ? `తేమ: ${weatherData.humidity}%` 
                     : `आर्द्रता: ${weatherData.humidity}%`;
                     
  const windText = lang === 'en' ? `Wind: ${weatherData.windSpeed} km/h` 
                 : lang === 'te' ? `గాలి: ${weatherData.windSpeed} కి.మీ/గంట` 
                 : `हवा: ${weatherData.windSpeed} किमी/घंटा`;

  const aqiText = `AQI: ${weatherData.aqi} (${localizedAqiStatus})`;
  const uvText = `${lang === 'en' ? 'UV Index' : lang === 'te' ? 'UV ఇండెక్స్' : 'यूवी इंडेक्स'}: ${weatherData.uvIndex} (${localizedUvStatus})`;

  return (
    <div className="card glass-panel-premium" style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '14px', border: '1px solid var(--glass-border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', gap: '16px' }}>

        {/* Left: Weather Details */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              {t.weather}
              {weatherLoading && (
                <span className="pulse-dot-green" style={{ width: '6px', height: '6px', display: 'inline-block' }} title="Updating weather..." />
              )}
            </span>
            <CloudSun size={15} style={{ color: 'hsl(var(--secondary))' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px', flexWrap: 'wrap', gap: '16px' }}>
            {/* Left: Temp and Condition */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1, color: 'hsl(var(--foreground))', fontFamily: 'var(--font-heading)' }}>
                  {weatherData.temperature}°C
                </span>
                <span style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', fontWeight: 600 }}>
                  (RealFeel {weatherData.apparentTemperature}°C)
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))', fontWeight: 700 }}>
                {localizedCondition}
              </span>
            </div>

            {/* Middle: Sunrise, Sunset, Rain Chance */}
            <div style={{ display: 'flex', gap: '16px', borderLeft: '1.5px dashed hsl(var(--border) / 0.5)', paddingLeft: '16px', flex: 1, justifyContent: 'space-around', minWidth: '180px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '0.58rem', color: 'hsl(var(--muted-foreground))', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t.sunrise}
                </span>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'hsl(var(--foreground))' }}>
                  {weatherData.sunrise}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '0.58rem', color: 'hsl(var(--muted-foreground))', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t.sunset}
                </span>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'hsl(var(--foreground))' }}>
                  {weatherData.sunset}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '0.58rem', color: 'hsl(var(--muted-foreground))', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t.rainChance}
                </span>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'hsl(var(--foreground))' }}>
                  {weatherData.rainChance}%
                </span>
              </div>
            </div>
          </div>

          {/* Expanded Weather Details Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px', borderTop: '1px dashed hsl(var(--border) / 0.4)', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>
              <Droplets size={12} style={{ color: '#0ea5e9' }} />
              <span>{humidityText}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>
              <Wind size={12} style={{ color: '#10b981' }} />
              <span>{windText}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>
              <Activity size={12} style={{ color: '#eab308' }} />
              <span>{aqiText}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>
              <Shield size={12} style={{ color: '#a855f7' }} />
              <span>{uvText}</span>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div style={{ width: '1px', backgroundColor: 'hsl(var(--border) / 0.5)', margin: '0 4px' }}></div>

        {/* Right: Digital Clock & Greeting */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', textAlign: 'right', minWidth: '135px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.65rem', fontWeight: 800, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              <span>Time</span>
              <Clock size={12} style={{ color: 'hsl(var(--primary))' }} />
            </div>
            <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'hsl(var(--foreground))', fontFamily: 'var(--font-heading)', lineHeight: 1, marginTop: '4px', letterSpacing: '-0.02em' }}>
              {timeString}
            </span>
            <span style={{ fontSize: '0.58rem', fontWeight: 800, color: 'hsl(var(--primary))', padding: '2px 8px', backgroundColor: 'hsl(var(--primary) / 0.1)', borderRadius: '12px', border: '1px solid hsl(var(--primary) / 0.15)', marginTop: '2px' }}>
              {lang === 'en' ? "Local Time" : lang === 'te' ? "స్థానిక సమయం" : "స్థानीय समय"}
            </span>
          </div>

          <p style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', fontWeight: 500, margin: 0, marginTop: '8px', lineHeight: 1.3, maxWidth: '130px' }}>
            {t[getGreetingKey()] || t.greetingMorning}
          </p>
        </div>

      </div>
    </div>
  );
};
