import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { govtSchemes } from '../data/directoryData';

export const GovtSchemes = () => {
  const { lang, getTxt } = useLanguage();
  const [selectedSchemeCategory, setSelectedSchemeCategory] = useState<'farmer' | 'students' | 'women' | 'business' | 'insurance' | 'investment' | 'welfare' | 'all'>('all');
  const [selectedSchemeType, setSelectedSchemeType] = useState<'central' | 'state' | 'bank' | 'postal' | 'all'>('all');
  const [expandedSchemeId, setExpandedSchemeId] = useState<string | null>(null);

  const filteredSchemes = govtSchemes.filter(s => {
    const matchCat = selectedSchemeCategory === 'all' || s.category === selectedSchemeCategory;
    const matchType = selectedSchemeType === 'all' || s.type === selectedSchemeType;
    return matchCat && matchType;
  });

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'farmer': return '🌾';
      case 'students': return '🎓';
      case 'women': return '👩';
      case 'business': return '💼';
      case 'insurance': return '🛡️';
      case 'investment': return '💰';
      case 'welfare': return '🏡';
      default: return '📜';
    }
  };

  const getTypeBadgeClass = (type: string) => {
    switch (type) {
      case 'central': return 'badge-success';
      case 'state': return 'badge-info';
      case 'bank': return 'badge-warning';
      case 'postal': return 'badge-secondary';
      default: return 'badge-info';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'central': return 'Central Govt';
      case 'state': return 'State Govt';
      case 'bank': return 'Bank Scheme';
      case 'postal': return 'Postal Scheme';
      default: return type;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
        <h4 style={{ fontSize: '0.85rem', margin: 0 }}>
          {lang === 'en' ? "Government Schemes & Welfare Desk" : lang === 'te' ? "ప్రభుత్వ పథకాలు & సంక్షేమ డెస్క్" : "सरकारी योजनाएं एवं कल्याण डेस्क"}
        </h4>
        <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '6px', marginBottom: 0 }}>
          {lang === 'en' ? "Browse state and central welfare schemes. Select a category below to filter schemes." : lang === 'te' ? "వివిధ ప్రభుత్వ సంక్షేమ పథకాల వివరాలు. తగిన వర్గాన్ని ఎంచుకుని సమాచారం చదవండి." : "विभिन्न सरकारी कल्याणकारी योजनाओं की जानकारी। फ़िल्टर करने के लिए नीचे एक श्रेणी चुनें।"}
        </p>
      </div>
      
      {/* 1. Scheme Provider Type Filter (Central, State, etc) */}
      <div className="tabs-header" style={{ marginBottom: '4px', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {(['central', 'state', 'bank', 'postal', 'all'] as const).map(type => (
          <button
            key={type}
            className={`services-menu-card ${selectedSchemeType === type ? 'active' : ''}`}
            onClick={() => setSelectedSchemeType(type)}
            style={{ 
              padding: '8px 16px', 
              flexDirection: 'row', 
              justifyContent: 'center', 
              margin: 0, 
              minHeight: 'auto',
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
          >
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: selectedSchemeType === type ? 'white' : 'hsl(var(--primary))' }}>
              {type === 'all' ? 'All Providers' : type === 'state' ? 'State Govt' : type === 'central' ? 'Central Govt' : type === 'bank' ? 'Bank' : 'Postal'}
            </span>
          </button>
        ))}
      </div>

      {/* 2. Category Type Filter (Farmer, Students, etc) */}
      <div className="tabs-header" style={{ marginBottom: '8px', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {(['farmer', 'students', 'women', 'business', 'insurance', 'investment', 'welfare', 'all'] as const).map(cat => (
          <button
            key={cat}
            className={`tab-pill ${selectedSchemeCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedSchemeCategory(cat)}
            style={{ fontSize: '0.65rem', padding: '6px 12px', flexShrink: 0 }}
          >
            {cat === 'farmer' && "🌾 Farmer"}
            {cat === 'students' && "🎓 Students"}
            {cat === 'women' && "👩 Women"}
            {cat === 'business' && "💼 Business"}
            {cat === 'insurance' && "🛡️ Insurance"}
            {cat === 'investment' && "💰 Savings"}
            {cat === 'welfare' && "🏡 Welfare"}
            {cat === 'all' && "🌐 All categories"}
          </button>
        ))}
      </div>

      {/* Display Schemes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredSchemes.length === 0 ? (
          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', padding: '20px 0' }}>
            {lang === 'en' ? "No schemes found matching the filters." : lang === 'te' ? "ఎంచుకున్న వర్గాలలో ఎటువంటి పథకాలు లేవు." : "चुने गए फ़िल्टर के अनुसार कोई योजना नहीं मिली।"}
          </p>
        ) : (
          filteredSchemes.map(scheme => (
            <div
              key={scheme.id}
              className="govt-menu-card"
              onClick={() => setExpandedSchemeId(expandedSchemeId === scheme.id ? null : scheme.id)}
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
                    {getCategoryEmoji(scheme.category)}
                  </div>
                  <div className="govt-menu-info">
                    <span className="govt-menu-title" style={{ fontSize: '0.94rem', fontWeight: 750 }}>
                      {getTxt(scheme.title)}
                    </span>
                    <span className="govt-menu-desc" style={{ fontSize: '0.72rem', marginTop: '2px' }}>
                      {getTxt(scheme.description)}
                    </span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                  <span className={`badge ${getTypeBadgeClass(scheme.type || 'state')}`} style={{ fontSize: '0.62rem', padding: '3px 8px' }}>
                    {getTypeLabel(scheme.type || 'state')}
                  </span>
                  {expandedSchemeId === scheme.id ? (
                    <ChevronUp size={16} style={{ color: 'hsl(var(--primary))' }} />
                  ) : (
                    <ChevronDown size={16} style={{ color: 'hsl(var(--muted-foreground))' }} />
                  )}
                </div>
              </div>

              {/* Collapsible Details */}
              {expandedSchemeId === scheme.id && (
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
                  <div style={{ display: 'flex', gap: '8px', padding: '8px 10px', backgroundColor: 'hsl(var(--primary) / 0.05)', borderRadius: '6px', borderLeft: '3px solid hsl(var(--primary))' }}>
                    <span style={{ fontSize: '1rem', flexShrink: 0 }}>🎁</span>
                    <div>
                      <strong style={{ color: 'hsl(var(--primary))' }}>Benefits: </strong>
                      <span style={{ fontWeight: 700, color: 'hsl(var(--foreground))' }}>{getTxt(scheme.benefits)}</span>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px', padding: '8px 10px', backgroundColor: 'hsl(var(--muted) / 0.2)', borderRadius: '6px', borderLeft: '3px solid hsl(var(--muted-foreground) / 0.5)' }}>
                    <span style={{ fontSize: '1rem', flexShrink: 0 }}>📋</span>
                    <div>
                      <strong>Eligibility: </strong>
                      <span style={{ color: 'hsl(var(--foreground))', fontWeight: 550 }}>{getTxt(scheme.eligibility)}</span>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px', padding: '8px 10px', backgroundColor: 'hsl(var(--muted) / 0.2)', borderRadius: '6px', borderLeft: '3px solid hsl(var(--secondary))' }}>
                    <span style={{ fontSize: '1rem', flexShrink: 0 }}>📝</span>
                    <div>
                      <strong>How to Apply: </strong>
                      <span style={{ color: 'hsl(var(--foreground))', fontWeight: 550 }}>{getTxt(scheme.applyProcess)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
