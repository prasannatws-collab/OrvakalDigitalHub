import { Phone, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { banksAndAtms } from '../data/directoryData';

export const BanksAtms = () => {
  const { t, getTxt } = useLanguage();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {banksAndAtms.map(bank => (
        <div key={bank.id} className="card" style={{ padding: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>{getTxt(bank.name)}</h4>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
                {getTxt(bank.branch)} | IFSC: {bank.ifsc}
              </span>
            </div>
            <span className="badge badge-info">{t.verified}</span>
          </div>
          <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.7rem' }}>
            <div className="info-row"><Clock size={12} className="info-icon" /> <span>{getTxt(bank.timing)}</span></div>
            <div className="info-row"><MapPin size={12} className="info-icon" /> <span>{getTxt(bank.location)}</span></div>
            <div className="info-row"><Phone size={12} className="info-icon" /> <span>{bank.phone}</span></div>
            <div style={{ borderTop: '1px dashed hsl(var(--border))', paddingTop: '6px', marginTop: '4px' }}>
              <span className={`badge ${bank.hasAtm ? 'badge-success' : 'badge-danger'}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                ATM Status: {getTxt(bank.atmStatus)}
              </span>
            </div>
          </div>
          <div className="action-bar">
            <a href={`tel:${bank.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call Branch</a>
          </div>
        </div>
      ))}
    </div>
  );
};
