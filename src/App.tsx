import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Building2,
  Sprout,
  Home,
  Briefcase,
  Bell,
  Moon,
  Sun,
  Search,
  ShieldAlert,
  Phone,
  Plane,
  AlertCircle
} from 'lucide-react';

// Contexts
import { useLanguage } from './core/context/LanguageContext';
import { useTheme } from './core/context/ThemeContext';

// Components
import { Modal } from './core/components/Modal';

// Features
import { DashboardView } from './features/dashboard/components/DashboardView';
import { DirectoryDesk } from './features/directory/components/DirectoryDesk';
import { FarmerDesk } from './features/farmer/components/FarmerDesk';
import { HospitalityCatalog } from './features/hospitality/components/HospitalityCatalog';
import { JobsCommerce } from './features/jobs/components/JobsCommerce';
import { InsightsView } from './features/dashboard/components/InsightsView';
import { NoticeDrawer } from './features/notice-board/components/NoticeDrawer';

// Data / Mocks / Types
import { emergencies } from './features/directory/data/directoryData';
import type { IndustrialPlant } from './types';
import { registeredCompanies } from './data/registeredCompanies';
import type { RegisteredCompany } from './data/registeredCompanies';

type ActiveTab = 'home' | 'directory' | 'farmer' | 'hospitality' | 'jobs' | 'insights';
type DirectorySubTab = 'govt' | 'education' | 'grievance' | 'postal' | 'banks' | 'police' | 'hospital' | 'schemes' | 'committees';
type FarmerSubTab = 'feeder' | 'mandi' | 'msp' | 'tractor' | 'advisory' | 'crop-holiday' | 'water' | 'repair' | 'agri-officer';
type JobsCommerceSubTab = 'job' | 'labour' | 'industries';

interface SearchOption {
  name: { en: string; te: string; hi: string };
  category: { en: string; te: string; hi: string };
  icon: string;
  onClick: (
    handleShortcutClick: (tabName: ActiveTab, subTabName?: string, query?: string) => void,
    setActiveTab: (tab: ActiveTab) => void
  ) => void;
}

