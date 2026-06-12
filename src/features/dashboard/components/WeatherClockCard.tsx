import { CloudSun, Clock } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { useWeatherClock } from '../hooks/useWeatherClock';

export const WeatherClockCard = () => {
  const { t, lang } = useLanguage();
  const { timeString, getGreetingKey } = useWeatherClock();

  return (
    <div className="card" style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, hsl(var(--card)) 100%)', border: '1px solid var(--glass-border)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {/* Left: Weather Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.62rem', fontWeight: 800, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t.weather}
            </span>
            <CloudSun size={14} style={{ color: 'hsl(var(--secondary))' }} />
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.1, marginTop: '4px' }}>{t.weatherTemp.split(' ')[0]}</span>
          <span style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', fontWeight: 600 }}>{t.weatherCondition}</span>
          <span style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>{t.weatherHumidity}</span>
        </div>

        {/* Right: Digital Clock & Greeting */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right', gap: '4px' }}>
          <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'hsl(var(--foreground))', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '4px', lineHeight: 1 }}>
            <Clock size={18} style={{ color: 'hsl(var(--primary))' }} /> {timeString}
          </span>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'hsl(var(--primary))', marginTop: '4px', padding: '2px 8px', backgroundColor: 'hsl(var(--primary) / 0.1)', borderRadius: '12px' }}>
            {lang === 'en' ? "Local Time" : lang === 'te' ? "స్థానిక సమయం" : "स्थानीय समय"}
          </span>
          <p style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', fontWeight: 500, maxWidth: '140px', margin: 0, marginTop: '2px', lineHeight: 1.2 }}>
            {t[getGreetingKey()] || t.greetingMorning}
          </p>
        </div>
      </div>
    </div>
  );
};
