import { Sun } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { powerSchedules } from '../data/farmerData';

export const FeederTimings = () => {
  const { t, getTxt } = useLanguage();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className="card" style={{ borderLeft: '4px solid #f59e0b' }}>
        <h4 style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Sun size={14} color="#f59e0b" /> {t.feederTimings}
        </h4>
        <p style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
          Daily 3-Phase power schedules for agricultural irrigation pumps.
        </p>
      </div>
      {powerSchedules.map(sch => (
        <div key={sch.id} className="card" style={{ padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800 }}>{getTxt(sch.feederName)}</span>
            <span className={`badge ${getTxt(sch.status) === 'Active' || getTxt(sch.status) === 'చాలా బాగుంది' ? 'badge-success' : 'badge-warning'}`} style={{ fontSize: '0.6rem' }}>
              {getTxt(sch.status)}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '0.68rem', marginTop: '6px', borderTop: '1px dashed var(--glass-border)', paddingTop: '6px' }}>
            <div><strong>{t.dayFeeder}:</strong> {getTxt(sch.dayTimings)}</div>
            <div><strong>{t.nightFeeder}:</strong> {getTxt(sch.nightTimings)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