const searchableOptions: SearchOption[] = [
  // Govt & Info
  {
    name: { en: "Government Officers", te: "ప్రభుత్వ అధికారులు", hi: "सरकारी अधिकारी" },
    category: { en: "Govt & Info", te: "ప్రభుత్వ & సమాచారం", hi: "शासन और सूचना" },
    icon: "👥",
    onClick: (nav) => nav('directory', 'govt')
  },
  {
    name: { en: "Schools & Education", te: "పాఠశాలలు & విద్యా సంస్థలు", hi: "स्कूल और शिक्षा केंद्र" },
    category: { en: "Govt & Info", te: "ప్రభుత్వ & సమాచారం", hi: "शासन और सूचना" },
    icon: "🏫",
    onClick: (nav) => nav('directory', 'education')
  },
  {
    name: { en: "Panchayat Grievance Desk", te: "పంచాయతీ ఫిర్యాదుల విభాగం", hi: "पंचायत शिकायत डेस्क" },
    category: { en: "Govt & Info", te: "ప్రభుత్వ & సమాచారం", hi: "शासन और सूचना" },
    icon: "✍️",
    onClick: (nav) => nav('directory', 'grievance')
  },
  {
    name: { en: "Post Office & Postal Services", te: "తపాలా కార్యాలయం", hi: "डाकघर और डाक सेवाएं" },
    category: { en: "Govt & Info", te: "ప్రభుత్వ & సమాచారం", hi: "शासन और सूचना" },
    icon: "📮",
    onClick: (nav) => nav('directory', 'postal')
  },
  {
    name: { en: "Banks & ATMs", te: "బ్యాంకులు & ఏటీఎంలు", hi: "बैंक और एटीएम" },
    category: { en: "Govt & Info", te: "ప్రభుత్వ & సమాచారం", hi: "शासन और सूचना" },
    icon: "🏦",
    onClick: (nav) => nav('directory', 'banks')
  },
  {
    name: { en: "Police Station", te: "పోలీస్ స్టేషన్", hi: "पुलिस स्टेशन" },
    category: { en: "Govt & Info", te: "ప్రభుత్వ & సమాచారం", hi: "शासन और सूचना" },
    icon: "👮",
    onClick: (nav) => nav('directory', 'police')
  },
  {
    name: { en: "Hospital & PHC", te: "హాస్పిటల్ & PHC", hi: "अस्पताल & पीएचसी" },
    category: { en: "Govt & Info", te: "ప్రభుత్వ & సమాచారం", hi: "शासन और सूचना" },
    icon: "🏥",
    onClick: (nav) => nav('directory', 'hospital')
  },
  {
    name: { en: "Government Schemes", te: "ప్రభుత్వ పథకాలు", hi: "सरकारी योजनाएं" },
    category: { en: "Govt & Info", te: "ప్రభుత్వ & సమాచారం", hi: "शासन और सूचना" },
    icon: "📜",
    onClick: (nav) => nav('directory', 'schemes')
  },
  {
    name: { en: "Village Committees", te: "గ్రామ కమిటీలు", hi: "ग्राम समितियां" },
    category: { en: "Govt & Info", te: "ప్రభుత్వ & సమాచారం", hi: "शासन और सूचना" },
    icon: "🤝",
    onClick: (nav) => nav('directory', 'committees')
  },

  // Farmer Desk
  {
    name: { en: "Power Feeder Schedule", te: "వ్యవసాయ కరెంట్ సరఫరా వేళలు", hi: "कृषि बिजली फीडर समय" },
    category: { en: "Farmer Desk", te: "రైతు డెస్క్", hi: "किसान डेस्क" },
    icon: "⚡",
    onClick: (nav) => nav('farmer', 'feeder')
  },
  {
    name: { en: "Agri Mandi Rates (Crops)", te: "వ్యవసాయ మార్కెట్ ధరలు - పంటలు", hi: "कृषि मंडी दरें - फसलें" },
    category: { en: "Farmer Desk", te: "రైతు డెస్క్", hi: "किसान डेस्क" },
    icon: "🌾",
    onClick: (nav) => nav('farmer', 'mandi')
  },
  {
    name: { en: "Minimum Support Price (MSP)", te: "ప్రభుత్వ కనీస మద్దతు ధర (MSP)", hi: "न्यूनतम समर्थन मूल्य (MSP)" },
    category: { en: "Farmer Desk", te: "రైతు డెస్క్", hi: "किसान डेस्क" },
    icon: "🏷️",
    onClick: (nav) => nav('farmer', 'msp')
  },
  {
    name: { en: "Tractor & Harvester Sharing", te: "ట్రాక్టర్ & హార్వెస్టర్ల అద్దె", hi: "ट्रैक्टर और हार्वेस्टर शेयरिंग" },
    category: { en: "Farmer Desk", te: "రైతు డెస్క్", hi: "किसान डेस्क" },
    icon: "🚜",
    onClick: (nav) => nav('farmer', 'tractor')
  },
  {
    name: { en: "Crop Advisories", te: "వ్యవసాయ సలహాలు", hi: "फसल स्वास्थ्य सलाह" },
    category: { en: "Farmer Desk", te: "రైతు డెస్క్", hi: "किसान डेस्क" },
    icon: "🌱",
    onClick: (nav) => nav('farmer', 'advisory')
  },
  {
    name: { en: "Crop Holiday & Advisories", te: "పంట విరామం & సలహాలు", hi: "फसल अवकाश और सलाह" },
    category: { en: "Farmer Desk", te: "రైతు డెస్క్", hi: "किसान डेस्क" },
    icon: "🍂",
    onClick: (nav) => nav('farmer', 'crop-holiday')
  },
  {
    name: { en: "Irrigation Water Levels", te: "జలాశయాలు & కాలువ నీటి మట్టాలు", hi: "जलाशय और नहर जल स्तर" },
    category: { en: "Farmer Desk", te: "రైతు డెస్క్", hi: "किसान डेस्क" },
    icon: "💧",
    onClick: (nav) => nav('farmer', 'water')
  },
  {
    name: { en: "Motor & Tractor Repairs", te: "మోటార్ & ట్రాక్టర్ మరమ్మతులు", hi: "मोटर और ट्रैक्टर मरम्मत" },
    category: { en: "Farmer Desk", te: "రైతు డెస్క్", hi: "किसान डेस्क" },
    icon: "🔧",
    onClick: (nav) => nav('farmer', 'repair')
  },
  {
    name: { en: "Agri Support Officers", te: "వ్యవసాయ అధికారులు", hi: "कृषि अधिकारी" },
    category: { en: "Farmer Desk", te: "రైతు డెస్క్", hi: "किसान डेस्क" },
    icon: "👨‍🌾",
    onClick: (nav) => nav('farmer', 'agri-officer')
  },

  // Services Catalog
  {
    name: { en: "Food & Restaurants", te: "రెస్టారెంట్లు & భోజనం", hi: "भोजन और रेस्तरां" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🍕",
    onClick: (nav) => nav('hospitality', 'restaurant')
  },
  {
    name: { en: "Hotel/Stays", te: "హోటళ్ళు & వసతి గృహాలు (Hotel/Stays)", hi: "होटल और होमस्टे (Hotel/Stays)" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🏨",
    onClick: (nav) => nav('hospitality', 'hotel')
  },
  {
    name: { en: "Home Rentals & PGs", te: "ఇళ్ళు & పీజీ అద్దెలు", hi: "मकान और पीजी किराया" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🏠",
    onClick: (nav) => nav('hospitality', 'rentals')
  },
  {
    name: { en: "Banquet & Event Halls", te: "ఫంక్షన్ హాళ్ళు & ఈవెంట్స్", hi: "बैंक्वेट और इवेंट हॉल" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🎪",
    onClick: (nav) => nav('hospitality', 'banquet')
  },
  {
    name: { en: "Tuition & Coaching", te: "ట్యూషన్లు & కోచింగ్", hi: "ट्यूशन और कोचिंग" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "📖",
    onClick: (nav) => nav('hospitality', 'tuitions')
  },
  {
    name: { en: "Boutique & Ladies Tailors", te: "బోటిక్ & లేడీస్ టైలర్స్", hi: "बुटीक और लेडीज टेलर्स" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🧵",
    onClick: (nav) => nav('hospitality', 'boutique')
  },
  {
    name: { en: "Cloth Shopping", te: "బట్టల దుకాణాలు", hi: "कपड़ों की दुकानें" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🛍️",
    onClick: (nav) => nav('hospitality', 'clothing')
  },
  {
    name: { en: "Wholesalers & Kirana", te: "హోల్‌సేల్ & కిరాణా వర్తకులు", hi: "थोक और किराना व्यापारी" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🛒",
    onClick: (nav) => nav('hospitality', 'wholesaler')
  },
  {
    name: { en: "Hardware & Electricals", te: "హార్డ్‌വേర్ & ఎలక్ట్రికల్స్", hi: "हार्डवेयर और इलेक्ट्रिकल्स" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🛠️",
    onClick: (nav) => nav('hospitality', 'hardware')
  },
  {
    name: { en: "Stationery & Xerox", te: "స్టేషనరీ & జిరాక్స్", hi: "स्टेशनरी और ज़ेरॉक्स" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "✏️",
    onClick: (nav) => nav('hospitality', 'stationery')
  },
  {
    name: { en: "Event Supply (Tents/Sound)", te: "ఈవెంట్స్ సప్లైస్ (డెకరేషన్/సౌండ్)", hi: "इवेंट आपूर्ति (तंबू / ध्वनि)" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🎤",
    onClick: (nav) => nav('hospitality', 'event_rental')
  },
  {
    name: { en: "Car & Vehicle Rentals", te: "కార్ & వాహనాల అద్దెలు", hi: "कार और वाहन किराया" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🚗",
    onClick: (nav) => nav('hospitality', 'car_rental')
  },
  {
    name: { en: "Driving Schools", te: "డ్రైవింగ్ స్కూల్స్", hi: "ड्राइविंग स्कूल" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🚘",
    onClick: (nav) => nav('hospitality', 'driving_school')
  },
  {
    name: { en: "Medical Stores", te: "మందుల దుకాణాలు", hi: "मेडिकल स्टोर" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "💊",
    onClick: (nav) => nav('hospitality', 'medical')
  },
  {
    name: { en: "Milk Dairies", te: "పాల డెయిరీలు & కేంద్రా‌లు", hi: "दूध डेयरियां" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🥛",
    onClick: (nav) => nav('hospitality', 'dairy')
  },
  {
    name: { en: "Water Cans & Tankers", te: "మినరల్ వాటర్ & ట్యాంకర్లు", hi: "पानी के कैन and टैंकर" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "💧",
    onClick: (nav) => nav('hospitality', 'water_supplier')
  },
  {
    name: { en: "Laundry & Dry Cleaning", te: "లాండ్రీ & ఇస్త్రీ సేవలు", hi: "कपड़े धोने और ड्राई क्लीनिंग" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🧺",
    onClick: (nav) => nav('hospitality', 'laundry')
  },
  {
    name: { en: "Temples", te: "దేవాలయాలు", hi: "मंदिर" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🛕",
    onClick: (nav) => nav('hospitality', 'temple')
  },
  {
    name: { en: "Mosques", te: "మసీదులు", hi: "मस्जिद" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🕌",
    onClick: (nav) => nav('hospitality', 'mosque')
  },
  {
    name: { en: "Churches", te: "చర్చీలు", hi: "चर्च" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "⛪",
    onClick: (nav) => nav('hospitality', 'church')
  },
  {
    name: { en: "Pesticide & Seeds", te: "ఎరువులు & విత్తనాలు", hi: "कीट और बीज" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🌾",
    onClick: (nav) => nav('hospitality', 'pesticide')
  },
  {
    name: { en: "Courier & Cargo", te: "కొరియర్ & కార్గో సేవలు", hi: "कूरियर और कार्गो" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "📦",
    onClick: (nav) => nav('hospitality', 'courier')
  },
  {
    name: { en: "Auto Stand & Autos", te: "ఆటో స్టాండ్ & రవాణా", hi: "ऑटो स्टैंड और ऑटो" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🛺",
    onClick: (nav) => nav('hospitality', 'auto')
  },
  {
    name: { en: "Drivers & Chauffeurs", te: "డ్రైవర్లు & చౌఫర్లు", hi: "चालक और चौफ़र" },
    category: { en: "Services Catalog", te: "సేవల కేటలాగ్", hi: "सेवा निर्देशिका" },
    icon: "🧑‍✈️",
    onClick: (nav) => nav('hospitality', 'drivers')
  },

  // Jobs & Labour
  {
    name: { en: "Job Board", te: "ఉద్యోగ బోర్డు", hi: "जॉब बोर्ड" },
    category: { en: "Jobs & Labour", te: "ఉద్యోగాలు & కార్మికులు", hi: "नौकरियां & श्रमिक" },
    icon: "💼",
    onClick: (nav) => nav('jobs', 'job')
  },
  {
    name: { en: "Labour Registry", te: "కార్మిక రిజిస్ట్రీ", hi: "श्रमिक पंजीकरण" },
    category: { en: "Jobs & Labour", te: "ఉద్యోగాలు & కార్మికులు", hi: "नौकरियां & श्रमिक" },
    icon: "👷",
    onClick: (nav) => nav('jobs', 'labour')
  },
  {
    name: { en: "Mega Industries", te: "మెగా పరిశ్రమలు", hi: "मेगा उद्योग" },
    category: { en: "Jobs & Labour", te: "ఉద్యోగాలు & కార్మికులు", hi: "नौकरियां & श्रमिक" },
    icon: "🏭",
    onClick: (nav) => nav('jobs', 'industries')
  },

  // Insights
  {
    name: { en: "Orvakal Industrial Hub Insights", te: "ఓర్వకల్లు పారిశ్రామిక హబ్ అంతర్దృష్టులు", hi: "ओरवाकल औद्योगिक हब अंतर्दृष्टि" },
    category: { en: "Insights", te: "అంతర్దృష్టులు", hi: "अंतर्दृष्टि" },
    icon: "💡",
    onClick: (nav) => nav('insights')
  }
];

function App() {
  const { lang, setLang, t, getTxt } = useLanguage();
  const { theme, setTheme } = useTheme();

  // Root states
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSos, setShowSos] = useState(true);
  const [showNotificationDrawer, setShowNotificationDrawer] = useState(false);

  // Sub-tabs orchestrators
  const [directorySubTab, setDirectorySubTab] = useState<DirectorySubTab | null>(null);
  const [farmerSubTab, setFarmerSubTab] = useState<FarmerSubTab | null>(null);
  const [jobsCommerceSubTab, setJobsCommerceSubTab] = useState<JobsCommerceSubTab | null>(null);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | null>(null);

  // Navigation source tracking (whether arrived from dashboard quick link or from tab's own menu)
  const [directoryNavSource, setDirectoryNavSource] = useState<'dashboard' | 'menu'>('menu');
  const [farmerNavSource, setFarmerNavSource] = useState<'dashboard' | 'menu'>('menu');

  // Global overlay modals
  const [sosModalOpen, setSosModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrialPlant | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<RegisteredCompany | null>(null);
  const [companiesModalOpen, setCompaniesModalOpen] = useState(false);
  const [isAirportModalOpen, setIsAirportModalOpen] = useState(false);

  // Reset scroll and SOS banner visibility on tab changes
  useEffect(() => {
    const mainEl = document.querySelector('.app-content');
    if (mainEl) {
      mainEl.scrollTop = 0;
    }
    setShowSos(true);
  }, [activeTab]);

  // Sync tab state from the URL path on initial mount
  useEffect(() => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    if (path === 'directory') {
      setActiveTab('directory');
    } else if (path === 'farmer') {
      setActiveTab('farmer');
    } else if (path === 'services' || path === 'hospitality') {
      setActiveTab('hospitality');
    } else if (path === 'jobs') {
      setActiveTab('jobs');
    } else if (path === 'insights') {
      setActiveTab('insights');
    }
  }, []);

  // Update URL path whenever the active tab changes to keep the address bar in sync
  useEffect(() => {
    const path = activeTab === 'home' ? '/' : `/${activeTab === 'hospitality' ? 'services' : activeTab}`;
    if (window.location.pathname !== path) {
      window.history.replaceState({}, '', path);
    }
  }, [activeTab]);

  const matchedOptions = searchQuery.trim() === ''
    ? []
    : searchableOptions.filter(opt => {
        const title = (opt.name[lang] || '').toLowerCase();
        const category = (opt.category[lang] || '').toLowerCase();
        const query = searchQuery.toLowerCase();
        return title.includes(query) || category.includes(query);
      });

  // Nav shortcuts
  const handleShortcutClick = (
    tabName: ActiveTab,
    subTabName?: string,
    query?: string
  ) => {
    setActiveTab(tabName);
    setSearchQuery(query || '');
    if (tabName === 'directory') {
      if (subTabName) {
        setDirectorySubTab(subTabName as DirectorySubTab);
        setDirectoryNavSource('dashboard');
      } else {
        setDirectoryNavSource('menu');
      }
    }
    if (tabName === 'farmer') {
      setFarmerSubTab((subTabName || null) as FarmerSubTab | null);
      if (subTabName) {
        setFarmerNavSource('dashboard');
      } else {
        setFarmerNavSource('menu');
      }
    }
    if (tabName === 'hospitality') {
      setSelectedServiceCategory(subTabName || null);
    }
    if (tabName === 'jobs') {
      if (subTabName === 'business') {
        setActiveTab('hospitality');
        setSelectedServiceCategory(query || null);
        setSearchQuery('');
      } else {
        setJobsCommerceSubTab((subTabName || null) as JobsCommerceSubTab | null);
      }
    }
  };

  // Scroll Fade function for SOS strip
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    if (scrollTop > 50) {
      setShowSos(false);
    } else {
      setShowSos(true);
    }
  };

  return (
    <div className="app-container">
      <div className="device-frame">
        <div className="device-notch"></div>
        {/* Ambient background glows for Liquid Glass effect */}
        <div className="bg-glow bg-glow-1"></div>
        <div className="bg-glow bg-glow-2"></div>

        {/* Global Header */}
        <header className="app-header">
          <div className="header-top">
            <div className="app-branding">
              <div
                className="app-logo-icon"
                style={{
                  background: 'transparent',
                  boxShadow: 'none',
                  padding: 0,
                  overflow: 'visible',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                  {/* Rising Sun Background */}
                  <circle cx="50" cy="38" r="22" fill="url(#sunGradient)" />
                  {/* Sprout/Leaf inside */}
                  <path d="M50 75 V42 C50 42 38 46 38 56 C38 66 50 70 50 70 C50 70 62 66 62 56 C62 46 50 42 50 42 Z" fill="url(#leafGradient)" />
                  <path d="M50 50 C50 50 56 42 62 42 C68 42 68 50 50 56" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
                  {/* Gear Border representing Industrialists */}
                  <path d="M50 12 A38 38 0 0 1 88 50 A38 38 0 0 1 50 88 A38 38 0 0 1 12 50 A38 38 0 0 1 50 12 Z" stroke="url(#gearGradient)" strokeWidth="6" strokeDasharray="16 6" />
                  
                  <defs>
                    <linearGradient id="sunGradient" x1="50" y1="16" x2="50" y2="60" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="leafGradient" x1="50" y1="42" x2="50" y2="75" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#15803d" />
                    </linearGradient>
                    <linearGradient id="gearGradient" x1="12" y1="12" x2="88" y2="88" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="app-title-container">
                <span className="app-title">{t.title}</span>
                <span className="app-subtitle">{t.subtitle}</span>
              </div>
            </div>

            <div className="header-actions">
              <select
                className="lang-selector"
                value={lang}
                onChange={(e) => setLang(e.target.value as any)}
                aria-label="Language Toggle Selector"
              >
                <option value="en">EN</option>
                <option value="te">తెలుగు</option>
                <option value="hi">हिंदी</option>
              </select>

              <button
                className="icon-btn"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                title="Toggle Dark/Light Mode"
              >
                {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
              </button>

              <button 
                className="icon-btn" 
                style={{ position: 'relative' }}
                onClick={() => setShowNotificationDrawer(!showNotificationDrawer)}
                title="Toggle Notice board Drawer"
              >
                <Bell size={15} />
                <span style={{ 
                  position: 'absolute', 
                  top: '-2px', 
                  right: '-2px', 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: '#ef4444' 
                }}></span>
              </button>
            </div>
          </div>

          <div className="search-container">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              className="search-input"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {matchedOptions.length > 0 && (
              <div className="search-results-dropdown">
                {matchedOptions.map((opt, index) => (
                  <button
                    key={index}
                    className="search-result-item"
                    onClick={() => {
                      opt.onClick(handleShortcutClick, setActiveTab);
                      setSearchQuery('');
                    }}
                  >
                    <div className="search-result-info">
                      <span className="search-result-title">
                        {opt.icon} {opt.name[lang]}
                      </span>
                      <span className="search-result-category">
                        {opt.category[lang]}
                      </span>
                    </div>
                    <span className="search-result-badge">
                      {lang === 'en' ? 'Navigate' : lang === 'te' ? 'వెళ్లండి' : 'नेविगेट'}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Scroll-fading SOS Banner */}
        <div className={`sos-strip ${showSos ? '' : 'fade-out'}`} onClick={() => setSosModalOpen(true)}>
          <span className="sos-title">
            <ShieldAlert size={18} />
            {t.emergencySOS}
          </span>
          <span className="badge badge-danger">24/7 CALL</span>
        </div>

        {/* Notice board sliding overlay drawer */}
        {showNotificationDrawer && (
          <NoticeDrawer onClose={() => setShowNotificationDrawer(false)} />
        )}

        {/* Main Content Area */}
        <main className="app-content" onScroll={handleScroll}>
          {activeTab === 'home' && (
            <DashboardView
              onShortcutClick={handleShortcutClick}
              onSosClick={() => setSosModalOpen(true)}
              onAirportClick={() => setIsAirportModalOpen(true)}
            />
          )}

          {activeTab === 'directory' && (
            <DirectoryDesk
              searchQuery={searchQuery}
              subTab={directorySubTab}
              onSubTabChange={setDirectorySubTab}
              navSource={directoryNavSource}
              onClose={() => {
                setDirectorySubTab(null);
                handleShortcutClick('home');
              }}
            />
          )}

          {activeTab === 'farmer' && (
            <FarmerDesk
              subTab={farmerSubTab}
              onSubTabChange={setFarmerSubTab}
              navSource={farmerNavSource}
              onClose={() => {
                setFarmerSubTab(null);
                handleShortcutClick('home');
              }}
            />
          )}

          {activeTab === 'hospitality' && (
            <HospitalityCatalog
              searchQuery={searchQuery}
              selectedServiceCategory={selectedServiceCategory}
              setSelectedServiceCategory={setSelectedServiceCategory}
              onClose={() => {
                setSelectedServiceCategory(null);
                handleShortcutClick('home');
              }}
            />
          )}

          {activeTab === 'jobs' && (
            <JobsCommerce
              searchQuery={searchQuery}
              subTab={jobsCommerceSubTab}
              onSubTabChange={setJobsCommerceSubTab}
              onClose={() => {
                setJobsCommerceSubTab(null);
                handleShortcutClick('home');
              }}
            />
          )}

          {activeTab === 'insights' && (
            <InsightsView 
              onBackClick={() => setActiveTab('home')} 
              onActiveIndustriesClick={() => setCompaniesModalOpen(true)}
              onShortcutClick={handleShortcutClick}
              onCompanySelect={setSelectedCompany}
            />
          )}
        </main>

        {/* Bottom Tab Navigation */}
        <nav className="app-nav">
          <button
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('home');
              setDirectorySubTab(null);
              setFarmerSubTab(null);
              setJobsCommerceSubTab(null);
              setSelectedServiceCategory(null);
            }}
            aria-label="Dashboard Tab"
          >
            <LayoutDashboard className="nav-icon" />
            <span>{t.home}</span>
          </button>
          
          <button
            className={`nav-item ${activeTab === 'directory' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('directory');
              setDirectoryNavSource('menu');
            }}
            aria-label="Govt & Schools Tab"
          >
            <Building2 className="nav-icon" />
            <span>{t.directory}</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'farmer' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('farmer');
              setFarmerNavSource('menu');
            }}
            aria-label="Farmer Desk Tab"
          >
            <Sprout className="nav-icon" />
            <span>{t.rentals}</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'hospitality' ? 'active' : ''}`}
            onClick={() => setActiveTab('hospitality')}
            aria-label="Services Catalog Tab"
          >
            <Home className="nav-icon" />
            <span>{t.services}</span>
          </button>

          <button
            className={`nav-item ${activeTab === 'jobs' ? 'active' : ''}`}
            onClick={() => setActiveTab('jobs')}
            aria-label="Jobs & Local Business Tab"
          >
            <Briefcase className="nav-icon" />
            <span>{t.jobs}</span>
          </button>
        </nav>

        {/* Global Modals */}

        {/* SOS Emergency Modal */}
        <Modal
          isOpen={sosModalOpen}
          onClose={() => setSosModalOpen(false)}
          title={
            <h2 style={{ fontSize: '1.1rem', color: '#be123c', display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
              <ShieldAlert size={20} /> emergency helplines
            </h2>
          }
          innerStyle={{ border: '2px solid #fecaca', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
          closeButtonIconColor="#dc2626"
          closeButtonStyle={{ borderColor: '#fca5a5', color: '#dc2626', backgroundColor: '#ffe4e6' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
            {emergencies.map((emg) => (
              <div key={emg.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'hsl(var(--muted) / 0.4)', borderRadius: '8px' }}>
                <div>
                  <strong style={{ fontSize: '0.8rem', color: 'hsl(var(--foreground))' }}>{getTxt(emg.name)}</strong>
                  <div style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>{getTxt(emg.location)}</div>
                </div>
                <a href={`tel:${emg.phone}`} style={{ backgroundColor: '#ffe4e6', color: '#be123c', border: '1px solid #fecaca', padding: '6px 12px', borderRadius: '6px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Phone size={10} /> {emg.phone}
                </a>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '0.65rem', textAlign: 'center', color: 'hsl(var(--muted-foreground))', marginTop: '10px' }}>
            Click to call directly. Free emergency service numbers function offline.
          </div>
        </Modal>

        {/* Global Mega Industry Details Modal */}
        <Modal
          isOpen={selectedIndustry !== null}
          onClose={() => setSelectedIndustry(null)}
          title="Industrial Desk"
        >
          {selectedIndustry && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h4 style={{ fontSize: '0.9rem', margin: 0 }}>{getTxt(selectedIndustry.name)}</h4>
              <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>
                <strong>Sector:</strong> {getTxt(selectedIndustry.sector)}
              </div>
              <div style={{ fontSize: '0.75rem' }}>
                <strong>Location:</strong> {getTxt(selectedIndustry.location)}
              </div>
              <div style={{ fontSize: '0.75rem' }}>
                <strong>Status:</strong> <span className="badge badge-success">{getTxt(selectedIndustry.status)}</span>
              </div>
              <a
                href={`tel:${selectedIndustry.hrContact}`}
                className="btn btn-primary"
                style={{ textDecoration: 'none', marginTop: '10px', display: 'block', textAlign: 'center' }}
              >
                <Phone size={12} /> Contact HR Office
              </a>
            </div>
          )}
        </Modal>

        {/* Global Active Registered Companies Modal */}
        <Modal
          isOpen={companiesModalOpen}
          onClose={() => setCompaniesModalOpen(false)}
          title={
            <h2 style={{ fontSize: '1.1rem', color: 'hsl(var(--primary))', display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
              🏢 {lang === 'en' ? "Active Registered Companies" : lang === 'te' ? "క్రియాశీల నమోదిత కంపెనీలు" : "सक्रिय पंजीकृत कंपनियां"}
            </h2>
          }
          innerStyle={{ border: '2px solid hsl(var(--primary) / 0.3)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
            <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', margin: 0 }}>
              {lang === 'en' 
                ? "The following companies have formalized registrations and active setup in the Orvakal Industrial Node:"
                : lang === 'te'
                ? "క్రింది సంస్థలు ఓర్వకల్లు పారిశ్రామిక నోడ్‌లో అధికారిక నమోదు మరియు క్రియాశీలక ప్లాంట్లను కలిగి ఉన్నాయి:"
                : "निम्नलिखित कंपनियों ने ओरवाकल औद्योगिक नोड में औपचारिक पंजीकरण और सक्रिय सेटअप किया है:"
              }
            </p>
            {registeredCompanies.map((comp) => (
              <div 
                key={comp.id} 
                style={{ 
                  padding: '12px', 
                  backgroundColor: 'hsl(var(--muted) / 0.35)', 
                  borderRadius: '10px', 
                  border: '1px solid hsl(var(--border) / 0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>{getTxt(comp.name)}</strong>
                  <span className="badge badge-success" style={{ fontSize: '0.6rem' }}>
                    {lang === 'en' ? "Registered" : lang === 'te' ? "నమోదైంది" : "पंजीकृत"}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))', fontWeight: 600 }}>
                  <span>Sector: {getTxt(comp.sector)}</span>
                </div>
                <div style={{ fontSize: '0.68rem', color: 'hsl(var(--muted-foreground))' }}>
                  📍 {getTxt(comp.location)}
                </div>
                <p style={{ fontSize: '0.72rem', color: 'hsl(var(--foreground))', margin: '4px 0 0 0', lineHeight: 1.35 }}>
                  {getTxt(comp.description)}
                </p>
              </div>
            ))}
          </div>
        </Modal>

        {/* Global Registered Company Details Modal */}
        <Modal
          isOpen={selectedCompany !== null}
          onClose={() => setSelectedCompany(null)}
          title="Company Profile"
        >
          {selectedCompany && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h4 style={{ fontSize: '0.9rem', margin: 0, color: 'hsl(var(--primary))', fontWeight: 800 }}>{getTxt(selectedCompany.name)}</h4>
              <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>
                <strong>Sector:</strong> {getTxt(selectedCompany.sector)}
              </div>
              <div style={{ fontSize: '0.75rem' }}>
                <strong>Location:</strong> {getTxt(selectedCompany.location)}
              </div>
              <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>
                <strong>About the Company:</strong>
                <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', margin: '4px 0 0 0', lineHeight: 1.4 }}>
                  {getTxt(selectedCompany.description)}
                </p>
              </div>
            </div>
          )}
        </Modal>

        {/* Global Airport KJB Flight Transit Modal */}
        <Modal
          isOpen={isAirportModalOpen}
          onClose={() => setIsAirportModalOpen(false)}
          title={
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Plane size={18} style={{ color: 'hsl(var(--primary))' }} />
              <span style={{ fontWeight: 800, fontSize: '0.92rem', fontFamily: 'var(--font-heading)' }}>
                Uyyalawada Narasimha Reddy Airport (KJB)
              </span>
            </div>
          }
          backdropFilter={true}
          innerStyle={{ maxWidth: '420px', maxHeight: '85%', overflowY: 'auto', padding: '16px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '6px' }}>
            <p style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.4, margin: 0 }}>
              {lang === 'en' ? 'Orvakal airport connects Kurnool district directly to major cities under the UDAN regional connectivity scheme.' : 
               lang === 'te' ? 'ఉడాన్ కనెక్టివిటీ స్కీమ్ కింద కర్నూలు జిల్లాను ప్రధాన నగరాలకు అనుసంధానించే ఓర్వకల్లు విమానాశ్రయం.' : 
               'उड़ान योजना के तहत कर्नूल जिले को प्रमुख शहरों से जोड़ने वाला ओर्वकल हवाई अड्डा।'}
            </p>

            <div style={{ borderTop: '1px dashed hsl(var(--border))', paddingTop: '10px' }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                📋 Weekly Flight Schedule
              </span>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid hsl(var(--border) / 0.3)' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700 }}>Kurnool (KJB) ➜ Bengaluru (BLR)</div>
                    <div style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>Indigo • Daily • 02:15 PM</div>
                  </div>
                  <span className="badge badge-success" style={{ fontSize: '0.55rem', padding: '2px 6px', height: 'fit-content' }}>Active</span>
                </div>

                <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid hsl(var(--border) / 0.3)' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700 }}>Kurnool (KJB) ➜ Hyderabad (HYD)</div>
                    <div style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>Indigo • Daily • 10:30 AM</div>
                  </div>
                  <span className="badge badge-success" style={{ fontSize: '0.55rem', padding: '2px 6px', height: 'fit-content' }}>Active</span>
                </div>

                <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'hsl(var(--muted) / 0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid hsl(var(--border) / 0.3)' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700 }}>Kurnool (KJB) ➜ Chennai (MAA)</div>
                    <div style={{ fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>Indigo • Tue, Thu, Sat • 04:45 PM</div>
                  </div>
                  <span className="badge badge-success" style={{ fontSize: '0.55rem', padding: '2px 6px', height: 'fit-content' }}>Active</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', backgroundColor: 'hsl(var(--secondary) / 0.1)', padding: '8px', borderRadius: '8px', marginTop: '4px', border: '1px solid hsl(var(--secondary) / 0.15)' }}>
              <AlertCircle size={13} style={{ color: 'hsl(var(--secondary))', flexShrink: 0 }} />
              <span style={{ fontSize: '0.6rem', color: 'hsl(var(--muted-foreground))', fontWeight: 500 }}>
                Note: Reach airport 90 minutes before flight departure.
              </span>
            </div>
          </div>
        </Modal>

      </div>
    </div>
  );
}

export default App;
