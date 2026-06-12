import { useState } from 'react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { govtSchemes } from '../data/directoryData';

export const GovtSchemes = () => {
  const { lang, getTxt } = useLanguage();
  const [selectedSchemeCategory, setSelectedSchemeCategory] = useState<'farmer' | 'students' | 'women' | 'business' | 'insurance' | 'investment' | 'welfare' | 'all'>('all');
  const [selectedSchemeType, setSelectedSchemeType] = useState<'central' | 'state' | 'bank' | 'postal' | 'all'>('all');

  const filteredSchemes = govtSchemes.filter(s => {
    const matchCat = selectedSchemeCategory === 'all' || s.category === selectedSchemeCategory;
    const matchType = selectedSchemeType === 'all' || s.type === selectedSchemeType;
    return matchCat && matchType;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
        <h4 style={{ fontSize: '0.85rem' }}>
          {lang === 'en' ? "Government Schemes & Welfare Desk" : lang === 'te' ? "ప్రభుత్వ పథకాలు & సంక్షేమ డెస్క్" : "सरकारी योजनाएं एवं कल्याण डेस्क"}
        </h4>
        <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
          {lang === 'en' ? "Browse state and central welfare schemes. Select a category below to filter schemes." : lang === 'te' ? "వివిధ ప్రభుత్వ సంక్షేమ పథకాల వివరాలు. తగిన వర్గాన్ని ఎంచుకుని సమాచారం చదవండి." : "विभिन्न सरकारी कल्याणकारी योजनाओं की जानकारी। फ़िल्टर करने के लिए नीचे एक श्रेणी चुनें।"}
        </p>
      </div>
      
      {/* 1. Scheme Provider Type Filter (Central, State, etc) */}
      <div className="tabs-header" style={{ marginBottom: '12px', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
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
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: selectedSchemeType === type ? 'white' : 'hsl(var(--primary))' }}>
              {type === 'all' ? 'All Providers' : type === 'state' ? 'State Govt' : type === 'central' ? 'Central Govt' : type === 'bank' ? 'Bank' : 'Postal'}
            </span>
          </button>
        ))}
      </div>

      {/* 2. Category Type Filter (Farmer, Students, etc) */}
      <div className="tabs-header" style={{ marginBottom: '16px', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
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
        {filteredSchemes.map(scheme => (
          <div key={scheme.id} className="card" style={{ padding: '14px' }}>
            <h4 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', fontWeight: 800 }}>{getTxt(scheme.title)}</h4>
            <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px', lineHeight: 1.3 }}>{getTxt(scheme.description)}</p>
            
            <div style={{ borderTop: '1px solid hsl(var(--border))', marginTop: '8px', paddingTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.7rem' }}>
              <div><strong>🎁 Benefits:</strong> <span style={{ color: 'hsl(var(--primary))', fontWeight: 700 }}>{getTxt(scheme.benefits)}</span></div>
              <div><strong>📋 Eligibility:</strong> {getTxt(scheme.eligibility)}</div>
              <div><strong>📝 How to Apply:</strong> {getTxt(scheme.applyProcess)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
