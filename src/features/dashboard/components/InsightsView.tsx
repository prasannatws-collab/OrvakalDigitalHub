import { useLanguage } from '../../../core/context/LanguageContext';
import { registeredCompanies } from '../../../data/registeredCompanies';
import {
  industrialPresenceContext,
  keyCompanies,
  keyInfrastructure,
  policyIncentives,
  hubResources
} from '../../../data/industrialHubData';

interface InsightsViewProps {
  onBackClick: () => void;
  onActiveIndustriesClick: () => void;
  onShortcutClick: (tab: 'home' | 'directory' | 'farmer' | 'hospitality' | 'jobs' | 'insights', subTab?: string, query?: string) => void;
  onCompanySelect: (company: any) => void;
}

export const InsightsView = ({
  onBackClick,
  onActiveIndustriesClick,
  onShortcutClick,
  onCompanySelect
}: InsightsViewProps) => {
  const { lang, t, getTxt } = useLanguage();

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      
      {/* Back button & Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid hsl(var(--border) / 0.8)', paddingBottom: '12px' }}>
        <button
          className="btn btn-secondary"
          style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}
          onClick={onBackClick}
        >
          ⬅️ {lang === 'en' ? "Back to Dashboard" : lang === 'te' ? "డ్యాష్‌బోర్డ్‌కు తిరిగి వెళ్ళు" : "डैशबोर्ड पर वापस जाएं"}
        </button>
        <h3 style={{ margin: 0, fontSize: '0.92rem', color: 'hsl(var(--primary))', fontWeight: 800 }}>
          💡 {lang === 'en' ? "Orvakal Industrial Hub" : lang === 'te' ? "ఓర్వకల్లు పారిశ్రామిక హబ్" : "ओरवाकल औद्योगिक हब"}
        </h3>
      </div>

      {/* Quick stats panel - Relocated Orvakal At A Glance */}
      <div className="card" style={{ border: '2px solid hsl(var(--primary) / 0.18)', boxShadow: '0 8px 24px -6px hsl(var(--primary) / 0.08)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h3 className="section-title" style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800 }}>
            {lang === 'en' ? "Orvakal At A Glance" : lang === 'te' ? "ఓర్వకల్లు ఒక చూపులో" : "ओरवाकल एक नज़र में"}
          </h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '4px' }}>
          <div 
            style={{ 
              padding: '8px', 
              borderRadius: '8px', 
              backgroundColor: 'hsl(var(--muted) / 0.4)', 
              textAlign: 'center', 
              cursor: 'pointer',
              transition: 'background-color 0.2s, transform 0.2s',
              border: '1px solid hsl(var(--border) / 0.2)'
            }} 
            className="stats-block-btn"
            onClick={onActiveIndustriesClick}
          >
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>{registeredCompanies.length}</div>
            <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
              🏢 {t.activeIndustries}
            </div>
          </div>
          <div 
            style={{ 
              padding: '8px', 
              borderRadius: '8px', 
              backgroundColor: 'hsl(var(--muted) / 0.4)', 
              textAlign: 'center', 
              cursor: 'pointer',
              transition: 'background-color 0.2s, transform 0.2s',
              border: '1px solid hsl(var(--border) / 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px'
            }} 
            className="stats-block-btn"
            onClick={() => onShortcutClick('jobs', 'job')}
          >
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'hsl(var(--primary))', lineHeight: 1 }}>💼</div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
              {lang === 'en' ? "Careers at Hub" : lang === 'te' ? "హబ్‌లో ఉద్యోగాలు" : "हब में करियर"} ➔
            </div>
          </div>
        </div>

        {/* Active Industries Badges */}
        <div style={{ marginTop: '8px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))', display: 'block', marginBottom: '6px' }}>
            🏢 {t.activeIndustriesList || "Active Mega Industries:"}
          </span>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {registeredCompanies.map(comp => (
              <span
                key={comp.id}
                className="badge badge-info"
                style={{ fontSize: '0.6rem', padding: '4px 8px', cursor: 'pointer' }}
                onClick={() => onCompanySelect(comp)}
              >
                {getTxt(comp.name)}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 1. Context on Industrial Presence */}
      <div className="card" style={{ borderLeft: '4px solid #be123c', padding: '14px' }}>
        <h4 style={{ fontSize: '0.82rem', color: '#be123c', fontWeight: 800, margin: 0 }}>
          🏢 {getTxt(industrialPresenceContext.title)}
        </h4>
        <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginTop: '6px', lineHeight: 1.4, margin: '6px 0 0 0' }}>
          {getTxt(industrialPresenceContext.content)}
        </p>
        {industrialPresenceContext.bullets && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px', paddingLeft: '8px', borderLeft: '2px solid hsl(var(--border))' }}>
            {industrialPresenceContext.bullets.map((bullet, idx) => (
              <div key={idx}>
                <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>{getTxt(bullet.boldText)}</strong>
                <span style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginLeft: '4px' }}>
                  {getTxt(bullet.normalText)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. Key Companies Recently Linked to Orvakal */}
      <div className="card" style={{ borderLeft: '4px solid #0369a1', padding: '14px' }}>
        <h4 style={{ fontSize: '0.82rem', color: '#0369a1', fontWeight: 800, margin: 0 }}>
          🏭 {lang === 'en' ? "Key Companies Recently Linked to Orvakal" : lang === 'te' ? "ఓర్వకల్లుతో ఇటీవల అనుసంధానించబడిన ప్రముఖ కంపెనీలు" : "ओरवाकल से हाल ही में जुड़ी प्रमुख कंपनियां"}
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
          {keyCompanies.map(comp => (
            <div key={comp.id} style={{ padding: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', borderRadius: '6px' }}>
              <strong style={{ fontSize: '0.75rem', color: 'hsl(var(--foreground))' }}>{getTxt(comp.name)}</strong>
              <p style={{ margin: '2px 0 0 0', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
                {getTxt(comp.description)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Key Infrastructure & Support Features */}
      <div className="card" style={{ borderLeft: '4px solid #15803d', padding: '14px' }}>
        <h4 style={{ fontSize: '0.82rem', color: '#15803d', fontWeight: 800, margin: 0 }}>
          🔌 {getTxt(keyInfrastructure.title)}
        </h4>
        <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', marginTop: '6px', lineHeight: 1.4, margin: '6px 0 0 0' }}>
          {getTxt(keyInfrastructure.content)}
        </p>
        {keyInfrastructure.bullets && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
            {keyInfrastructure.bullets.map((bullet, idx) => (
              <div key={idx}>
                <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>{getTxt(bullet.boldText)}</strong>
                <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
                  {getTxt(bullet.normalText)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. Policy Incentives & Land Allotment */}
      <div className="card" style={{ borderLeft: '4px solid #6d28d9', padding: '14px' }}>
        <h4 style={{ fontSize: '0.82rem', color: '#6d28d9', fontWeight: 800, margin: 0 }}>
          ⚖️ {getTxt(policyIncentives.title)}
        </h4>
        {policyIncentives.bullets && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
            {policyIncentives.bullets.map((bullet, idx) => (
              <div key={idx}>
                <strong style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))' }}>{getTxt(bullet.boldText)}</strong>
                <p style={{ margin: '2px 0 0 8px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
                  {getTxt(bullet.normalText)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5. Getting Started & Resources */}
      <div className="card" style={{ borderLeft: '4px solid #b45309', padding: '14px' }}>
        <h4 style={{ fontSize: '0.82rem', color: '#b45309', fontWeight: 800, margin: 0 }}>
          🔗 {lang === 'en' ? "Getting Started & Resources" : lang === 'te' ? "ప్రారంభించడం & అవసరమైన వనరులు" : "शुरुआत करना और संसाधन"}
        </h4>
        <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '4px', margin: '4px 0' }}>
          {lang === 'en' 
            ? "For companies interested in setting up operations, the following resources are typically used to access official incentive details and land application processes:"
            : lang === 'te'
            ? "కార్యకలాపాలను ప్రారంభించడానికి ఆసక్తి ఉన్న కంపెనీల కోసం, అధికారిక ప్రోత్సాహకాలు మరియు భూమి దరఖాస్తు ప్రక్రియలకు సంబంధించిన వివరాలను పొందడానికి సాధారణంగా క్రింది వనరులు ఉపయోగించబడతాయి:"
            : "परिचालन शुरू करने की इच्छुक कंपनियों के लिए, आधिकारिक प्रोत्साहन विवरण और भूमि आवेदन प्रक्रियाओं तक पहुँचने के लिए आम तौर पर निम्नलिखित संसाधनों का उपयोग किया जाता है:"
          }
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
          {hubResources.map(res => (
            <div key={res.id} style={{ fontSize: '0.7rem' }}>
              <strong style={{ color: 'hsl(var(--foreground))' }}>{getTxt(res.title)}</strong>
              <p style={{ margin: '2px 0 0 8px', color: 'hsl(var(--muted-foreground))', lineHeight: 1.35 }}>
                {getTxt(res.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
