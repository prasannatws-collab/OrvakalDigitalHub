import { Phone } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { committees } from '../data/directoryData';

export const CommitteesList = () => {
  const { getTxt, lang } = useLanguage();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h3 style={{ fontSize: '0.9rem', color: 'hsl(var(--primary))', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
        👥 {lang === 'en' ? "Committees & Clubs" : lang === 'te' ? "కమిటీలు & క్లబ్‌లు" : "समितियां और क्लब"}
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {committees.map((com) => (
          <div key={com.id} className="card" style={{ padding: '14px', borderLeft: '4px solid hsl(var(--primary))' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h4 style={{ fontSize: '0.82rem', color: 'hsl(var(--foreground))', fontWeight: 800, margin: 0 }}>
                {getTxt(com.name)}
              </h4>
              <span className="badge badge-info" style={{ fontSize: '0.62rem' }}>
                {com.membersCount} {lang === 'en' ? "Members" : lang === 'te' ? "సభ్యులు" : "सदस्य"}
              </span>
            </div>
            
            <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginTop: '6px', marginBottom: '8px', lineHeight: 1.3 }}>
              {getTxt(com.purpose)}
            </p>
            
            <div style={{ borderTop: '1px solid hsl(var(--border) / 0.6)', paddingTop: '8px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px', fontSize: '0.68rem' }}>
              <div>
                <strong>👤 President:</strong> {getTxt(com.president)}
              </div>
              <div>
                <strong>📅 Meetings:</strong> {getTxt(com.meetings)}
              </div>
              <a href={`tel:${com.phone}`} style={{ textDecoration: 'none', backgroundColor: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))', padding: '4px 8px', borderRadius: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
                <Phone size={10} /> {com.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
