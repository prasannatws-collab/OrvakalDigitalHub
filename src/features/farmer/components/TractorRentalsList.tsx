import { Phone } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { tractorRentals } from '../data/farmerData';

export const TractorRentalsList = () => {
  const { t, getTxt } = useLanguage();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
        <h4 style={{ fontSize: '0.8rem' }}>🚜 {t.tractorSharing}</h4>
        <p style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
          Rent tractors, harvesters, and tilling implements directly from fellow farmers.
        </p>
      </div>
      {tractorRentals.map(trc => (
        <div key={trc.id} className="card" style={{ padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ fontSize: '0.82rem', color: 'hsl(var(--foreground))', fontWeight: 800 }}>
                {getTxt(trc.tractorModel)}
              </h4>
              <span style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px', display: 'inline-block' }}>
                Owner: {getTxt(trc.ownerName)}
              </span>
            </div>
            <span className={`badge ${trc.available ? 'badge-success' : 'badge-danger'}`} style={{ fontSize: '0.6rem' }}>
              {trc.available ? t.available : t.busy}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', borderTop: '1px dashed var(--glass-border)', paddingTop: '8px', fontSize: '0.7rem' }}>
            <div>
              <strong>Rate: </strong> <span style={{ color: 'hsl(var(--secondary))', fontWeight: 800 }}>{getTxt(trc.rate)}</span>
            </div>
            <a href={`tel:${trc.phone}`} style={{ textDecoration: 'none', backgroundColor: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))', padding: '4px 8px', borderRadius: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Phone size={10} /> Call Owner
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
