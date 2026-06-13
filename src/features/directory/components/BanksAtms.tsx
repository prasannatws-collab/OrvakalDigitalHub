import { useState } from 'react';
import { Phone, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { banksAndAtms } from '../../../data/banksData';

interface BanksAtmsProps {
  searchQuery?: string;
}

export const BanksAtms = ({ searchQuery = '' }: BanksAtmsProps) => {
  const { lang, getTxt, t } = useLanguage();
  const [activeBankId, setActiveBankId] = useState<string | null>(null);

  // Filter banks based on search query
  const filteredBanks = banksAndAtms.filter(bank => {
    const query = searchQuery.toLowerCase();
    return (
      getTxt(bank.name).toLowerCase().includes(query) ||
      getTxt(bank.branch).toLowerCase().includes(query) ||
      getTxt(bank.location).toLowerCase().includes(query) ||
      bank.ifsc.toLowerCase().includes(query)
    );
  });

  if (activeBankId !== null) {
    const bank = banksAndAtms.find(b => b.id === activeBankId);
    if (!bank) return null;

    return (
      <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Back Button */}
        <button
          className="btn btn-secondary"
          style={{ alignSelf: 'flex-start', padding: '6px 12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}
          onClick={() => setActiveBankId(null)}
        >
          ⬅️ {lang === 'en' ? "Back to Banks List" : lang === 'te' ? "బ్యాంకుల జాబితాకు తిరిగి" : "बैंकों की सूची पर वापस जाएं"}
        </button>

        {/* Bank Details Card */}
        <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 style={{ fontSize: '1rem', color: 'hsl(var(--primary))', margin: 0 }}>
                {getTxt(bank.name)}
              </h3>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
                {getTxt(bank.branch)} | IFSC: {bank.ifsc}
              </span>
            </div>
            <span className="badge badge-success" style={{ fontSize: '0.55rem' }}>{t.verified}</span>
          </div>

          <div style={{ borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '10px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem' }}>
            <div className="info-row"><MapPin size={12} className="info-icon" /> <span>{getTxt(bank.location)}</span></div>
            <div className="info-row"><Clock size={12} className="info-icon" /> <span>{getTxt(bank.timing)}</span></div>
            <div className="info-row"><Phone size={12} className="info-icon" /> <span>{bank.phone}</span></div>
          </div>

          <div style={{ borderTop: '1px dashed hsl(var(--border))', paddingTop: '8px', marginTop: '8px' }}>
            <span className={`badge ${bank.hasAtm ? 'badge-success' : 'badge-danger'}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem' }}>
              ATM Status: {getTxt(bank.atmStatus)}
            </span>
          </div>

          <div className="action-bar" style={{ marginTop: '10px' }}>
            <a href={`tel:${bank.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={12} /> Call Branch</a>
          </div>
        </div>

        {/* Staff Directory Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          👤 {lang === 'en' ? "Branch Staff Directory" : lang === 'te' ? "బ్యాంక్ సిబ్బంది వివరాలు" : "शाखा कर्मचारी सूची"}
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {bank.staff.map((member, idx) => (
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

        {/* Services Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          📝 {lang === 'en' ? "Services Offered" : lang === 'te' ? "అందించే సేవలు" : "प्रदान की जाने वाली सेवाएं"}
        </h4>
        <div className="card" style={{ padding: '14px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {bank.services.map((service, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '6px 8px', backgroundColor: 'hsl(var(--muted) / 0.3)', borderRadius: '6px' }}>
                <CheckCircle size={14} style={{ color: 'hsl(var(--primary))', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))', fontWeight: 600 }}>{getTxt(service)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schemes Section */}
        <h4 className="section-title" style={{ fontSize: '0.75rem', margin: '4px 0 0 0' }}>
          📜 {lang === 'en' ? "Financial & Loan Schemes" : lang === 'te' ? "ఆర్థిక & రుణ పథకాలు" : "वित्तीय और ऋण योजनाएं"}
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {bank.schemes.map((scheme, idx) => (
            <div key={idx} className="card" style={{ padding: '14px', borderLeft: '3px solid hsl(var(--accent))' }}>
              <h5 style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', margin: '0 0 4px 0', fontWeight: 700 }}>
                {getTxt(scheme.name)}
              </h5>
              <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', margin: 0, lineHeight: 1.3 }}>
                {getTxt(scheme.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {filteredBanks.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', padding: '20px 0' }}>
          {lang === 'en' ? "No banks found matching search query." : lang === 'te' ? "శోధనకు సరిపోయే బ్యాంకులు కనుగొనబడలేదు." : "खोज के अनुरूप कोई बैंक नहीं मिला।"}
        </p>
      ) : (
        filteredBanks.map(bank => (
          <div 
            key={bank.id} 
            className="govt-menu-card" 
            onClick={() => setActiveBankId(bank.id)}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              width: '100%', 
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flex: 1 }}>
              <div className="govt-menu-icon" style={{ fontSize: '1.4rem' }}>🏦</div>
              <div className="govt-menu-info">
                <span className="govt-menu-title" style={{ fontSize: '0.94rem', fontWeight: 750 }}>
                  {getTxt(bank.name)}
                </span>
                <span className="govt-menu-desc" style={{ fontSize: '0.72rem', marginTop: '2px' }}>
                  📍 {getTxt(bank.location)} • {getTxt(bank.branch)}
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
