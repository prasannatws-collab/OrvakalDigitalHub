import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';

export const DashboardBanner = () => {
  const { lang } = useLanguage();

  return (
    <div className="card banner-card">
      <div>
        <h2>Orvakal Hub</h2>
        <p style={{ fontSize: '0.78rem', opacity: 0.95 }}>
          {lang === 'en' && "Andhra Pradesh's fast-growing mega industrial hub. Solar parks, flight transit, and agricultural services at your fingertips."}
          {lang === 'te' && "ఆంధ్రప్రదేశ్ అత్యంత వేగంగా ఎదుగుతున్న పారిశ్రామిక గ్రామం. విమానాశ్రయం, సోలార్ పార్కులు మరియు రైతు సేవలు."}
          {lang === 'hi' && "आंध्र प्रदेश का सबसे तेजी से बढ़ता औद्योगिक ग्राम। हवाई अड्डा, सोलर पार्क और किसान सेवाएं आपके हाथ में।"}
        </p>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
        <span className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <CheckCircle2 size={10} /> Active Panchayat
        </span>
        <span className="badge badge-info" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          Airport KJB
        </span>
      </div>
    </div>
  );
};
