import { CloudSun, Clock, Droplets, Wind, Shield, Activity } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { useWeatherClock } from '../hooks/useWeatherClock';

export const WeatherClockCard = () => {
  const { t, lang } = useLanguage();
  const { timeString, getGreetingKey } = useWeatherClock();

  // Extract raw temperature (e.g. "36°C")
  const tempOnly = t.weatherTemp.split(' ')[0] || "36°C";

  return (
    <div className="card glass-panel-premium" style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '14px', border: '1px solid var(--glass-border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', gap: '16px' }}>
        
        {/* Left: Weather Details */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {t.weather}
            </span>
            <CloudSun size={15} style={{ color: 'hsl(var(--secondary))' }} />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '6px' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1, color: 'hsl(var(--foreground))', fontFamily: 'var(--font-heading)' }}>
              {tempOnly}
            </span>
            <span style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', fontWeight: 600 }}>
              (RealFeel 39°C)
            </span>
          </div>

          <span style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))', fontWeight: 700 }}>
            {t.weatherCondition}
          </span>

          {/* Expanded Weather Details Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px', borderTop: '1px dashed hsl(var(--border) / 0.4)', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>
              <Droplets size={12} style={{ color: '#0ea5e9' }} />
              <span>Humidity: 48%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>
              <Wind size={12} style={{ color: '#10b981' }} />
              <span>Wind: 10 km/h</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>
              <Activity size={12} style={{ color: '#eab308' }} />
              <span>AQI: 38 (Good)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>
              <Shield size={12} style={{ color: '#a855f7' }} />
              <span>UV Index: 2 (Low)</span>
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
              {lang === 'en' ? "Local Time" : lang === 'te' ? "స్థానిక సమయం" : "स्थानीय समय"}
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
