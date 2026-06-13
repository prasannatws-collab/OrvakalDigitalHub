import { useState } from 'react';
import { Phone, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { policeStations } from '../../../data/policeData';

interface PoliceStationProps {
  searchQuery?: string;
}

export const PoliceStation = ({ searchQuery = '' }: PoliceStationProps) => {
  const { lang, getTxt, t } = useLanguage();
  const [activePoliceId, setActivePoliceId] = useState<string | null>(null);

  // Filter police stations based on search query
  const filteredPolice = policeStations.filter(station => {
    const query = searchQuery.toLowerCase();
    return (
      getTxt(station.name).toLowerCase().includes(query) ||
      getTxt(station.location).toLowerCase().includes(query) ||
      getTxt(station.district).toLowerCase().includes(query)
    );
  });

  if (activePoliceId !== null) {
    const station = policeStations.find(s => s.id === activePoliceId);
    if (!station) return null;

    return (
      <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Back Button */}
        <button
          className="btn btn-secondary"
          style={{ alignSelf: 'flex-start', padding: '6px 12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}
          onClick={() => setActivePoliceId(null)}
        >
          ⬅️ {lang === 'en' ? "Back to Police List" : lang === 'te' ? "పోలీస్ జాబితాకు తిరిగి" : "पुलिस सूची पर वापस जाएं"}
        </button>

        {/* Police Station Details Card */}
        <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))', margin: 0 }}>
                {getTxt(station.name)}
              </h3>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
                {getTxt(station.district)}
              </span>
            </div>
            <span className="badge badge-success" style={{ fontSize: '0.55rem' }}>{t.verified}</span>
          </div>

          <div style={{ borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '10px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem' }}>
            <div className="info-row"><MapPin size={12} className="info-icon" /> <span>{getTxt(station.location)}</span></div>
            <div className="info-row"><Clock size={12} className="info-icon" /> <span>{getTxt(station.timing)}</span></div>
            <div className="info-row"><Phone size={12} className="info-icon" /> <span>{station.phone} (Office) | {station.siPhone} (SI)</span></div>
          </div>

          <div className="action-bar" style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
            <a href={`tel:${station.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={12} /> Call Station</a>
            <a href={`tel:${station.siPhone}`} className="btn btn-secondary" style={{ textDecoration: 'none' }}><Phone size={12} /> Call SI Directly</a>
          </div>
        </div>

        {/* Officers Directory Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          👤 {lang === 'en' ? "Station Officers Directory" : lang === 'te' ? "పోలీస్ అధికారులు వివరాలు" : "थाना अधिकारी सूची"}
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {station.staff.map((member, idx) => (
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
          ))}
        </div>

        {/* Patrol Beats Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          🚨 {lang === 'en' ? "Active Patrol Beats" : lang === 'te' ? "యాక్టివ్ పెట్రోలింగ్ బీట్స్" : "सक्रिय गश्त कार्यक्रम"}
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {station.patrols.map((patrol, idx) => (
            <div key={idx} className="card" style={{ padding: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <h5 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', margin: 0, fontWeight: 700 }}>
                  {getTxt(patrol.name)}
                </h5>
                <span className="badge badge-info" style={{ fontSize: '0.6rem', padding: '2px 6px' }}>
                  {getTxt(patrol.timing)}
                </span>
              </div>
              <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', margin: 0, lineHeight: 1.3 }}>
                {getTxt(patrol.description)}
              </p>
            </div>
          ))}
        </div>

        {/* Helplines Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          📞 {lang === 'en' ? "Emergency Helplines" : lang === 'te' ? "అత్యవసర హెల్ప్‌లైన్లు" : "आपातकालीन हेल्पलाइन"}
        </h4>
        <div className="card" style={{ padding: '14px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {station.helplines.map((helpline, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 8px', backgroundColor: 'hsl(var(--muted) / 0.3)', borderRadius: '6px' }}>
                <span style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))', fontWeight: 600 }}>{getTxt(helpline.name)}</span>
                <a href={`tel:${helpline.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', fontSize: '0.65rem', padding: '4px 8px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Phone size={10} /> {helpline.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          🛣️ {lang === 'en' ? "Highway Assistance & Outposts" : lang === 'te' ? "హైవే సహాయం & అవుట్‌పోస్ట్‌లు" : "राजमार्ग सहायता और चौकियां"}
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {station.highwayAssistance.map((item, idx) => (
            <div key={idx} className="card" style={{ padding: '14px', borderLeft: '3px solid hsl(var(--accent))' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <h5 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', margin: 0, fontWeight: 700 }}>
                  {getTxt(item.service)}
                </h5>
                <a href={`tel:${item.contact}`} className="btn btn-primary" style={{ textDecoration: 'none', fontSize: '0.65rem', padding: '4px 8px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Phone size={10} /> {item.contact}
                </a>
              </div>
              <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', margin: 0, lineHeight: 1.3 }}>
                {getTxt(item.details)}
              </p>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          📝 {lang === 'en' ? "Citizen Services Offered" : lang === 'te' ? "పౌరులకు లభించే సేవలు" : "नागरिक सेवाएं"}
        </h4>
        <div className="card" style={{ padding: '14px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {station.services.map((service, idx) => (
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {filteredPolice.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', padding: '20px 0' }}>
          {lang === 'en' ? "No police stations found matching search query." : lang === 'te' ? "శోధనకు సరిపోయే పోలీస్ స్టేషన్లు కనుగొనబడలేదు." : "खोज के अनुरूप कोई पुलिस स्टेशन नहीं मिला।"}
        </p>
      ) : (
        filteredPolice.map(station => (
          <div 
            key={station.id} 
            className="govt-menu-card" 
            onClick={() => setActivePoliceId(station.id)}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              width: '100%', 
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flex: 1 }}>
              <div className="govt-menu-icon" style={{ fontSize: '1.4rem' }}>👮</div>
              <div className="govt-menu-info">
                <span className="govt-menu-title" style={{ fontSize: '0.94rem', fontWeight: 750 }}>
                  {getTxt(station.name)}
                </span>
                <span className="govt-menu-desc" style={{ fontSize: '0.72rem', marginTop: '2px' }}>
                  📍 {getTxt(station.location)} • {getTxt(station.district)}
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
