import { Phone } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { agriContacts } from '../data/farmerData';

export const AgriSupportContacts = () => {
  const { t, getTxt } = useLanguage();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
        <h4 style={{ fontSize: '0.8rem' }}>🌾 {t.agriSupport}</h4>
        <p style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
          Get in touch with localized Agriculture Extension Officers, veterinary staff, and plant doctors.
        </p>
      </div>
      {agriContacts.map(cnt => (
        <div key={cnt.id} className="card" style={{ padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ fontSize: '0.82rem', color: 'hsl(var(--foreground))', fontWeight: 800 }}>
                {getTxt(cnt.name)}
              </h4>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--primary))', marginTop: '2px', display: 'inline-block' }}>
                {getTxt(cnt.designation)}
              </span>
            </div>
            <span className="badge badge-info" style={{ fontSize: '0.6rem' }}>{t.verified}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', borderTop: '1px dashed var(--glass-border)', paddingTop: '8px', fontSize: '0.7rem' }}>
            <div>
              <strong>Location: </strong> {getTxt(cnt.location)}
            </div>
            <a href={`tel:${cnt.phone}`} style={{ textDecoration: 'none', backgroundColor: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))', padding: '4px 8px', borderRadius: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Phone size={10} /> Call Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
