import { useState } from 'react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { flights, buses, trains } from '../data/transitData';

export const TransitDesk = () => {
  const { t, getTxt, lang } = useLanguage();
  const [transitTab, setTransitTab] = useState<'flights' | 'buses' | 'trains'>('flights');

  return (
    <div className="card transport-card">
      <h3 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))', display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
        🚌 {t.transitTransport}
      </h3>
      
      {/* 3-way toggle switcher */}
      <div className="transit-toggle-container">
        <button className={`transit-toggle-btn ${transitTab === 'flights' ? 'active' : ''}`} onClick={() => setTransitTab('flights')}>
          ✈️ {t.flightsTab}
        </button>
        <button className={`transit-toggle-btn ${transitTab === 'buses' ? 'active' : ''}`} onClick={() => setTransitTab('buses')}>
          🚌 {t.busesTab}
        </button>
        <button className={`transit-toggle-btn ${transitTab === 'trains' ? 'active' : ''}`} onClick={() => setTransitTab('trains')}>
          🚂 {t.trainsTab}
        </button>
      </div>

      <div className="transit-info-list">
        {/* Flight sub-view */}
        {transitTab === 'flights' && flights.map(flight => (
          <div key={flight.id} className="transit-item-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800 }}>{flight.flightNo}</span>
                <span style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>({getTxt(flight.airline)})</span>
              </div>
              <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
                {getTxt(flight.from)} ➔ {getTxt(flight.to)}
              </div>
              <div style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))' }}>
                {lang === 'en' ? 'Days:' : lang === 'te' ? 'రోజులు:' : 'दिन:'} {getTxt(flight.days)}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{flight.departure}</div>
              <div style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))' }}>Departs</div>
              <span className={`badge ${flight.status.en.toLowerCase() === 'on time' ? 'badge-success' : 'badge-danger'}`} style={{ fontSize: '0.58rem', padding: '1px 6px', marginTop: '4px', display: 'inline-block' }}>
                {getTxt(flight.status)}
              </span>
            </div>
          </div>
        ))}

        {/* Bus sub-view */}
        {transitTab === 'buses' && buses.map(bus => (
          <div key={bus.id} className="transit-item-card">
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800 }}>{bus.busNo}</div>
              <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
                {getTxt(bus.route)}
              </div>
              <div style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))' }}>
                {getTxt(bus.type)}
              </div>
            </div>
            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{getTxt(bus.timing)}</div>
              <div style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))' }}>Frequency</div>
            </div>
          </div>
        ))}

        {/* Train sub-view */}
        {transitTab === 'trains' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', fontStyle: 'italic', borderBottom: '1px dashed var(--glass-border)', paddingBottom: '4px' }}>
              {t.nearestStation}
            </div>
            {trains.map(train => (
              <div key={train.id} className="transit-item-card">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 800 }}>{train.trainNo}</span>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'hsl(var(--foreground))' }}>{getTxt(train.name)}</span>
                  </div>
                  <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
                    {getTxt(train.route)}
                  </div>
                  <div style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))' }}>
                    {t.daysRun}: {getTxt(train.days)}
                  </div>
                </div>
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{getTxt(train.timing)}</div>
                  <div style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))' }}>Schedule</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
