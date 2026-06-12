import { useState } from 'react';
import {
  UserCheck,
  Sprout,
  Wrench,
  FileText,
  GraduationCap,
  Briefcase,
  Compass,
  Utensils,
  Droplet,
  Landmark,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';

interface PersonaSelectorProps {
  onShortcutClick: (tab: 'home' | 'directory' | 'farmer' | 'hospitality' | 'jobs' | 'insights', subTab?: string, query?: string) => void;
  onSosClick: () => void;
  onTransportScroll: () => void;
}

export const PersonaSelector = ({ onShortcutClick, onSosClick, onTransportScroll }: PersonaSelectorProps) => {
  const { t, lang } = useLanguage();
  const [activePersona, setActivePersona] = useState<'student' | 'farmer' | 'citizen' | 'tourist' | 'officer' | null>(null);

  const togglePersona = (persona: 'student' | 'farmer' | 'citizen' | 'tourist' | 'officer') => {
    setActivePersona((prev) => (prev === persona ? null : persona));
  };

  return (
    <div className="card" style={{ borderTop: '4px solid hsl(var(--secondary))' }}>
      <h3 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))', display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
        <UserCheck size={16} /> {t.personaTitle}
      </h3>
      <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', margin: 0 }}>{t.personaPrompt}</p>
      
      {/* Persona choice buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '4px 0', marginTop: '8px' }}>
        <button className={`tab-pill ${activePersona === 'farmer' ? 'active' : ''}`} onClick={() => togglePersona('farmer')}>
          🌾 {t.farmer}
        </button>
        <button className={`tab-pill ${activePersona === 'student' ? 'active' : ''}`} onClick={() => togglePersona('student')}>
          🎓 {t.student}
        </button>
        <button className={`tab-pill ${activePersona === 'citizen' ? 'active' : ''}`} onClick={() => togglePersona('citizen')}>
          🏡 {t.citizen}
        </button>
        <button className={`tab-pill ${activePersona === 'tourist' ? 'active' : ''}`} onClick={() => togglePersona('tourist')}>
          🗺️ {t.tourist}
        </button>
        <button className={`tab-pill ${activePersona === 'officer' ? 'active' : ''}`} onClick={() => togglePersona('officer')}>
          💼 {t.officer}
        </button>
      </div>

      {/* Dynamic Recommendation Output Box */}
      {activePersona && (
        <div className="fade-in" style={{ backgroundColor: 'hsl(var(--accent) / 0.4)', padding: '12px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '8px', border: '1px solid hsl(var(--primary) / 0.1)', marginTop: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>
              {activePersona === 'farmer' && (lang === 'en' ? "Farmer Resources" : lang === 'te' ? "రైతు సదుపాయాలు" : "किसान संसाधन")}
              {activePersona === 'student' && (lang === 'en' ? "Student & Education Desk" : lang === 'te' ? "విద్యార్థి విభాగం" : "छात्र डेस्क")}
              {activePersona === 'citizen' && (lang === 'en' ? "Citizen Local Services" : lang === 'te' ? "స్థానిక పౌర సేవలు" : "नागरिक स्थानीय सेवाएं")}
              {activePersona === 'tourist' && (lang === 'en' ? "Tourist & Visitor Guide" : lang === 'te' ? "పర్యాటక మార్గదర్శక" : "पर्यटक गाइड")}
              {activePersona === 'officer' && (lang === 'en' ? "Official Administration Desk" : lang === 'te' ? "అధికారిక పరిపాలన సమాచారం" : "अधिकारी प्रशासनिक डेस्क")}
            </span>
            <button onClick={() => setActivePersona(null)} style={{ background: 'none', border: 'none', color: 'hsl(var(--muted-foreground))', fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer' }}>
              {t.personaClear}
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {activePersona === 'farmer' && (
              <>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('farmer', 'feeder')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Sprout size={12} color="green" /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "Feeder Hours" : lang === 'te' ? "కరెంట్ వేళలు" : "फीडर समय"}
                  </span>
                </button>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('farmer', 'mandi')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><ArrowUpRight size={12} color="orange" /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "Mandi Rates" : lang === 'te' ? "మార్కెట్ ధరలు" : "मंडी दरें"}
                  </span>
                </button>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('farmer', 'repair')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Wrench size={12} /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "Agri Repairs" : lang === 'te' ? "మరమ్మతులు" : "कृषि मरम्मत"}
                  </span>
                </button>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('directory', 'grievance')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><FileText size={12} color="red" /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "File Grievance" : lang === 'te' ? "ఫిర్యాదు చేయండి" : "शिकायत दर्ज करें"}
                  </span>
                </button>
              </>
            )}
            {activePersona === 'student' && (
              <>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('directory', 'education')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><GraduationCap size={12} color="purple" /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "Schools & Info" : lang === 'te' ? "పాఠశాలలు" : "स्कूल जानकारी"}
                  </span>
                </button>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('jobs', 'job')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Briefcase size={12} /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "Local Jobs" : lang === 'te' ? "ఉద్యోగాలు" : "स्थानीय नौकरियां"}
                  </span>
                </button>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('directory', 'grievance')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><FileText size={12} color="red" /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "File Grievance" : lang === 'te' ? "ఫిర్యాదు చేయండి" : "शिकायत दर्ज करें"}
                  </span>
                </button>
              </>
            )}
            {activePersona === 'tourist' && (
              <>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('hospitality', 'hotel')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Compass size={12} color="blue" /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "Hotels to Stay" : lang === 'te' ? "వసతి గృహాలు" : "होटल और लॉज"}
                  </span>
                </button>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('jobs', 'business', 'restaurant')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Utensils size={12} color="brown" /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "Restaurants" : lang === 'te' ? "రెస్టారెంట్లు" : "रेस्तरां"}
                  </span>
                </button>
              </>
            )}
            {activePersona === 'citizen' && (
              <>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('directory', 'grievance')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><FileText size={12} color="red" /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "File Grievance" : lang === 'te' ? "ఫిర్యాదు చేయండి" : "शिकायत दर्ज करें"}
                  </span>
                </button>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('jobs', 'business')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Droplet size={12} color="blue" /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "Local Shops" : lang === 'te' ? "స్థానిక షాపులు" : "स्थानीय दुकानें"}
                  </span>
                </button>
              </>
            )}
            {activePersona === 'officer' && (
              <>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('directory', 'govt')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Landmark size={12} color="navy" /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "Sarpanch Info" : lang === 'te' ? "సర్పంచ్ వివరాలు" : "सरपंच जानकारी"}
                  </span>
                </button>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('hospitality', 'hall')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><Compass size={12} /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "Banquet Halls" : lang === 'te' ? "ఫంక్షన్ హాళ్ళు" : "बैंक्वेट हॉल"}
                  </span>
                </button>
                <button className="services-menu-card" style={{ padding: '8px', flexDirection: 'row', gap: '6px', justifyContent: 'flex-start', margin: 0, minHeight: 'auto', width: '100%', border: '1px solid var(--glass-border)' }} onClick={() => onShortcutClick('directory', 'grievance')}>
                  <div className="services-menu-icon" style={{ width: '22px', height: '22px', flexShrink: 0 }}><FileText size={12} color="red" /></div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, textAlign: 'left' }}>
                    {lang === 'en' ? "File Grievance" : lang === 'te' ? "ఫిర్యాదు చేయండి" : "शिकायत दर्ज करें"}
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Static Quick Cards Grid */}
      <div style={{ marginTop: '14px', borderTop: '1px dashed hsl(var(--border) / 0.6)', paddingTop: '14px' }}>
        <div className="quick-menu-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', margin: '4px 0', display: 'grid' }}>
          <div className="quick-card quick-card-red" onClick={onSosClick} style={{ minHeight: '72px', padding: '8px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <div className="quick-card-icon" style={{ fontSize: '1.2rem', margin: 0 }}>🚨</div>
            <span className="quick-card-label" style={{ fontSize: '0.62rem', fontWeight: 700, marginTop: '4px' }}>Emergency</span>
          </div>
          <div className="quick-card quick-card-blue" onClick={onTransportScroll} style={{ minHeight: '72px', padding: '8px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <div className="quick-card-icon" style={{ fontSize: '1.2rem', margin: 0 }}>🚌</div>
            <span className="quick-card-label" style={{ fontSize: '0.62rem', fontWeight: 700, marginTop: '4px' }}>Transport</span>
          </div>
          <div className="quick-card quick-card-green" onClick={() => onShortcutClick('hospitality', 'hotel')} style={{ minHeight: '72px', padding: '8px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <div className="quick-card-icon" style={{ fontSize: '1.2rem', margin: 0 }}>🏨</div>
            <span className="quick-card-label" style={{ fontSize: '0.62rem', fontWeight: 700, marginTop: '4px' }}>Hotel Stays</span>
          </div>
          <div className="quick-card quick-card-purple" onClick={() => onShortcutClick('directory', 'committees')} style={{ minHeight: '72px', padding: '8px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <div className="quick-card-icon" style={{ fontSize: '1.2rem', margin: 0 }}>👥</div>
            <span className="quick-card-label" style={{ fontSize: '0.62rem', fontWeight: 700, marginTop: '4px' }}>Committees</span>
          </div>
        </div>
      </div>
    </div>
  );
};
