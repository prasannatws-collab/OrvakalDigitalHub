import { useState } from 'react';
import { Plane } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';

interface DashboardBannerProps {
  onShortcutClick: (tab: 'home' | 'directory' | 'farmer' | 'hospitality' | 'jobs' | 'insights', subTab?: string, query?: string) => void;
  onAirportClick: () => void;
}

export const DashboardBanner = ({ onShortcutClick, onAirportClick }: DashboardBannerProps) => {
  const { lang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="card banner-card" style={{ padding: '20px', borderRadius: '20px' }}>
        <div>
          <h2 className="logo-orvakal-title">ORVAKAL</h2>
          <p style={{ fontSize: '0.78rem', opacity: 0.95, marginTop: '4px', lineHeight: '1.4' }}>
            {lang === 'en' && "Andhra Pradesh's fast-growing mega industrial hub. Solar parks, flight transit, and agricultural services at your fingertips."}
            {lang === 'te' && "ఆంధ్రప్రదేశ్ అత్యంత వేగంగా ఎదుగుతున్న పారిశ్రామిక గ్రామం. విమానాశ్రయం, సోలార్ పార్కులు మరియు రైతు సేవలు."}
            {lang === 'hi' && "आंध्र प्रदेश का सबसे तेजी से बढ़ता औद्योगिक ग्राम। हवाई अड्डा, सोलर पार्क और किसान सेवाएं आपके हाथ में।"}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
          <span className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(220, 252, 231, 0.2)', color: '#dcfce7', border: '1px solid rgba(34, 197, 94, 0.4)', padding: '4px 10px' }}>
            <span className="pulse-dot-green"></span> Active Panchayat
          </span>
          <button 
            className="badge badge-info" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              backgroundColor: 'rgba(224, 242, 254, 0.2)', 
              color: '#e0f2fe', 
              border: '1px solid rgba(14, 165, 233, 0.4)', 
              padding: '4px 10px',
              cursor: 'pointer',
              outline: 'none',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit',
              fontWeight: 700
            }}
            onClick={onAirportClick}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(224, 242, 254, 0.35)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(224, 242, 254, 0.2)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            }}
          >
            <Plane size={11} /> Airport KJB
          </button>
        </div>

        {/* Premium Investor Zone Button Card */}
        <button 
          style={{
            marginTop: '14px',
            padding: '12px 18px',
            borderRadius: '14px',
            background: isHovered 
              ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.35) 0%, rgba(217, 119, 6, 0.5) 100%)'
              : 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.3) 100%)',
            border: isHovered 
              ? '1px solid rgba(251, 191, 36, 0.8)' 
              : '1px solid rgba(245, 158, 11, 0.5)',
            boxShadow: isHovered
              ? '0 6px 20px rgba(245, 158, 11, 0.3)'
              : '0 4px 12px rgba(245, 158, 11, 0.15)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered ? 'translateY(-1px) scale(1.01)' : 'translateY(0) scale(1)',
            fontFamily: 'inherit',
            fontWeight: 800,
            outline: 'none',
            textAlign: 'left'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => onShortcutClick('insights')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.25rem' }}>💡</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>
                {lang === 'en' ? "Orvakal Industrial Hub Insights" : lang === 'te' ? "ఓర్వకల్లు పారిశ్రామిక హబ్ అంతర్దృష్టులు" : "ओरवाकल औद्योगिक हब अंतर्दृष्टि"}
              </span>
              <span style={{ fontSize: '0.62rem', color: '#fde68a', fontWeight: 700, letterSpacing: '0.05em' }}>
                {lang === 'en' ? "INVESTOR ZONE" : lang === 'te' ? "పెట్టుబడిదారుల జోన్" : "निवेशक क्षेत्र"}
              </span>
            </div>
          </div>
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.15)', 
            borderRadius: '50%', 
            width: '26px', 
            height: '26px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
            transition: 'transform 0.2s'
          }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>➔</span>
          </div>
        </button>
      </div>
    </>
  );
};
