import { useLanguage } from '../../../core/context/LanguageContext';
import { cropHolidays } from '../data/farmerData';

export const CropHolidays = () => {
  const { t, getTxt } = useLanguage();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className="card" style={{ borderLeft: '4px solid #ef4444' }}>
        <h4 style={{ fontSize: '0.8rem' }}>⚠️ {t.cropHoliday}</h4>
        <p style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
          Official notices regarding seasonal water-stress zones and crop restrictions.
        </p>
      </div>
      {cropHolidays.map(ch => (
        <div key={ch.id} className="card" style={{ padding: '12px' }}>
          <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))' }}>{getTxt(ch.zone)}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.7rem', marginTop: '6px', borderTop: '1px dashed var(--glass-border)', paddingTop: '6px' }}>
            <div><strong>Advisory:</strong> {getTxt(ch.advisory)}</div>
            <div><strong>Water Status:</strong> <span style={{ color: '#dc2626', fontWeight: 700 }}>{getTxt(ch.waterStatus)}</span></div>
            <div style={{ borderTop: '1px solid hsl(var(--border) / 0.4)', marginTop: '4px', paddingTop: '4px', color: 'hsl(var(--foreground))' }}>
              <strong>Official Recommendation:</strong>
              <p style={{ margin: '2px 0 0 0', color: 'hsl(var(--muted-foreground))', lineHeight: 1.3 }}>{getTxt(ch.recommendation)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
