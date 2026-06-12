import { Sun, ArrowUpRight, Landmark, Car, Sprout, ShieldAlert, Droplet, Wrench, UserCheck } from 'lucide-react';
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
  subTab: FarmerSubTab;
  onSubTabChange: (subTab: FarmerSubTab) => void;
}

export const FarmerDesk = ({
  subTab,
  onSubTabChange
}: FarmerDeskProps) => {
  const { lang } = useLanguage();

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      
      {/* Farmer Desk Card Menu Grid - 3x3 Card Layout */}
      <div className="farmer-menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '8px' }}>
        <button
          className={`farmer-menu-card ${subTab === 'feeder' ? 'active' : ''}`}
          onClick={() => onSubTabChange('feeder')}
          aria-label="Agri Feeder Schedule Tab"
        >
          <div className="farmer-menu-icon"><Sun size={16} /></div>
          <span className="farmer-menu-label">{lang === 'en' ? "Feeder Hours" : lang === 'te' ? "కరెంట్ వేళలు" : "फीडर समय"}</span>
        </button>
        <button
          className={`farmer-menu-card ${subTab === 'mandi' ? 'active' : ''}`}
          onClick={() => onSubTabChange('mandi')}
          aria-label="Mandi Rates Tab"
        >
          <div className="farmer-menu-icon"><ArrowUpRight size={16} /></div>
          <span className="farmer-menu-label">{lang === 'en' ? "Mandi Prices" : lang === 'te' ? "మార్కెట్ ధరలు" : "मंडी दरें"}</span>
        </button>
        <button
          className={`farmer-menu-card ${subTab === 'msp' ? 'active' : ''}`}
          onClick={() => onSubTabChange('msp')}
          aria-label="Govt MSP Info Tab"
        >
          <div className="farmer-menu-icon"><Landmark size={16} /></div>
          <span className="farmer-menu-label">{lang === 'en' ? "Govt MSP" : lang === 'te' ? "మద్దతు ధర" : "एमएसपी दर"}</span>
        </button>
        <button
          className={`farmer-menu-card ${subTab === 'tractor' ? 'active' : ''}`}
          onClick={() => onSubTabChange('tractor')}
          aria-label="Tractor Rental Tab"
        >
          <div className="farmer-menu-icon"><Car size={16} /></div>
          <span className="farmer-menu-label">{lang === 'en' ? "Tractor Rent" : lang === 'te' ? "ట్రాక్టర్ అద్దె" : "ट्रैक्टर किराया"}</span>
        </button>
        <button
          className={`farmer-menu-card ${subTab === 'advisory' ? 'active' : ''}`}
          onClick={() => onSubTabChange('advisory')}
          aria-label="Agri Advisory Tab"
        >
          <div className="farmer-menu-icon"><Sprout size={16} /></div>
          <span className="farmer-menu-label">{lang === 'en' ? "Advisories" : lang === 'te' ? "వ్యవసాయ సలహాలు" : "फसल सलाह"}</span>
        </button>
        <button
          className={`farmer-menu-card ${subTab === 'crop-holiday' ? 'active' : ''}`}
          onClick={() => onSubTabChange('crop-holiday')}
          aria-label="Crop Holiday Info Tab"
        >
          <div className="farmer-menu-icon"><ShieldAlert size={16} /></div>
          <span className="farmer-menu-label">{lang === 'en' ? "Crop Holiday" : lang === 'te' ? "పంట విరామం" : "फसल अवकाश"}</span>
        </button>
        <button
          className={`farmer-menu-card ${subTab === 'water' ? 'active' : ''}`}
          onClick={() => onSubTabChange('water')}
          aria-label="Water Reservoirs Tab"
        >
          <div className="farmer-menu-icon"><Droplet size={16} /></div>
          <span className="farmer-menu-label">{lang === 'en' ? "Water Levels" : lang === 'te' ? "నీటి మట్టాలు" : "जल स्तर"}</span>
        </button>
        <button
          className={`farmer-menu-card ${subTab === 'repair' ? 'active' : ''}`}
          onClick={() => onSubTabChange('repair')}
          aria-label="Agri Repair Specialists Tab"
        >
          <div className="farmer-menu-icon"><Wrench size={16} /></div>
          <span className="farmer-menu-label">{lang === 'en' ? "Repairs & Motor" : lang === 'te' ? "మోటార్ రిపేర్లు" : "मोटर मरम्मत"}</span>
        </button>
        <button
          className={`farmer-menu-card ${subTab === 'agri-officer' ? 'active' : ''}`}
          onClick={() => onSubTabChange('agri-officer')}
          aria-label="Agri Support Officers Tab"
        >
          <div className="farmer-menu-icon"><UserCheck size={16} /></div>
          <span className="farmer-menu-label">{lang === 'en' ? "Agri Support" : lang === 'te' ? "అధికారులు" : "कृषि सहायता"}</span>
        </button>
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
