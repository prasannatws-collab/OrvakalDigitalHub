import { Phone } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { govtOfficers } from '../data/directoryData';
import type { GovtOfficer } from '../../../types';

interface GovtOfficersListProps {
  searchQuery: string;
  onOfficerSelect: (officer: GovtOfficer) => void;
}

export const GovtOfficersList = ({ searchQuery, onOfficerSelect }: GovtOfficersListProps) => {
  const { t, getTxt } = useLanguage();

  const filteredOfficers = govtOfficers.filter(off => {
    const query = searchQuery.toLowerCase();
    return (
      getTxt(off.name).toLowerCase().includes(query) ||
      getTxt(off.designation).toLowerCase().includes(query) ||
      getTxt(off.department).toLowerCase().includes(query)
    );
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {filteredOfficers.map(officer => (
        <div key={officer.id} className="card" style={{ padding: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>{getTxt(officer.name)}</h4>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
                {getTxt(officer.designation)}
              </span>
              <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>
                {getTxt(officer.department)}
              </div>
            </div>
            <span className="badge badge-info">{t.verified}</span>
          </div>
          <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.7rem' }}>
            <div className="info-row"><Phone size={12} className="info-icon" /> <span>{officer.phone}</span></div>
            <div className="info-row"><span>Permissions managed:</span></div>
            <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {officer.permissions.map((p, idx) => <li key={idx}>{getTxt(p)}</li>)}
            </ul>
          </div>
          <div className="action-bar">
            <a href={`tel:${officer.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call Now</a>
            <button className="btn btn-secondary" onClick={() => onOfficerSelect(officer)}>{t.viewDetails}</button>
          </div>
        </div>
      ))}
    </div>
  );
};
