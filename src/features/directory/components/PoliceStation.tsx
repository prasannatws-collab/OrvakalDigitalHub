import { Phone, Clock } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';

export const PoliceStation = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="card" style={{ padding: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>
            {lang === 'en' ? "Orvakal Police Station" : lang === 'te' ? "ఓర్వకల్లు పోలీస్ స్టేషన్" : "ओरवाकल पुलिस स्टेशन"}
          </h4>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
            {lang === 'en' ? "Kurnool District Police Command" : lang === 'te' ? "కర్నూలు జిల్లా పోలీస్ కమాండ్" : "कर्नूल जिला पुलिस कमान"}
          </span>
        </div>
        <span className="badge badge-info">{t.verified}</span>
      </div>
      <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem' }}>
        <div><strong>Station House Officer (SI):</strong> Mr. K. Mallikarjuna Reddy, Sub-Inspector</div>
        <div><strong>Office Location:</strong> Near NH-40, Orvakal Bypass, Kurnool District, AP</div>
        <div className="info-row"><Clock size={12} className="info-icon" /> <span>24/7 Security Services</span></div>
        <div className="info-row"><Phone size={12} className="info-icon" /> <span>+91 8518223344 (Office) | +91 9440796753 (SI Mobile)</span></div>
        <div style={{ fontWeight: 'bold', marginTop: '4px' }}>Key Facilities & Helpdesks:</div>
        <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '0.7rem' }}>
          <li><strong>24/7 Highway Patrol:</strong> Regular checks on NH-40 Corridor for traveler safety.</li>
          <li><strong>Women Help Desk (Disha):</strong> Dedicated desk for women safety and query handling.</li>
          <li><strong>Citizen FIR Help Desk:</strong> Walk-in desk for reporting lost articles, complaints, and FIR updates.</li>
          <li><strong>Passport & Character verification cell.</strong></li>
        </ul>
        <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', fontStyle: 'italic', marginTop: '4px' }}>
          For immediate emergency assistance, dial 100 or tap the SOS hotline.
        </div>
      </div>
      <div className="action-bar" style={{ marginTop: '10px' }}>
        <a href="tel:+918518223344" className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call Station</a>
        <a href="tel:+919440796753" className="btn btn-secondary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call SI Directly</a>
      </div>
    </div>
  );
};
