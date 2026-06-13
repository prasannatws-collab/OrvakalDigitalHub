import { useState } from 'react';
import { Phone, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { schools } from '../../../data/schoolsData';

interface SchoolsInfoProps {
  searchQuery?: string;
}

export const SchoolsInfo = ({ searchQuery = '' }: SchoolsInfoProps) => {
  const { lang, getTxt, t } = useLanguage();
  const [activeSchoolId, setActiveSchoolId] = useState<string | null>(null);

  // Filter schools based on search query
  const filteredSchools = schools.filter(sch => {
    const query = searchQuery.toLowerCase();
    return (
      getTxt(sch.name).toLowerCase().includes(query) ||
      getTxt(sch.schoolName).toLowerCase().includes(query) ||
      getTxt(sch.address).toLowerCase().includes(query)
    );
  });

  if (activeSchoolId !== null) {
    const school = schools.find(sch => sch.id === activeSchoolId);
    if (!school) return null;

    return (
      <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Back Button */}
        <button
          className="btn btn-secondary"
          style={{ alignSelf: 'flex-start', padding: '6px 12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}
          onClick={() => setActiveSchoolId(null)}
        >
          ⬅️ {lang === 'en' ? "Back to Schools List" : lang === 'te' ? "పాఠశాలల జాబితాకు తిరిగి" : "स्कूलों की सूची पर वापस जाएं"}
        </button>

        {/* School Details Card */}
        <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))', margin: 0 }}>
                {getTxt(school.name)}
              </h3>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
                {getTxt(school.schoolName)}
              </span>
            </div>
            <span className="badge badge-success" style={{ fontSize: '0.55rem' }}>{t.verified}</span>
          </div>

          <div style={{ borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '10px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem' }}>
            <div><strong>Principal / HM:</strong> {getTxt(school.principal)}</div>
            <div><strong>Established Year:</strong> {school.establishedYear}</div>
            <div><strong>Medium / Grade:</strong> {getTxt(school.subject)}</div>
            <div className="info-row"><MapPin size={12} className="info-icon" /> <span>{getTxt(school.address)}</span></div>
            <div className="info-row"><Clock size={12} className="info-icon" /> <span>{getTxt(school.timings)}</span></div>
            <div className="info-row"><Phone size={12} className="info-icon" /> <span>{school.phone}</span></div>
          </div>

          <div className="action-bar" style={{ marginTop: '10px' }}>
            <a href={`tel:${school.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={12} /> Call School</a>
          </div>
        </div>

        {/* Staff & Teachers Directory Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          👤 {lang === 'en' ? "Teaching Staff Directory" : lang === 'te' ? "ఉపాధ్యాయుల వివరాలు" : "शिक्षण कर्मचारी सूची"}
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {school.staff && school.staff.length > 0 ? (
            school.staff.map((member, idx) => (
              <div key={idx} className="card" style={{ padding: '12px', backgroundColor: 'hsl(var(--muted) / 0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h5 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', margin: 0 }}>{getTxt(member.name)}</h5>
                    <span style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', fontWeight: 600 }}>{getTxt(member.role)}</span>
                  </div>
                  <a href={`tel:${member.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', padding: '4px 8px', fontSize: '0.65rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Phone size={10} /> Call
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', fontStyle: 'italic' }}>
              {lang === 'en' ? "No staff directory listed." : lang === 'te' ? "సిబ్బంది వివరాలు అందుబాటులో లేవు." : "कोई कर्मचारी सूची उपलब्ध नहीं है।"}
            </p>
          )}
        </div>

        {/* Facilities Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          🏫 {lang === 'en' ? "Campus Facilities" : lang === 'te' ? "పాఠశాల వసతులు" : "स्कूल की सुविधाएं"}
        </h4>
        <div className="card" style={{ padding: '14px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {school.facilities.map((facility, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '6px 8px', backgroundColor: 'hsl(var(--muted) / 0.3)', borderRadius: '6px' }}>
                <CheckCircle size={14} style={{ color: 'hsl(var(--primary))', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))', fontWeight: 600 }}>{getTxt(facility)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {filteredSchools.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', padding: '20px 0' }}>
          {lang === 'en' ? "No schools found matching search query." : lang === 'te' ? "శోధనకు సరిపోయే పాఠశాలలు కనుగొనబడలేదు." : "खोज के अनुरूप कोई स्कूल नहीं मिला।"}
        </p>
      ) : (
        filteredSchools.map(sch => (
          <div 
            key={sch.id} 
            className="govt-menu-card" 
            onClick={() => setActiveSchoolId(sch.id)}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              width: '100%', 
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flex: 1 }}>
              <div className="govt-menu-icon" style={{ fontSize: '1.4rem' }}>🏫</div>
              <div className="govt-menu-info">
                <span className="govt-menu-title" style={{ fontSize: '0.94rem', fontWeight: 750 }}>
                  {getTxt(sch.name)}
                </span>
                <span className="govt-menu-desc" style={{ fontSize: '0.72rem', marginTop: '2px' }}>
                  📍 {getTxt(sch.address)} • {getTxt(sch.schoolName)}
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
