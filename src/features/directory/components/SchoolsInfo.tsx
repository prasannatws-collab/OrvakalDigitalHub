import { Phone } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { schools } from '../data/directoryData';
import type { SchoolTeacher } from '../../../types';

interface SchoolsInfoProps {
  searchQuery: string;
  onSchoolSelect: (school: SchoolTeacher) => void;
}

export const SchoolsInfo = ({ searchQuery, onSchoolSelect }: SchoolsInfoProps) => {
  const { t, getTxt } = useLanguage();

  const filteredSchools = schools
    .filter(sch => sch.type === 'school')
    .filter(sch => {
      const query = searchQuery.toLowerCase();
      return (
        getTxt(sch.name).toLowerCase().includes(query) ||
        getTxt(sch.schoolName).toLowerCase().includes(query)
      );
    });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {filteredSchools.map(sch => (
        <div key={sch.id} className="card" style={{ borderLeft: '4px solid hsl(var(--secondary))', padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="badge badge-info" style={{ fontSize: '0.6rem' }}>
              School
            </span>
            <a href={`tel:${sch.phone}`} style={{ color: 'hsl(var(--primary))' }}><Phone size={14} /></a>
          </div>
          <h4 style={{ fontSize: '0.8rem', marginTop: '4px' }}>{getTxt(sch.name)}</h4>
          <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>{getTxt(sch.schoolName)}</p>
          <p style={{ fontSize: '0.7rem', fontWeight: 600, marginTop: '4px' }}>{getTxt(sch.subject)}</p>
          <div className="action-bar" style={{ marginTop: '8px', padding: 0, justifyContent: 'flex-start', gap: '8px' }}>
            <a href={`tel:${sch.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', fontSize: '0.65rem', padding: '4px 8px' }}><Phone size={10} /> Call</a>
            <button className="btn btn-secondary" style={{ fontSize: '0.65rem', padding: '4px 8px' }} onClick={() => onSchoolSelect(sch)}>{t.viewDetails}</button>
          </div>
        </div>
      ))}
    </div>
  );
};
