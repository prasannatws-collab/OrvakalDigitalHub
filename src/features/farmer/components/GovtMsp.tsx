import { useLanguage } from '../../../core/context/LanguageContext';
import { govtMspRates } from '../data/farmerData';

export const GovtMsp = () => {
  const { t, getTxt } = useLanguage();

  return (
    <div className="card" style={{ padding: '14px' }}>
      <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))' }}>{t.govtMsp}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
        {govtMspRates.map(m => (
          <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'hsl(var(--muted) / 0.4)', borderRadius: '8px', fontSize: '0.72rem' }}>
            <div>
              <strong>{getTxt(m.crop)}</strong>
              <div style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))' }}>{getTxt(m.season)}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 800, color: 'hsl(var(--primary))' }}>{getTxt(m.mspPrice)}</div>
              <span className="badge badge-success" style={{ fontSize: '0.55rem', padding: '1px 4px', display: 'inline-block', marginTop: '2px' }}>
                Assured Price
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
