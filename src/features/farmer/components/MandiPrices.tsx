import { useState } from 'react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { mandiRates, vegMandiRates } from '../data/farmerData';

export const MandiPrices = () => {
  const { t, getTxt } = useLanguage();
  const [activeMandiTab, setActiveMandiTab] = useState<'crops' | 'veg'>('crops');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div className="transit-toggle-container" style={{ marginBottom: '4px' }}>
        <button className={`transit-toggle-btn ${activeMandiTab === 'crops' ? 'active' : ''}`} onClick={() => setActiveMandiTab('crops')}>
          🌾 Crops (Quintals)
        </button>
        <button className={`transit-toggle-btn ${activeMandiTab === 'veg' ? 'active' : ''}`} onClick={() => setActiveMandiTab('veg')}>
          🍅 Vegetables (kg)
        </button>
      </div>

      {activeMandiTab === 'crops' ? (
        <div className="card" style={{ padding: '14px' }}>
          <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))' }}>{t.mandiRates}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
            {mandiRates.map(m => (
              <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'hsl(var(--muted) / 0.4)', borderRadius: '8px', fontSize: '0.72rem' }}>
                <div>
                  <strong>{getTxt(m.crop)}</strong>
                  <div style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))' }}>Kurnool Yard Daily Rate</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 800 }}>{getTxt(m.priceRange)}</div>
                  <span className={`badge ${m.trend === 'up' ? 'badge-success' : m.trend === 'down' ? 'badge-danger' : 'badge-info'}`} style={{ fontSize: '0.55rem', padding: '1px 4px', display: 'inline-block', marginTop: '2px' }}>
                    {m.trend === 'up' ? t.mandiTrendUp : m.trend === 'down' ? t.mandiTrendDown : t.mandiTrendFlat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="card" style={{ padding: '14px' }}>
          <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))' }}>{t.vegMandi}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
            {vegMandiRates.map(v => (
              <div key={v.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'hsl(var(--muted) / 0.4)', borderRadius: '8px', fontSize: '0.72rem' }}>
                <div>
                  <strong>{getTxt(v.item)}</strong>
                  <div style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))' }}>Retail Market Price</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 800 }}>{getTxt(v.priceRange)}</div>
                  <span className={`badge ${v.trend === 'up' ? 'badge-success' : v.trend === 'down' ? 'badge-danger' : 'badge-info'}`} style={{ fontSize: '0.55rem', padding: '1px 4px', display: 'inline-block', marginTop: '2px' }}>
                    {v.trend === 'up' ? t.mandiTrendUp : v.trend === 'down' ? t.mandiTrendDown : t.mandiTrendFlat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
