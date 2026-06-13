import { useState } from 'react';
import { Phone, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { govtOffices } from '../../../data/govtOfficesData';
import { govtOfficers } from '../data/directoryData';

interface GovtOfficersListProps {
  searchQuery: string;
}

export const GovtOfficersList = ({ searchQuery }: GovtOfficersListProps) => {
  const { lang, getTxt, t } = useLanguage();
  const [activeOfficeId, setActiveOfficeId] = useState<string | null>(null);

  // Filter offices if not inside detail view
  const filteredOffices = govtOffices.filter(office => {
    const query = searchQuery.toLowerCase();
    return (
      getTxt(office.name).toLowerCase().includes(query) ||
      getTxt(office.location).toLowerCase().includes(query)
    );
  });

  if (activeOfficeId !== null) {
    const office = govtOffices.find(o => o.id === activeOfficeId);
    if (!office) return null;

    // Filter officers related to this office
    const officers = govtOfficers.filter(off => off.officeId === office.id);

    return (
      <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Back Button */}
        <button
          className="btn btn-secondary"
          style={{ alignSelf: 'flex-start', padding: '6px 12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}
          onClick={() => setActiveOfficeId(null)}
        >
          ⬅️ {lang === 'en' ? "Back to Offices List" : lang === 'te' ? "కార్యాలయాల జాబితాకు తిరిగి" : "कार्यालयों की सूची पर वापस जाएं"}
        </button>

        {/* Office Details Card */}
        <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))', padding: '16px' }}>
          <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))', margin: 0 }}>
            {getTxt(office.name)}
          </h3>
          <div style={{ borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem' }}>
            <div className="info-row"><MapPin size={12} className="info-icon" /> <span>{getTxt(office.location)}</span></div>
            <div className="info-row"><Clock size={12} className="info-icon" /> <span>{getTxt(office.timings)}</span></div>
            <div className="info-row"><Phone size={12} className="info-icon" /> <span>{office.phone}</span></div>
          </div>
          <div className="action-bar" style={{ marginTop: '10px' }}>
            <a href={`tel:${office.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={12} /> Call Office</a>
          </div>
        </div>

        {/* Associated Officers Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          👤 {lang === 'en' ? "Associated Officers" : lang === 'te' ? "సంబంధిత అధికారులు" : "संबद्ध अधिकारी"}
        </h4>
        {officers.length === 0 ? (
          <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', fontStyle: 'italic' }}>
            {lang === 'en' ? "No officers listed for this office." : lang === 'te' ? "ఈ కార్యాలయానికి ఎవరూ అధికారులు అందుబాటులో లేరు." : "इस कार्यालय के लिए कोई अधिकारी सूचीबद्ध नहीं है।"}
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {officers.map(officer => (
              <div key={officer.id} className="card" style={{ padding: '14px', backgroundColor: 'hsl(var(--muted) / 0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h5 style={{ fontSize: '0.82rem', color: 'hsl(var(--primary))', margin: 0 }}>{getTxt(officer.name)}</h5>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
                      {getTxt(officer.designation)}
                    </span>
                  </div>
                  <span className="badge badge-success" style={{ fontSize: '0.55rem' }}>{t.verified}</span>
                </div>
                <div style={{ borderTop: '1px solid hsl(var(--border) / 0.4)', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.7rem', marginTop: '6px' }}>
                  <div><strong>Email:</strong> {officer.email}</div>
                  <div className="info-row"><Phone size={12} className="info-icon" /> <span>{officer.phone}</span></div>
                  
                  {officer.servicesDescription && (
                    <div style={{ marginTop: '4px' }}>
                      <strong>Role/Duties:</strong>
                      <p style={{ margin: '2px 0 0 0', color: 'hsl(var(--muted-foreground))', fontSize: '0.68rem', lineHeight: 1.3 }}>
                        {getTxt(officer.servicesDescription)}
                      </p>
                    </div>
                  )}

                  <div style={{ marginTop: '4px' }}>
                    <strong>Permissions managed:</strong>
                    <ul style={{ paddingLeft: '14px', marginTop: '2px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {officer.permissions.map((p, idx) => <li key={idx}>{getTxt(p)}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="action-bar" style={{ marginTop: '8px' }}>
                  <a href={`tel:${officer.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', fontSize: '0.65rem', padding: '4px 8px' }}><Phone size={10} /> Call Officer</a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Services & Applications Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          📝 {lang === 'en' ? "Services & Applications" : lang === 'te' ? "లభించే సేవలు & దరఖాస్తులు" : "सेवाएं और आवेदन"}
        </h4>
        <div className="card" style={{ padding: '14px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {office.services.map((service, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '6px 8px', backgroundColor: 'hsl(var(--muted) / 0.3)', borderRadius: '6px' }}>
                <CheckCircle size={14} style={{ color: 'hsl(var(--primary))', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))', fontWeight: 600 }}>{getTxt(service)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Offices List View
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {filteredOffices.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', padding: '20px 0' }}>
          No offices found matching search query.
        </p>
      ) : (
        filteredOffices.map(office => (
          <div 
            key={office.id} 
            className="govt-menu-card" 
            onClick={() => setActiveOfficeId(office.id)}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              width: '100%', 
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flex: 1 }}>
              <div className="govt-menu-icon" style={{ fontSize: '1.4rem' }}>🏛️</div>
              <div className="govt-menu-info">
                <span className="govt-menu-title" style={{ fontSize: '0.94rem', fontWeight: 750 }}>
                  {getTxt(office.name)}
                </span>
                <span className="govt-menu-desc" style={{ fontSize: '0.72rem', marginTop: '2px' }}>
                  📍 {getTxt(office.location)}
                </span>
              </div>
            </div>
            <span className="badge badge-info" style={{ flexShrink: 0, marginLeft: '8px' }}>{t.verified}</span>
          </div>
        ))
      )}
    </div>
  );
};
