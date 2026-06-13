import { useLanguage } from '../../../core/context/LanguageContext';

// Import subcomponents
import { FeederTimings } from './FeederTimings';
import { MandiPrices } from './MandiPrices';
import { GovtMsp } from './GovtMsp';
import { TractorRentalsList } from './TractorRentalsList';
import { CropAdvisoriesList } from './CropAdvisoriesList';
import { CropHolidays } from './CropHolidays';
import { WaterReservoirsList } from './WaterReservoirsList';
import { RepairMechanicsList } from './RepairMechanicsList';
import { AgriSupportContacts } from './AgriSupportContacts';

type FarmerSubTab = 'feeder' | 'mandi' | 'msp' | 'tractor' | 'advisory' | 'crop-holiday' | 'water' | 'repair' | 'agri-officer';

interface FarmerDeskProps {
  subTab: FarmerSubTab | null;
  onSubTabChange: (subTab: FarmerSubTab | null) => void;
  navSource: 'dashboard' | 'menu';
  onClose?: () => void;
}

export const FarmerDesk = ({
  subTab,
  onSubTabChange,
  navSource,
  onClose
}: FarmerDeskProps) => {
  const { lang } = useLanguage();

  if (subTab === null) {
    return (
      <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', borderBottom: '1px solid hsl(var(--border) / 0.5)', paddingBottom: '8px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>
            🚜 {lang === 'en' ? "Farmer Desk" : lang === 'te' ? "రైతు డెస్క్" : "किसान डेस्क"}
          </span>
          {onClose && (
            <button
              className="btn btn-secondary"
              style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid hsl(var(--primary) / 0.2)' }}
              onClick={onClose}
            >
              🏠 {lang === 'en' ? "Go to Dashboard" : lang === 'te' ? "డాష్‌బోర్డ్‌కు వెళ్ళు" : "डैशबोर्ड पर जाएं"}
            </button>
          )}
        </div>

        <div className="govt-menu-container">
          {/* 1. Feeder Hours */}
          <div className="govt-menu-card" onClick={() => onSubTabChange('feeder')}>
            <div className="govt-menu-icon">⚡</div>
            <div className="govt-menu-info">
              <span className="govt-menu-title">
                {lang === 'en' ? "Feeder Hours" : lang === 'te' ? "కరెంట్ వేళలు" : "फीडर समय"}
              </span>
              <span className="govt-menu-desc">
                {lang === 'en'
                  ? "Check agriculture power supply timings for day and night feeders."
                  : lang === 'te'
                  ? "వ్యవసాయ విద్యుత్ సరఫరా మరియు ఫీడర్ వేళల తాజా సమాచారం."
                  : "दिन और रात के कृषि बिजली फीडर समय की जानकारी।"}
              </span>
            </div>
          </div>

          {/* 2. Mandi Prices */}
          <div className="govt-menu-card" onClick={() => onSubTabChange('mandi')}>
            <div className="govt-menu-icon">📈</div>
            <div className="govt-menu-info">
              <span className="govt-menu-title">
                {lang === 'en' ? "Mandi Prices" : lang === 'te' ? "మార్కెట్ ధరలు" : "मंडी दरें"}
              </span>
              <span className="govt-menu-desc">
                {lang === 'en'
                  ? "Daily market prices for crops and vegetables at Kurnool Mandi."
                  : lang === 'te'
                  ? "కర్నూలు మార్కెట్ యార్డ్ పంటల మరియు కూరగాయల ధరలు."
                  : "कर्नूल मंडी में फसलों और सब्जियों के दैनिक भाव।"}
              </span>
            </div>
          </div>

          {/* 3. Govt MSP */}
          <div className="govt-menu-card" onClick={() => onSubTabChange('msp')}>
            <div className="govt-menu-icon">💰</div>
            <div className="govt-menu-info">
              <span className="govt-menu-title">
                {lang === 'en' ? "Govt MSP" : lang === 'te' ? "మద్దతు ధర" : "एमएसपी दर"}
              </span>
              <span className="govt-menu-desc">
                {lang === 'en'
                  ? "Government Minimum Support Price (MSP) details for key crops."
                  : lang === 'te'
                  ? "ప్రభుత్వం ప్రకటించిన ప్రధాన పంటల కనీస మద్దతు ధరలు."
                  : "प्रमुख फसलों के लिए सरकार द्वारा घोषित न्यूनतम समर्थन मूल्य।"}
              </span>
            </div>
          </div>

          {/* 4. Tractor Rent */}
          <div className="govt-menu-card" onClick={() => onSubTabChange('tractor')}>
            <div className="govt-menu-icon">🚜</div>
            <div className="govt-menu-info">
              <span className="govt-menu-title">
                {lang === 'en' ? "Tractor Rent" : lang === 'te' ? "ట్రాక్టర్ అద్దె" : "ट्रैक्टर किराया"}
              </span>
              <span className="govt-menu-desc">
                {lang === 'en'
                  ? "Book tractors, harvesters, and agriculture machinery on rent."
                  : lang === 'te'
                  ? "వ్యవసాయ పనుల కోసం ట్రాక్టర్లు మరియు హార్వెస్టర్ల అద్దె సేవలు."
                  : "किराए पर ट्रैक्टर, हार्वेस्टर और कृषि मशीनरी बुक करें।"}
              </span>
            </div>
          </div>

          {/* 5. Advisories */}
          <div className="govt-menu-card" onClick={() => onSubTabChange('advisory')}>
            <div className="govt-menu-icon">🌱</div>
            <div className="govt-menu-info">
              <span className="govt-menu-title">
                {lang === 'en' ? "Advisories" : lang === 'te' ? "వ్యవసాయ సలహాలు" : "फसल सलाह"}
              </span>
              <span className="govt-menu-desc">
                {lang === 'en'
                  ? "Seasonal crop advisories, soil health, and pest management guides."
                  : lang === 'te'
                  ? "పంటల రక్షణ, తెగుళ్ల నివారణ మరియు ఎరువుల వాడకంపై సలహాలు."
                  : "मौसमी फसल सलाह, मिट्टी के स्वास्थ्य और कीट प्रबंधन गाइड।"}
              </span>
            </div>
          </div>

          {/* 6. Crop Holiday */}
          <div className="govt-menu-card" onClick={() => onSubTabChange('crop-holiday')}>
            <div className="govt-menu-icon">📅</div>
            <div className="govt-menu-info">
              <span className="govt-menu-title">
                {lang === 'en' ? "Crop Holiday" : lang === 'te' ? "పంట విరామం" : "फसल अवकाश"}
              </span>
              <span className="govt-menu-desc">
                {lang === 'en'
                  ? "Announcements regarding crop holidays and water conservation advisories."
                  : lang === 'te'
                  ? "పంట విరామం మరియు నీటి పొదుపు చర్యలపై తాజా నోటీసులు."
                  : "फसल अवकाश और जल संरक्षण के संबंध में सरकारी सूचनाएं।"}
              </span>
            </div>
          </div>

          {/* 7. Water Levels */}
          <div className="govt-menu-card" onClick={() => onSubTabChange('water')}>
            <div className="govt-menu-icon">💧</div>
            <div className="govt-menu-info">
              <span className="govt-menu-title">
                {lang === 'en' ? "Water Levels" : lang === 'te' ? "నీటి మట్టాలు" : "जल स्तर"}
              </span>
              <span className="govt-menu-desc">
                {lang === 'en'
                  ? "Real-time irrigation water levels of reservoirs and canals."
                  : lang === 'te'
                  ? "స్థానిక జలాశయాలు మరియు కాలువల తాజా నీటి మట్టాల వివరాలు."
                  : "स्थानीय जलाशयों और नहरों के जल स्तर की वर्तमान स्थिति।"}
              </span>
            </div>
          </div>

          {/* 8. Repairs & Motor */}
          <div className="govt-menu-card" onClick={() => onSubTabChange('repair')}>
            <div className="govt-menu-icon">🔧</div>
            <div className="govt-menu-info">
              <span className="govt-menu-title">
                {lang === 'en' ? "Repairs & Motor" : lang === 'te' ? "మోటార్ రిపేర్లు" : "मोटर मरम्मत"}
              </span>
              <span className="govt-menu-desc">
                {lang === 'en'
                  ? "Contacts of local technicians for motor rewinding and tractor repairs."
                  : lang === 'te'
                  ? "మోటార్ రివైండింగ్ మరియు ట్రాక్టర్ మెకానిక్స్ ఫోన్ నంబర్లు."
                  : "मोटर वाइंडिंग और ट्रैक्टर मरम्मत करने वाले स्थानीय कारीगर।"}
              </span>
            </div>
          </div>

          {/* 9. Agri Support */}
          <div className="govt-menu-card" onClick={() => onSubTabChange('agri-officer')}>
            <div className="govt-menu-icon">🧑‍🌾</div>
            <div className="govt-menu-info">
              <span className="govt-menu-title">
                {lang === 'en' ? "Agri Support" : lang === 'te' ? "అధికారులు" : "कृषि सहायता"}
              </span>
              <span className="govt-menu-desc">
                {lang === 'en'
                  ? "Contact local Agriculture Officers, Assistants, and RBK staff."
                  : lang === 'te'
                  ? "వ్యవసాయ శాఖ అధికారులు, సహాయకులు మరియు RBK సిబ్బంది వివరాలు."
                  : "स्थानीय कृषि अधिकारियों और आरबीके कर्मचारियों के संपर्क सूत्र।"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      
      {/* Subtab Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
        {navSource === 'dashboard' ? (
          <button
            className="btn btn-secondary"
            style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem' }}
            onClick={onClose}
          >
            ⬅️ {lang === 'en' ? "Back to Dashboard" : lang === 'te' ? "డ్యాష్‌బోర్డ్‌కు తిరిగి వెళ్ళు" : "डैशबोर्ड पर वापस जाएं"}
          </button>
        ) : (
          <button
            className="btn btn-secondary"
            style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem' }}
            onClick={() => onSubTabChange(null)}
          >
            ⬅️ {lang === 'en' ? "Back to Farmer Desk" : lang === 'te' ? "తిరిగి రైతు సమాచార మెనూకు" : "किसान डेस्क पर वापस जाएं"}
          </button>
        )}
        {onClose && (
          <button
            className="btn btn-secondary"
            style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid hsl(var(--primary) / 0.2)' }}
            onClick={onClose}
          >
            🏠 {lang === 'en' ? "Go to Dashboard" : lang === 'te' ? "డాష్‌బోర్డ్‌కు వెళ్ళు" : "डैशबोर्ड पर जाएं"}
          </button>
        )}
      </div>

      {/* Render subtabs */}
      {subTab === 'feeder' && <FeederTimings />}
      {subTab === 'mandi' && <MandiPrices />}
      {subTab === 'msp' && <GovtMsp />}
      {subTab === 'tractor' && <TractorRentalsList />}
      {subTab === 'advisory' && <CropAdvisoriesList />}
      {subTab === 'crop-holiday' && <CropHolidays />}
      {subTab === 'water' && <WaterReservoirsList />}
      {subTab === 'repair' && <RepairMechanicsList />}
      {subTab === 'agri-officer' && <AgriSupportContacts />}

    </div>
  );
};
