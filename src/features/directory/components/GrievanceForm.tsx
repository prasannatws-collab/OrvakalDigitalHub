import { useState } from 'react';
import { ChevronDown, ChevronUp, User, Phone, Tag, Calendar, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { useGrievances } from '../hooks/useGrievances';

export const GrievanceForm = () => {
  const { t, lang } = useLanguage();
  const {
    grievances,
    grievanceForm,
    setGrievanceForm,
    showGrievanceSuccess,
    handleGrievanceSubmit
  } = useGrievances();

  const [expandedGrievanceId, setExpandedGrievanceId] = useState<string | null>(null);

  const getGrievanceEmoji = (type: string) => {
    switch (type) {
      case 'water': return '💧';
      case 'streetlights': return '💡';
      case 'roads': return '🛣️';
      case 'power': return '⚡';
      default: return '📝';
    }
  };

  const getGrievanceTypeLabel = (type: string) => {
    switch (type) {
      case 'water': return t.water || 'Water Supply';
      case 'streetlights': return t.streetlights || 'Streetlights';
      case 'roads': return t.roads || 'Roads & Streets';
      case 'power': return t.power || 'Electricity/Power';
      default: return t.others || 'Other Civic Issues';
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Submitted': return 'badge-info';
      case 'In Progress': return 'badge-warning';
      case 'Resolved': return 'badge-success';
      default: return 'badge-info';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Premium Grievance Submission Card */}
      <div className="card" style={{ borderTop: '4px solid hsl(var(--primary))', padding: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <span style={{ fontSize: '1.2rem' }}>📝</span>
          <h4 style={{ fontSize: '0.9rem', margin: 0, fontWeight: 800 }}>{t.reportIssue}</h4>
        </div>
        
        <form onSubmit={handleGrievanceSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="form-group">
            <label className="form-label" style={{ fontWeight: 700, fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              👤 {t.issueName}
            </label>
            <input
              type="text"
              className="form-input"
              style={{ fontSize: '0.75rem', padding: '8px 10px', borderRadius: '6px' }}
              value={grievanceForm.name}
              onChange={(e) => setGrievanceForm({ ...grievanceForm, name: e.target.value })}
              placeholder={lang === 'en' ? "Enter your full name" : lang === 'te' ? "మీ పూర్తి పేరు రాయండి" : "अपना पूरा नाम दर्ज करें"}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" style={{ fontWeight: 700, fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              📞 {t.issuePhone}
            </label>
            <input
              type="tel"
              className="form-input"
              style={{ fontSize: '0.75rem', padding: '8px 10px', borderRadius: '6px' }}
              value={grievanceForm.phone}
              onChange={(e) => setGrievanceForm({ ...grievanceForm, phone: e.target.value })}
              placeholder="+91 9876543210"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" style={{ fontWeight: 700, fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              🛠️ {t.issueType}
            </label>
            <select
              className="form-input"
              style={{ fontSize: '0.75rem', padding: '8px 10px', borderRadius: '6px' }}
              value={grievanceForm.type}
              onChange={(e) => setGrievanceForm({ ...grievanceForm, type: e.target.value })}
              aria-label="Grievance Issue Type Select"
            >
              <option value="water">{t.water}</option>
              <option value="streetlights">{t.streetlights}</option>
              <option value="roads">{t.roads}</option>
              <option value="power">{t.power}</option>
              <option value="others">{t.others}</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label" style={{ fontWeight: 700, fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              ℹ️ {t.issueDesc}
            </label>
            <textarea
              className="form-input"
              rows={3}
              style={{ fontSize: '0.75rem', padding: '8px 10px', borderRadius: '6px', resize: 'vertical' }}
              value={grievanceForm.desc}
              onChange={(e) => setGrievanceForm({ ...grievanceForm, desc: e.target.value })}
              placeholder={lang === 'en' ? "Please describe the problem in detail (e.g. location, duration)..." : lang === 'te' ? "సమస్య యొక్క పూర్తి వివరాలు రాయండి (ఉదా. ప్రాంతం, సమయం)..." : "कृपया समस्या का विस्तृत विवरण लिखें (जैसे स्थान, अवधि)..."}
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.75rem', fontWeight: 800, borderRadius: '8px', marginTop: '4px' }}
          >
            🚀 {t.submitIssue}
          </button>
        </form>
        
        {showGrievanceSuccess && (
          <div 
            className="fade-in" 
            style={{ 
              marginTop: '10px', 
              padding: '10px 12px', 
              backgroundColor: 'rgba(34, 197, 94, 0.12)', 
              color: '#15803d', 
              border: '1px solid rgba(34, 197, 94, 0.25)', 
              borderRadius: '8px', 
              fontSize: '0.72rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 700
            }}
          >
            <AlertCircle size={14} />
            {t.issueSuccess}
          </div>
        )}
      </div>

      {/* Active Grievances Title */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ fontSize: '0.78rem', fontWeight: 800, color: 'hsl(var(--muted-foreground))', margin: '4px 0 0 0' }}>
          📋 {lang === 'en' ? "Active Grievance Tracking" : lang === 'te' ? "ఫిర్యాదుల స్థితి పర్యవేక్షణ" : "सक्रिय शिकायत ट्रैकिंग"}
        </h4>
        
        {/* Tracking List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {grievances.length === 0 ? (
            <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', padding: '16px 0', margin: 0 }}>
              {lang === 'en' ? "No active grievances filed." : lang === 'te' ? "ఎటువంటి క్రియాశీల ఫిర్యాదులు లేవు." : "कोई सक्रिय शिकायत दर्ज नहीं है।"}
            </p>
          ) : (
            grievances.map(g => (
              <div 
                key={g.id} 
                className="govt-menu-card"
                onClick={() => setExpandedGrievanceId(expandedGrievanceId === g.id ? null : g.id)}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  padding: '14px 18px',
                  gap: 0,
                  cursor: 'pointer'
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flex: 1 }}>
                    <div className="govt-menu-icon" style={{ fontSize: '1.3rem', flexShrink: 0 }}>
                      {getGrievanceEmoji(g.type)}
                    </div>
                    <div className="govt-menu-info">
                      <span className="govt-menu-title" style={{ fontSize: '0.85rem', fontWeight: 750 }}>
                        {g.desc.length > 50 ? `${g.desc.substring(0, 50)}...` : g.desc}
                      </span>
                      <span className="govt-menu-desc" style={{ fontSize: '0.68rem', marginTop: '2px' }}>
                        Type: {getGrievanceTypeLabel(g.type)} • {g.date}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <span className={`badge ${getStatusBadgeClass(g.status)}`} style={{ fontSize: '0.62rem', padding: '3px 8px' }}>
                      {g.status}
                    </span>
                    {expandedGrievanceId === g.id ? (
                      <ChevronUp size={15} style={{ color: 'hsl(var(--primary))' }} />
                    ) : (
                      <ChevronDown size={15} style={{ color: 'hsl(var(--muted-foreground))' }} />
                    )}
                  </div>
                </div>

                {/* Collapsible Details */}
                {expandedGrievanceId === g.id && (
                  <div 
                    className="fade-in" 
                    onClick={(e) => e.stopPropagation()}
                    style={{ 
                      borderTop: '1px solid hsl(var(--border) / 0.5)', 
                      marginTop: '10px', 
                      paddingTop: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '0.7rem'
                    }}
                  >
                    <p style={{ color: 'hsl(var(--foreground))', margin: '2px 0', lineHeight: 1.4, fontWeight: 550 }}>
                      {g.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', padding: '8px 10px', backgroundColor: 'hsl(var(--muted) / 0.25)', borderRadius: '6px', marginTop: '2px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <User size={12} style={{ color: 'hsl(var(--primary))' }} />
                        <strong>Filed By:</strong> <span style={{ color: 'hsl(var(--foreground))' }}>{g.name}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Phone size={12} style={{ color: 'hsl(var(--primary))' }} />
                        <strong>Phone:</strong> <span style={{ color: 'hsl(var(--foreground))' }}>{g.phone}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Tag size={12} style={{ color: 'hsl(var(--secondary))' }} />
                        <strong>Ticket ID:</strong> <span style={{ color: 'hsl(var(--muted-foreground))', fontFamily: 'monospace' }}>{g.id}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} style={{ color: 'hsl(var(--secondary))' }} />
                        <strong>Date:</strong> <span style={{ color: 'hsl(var(--foreground))' }}>{g.date}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
