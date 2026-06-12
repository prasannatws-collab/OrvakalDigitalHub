import { Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';

export const HospitalPhc = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="card" style={{ padding: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>
            {lang === 'en' ? "Orvakal Government Primary Health Center (PHC)" : lang === 'te' ? "ఓర్వకల్లు ప్రభుత్వ ప్రాథమిక ఆరోగ్య కేంద్రం (PHC)" : "ओरवाकल सरकारी प्राथमिक स्वास्थ्य केंद्र (PHC)"}
          </h4>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--muted-foreground))' }}>
            {lang === 'en' ? "National Health Mission - AP" : lang === 'te' ? "జాతీయ ఆరోగ్య మిషన్ - ఏపీ" : "राष्ट्रीय स्वास्थ्य मिशन - एपी"}
          </span>
        </div>
        <span className="badge badge-info">{t.verified}</span>
      </div>
      <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem' }}>
        <div><strong>Medical Officers:</strong> Dr. S. Anitha, M.B.B.S, D.G.O (Gynaecologist) & Dr. Y. Rajashekar, M.B.B.S</div>
        <div><strong>OPD Timings:</strong> 09:00 AM - 04:00 PM (OPD open daily, Emergency 24/7)</div>
        <div><strong>Bed Capacity:</strong> 10 Beds (4 General, 6 Maternity)</div>
        <div className="info-row"><Phone size={12} className="info-icon" /> <span>+91 8518256789 (PHC Desk) | +91 9440623456 (Duty Doctor)</span></div>
        <div className="info-row"><MapPin size={12} className="info-icon" /> <span>Main Road, opposite Gram Panchayat, Orvakal</span></div>
        <div style={{ fontWeight: 'bold', marginTop: '4px' }}>Medical Facilities Available:</div>
        <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '0.7rem' }}>
          <li><strong>24/7 Emergency Trauma care & First-Aid center.</strong></li>
          <li><strong>Maternity & Child Health Care (MCH):</strong> Free deliveries, prenatal checkups.</li>
          <li><strong>Immunization Desk:</strong> Free vaccination for children every Wednesday.</li>
          <li><strong>Free Diagnostic Lab:</strong> Blood testing, malaria, dengue, sugar testing, and urine analysis.</li>
          <li><strong>Free Pharmacy:</strong> Dispensary of generic medicines under Govt scheme.</li>
          <li><strong>108 Ambulance Hub:</strong> Vehicle stationed 24/7 on stand-by.</li>
        </ul>
      </div>
      <div className="action-bar" style={{ marginTop: '10px' }}>
        <a href="tel:+918518256789" className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call PHC</a>
        <a href="tel:108" className="btn btn-secondary" style={{ textDecoration: 'none', backgroundColor: '#ef4444', borderColor: '#ef4444', color: 'white' }}><Phone size={10} /> Call 108 Ambulance</a>
      </div>
    </div>
  );
};
