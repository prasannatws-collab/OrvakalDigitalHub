import { useState } from 'react';
import { Phone, Calendar, User, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { committees } from '../data/directoryData';

export const CommitteesList = () => {
  const { getTxt, lang } = useLanguage();
  const [expandedCommitteeId, setExpandedCommitteeId] = useState<string | null>(null);

  const getCommitteeEmoji = (id: string) => {
    switch (id) {
      case 'com-1': return '🛕'; // Temple
      case 'com-2': return '👮'; // Kaavali
      case 'com-3': return '💧'; // Watershed
      case 'com-4': return '⛪'; // Church
      case 'com-5': return '🕌'; // Mosque
      case 'com-6': return '🏏'; // Cricket & Sports
      case 'com-7': return '🎓'; // Students
      case 'com-8': return '🏫'; // Education & Workshop
      case 'com-9': return '💼'; // Business
      default: return '👥';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
        <h4 style={{ fontSize: '0.85rem', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
          👥 {lang === 'en' ? "Village Committees Desk" : lang === 'te' ? "గ్రామ కమిటీల విభాగం" : "ग्राम समितियां डेस्क"}
        </h4>
        <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '6px', marginBottom: 0 }}>
          {lang === 'en'
            ? "Village administration, temple, youth, security and business committees. Click a committee card to view details."
            : lang === 'te'
            ? "దేవాలయం, రక్షణ, విద్యా, క్రీడలు మరియు వ్యాపార కమిటీల వివరాలు. మరిన్ని వివరాలకు కమిటీ కార్డుపై క్లిక్ చేయండి."
            : "मंदिर, सुरक्षा, शिक्षा, खेल और व्यावसायिक समितियों का विवरण। विवरण देखने के लिए कार्ड पर क्लिक करें।"}
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {committees.map((com) => (
          <div 
            key={com.id} 
            className="govt-menu-card" 
            onClick={() => setExpandedCommitteeId(expandedCommitteeId === com.id ? null : com.id)}
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'stretch',
              padding: '16px 20px',
              gap: 0,
              cursor: 'pointer'
            }}
          >
            {/* Header Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flex: 1 }}>
                <div className="govt-menu-icon" style={{ fontSize: '1.4rem', flexShrink: 0 }}>
                  {getCommitteeEmoji(com.id)}
                </div>
                <div className="govt-menu-info">
                  <span className="govt-menu-title" style={{ fontSize: '0.94rem', fontWeight: 750 }}>
                    {getTxt(com.name)}
                  </span>
                  <span className="govt-menu-desc" style={{ fontSize: '0.72rem', marginTop: '2px' }}>
                    {getTxt(com.purpose)}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                <span className="badge badge-info" style={{ fontSize: '0.62rem', padding: '3px 8px' }}>
                  {com.membersCount} {lang === 'en' ? "Members" : lang === 'te' ? "సభ్యులు" : "सदस्य"}
                </span>
                {expandedCommitteeId === com.id ? (
                  <ChevronUp size={16} style={{ color: 'hsl(var(--primary))' }} />
                ) : (
                  <ChevronDown size={16} style={{ color: 'hsl(var(--muted-foreground))' }} />
                )}
              </div>
            </div>

            {/* Collapsible Details */}
            {expandedCommitteeId === com.id && (
              <div 
                className="fade-in" 
                onClick={(e) => e.stopPropagation()}
                style={{ 
                  borderTop: '1px solid hsl(var(--border) / 0.5)', 
                  marginTop: '12px', 
                  paddingTop: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '0.72rem'
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px', padding: '8px 10px', backgroundColor: 'hsl(var(--muted) / 0.25)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <User size={14} style={{ color: 'hsl(var(--primary))' }} />
                    <strong>{lang === 'en' ? "President" : lang === 'te' ? "అధ్యక్షుడు" : "अध्यक्ष"}: </strong>
                    <span style={{ color: 'hsl(var(--foreground))', marginLeft: '4px' }}>{getTxt(com.president)}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} style={{ color: 'hsl(var(--secondary))' }} />
                    <strong>{lang === 'en' ? "Meetings" : lang === 'te' ? "సమావేశాలు" : "बैठकें"}: </strong>
                    <span style={{ color: 'hsl(var(--foreground))', marginLeft: '4px' }}>{getTxt(com.meetings)}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '4px' }}>
                  <a 
                    href={`tel:${com.phone}`} 
                    className="btn btn-primary"
                    style={{ 
                      textDecoration: 'none', 
                      fontSize: '0.7rem', 
                      padding: '8px 14px', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '6px',
                      fontWeight: 750,
                      borderRadius: '8px'
                    }}
                  >
                    <Phone size={12} /> Call President ({com.phone})
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
