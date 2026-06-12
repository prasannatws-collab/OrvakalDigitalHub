import { stateSchemes } from './schemes/stateSchemes';
import { centralSchemes } from './schemes/centralSchemes';
import { bankSchemes } from './schemes/bankSchemes';
import { postalSchemes } from './schemes/postalSchemes';

import type {
  LocalizedText,
  Language,
  FinancialScheme,
  GovtOffice,
  GovtOfficer,
  EmergencyContact,
  SchoolTeacher,
  GovtScheme,
  NewsItem,
  ServiceWorker,
  Store,
  Vendor,
  RentalProperty,
  JobPost,
  Labour,
  FlightInfo,
  BusInfo,
  TrainInfo,
  MandiRate,
  IndustrialPlant,
  Notice,
  TractorRental,
  CropAdvisory,
  WaterLevel,
  Hotel,
  BanquetHall,
  WorshipPlace,
  Attraction,
  RentalCar,
  PowerSchedule,
  RepairMechanic,
  AgriContact,
  VegMandiRate,
  CommercialShop
} from '../types';

export type {
  LocalizedText,
  Language,
  FinancialScheme,
  GovtOffice,
  GovtOfficer,
  EmergencyContact,
  SchoolTeacher,
  GovtScheme,
  NewsItem,
  ServiceWorker,
  Store,
  Vendor,
  RentalProperty,
  JobPost,
  Labour,
  FlightInfo,
  BusInfo,
  TrainInfo,
  MandiRate,
  IndustrialPlant,
  Notice,
  TractorRental,
  CropAdvisory,
  WaterLevel,
  Hotel,
  BanquetHall,
  WorshipPlace,
  Attraction,
  RentalCar,
  PowerSchedule,
  RepairMechanic,
  AgriContact,
  VegMandiRate,
  CommercialShop
};

// ================== DICTIONARY TRANSLATIONS ==================

export const translations = {
  en: {
    title: "Orvakal Digital Hub",
    subtitle: "Industrial Hub Village Portal",
    home: "Dashboard",
    directory: "Govt & Info",
    services: "Services Catalog",
    rentals: "Farmer Desk",
    jobs: "Jobs & Labour",
    emergency: "Emergency Contacts",
    police: "Police Station",
    hospital: "Hospital & PHC",
    ambulance: "Ambulance",
    fire: "Fire Station",
    searchPlaceholder: "Search services, shops, locations...",
    all: "All",
    govt: "Govt Officers",
    schools: "Schools & Info",
    phone: "Phone",
    email: "Email",
    address: "Address",
    location: "Location",
    posted: "Posted",
    rent: "Rent",
    deposit: "Deposit",
    owner: "Owner",
    salary: "Salary",
    requirements: "Requirements",
    skill: "Skill / Trade",
    dailyRate: "Daily Rate",
    callNow: "Call Now",
    applyNow: "Apply / Inquire",
    available: "Available",
    busy: "Busy / Booked",
    reportIssue: "Panchayat Grievance Desk",
    issueName: "Your Name",
    issuePhone: "Your Phone",
    issueType: "Issue Type",
    issueDesc: "Describe the Issue",
    submitIssue: "Submit Grievance",
    selectIssueType: "Select issue type...",
    water: "Water Supply",
    streetlights: "Streetlights",
    roads: "Roads & Cleanliness",
    power: "Power Cuts",
    others: "Others",
    issueSuccess: "Grievance registered! Tracking ID generated.",
    airportFlights: "Kurnool Airport (Orvakal) Status",
    busSchedules: "RTC Bus & Auto Services",
    from: "From",
    to: "To",
    departure: "Departure",
    arrival: "Arrival",
    days: "Days",
    mandiRates: "Agri Mandi Rates - Crops",
    crop: "Crop / Item",
    priceRange: "Price (per Quintal / kg)",
    trend: "Trend",
    addJob: "Post a Job",
    addLabour: "Register as Labourer",
    addRental: "Post Rental / Stay",
    jobTitle: "Job Title",
    compName: "Company Name",
    jobLoc: "Job Location",
    registerSuccess: "Submitted! Pending review approval.",
    governance: "Local Governance & Panchayat",
    education: "Education & Coaching",
    localBusiness: "Local Services Directory",
    quickStats: "Orvakal At A Glance",
    activeIndustries: "Active Industries",
    openJobs: "Open Jobs",
    availableRentals: "Available Rentals",
    activeLabourers: "Active Labourers",
    mandiPriceTrend: "Mandi Price Trend",
    mandiTrendUp: "Increasing",
    mandiTrendDown: "Decreasing",
    mandiTrendFlat: "Stable",
    emergencySOS: "SOS Emergency Hotlines",
    verified: "Verified",
    viewDetails: "View Details",
    close: "Close",
    
    // PERSONA SELECTORS
    personaTitle: "Quick Recommendations & Links",
    personaPrompt: "Select a persona or quick shortcut link to navigate:",
    personaClear: "Clear Filters",
    student: "Student",
    farmer: "Farmer",
    citizen: "Villager",
    tourist: "Visitor",
    officer: "Officials",
    
    // AGRICULTURAL DESK
    worship: "Worship Places",
    attractions: "Attractions & Day Out",
    rentalCars: "Rental Cars & Cabs",
    feederTimings: "Agri Power Feeder Schedules",
    dayFeeder: "Day Timing (3-Phase)",
    nightFeeder: "Night Timing (3-Phase)",
    agriSupport: "Agri Support Officers",
    repairSpecialists: "Farming Motor & Tractor Repairs",
    vegMandi: "Mandi Rates - Vegetables",
    weather: "Live Orvakal Weather",
    weatherCondition: "Clear, Sun Shining",
    weatherTemp: "36°C (RealFeel 39°C)",
    weatherHumidity: "Humidity: 48% | Wind: 10 km/h",
    electricityFeeder: "Agri Feeder Schedule",
    tractorSharing: "Tractor & Harvester Sharing",
    cropAdvisory: "Crop Advisories",
    waterLevels: "Irrigation Water Levels",
    tractorModel: "Tractor Model",
    waterReservoir: "Reservoir Name",
    level: "Current Level",
    advisory: "Agricultural Advice",
    rentRate: "Hourly Rate",
    reservoirCapacity: "Total Capacity",

    // SERVICES CATALOG DIRECTORY
    servicesTitle: "Local Services Catalog",
    servicesPrompt: "Browse 24 categories of local shops and utility services:",
    backToMenu: "Back to Categories Menu",
    noItems: "No registered shops found in this category.",
    stars: "Star Rating",
    capacity: "Capacity (Guests)",
    timing: "Operating Hours",
    priceRate: "Price Range",
    
    // SERVICES CATEGORIES
    cat_restaurant: "Food & Restaurants",
    cat_hotel: "Hotel/Stays",
    cat_rentals: "Home Rentals & PGs",
    cat_banquet: "Banquet & Event Halls",
    cat_tuitions: "Tuition & Coaching",
    cat_boutique: "Boutique & Ladies Tailors",
    cat_clothing: "Cloth Shopping",
    cat_wholesaler: "Wholesalers & Kirana",
    cat_hardware: "Hardware & Electricals",
    cat_stationery: "Stationery & Xerox",
    cat_event_rental: "Event Supply (Tents/Sound)",
    cat_car_rental: "Car & Vehicle Rentals",
    cat_driving_school: "Driving Schools",
    cat_medical: "Medical Stores",
    cat_dairy: "Milk Dairies",
    cat_water_supplier: "Water Cans & Tankers",
    cat_laundry: "Laundry & Dry Cleaning",
    cat_temple: "Temples",
    cat_mosque: "Mosques",
    cat_church: "Churches",
    cat_pesticide: "Pesticide & Seeds",
    cat_courier: "Courier & Cargo",
    cat_auto: "Auto Stand & Autos",
    cat_drivers: "Drivers & Chauffeurs",
    govtSchemes: "Government Schemes",
    postOffice: "Post Office & Postal Services",
    banks: "Banks & ATMs",
    grievance: "Panchayat Grievance Desk",
    govtOffices: "Government Offices",
    schoolsEdu: "Schools & Education Centres",

    // FLIGHT STUFF
    flightStatus: "Flight Transit Desk",
    flightOnTime: "On Time",
    flightDelayed: "Delayed",

    // TRANSIT STUFF
    transitTransport: "Transit & Transport Desk",
    flightsTab: "Flights (KJB)",
    busesTab: "Buses (APSRTC)",
    trainsTab: "Trains (KRNT)",
    nearestStation: "Nearest Railway Hub: Kurnool City (KRNT) - 25 KM",
    trainNo: "Train No",
    daysRun: "Days",
    govtMsp: "Minimum Support Price (MSP)",
    cropHoliday: "Crop Holiday & Advisories",
    greetingMorning: "Good Morning! Have a productive day.",
    greetingEvening: "Good Evening! Relax after a long day.",
    greetingNight: "Good Night! Rest well.",
    placesOfWorship: "Places of Worship",
    activeIndustriesList: "Active Mega Industries",

    // NEW TRANSLATIONS FOR PHASE 2
    visitingOfficer: "Visiting Officer",
    visitorLink: "Visitor",
    committees: "Committees",
    transport: "Transport",
    allSchemes: "All Schemes",
    stateSchemes: "State Schemes",
    centralSchemes: "Central Schemes",
    bankSchemes: "Bank Schemes",
    postalSchemes: "Postal Schemes",
    fertilizerGuide: "Fertilizer Guide",
    commercialCrops: "Commercial Crops",
    jobBoard: "Job Board",
    labourRegistry: "Labour Registry",
    megaIndustries: "Mega Industries"
  },
  te: {
    title: "ఓర్వకల్లు డిజిటల్ హబ్",
    subtitle: "పారిశ్రామిక హబ్ గ్రామ పోర్టల్",
    home: "డాష్‌బోర్డ్",
    directory: "ప్రభుత్వ & సమాచారం",
    services: "సేవల కేటలాగ్",
    rentals: "రైతు డెస్క్",
    jobs: "ఉద్యోగాలు & కార్మికులు",
    emergency: "అత్యవసర కాంటాక్ట్స్",
    police: "పోలీస్ స్టేషన్",
    hospital: "హాస్పిటల్ & PHC",
    ambulance: "అంబులెన్స్",
    fire: "ఫైర్ స్టేషన్",
    searchPlaceholder: "సేవలు, షాపులు, ప్రదేశాలను వెతకండి...",
    all: "అన్నీ",
    govt: "ప్రభుత్వ అధికారులు",
    schools: "పాఠశాలలు & వివరాలు",
    phone: "ఫోన్",
    email: "ఈమెయిల్",
    address: "చిరునామా",
    location: "ప్రదేశం",
    posted: "పోస్ట్ చేయబడింది",
    rent: "అద్దె",
    deposit: "డిపాజిట్",
    owner: "యజమాని",
    salary: "జీతం",
    requirements: "అర్హతలు",
    skill: "నైపుణ్యం / పని",
    dailyRate: "రోజువారీ రేటు",
    callNow: "కాల్ చేయండి",
    applyNow: "దరఖాస్తు / విచారణ",
    available: "అందుబాటులో ఉంది",
    busy: "అందుబాటులో లేదు",
    reportIssue: "పంచాయతీ ఫిర్యాదుల విభాగం",
    issueName: "మీ పేరు",
    issuePhone: "మీ ఫోన్ నంబర్",
    issueType: "సమస్య రకం",
    issueDesc: "సమస్య వివరణ",
    submitIssue: "ఫిర్యాదు సమర్పించండి",
    selectIssueType: "సమస్య రకాన్ని ఎంచుకోండి...",
    water: "తాగునీటి సరఫరా",
    streetlights: "వీధి దీపాలు",
    roads: "రోడ్లు & శుభ్రత",
    power: "విద్యుత్ కోతలు",
    others: "ఇతర సమస్యలు",
    issueSuccess: "ఫిర్యాదు నమోదైంది! ట్రాకింగ్ ఐడీ క్రియేట్ చేయబడింది.",
    airportFlights: "కర్నూలు ఎయిర్‌పోర్ట్ (ఓర్వకల్లు) స్థితి",
    busSchedules: "RTC బస్సు & ఆటో సర్వీసులు",
    from: "నుండి",
    to: "వరకు",
    departure: "బయలుదేరే సమయం",
    arrival: "చేరుకునే సమయం",
    days: "రోజులు",
    mandiRates: "వ్యవసాయ మార్కెట్ ధరలు - పంటలు",
    crop: "పంట / వస్తువు",
    priceRange: "ధర (క్వింటాల్ / కిలోకు)",
    trend: "ధోరణి",
    addJob: "ఉద్యోగ పోస్టింగ్",
    addLabour: "కార్మికుడిగా నమోదు",
    addRental: "అద్దె ఇల్లు / గది నమోదు",
    jobTitle: "ఉద్యోగ హోదా",
    compName: "సంస్థ పేరు",
    jobLoc: "ఉద్యోగ ప్రదేశం",
    registerSuccess: "సమర్పించబడింది! నిర్వాహకుల ఆమోదం కోసం పరిశీలనలో ఉంది.",
    governance: "స్థానిక పరిపాలన & పంచాయతీ",
    education: "విద్యా సంస్థలు & కోచింగ్",
    localBusiness: "స్థానిక సేవల డైరెక్టరీ",
    quickStats: "ఓర్వకల్లు ఒక చూపులో",
    activeIndustries: "క్రియాశీల పరిశ్రమలు",
    openJobs: "మొత్తం ఉద్యోగాలు",
    availableRentals: "అందుబాటులో ఉన్న ఇళ్ళు",
    activeLabourers: "ఉపయోగపడే కార్మికులు",
    mandiPriceTrend: "మార్కెట్ ధరల ధోరణి",
    mandiTrendUp: "పెరుగుతోంది",
    mandiTrendDown: "తగ్గుతోంది",
    mandiTrendFlat: "స్థిరంగా ఉంది",
    emergencySOS: "SOS అత్యవసర హెల్ప్‌లైన్లు",
    verified: "ధృవీకరించబడింది",
    viewDetails: "వివరాలు చూడండి",
    close: "మూసివేయి",
    
    // PERSONA SELECTORS
    personaTitle: "శీఘ్ర సిఫార్సులు & లింకులు",
    personaPrompt: "సమాచారం కోసం పాత్ర లేదా శీఘ్ర లింక్‌ను ఎంచుకోండి:",
    personaClear: "ఫిల్టర్లు క్లియర్ చేయి",
    student: "విద్యార్థి",
    farmer: "రైతు",
    citizen: "గ్రామస్తుడు",
    tourist: "సందర్శకుడు",
    officer: "అధికారులు",
    
    // AGRICULTURAL DESK
    worship: "ఆరాధనా స్థలాలు",
    attractions: "సందర్శనీయ స్థలాలు",
    rentalCars: "రెంటల్ కార్లు & క్యాబ్‌లు",
    feederTimings: "వ్యవసాయ కరెంట్ సరఫరా వేళలు",
    dayFeeder: "పగటి పూట కరెంట్ (3-ఫేస్)",
    nightFeeder: "రాత్రి పూట కరెంట్ (3-ఫేస్)",
    agriSupport: "వ్యవసాయ అధికారులు",
    repairSpecialists: "మోటార్ & ట్రాక్టర్ మరమ్మతులు",
    vegMandi: "కూరగాయల మార్కెట్ ధరలు",
    weather: "ఓర్వకల్లు వాతావరణ సమాచారం",
    weatherCondition: "ఎండగా ఉంది",
    weatherTemp: "36°C (ఫీలింగ్ 39°C)",
    weatherHumidity: "తేమ: 48% | గాలి: గంటకు 10 కి.మీ",
    electricityFeeder: "వ్యవసాయ ఫీడర్ వేళలు",
    tractorSharing: "ట్రాక్టర్ & హార్వెస్టర్ల అద్దె",
    cropAdvisory: "వ్యవసాయ సలహాలు (Crop Advisory)",
    waterLevels: "జలాశయాలు & కాలువ నీటి మట్టాలు",
    tractorModel: "ట్రాక్టర్ మోడల్",
    waterReservoir: "జలాశయం పేరు",
    level: "ప్రస్తుత మట్టం",
    advisory: "వ్యవసాయ సలహా",
    rentRate: "గంటకు అద్దె రేటు",
    reservoirCapacity: "మొత్తం సామర్థ్యం",

    // SERVICES CATALOG DIRECTORY
    servicesTitle: "స్థానిక సేవల కేటలాగ్",
    servicesPrompt: "24 రకాల స్థానిక దుకాణాలు మరియు సేవల వివరాలు చూడండి:",
    backToMenu: "తిరిగి కేటగిరీల మెనూకు వెళ్ళండి",
    noItems: "ఈ విభాగంలో ఇంకా ఎటువంటి దుకాణాలు నమోదు కాలేదు.",
    stars: "స్టార్ రేటింగ్",
    capacity: "సామర్థ్యం (అతిథులు)",
    timing: "పని వేళలు",
    priceRate: "ధరల వివరాలు",
    
    // SERVICES CATEGORIES
    cat_restaurant: "రెస్టారెంట్లు & భోజనం",
    cat_hotel: "హోటళ్ళు & వసతి గృహాలు (Hotel/Stays)",
    cat_rentals: "ఇళ్ళు & పీజీ అద్దెలు",
    cat_banquet: "ఫంక్షన్ హాళ్ళు & ఈవెంట్స్",
    cat_tuitions: "ట్యూషన్లు & కోచింగ్",
    cat_boutique: "బోటిక్ & లేడీస్ టైలర్స్",
    cat_clothing: "బట్టల దుకాణాలు",
    cat_wholesaler: "హోల్‌సేల్ & కిరాణా వర్తకులు",
    cat_hardware: "హార్డ్‌വേర్ & ఎలక్ట్రికల్స్",
    cat_stationery: "స్టేషనరీ & జిరాక్స్",
    cat_event_rental: "ఈవెంట్స్ సప్లైస్ (డెకరేషన్/సౌండ్)",
    cat_car_rental: "కార్ & వాహనాల అద్దెలు",
    cat_driving_school: "డ్రైవింగ్ స్కూల్స్",
    cat_medical: "మందుల దుకాణాలు",
    cat_dairy: "పాల డెయిరీలు & కేంద్రా‌లు",
    cat_water_supplier: "మినరల్ వాటర్ & ట్యాంకర్లు",
    cat_laundry: "లాండ్రీ & ఇస్త్రీ సేవలు",
    cat_temple: "దేవాలయాలు",
    cat_mosque: "మసీదులు",
    cat_church: "చర్చీలు",
    cat_pesticide: "ఎరువులు & విత్తనాలు",
    cat_courier: "కొరియర్ & కార్గో సేవలు",
    cat_auto: "ఆటో స్టాండ్ & రవాణా",
    cat_drivers: "డ్రైవర్లు & చౌఫర్లు",
    govtSchemes: "ప్రభుత్వ పథకాలు",
    postOffice: "తపాలా కార్యాలయం",
    banks: "బ్యాంకులు & ఏటీఎంలు",
    grievance: "పంచాయతీ ఫిర్యాదుల విభాగం",
    govtOffices: "ప్రభుత్వ కార్యాలయాలు",
    schoolsEdu: "పాఠశాలలు & విద్యా సంస్థలు",

    // FLIGHT STUFF
    flightStatus: "కర్నూలు విమాన సర్వీసులు",
    flightOnTime: "సమయానికి నడుస్తోంది",
    flightDelayed: "ఆలస్యం",

    // TRANSIT STUFF
    transitTransport: "రవాణా & ప్రయాణ డెస్క్",
    flightsTab: "విమానాలు (KJB)",
    busesTab: "బస్సులు (APSRTC)",
    trainsTab: "రైళ్లు (KRNT)",
    nearestStation: "సమీప రైల్వే జంక్షన్: కర్నూలు సిటీ (KRNT) - 25 కి.మీ",
    trainNo: "రైలు నంబరు",
    daysRun: "నడిచే రోజులు",
    govtMsp: "ప్రభుత్వ కనీస మద్దతు ధర (MSP)",
    cropHoliday: "పంట విరామం & సలహాలు",
    greetingMorning: "శుభోదయం! మీ రోజు విజయవంతం కావాలి.",
    greetingEvening: "శుభ సాయంత్రం! కాసేపు విశ్రాంతి తీసుకోండి.",
    greetingNight: "శుభ రాత్రి! సుఖ నిద్ర.",
    placesOfWorship: "ఆరాధనా స్థలాలు",
    activeIndustriesList: "క్రియాశీల మెగా పరిశ్రమలు",

    // NEW TRANSLATIONS FOR PHASE 2
    visitingOfficer: "సందర్శక అధికారి",
    visitorLink: "సందర్శకుడు",
    committees: "కమిటీలు",
    transport: "రవాణా",
    allSchemes: "అన్ని పథకాలు",
    stateSchemes: "రాష్ట్ర పథకాలు",
    centralSchemes: "కేంద్ర పథకాలు",
    bankSchemes: "బ్యాంక్ పథకాలు",
    postalSchemes: "పోస్టల్ పథకాలు",
    fertilizerGuide: "ఎరువుల మార్గదర్శి",
    commercialCrops: "వాణిజ్య పంటలు",
    jobBoard: "ఉద్యోగ బోర్డు",
    labourRegistry: "కార్మిక రిజిస్ట్రీ",
    megaIndustries: "మెగా పరిశ్రమలు"
  },
  hi: {
    title: "ओरवाकल डिजिटल हब",
    subtitle: "औद्योगिक हब ग्राम पोर्टल",
    home: "डैशबोर्ड",
    directory: "शासन और सूचना",
    services: "सेवा निर्देशिका",
    rentals: "किसान डेस्क",
    jobs: "नौकरियां & श्रमिक",
    emergency: "आपातकालीन संपर्क",
    police: "पुलिस स्टेशन",
    hospital: "अस्पताल & पीएचसी",
    ambulance: "एम्बुलेंस",
    fire: "दमकल केंद्र",
    searchPlaceholder: "सेवाओं, दुकानों और स्थानों को खोजें...",
    all: "सभी",
    govt: "सरकारी अधिकारी",
    schools: "स्कूल और जानकारी",
    phone: "फ़ोन",
    email: "ईमेल",
    address: "पता",
    location: "स्थान",
    posted: "पोस्ट किया गया",
    rent: "किराया",
    deposit: "जमा राशि",
    owner: "मालिक",
    salary: "वेतन",
    requirements: "योग्यता",
    skill: "कौशल / कार्य",
    dailyRate: "दैनिक दर",
    callNow: "कॉल करें",
    applyNow: "आवेदन / पूछताछ",
    available: "उपलब्ध",
    busy: "व्यस्त / बुक",
    reportIssue: "पंचायत शिकायत डेस्क",
    issueName: "आपका नाम",
    issuePhone: "आपका फ़ोन नंबर",
    issueType: "समस्या का प्रकार",
    issueDesc: "समस्या का विवरण",
    submitIssue: "शिकायत दर्ज करें",
    selectIssueType: "समस्या का प्रकार चुनें...",
    water: "पानी की आपूर्ति",
    streetlights: "स्ट्रीटलाइट्स",
    roads: "सड़कें & स्वच्छता",
    power: "बिजली कटौती",
    others: "अन्य समस्याएँ",
    issueSuccess: "शिकायत दर्ज हुई! ट्रैकिंग आईडी जनरेट की गई।",
    airportFlights: "कर्नूल हवाई अड्डा (ओरवाकल) स्थिति",
    busSchedules: "आरटीसी बस और ऑटो सेवाएं",
    from: "कहाँ से",
    to: "कहाँ तक",
    departure: "प्रस्थान",
    arrival: "आगमन",
    days: "दिन",
    mandiRates: "कृषि मंडी दरें - फसलें",
    crop: "फसल / वस्तु",
    priceRange: "मूल्य (प्रति क्विंटल / किलो)",
    trend: "रुझान",
    addJob: "नौकरियाँ पोस्ट करें",
    addLabour: "श्रमिक पंजीकरण",
    addRental: "किराया / कमरा पोस्ट करें",
    jobTitle: "पद",
    compName: "कंपनी का नाम",
    jobLoc: "नौकरी का स्थान",
    registerSuccess: "सबमिट किया गया! समीक्षा और मंजूरी लंबित है।",
    governance: "स्थानीय शासन और पंचायत",
    education: "शिक्षा और कोचिंग",
    localBusiness: "स्थानीय सेवा निर्देशिका",
    quickStats: "ओरवाकल एक नज़र में",
    activeIndustries: "सक्रिय उद्योग",
    openJobs: "खुली नौकरियां",
    availableRentals: "उपलब्ध किराये",
    activeLabourers: "सक्रिय श्रमिक",
    mandiPriceTrend: "मंडी मूल्य रुझान",
    mandiTrendUp: "बढ़ रहा है",
    mandiTrendDown: "घट रहा है",
    mandiTrendFlat: "स्थिर",
    emergencySOS: "एसओएस आपातकालीन हॉटलाइन",
    verified: "सत्यापित",
    viewDetails: "विवरण देखें",
    close: "बंद करें",
    
    // PERSONA SELECTORS
    personaTitle: "त्वरित सिफारिशें और लिंक",
    personaPrompt: "जानकारी के लिए कोई भूमिका या त्वरित शॉर्टकट लिंक चुनें:",
    personaClear: "फ़िल्टर साफ़ करें",
    student: "छात्र",
    farmer: "किसान",
    citizen: "ग्रामीण",
    tourist: "आगंतुक",
    officer: "अधिकारी",
    
    // AGRICULTURAL DESK
    worship: "पूजा स्थल",
    attractions: "आकर्षण और पर्यटन स्थल",
    rentalCars: "किराये की कारें और कैब",
    feederTimings: "कृषि बिजली फीडर समय",
    dayFeeder: "दिन की बिजली आपूर्ति (3-फेज)",
    nightFeeder: "रात की बिजली आपूर्ति (3-फेज)",
    agriSupport: "कृषि अधिकारी",
    repairSpecialists: "मोटर और ट्रैक्टर मरम्मत",
    vegMandi: "सब्जी मंडी दरें",
    weather: "लाइव ओरवाकल मौसम",
    weatherCondition: "मौसम साफ है",
    weatherTemp: "36°C (महसूस 39°C)",
    weatherHumidity: "आर्द्रता: 48% | हवा: 10 किमी/घंटा",
    electricityFeeder: "कृषि फीडर अनुसूची",
    tractorSharing: "ट्रैक्टर और हार्वेस्टर शेयरिंग",
    cropAdvisory: "फसल स्वास्थ्य सलाह (Crop Advisory)",
    waterLevels: "जलाशय और नहर जल स्तर",
    tractorModel: "ट्रैक्टर मॉडल",
    waterReservoir: "जलाशय का नाम",
    level: "वर्तमान स्तर",
    advisory: "कृषि सलाह",
    rentRate: "प्रति घंटा किराया",
    reservoirCapacity: "कुल क्षमता",

    // SERVICES CATALOG DIRECTORY
    servicesTitle: "स्थानीय सेवा सूची",
    servicesPrompt: "स्थानीय दुकानों और उपयोगिता सेवाओं की 24 श्रेणियों को देखें:",
    backToMenu: "श्रेणियों के मेनू पर वापस जाएं",
    noItems: "इस श्रेणी में कोई पंजीकृत दुकान नहीं मिली।",
    stars: "स्टार रेटिंग",
    capacity: "क्षमता (अतिथि)",
    timing: "खुलने का समय",
    priceRate: "मूल्य विवरण",
    
    // SERVICES CATEGORIES
    cat_restaurant: "भोजन और रेस्तरां",
    cat_hotel: "होटल और होमस्टे (Hotel/Stays)",
    cat_rentals: "मकान और पीजी किराया",
    cat_banquet: "बैंक्वेट और इवेंट हॉल",
    cat_tuitions: "ट्यूशन और कोचिंग",
    cat_boutique: "बुटीक और लेडीज टेलर्स",
    cat_clothing: "कपड़ों की दुकानें",
    cat_wholesaler: "थोक और किराना व्यापारी",
    cat_hardware: "हार्डवेयर और इलेक्ट्रिकल्स",
    cat_stationery: "स्टेशनरी और ज़ेरॉक्स",
    cat_event_rental: "इवेंट आपूर्ति (तंबू / ध्वनि)",
    cat_car_rental: "कार और वाहन किराया",
    cat_driving_school: "ड्राइविंग स्कूल",
    cat_medical: "मेडिकल स्टोर",
    cat_dairy: "दूध डेयरियां",
    cat_water_supplier: "पानी के कैन and टैंकर",
    cat_laundry: "कपड़े धोने और ड्राई क्लीनिंग",
    cat_temple: "मंदिर",
    cat_mosque: "मस्जिद",
    cat_church: "चर्च",
    cat_pesticide: "कीटनाशक और बीज",
    cat_courier: "कूरियर और कार्गो",
    cat_auto: "ऑटो स्टैंड और ऑटो",
    cat_drivers: "चालक और चौफ़र",
    govtSchemes: "सरकारी योजनाएं",
    postOffice: "डाकघर और डाक सेवाएं",
    banks: "बैंक और एटीएम",
    grievance: "पंचायत शिकायत डेस्क",
    govtOffices: "सरकारी कार्यालय",
    schoolsEdu: "स्कूल और शिक्षा केंद्र",

    // FLIGHT STUFF
    flightStatus: "उड़ान पारगमन डेस्क",
    flightOnTime: "समय पर",
    flightDelayed: "विलंबित",

    // TRANSIT STUFF
    transitTransport: "पारगमन और परिवहन डेस्क",
    flightsTab: "उड़ानें (KJB)",
    busesTab: "बसें (APSRTC)",
    trainsTab: "ट्रेनें (KRNT)",
    nearestStation: "निकटतम रेलवे स्टेशन: कर्नूल शहर (KRNT) - 25 किमी",
    trainNo: "ट्रेन संख्या",
    daysRun: "दिन",
    govtMsp: "न्यूनतम समर्थन मूल्य (MSP)",
    cropHoliday: "फसल अवकाश और सलाह",
    greetingMorning: "सुप्रभात! आपका दिन उत्पादक रहे।",
    greetingEvening: "शुभ संध्या! एक लंबे दिन के बाद आराम करें।",
    greetingNight: "शुभ रात्रि! अच्छी नींद लें।",
    placesOfWorship: "पूजा स्थल",
    activeIndustriesList: "सक्रिय मेगा उद्योग",

    // NEW TRANSLATIONS FOR PHASE 2
    visitingOfficer: "आगंतुक अधिकारी",
    visitorLink: "आगंतुक",
    committees: "समितियां",
    transport: "परिवहन",
    allSchemes: "सभी योजनाएं",
    stateSchemes: "राज्य योजनाएं",
    centralSchemes: "केंद्र योजनाएं",
    bankSchemes: "बैंक योजनाएं",
    postalSchemes: "डाक योजनाएं",
    fertilizerGuide: "उर्वरक गाइड",
    commercialCrops: "वाणिज्यिक फसलें",
    jobBoard: "जॉब बोर्ड",
    labourRegistry: "श्रमिक पंजीकरण",
    megaIndustries: "मेगा उद्योग"
  }
};

export const govtOffices: GovtOffice[] = [
  {
    id: "office-gp",
    name: { en: "Gram Panchayat Office", te: "గ్రామ పంచాయతీ కార్యాలయం", hi: "ग्राम पंचायत कार्यालय" },
    location: { en: "Main Road, Orvakal", te: "మెయిన్ రోడ్, ఓర్వకల్లు", hi: "मुख्य मार्ग, ओरवाकल" },
    timings: { en: "10:00 AM - 05:00 PM (Sunday Closed)", te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)", hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)" },
    phone: "+91 9440123456",
    icon: "Building2"
  },
  {
    id: "office-sach",
    name: { en: "Gram Sachivalayam (Village Secretariat)", te: "గ్రామ సచివాలయం", hi: "ग्राम सचिवालय" },
    location: { en: "Panchayat Compound, Orvakal", te: "పంచాయతీ ఆవరణ, ఓర్వకల్లు", hi: "पंचायत परिसर, ओरवाकल" },
    timings: { en: "10:00 AM - 05:00 PM (Sunday Closed)", te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)", hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)" },
    phone: "+91 9440654321",
    icon: "ShieldAlert"
  },
  {
    id: "office-rbk",
    name: { en: "Rythu Bharosa Kendram (RBK)", te: "రైతు భరోసా కేంద్రం (RBK)", hi: "रायथू भरोसा केंद्र (आरबीके)" },
    location: { en: "Mandi Bypass Road, Orvakal", te: "మండి బైపాస్ రోడ్, ఓర్వకల్లు", hi: "मंडी बाईपास रोड, ओरवाकल" },
    timings: { en: "08:00 AM - 06:00 PM (Daily)", te: "ఉదయం 8:00 - సాయంత్రం 6:00 (ప్రతిరోజూ)", hi: "सुबह 8:00 - शाम 6:00 (प्रतिदिन)" },
    phone: "+91 9849901235",
    icon: "Sprout"
  },
  {
    id: "office-sro",
    name: { en: "Sub-Registrar Office (SRO)", te: "సబ్-రిజిస్ట్రార్ కార్యాలయం", hi: "उप-पंजीयक कार्यालय" },
    location: { en: "SRO Complex, Old Highway Junction, Orvakal", te: "ఎస్ఆర్ఓ కాంప్లెక్స్, పాత హైవే జంక్షన్, ఓర్వకల్లు", hi: "एसआरओ कॉम्प्लेक्स, पुराना हाईवे जंक्शन, ओरवाकल" },
    timings: { en: "10:00 AM - 05:00 PM (Sunday Closed)", te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)", hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)" },
    phone: "+91 8518290444",
    icon: "FileText"
  },
  {
    id: "office-mro",
    name: { en: "Mandal Revenue Office (MRO Tahsildar)", te: "మండల రెవెన్యూ కార్యాలయం (MRO)", hi: "मंडल राजस्व कार्यालय (एमआरओ)" },
    location: { en: "Court Road, Orvakal", te: "కోర్టు రోడ్, ఓర్వకల్లు", hi: "Court Road, ओरवाकल" },
    timings: { en: "10:00 AM - 05:00 PM (Sunday Closed)", te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)", hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)" },
    phone: "+91 8518290555",
    icon: "Landmark"
  },
  {
    id: "office-mpdo",
    name: { en: "Mandal Parishad Development Office (MPDO)", te: "మండల పరిషత్ అభివృద్ధి కార్యాలయం (MPDO)", hi: "मंडल परिषद विकास कार्यालय" },
    location: { en: "Mandal Parishad Complex, Orvakal", te: "మండల పరిషత్ కార్యాలయం, ఓర్వకల్లు", hi: "मंडल परिषद परिसर, ओरवाकल" },
    timings: { en: "10:00 AM - 05:00 PM (Sunday Closed)", te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)", hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)" },
    phone: "+91 8518290666",
    icon: "Activity"
  },
  {
    id: "office-ms",
    name: { en: "MeeSeva Center", te: "మీసేవ కేంద్రం", hi: "मीसेवा केंद्र" },
    location: { en: "Opposite SBI, Main Road, Orvakal", te: "స్టేట్ బ్యాంక్ ఎదురుగా, మెయిన్ రోడ్, ఓర్వకల్లు", hi: "भारतीय स्टेट बैंक के सामने, मुख्य मार्ग, ओरवाकल" },
    timings: { en: "08:30 AM - 07:30 PM (Sunday Closed)", te: "ఉదయం 8:30 - రాత్రి 7:30 (ఆదివారం సెలవు)", hi: "सुबह 8:30 - शाम 7:30 (रविवार बंद)" },
    phone: "+91 8518290333",
    icon: "Clock"
  },
  {
    id: "office-apiic",
    name: { en: "APIIC Office", te: "APIIC కార్యాలయం", hi: "एपीआईआईसी कार्यालय" },
    location: { en: "Bypass Road, Orvakal", te: "బైపాస్ రోడ్, ఓర్వకల్లు", hi: "बाईपास रोड, ओरवाकल" },
    timings: { en: "09:00 AM - 06:00 PM (Sunday Closed)", te: "ఉదయం 9:00 - సాయంత్రం 6:00 (रविवार बंद)", hi: "सुबह 9:00 - शाम 6:00 (रविवार बंद)" },
    phone: "+91 9848098765",
    icon: "Building2"
  }
];

export const govtOfficers: GovtOfficer[] = [
  {
    id: "govt-1",
    officeId: "office-gp",
    name: {
      en: "Mr. B. Srinivasa Rao",
      te: "శ్రీ బి. శ్రీనివాసరావు",
      hi: "श्री बी. श्रीनिवास राव"
    },
    designation: {
      en: "Gram Panchayat Sarpanch",
      te: "గ్రామ పంచాయతీ సర్పంచ్",
      hi: "ग्राम पंचायत सरपंच"
    },
    department: {
      en: "Local Administration",
      te: "స్థానిక పరిపాలన",
      hi: "स्थानीय प्रशासन"
    },
    phone: "+91 9440123456",
    email: "sarpanch.orvakal@ap.gov.in",
    permissions: [
      { en: "Water connection approval", te: "తాగునీటి కనెక్షన్ అనుమతి", hi: "जल कनेक्शन की स्वीकृति" },
      { en: "Property tax registration", te: "ఆస్తి పన్ను నమోదు", hi: "संपत्ति कर पंजीकरण" },
      { en: "Street construction requests", te: "వీధి నిర్మాణ అభ్యర్థనలు", hi: "सड़क निर्माण अनुरोध" }
    ],
    location: {
      en: "Gram Panchayat Office, Main Road, Orvakal",
      te: "గ్రామ పంచాయతీ కార్యాలయం, మెయిన్ రోడ్, ఓర్వకల్లు",
      hi: "ग्राम पंचायत कार्यालय, मुख्य मार्ग, ओरवाकल"
    },
    timings: {
      en: "10:00 AM - 5:00 PM (Sunday Closed)",
      te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)",
      hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)"
    },
    servicesDescription: {
      en: "Responsible for local civic amenities, drinking water approvals, streetlights, and sanitation maintenance in Orvakal village.",
      te: "తాగునీటి కనెక్షన్ అనుమతులు, వీధి దీపాలు, మరియు పారిశుద్ధ్య పనుల పర్యవేక్షణ, స్థానిక పరిపాలనా సేవలు.",
      hi: "पेयजल आपूर्ति, स्ट्रीट लाइट, और ओरवाकल ग्राम में नागरिक सुविधाओं के प्रबंधन और विकास के लिए जिम्मेदार।"
    }
  },
  {
    id: "govt-2",
    officeId: "office-gp",
    name: {
      en: "Mrs. K. Lakshmi Prasad",
      te: "శ్రీమతి కె. లక్ష్మీ ప్రసాద్",
      hi: "श्रीमती के. लक्ष्मी प्रसाद"
    },
    designation: {
      en: "Panchayat Secretary",
      te: "పంచాయతీ కార్యదర్శి",
      hi: "पंचायत सचिव"
    },
    department: {
      en: "Rural Development",
      te: "గ్రామీణాభివృద్ధి",
      hi: "ग्रामीण विकास"
    },
    phone: "+91 9440654321",
    email: "sec.orvakal-kurnool@ap.gov.in",
    permissions: [
      { en: "Birth / Death certificates", te: "జనన / మరణ ధృవీకరణ పత్రాలు", hi: "जन्म / मृत्यु प्रमाण पत्र" },
      { en: "Trade licenses for local vendors", te: "స్థానిక వర్తక లైసెన్సులు", hi: "స్థానిక व्यापार लाइसेंस" },
      { en: "House construction permission", te: "గృహ నిర్మాణ అనుమతి", hi: "गृह निर्माण अनुमति" }
    ],
    location: {
      en: "Panchayat Office, Block-A, Orvakal",
      te: "పంచాయతీ కార్యాలయం, బ్లాక్-ఎ, ఓర్వకల్లు",
      hi: "पंचायत कार्यालय, ब्लॉक-ए, ओरवाकल"
    },
    timings: {
      en: "09:30 AM - 5:00 PM (Sunday Closed)",
      te: "ఉదయం 9:30 - సాయంత్రం 5:00 (ఆదివారం సెలవు)",
      hi: "सुबह 9:30 - शाम 5:00 (रविवार बंद)"
    },
    servicesDescription: {
      en: "Registers births and deaths, issues trade licenses for shops, processes local property tax, and issues building permits.",
      te: "జనన/మరణ ధృవీకరణ పత్రాలు, దుకాణాల వర్తక లైసెన్సులు, ఆస్తి పన్ను మరియు ఇళ్ల నిర్మాణ అనుమతుల జారీ.",
      hi: "जन्म/मृत्यु पंजीकरण, दुकानों के व्यापार लाइसेंस, संपत्ति कर और गृह निर्माण की अनुमति जारी करने के लिए जिम्मेदार।"
    }
  },
  {
    id: "govt-3",
    officeId: "office-apiic",
    name: {
      en: "Mr. Ramesh Naidu",
      te: "శ్రీ రమేష్ నాయుడు",
      hi: "श्री रमेश नायडू"
    },
    designation: {
      en: "APIIC Industrial Area Manager",
      te: "APIIC పారిశ్రామిక ప్రాంత మేనేజర్",
      hi: "एपीआईआईसी औद्योगिक क्षेत्र प्रबंधक"
    },
    department: {
      en: "AP Industrial Infrastructure Corp",
      te: "ఆంధ్రప్రదేశ్ పారిశ్రామిక మౌలిక సదుపాయాల సంస్థ",
      hi: "आंध्र प्रदेश औद्योगिक बुनियादी ढांचा निगम"
    },
    phone: "+91 9848098765",
    email: "mgr.orvakal@apiic.in",
    permissions: [
      { en: "Industrial land allocation info", te: "పారిశ్రామిక భూమి కేటాయింపు సమాచారం", hi: "औद्योगिक भूमि आवंटन सूचना" },
      { en: "Factory building plan clearance", te: "ఫ్యాక్టరీ భవన నిర్మాణ ప్లాన్ క్లియరెన్స్", hi: "कारखाना भवन योजना मंजूरी" },
      { en: "Industrial power & water approvals", te: "పారిశ్రామిక విద్యుత్ & నీటి అనుమతులు", hi: "औद्योगिक बिजली और पानी की मंजूरी" }
    ],
    location: {
      en: "APIIC Industrial Corridor Admin Building, Bypass Road, Orvakal",
      te: "APIIC పారిశ్రామిక కారిడార్ అడ్మిన్ భవనం, బైపాస్ రోడ్, ఓర్వకల్లు",
      hi: "एपीआईआईसी औद्योगिक गलियारा प्रशासनिक भवन, बाईपास रोड, ओरवाकल"
    },
    timings: {
      en: "09:00 AM - 6:00 PM (Saturday Half Day)",
      te: "ఉదయం 9:00 - సాయంత్రం 6:00 (శనివారం సగం రోజు)",
      hi: "सुबह 9:00 - शाम 6:00 (शनिवार आधा दिन)"
    },
    servicesDescription: {
      en: "Coordinates land allotment for industries, approves factory building plans, and coordinates utilities setup in the Industrial Hub.",
      te: "పరిశ్రమలకు భూముల కేటాయింపు, కర్మాగారాల నిర్మాణ ప్లాన్ ఆమోదాలు, మరియు మౌలిక సదుపాయాల పర్యవేక్షణ.",
      hi: "उद्योगों के लिए भूमि आवंटन, कारखाना भवन निर्माण योजना की मंजूरी, और औद्योगिक क्षेत्र के विकास कार्यों का समन्वय।"
    }
  },
  {
    id: "govt-4",
    officeId: "office-ms",
    name: {
      en: "Orvakal MeeSeva / E-Seva Center",
      te: "ఓర్వకల్లు మీసేవ / ఈ-సేవ కేంద్రం",
      hi: "ओरवाकल मीसेवा / ई-सेवा केंद्र"
    },
    designation: {
      en: "Citizen Service Center (MeeSeva Operator)",
      te: "పౌర సేవల కేంద్రం (మీసేవ ఆపరేటర్)",
      hi: "नागरिक सेवा केंद्र (मीसेवा ऑपरेटर)"
    },
    department: {
      en: "Revenue & Digital Services",
      te: "రెవెన్యూ & డిజిటల్ సేవలు",
      hi: "राजस्व और डिजिटल सेवाएं"
    },
    phone: "+91 8518290333",
    email: "meeseva.orvakal@ap.gov.in",
    permissions: [
      { en: "Caste, Income & Residence Certificates", te: "కుల, ఆదాయ మరియు నివాస ధృవీకరణ పత్రాలు", hi: "जाति, आय और निवास प्रमाण पत्र" },
      { en: "Land Records (Adangal & 1B copies)", te: "భూమి రికార్డులు (అడంగల్ & 1B కాపీలు)", hi: "भूमि रिकॉर्ड (अदंगल और 1B प्रतियां)" },
      { en: "Utility bills & tax payments", te: "కరెంట్ బిల్లులు & పన్నుల చెల్లింపులు", hi: "बिजली बिल और कर भुगतान" }
    ],
    location: {
      en: "Opposite State Bank of India, Main Road, Orvakal",
      te: "స్టేట్ బ్యాంక్ ఎదురుగా, మెయిన్ రోడ్, ఓర్వకల్లు",
      hi: "भारतीय स्टेट बैंक के सामने, मुख्य मार्ग, ओरवाकल"
    },
    timings: {
      en: "08:30 AM - 07:30 PM (Sunday Half Day)",
      te: "ఉదయం 8:30 - రాత్రి 7:30 (ఆదివారం సగం రోజు)",
      hi: "सुबह 8:30 - शाम 7:30 (रविवार आधा दिन)"
    },
    servicesDescription: {
      en: "Single-window portal for all public services: caste, income, residence certificates, land record printouts, tax payments and Aadhaar updates.",
      te: "కుల, ఆదాయ, నివాస ధృవీకరణ పత్రాల దరఖాస్తులు, అడంగల్ & 1B భూ రికార్డులు, మరియు కరెంట్ బిల్లుల చెల్లింపుల డిజిటల్ సేవలు.",
      hi: "जाति, आय, निवास प्रमाण पत्र, भूमि रिकॉर्ड (अदंगल/1B) प्रतिलिपियां, और विभिन्न सरकारी शुल्कों के भुगतान की डिजिटल सेवा।"
    }
  },
  {
    id: "govt-5",
    officeId: "office-rbk",
    name: {
      en: "Rythu Bharosa Kendram (RBK-1)",
      te: "రైతు భరోసా కేంద్రం (RBK-1)",
      hi: "रायथू भरोसा केंद्र (आरबीके-1)"
    },
    designation: {
      en: "Rythu Seva Kendra / Agriculture Assistant",
      te: "రైతు సేవా కేంద్రం / వ్యవసాయ సహాయకుడు",
      hi: "रायथू सेवा केंद्र / कृषि सहायक"
    },
    department: {
      en: "Agriculture & Farmer Welfare",
      te: "వ్యవసాయ & రైతు సంక్షేమ శాఖ",
      hi: "कृषि और किसान कल्याण विभाग"
    },
    phone: "+91 9849901235",
    email: "rbk.orvakal@ap.gov.in",
    permissions: [
      { en: "Seed & Fertilizer subsidies booking", te: "విత్తనాలు & ఎరువుల రాయితీ బుకింగ్", hi: "बीज और उर्वरक सब्सिडी बुकिंग" },
      { en: "Crop Booking (E-Panta registration)", te: "ఈ-పంట నమోదు (Crop Booking)", hi: "फसल बुकिंग (ई-पंटा पंजीकरण)" },
      { en: "Soil health card testing dispatch", te: "మట్టి పరీక్షలు & సలహాలు", hi: "మట్టి పరీక్షలు & సలహాలు" }
    ],
    location: {
      en: "Rythu Bharosa Kendram Building, Mandi Bypass Road, Orvakal",
      te: "రైతు భరోసా కేంద్రం భవనం, మండి బైపాస్ రోడ్, ఓర్వకల్లు",
      hi: "रायथू भरोसा केंद्र भवन, मंडी बाईपास रोड, ओरवाकल"
    },
    timings: {
      en: "08:00 AM - 06:00 PM (Daily)",
      te: "ఉదయం 8:00 - సాయంత్రం 6:00 (ప్రతిరోజూ)",
      hi: "सुबह 8:00 - शाम 6:00 (प्रतिदिन)"
    },
    servicesDescription: {
      en: "Provides certified seeds, subsidized fertilizers, registers crops under E-Panta, and provides free soil testing services to local farmers.",
      te: "రాయితీ విత్తనాలు, ఎరువుల సరఫరా, ఈ-పంట నమోదు సేవలు మరియు ఉచిత మట్టి పరీక్షల సదుపాయం.",
      hi: "किसानों को सब्सिडी वाले बीज और खाद का वितरण, ई-पंटा फसल पंजीकरण, और मिट्टी परीक्षण की सुविधाएं।"
    }
  },
  {
    id: "govt-6",
    officeId: "office-sro",
    name: {
      en: "Sub-Registrar Office (SRO Orvakal)",
      te: "సబ్-రిజిస్ట్రార్ కార్యాలయం (SRO ఓర్వకల్లు)",
      hi: "उप-पंजीयक कार्यालय (SRO ओरवाकल)"
    },
    designation: {
      en: "Sub-Registrar / Document Officer",
      te: "సబ్-రిజిస్ట్రార్ / దస్తావేజుల అధికారి",
      hi: "उप-पंजीयक / दस्तावेज अधिकारी"
    },
    department: {
      en: "Registration & Stamps Dept",
      te: "రిజిస్ట్రేషన్ & స్టాంపుల శాఖ",
      hi: "पंजीकरण और स्टाम्प विभाग"
    },
    phone: "+91 8518290444",
    email: "sro.orvakal@ap.gov.in",
    permissions: [
      { en: "Land & Property registrations", te: "భూమి & ఆస్తుల రిజిస్ట్రేషన్లు", hi: "भूमि और संपत्ति पंजीकरण" },
      { en: "Marriage registration & certificate", te: "వివాహ రిజిస్ట్రేషన్ & సర్టిఫికేట్", hi: "विवाह पंजीकरण और प्रमाण पत्र" },
      { en: "Encumbrance Certificate (EC) issuance", te: "ఈసీ (ఎన్‌కంబరెన్స్ సర్టిఫికేట్) జారీ", hi: "भार प्रमाण पत्र (EC) जारी करना" }
    ],
    location: {
      en: "SRO Complex, Old Highway Junction Road, Orvakal",
      te: "సబ్-రిజిస్ట్రార్ ఆఫీస్ కాంప్లెక్స్, పాత హైవే జంక్షన్, ఓర్వకల్లు",
      hi: "एसआरओ कॉम्प्लेक्स, पुराना हाईवे जंक्शन रोड, ओरवाकल"
    },
    timings: {
      en: "10:00 AM - 05:00 PM (Sunday Closed)",
      te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)",
      hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)"
    },
    servicesDescription: {
      en: "Handles registration of sale deeds, gift deeds, mortgage deeds, issues marriage certificates, and generates Encumbrance Certificates.",
      te: "భూమి, ఆస్తి రిజిస్ట్రేషన్ దస్తావేజులు, వివాహ రిజిస్ట్రేషన్లు మరియు నిరభ్యంతర పత్రం (EC) జారీ.",
      hi: "भूमि और संपत्ति की खरीद-बिक्री का पंजीकरण, विवाह पंजीकरण प्रमाण पत्र और भार प्रमाण पत्र (EC) जारी करने का कार्य।"
    }
  },
  {
    id: "govt-7",
    officeId: "office-mro",
    name: {
      en: "Mandal Revenue Office (MRO Tahsildar)",
      te: "మండల రెవెన్యూ కార్యాలయం (MRO తహశీల్దార్)",
      hi: "मंडल राजस्व कार्यालय (एमआरओ तहसीलदार)"
    },
    designation: {
      en: "Tahsildar / Mandal Magistrate",
      te: "తహశీల్దార్ / మండల మేజిస్ట్రేట్",
      hi: "तहसीलदार / मंडल मजिस्ट्रेट"
    },
    department: {
      en: "Revenue Administration",
      te: "రెవెన్యూ పరిపాలన",
      hi: "राजस्व प्रशासन"
    },
    phone: "+91 8518290555",
    email: "mro.orvakal@ap.gov.in",
    permissions: [
      { en: "Land disputes & mutation approvals", te: "భూమి వివాదాలు & మ్యుటేషన్ ఆమోదాలు", hi: "भूमि विवाद और म्यूटेशन की मंजूरी" },
      { en: "Caste & Income final approvals", te: "కుల, ఆదాయ పత్రాల తుది ఆమోదం", hi: "जाति और आय प्रमाण पत्र की अंतिम मंजूरी" },
      { en: "Mandal law & order coordination", te: "మండల శాంతి భద్రతల సమన్వయం", hi: "मंडल कानून और व्यवस्था समन्वय" }
    ],
    location: {
      en: "Mandal Revenue Office Complex, Court Road, Orvakal",
      te: "మండల రెవెన్యూ కార్యాలయం (MRO), కోర్టు రోడ్, ఓర్వకల్లు",
      hi: "मंडल राजस्व कार्यालय (एमआरओ) परिसर, कोर्ट रोड, ओरवाकल"
    },
    timings: {
      en: "10:00 AM - 05:00 PM (Sunday Closed)",
      te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)",
      hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)"
    },
    servicesDescription: {
      en: "Heads mandal revenue administration, resolves agricultural land boundary disputes, performs land mutation (pattadar passbook updates), and coordinates regional administrative duties.",
      te: "మండల రెవెన్యూ పరిపాలన, వ్యవసాయ భూముల వివాదాల పరిష్కారం, పట్టాదారు పాస్ పుస్తకాల మ్యుటేషన్ అనుమతులు మరియు శాంతిభద్రతల సమన్వయం.",
      hi: "मंडल स्तर पर भूमि नामांतरण (म्यूटेशन) की अंतिम मंजूरी, भूमि विवादों का निपटारा, और मंडल कानून-व्यवस्था का समन्वय।"
    }
  },
  {
    id: "govt-8",
    officeId: "office-mpdo",
    name: {
      en: "Mandal Parishad Development Office (MPDO)",
      te: "మండల పరిషత్ అభివృద్ధి కార్యాలయం (MPDO)",
      hi: "मंडल परिषद विकास कार्यालय (एमपीडीयू)"
    },
    designation: {
      en: "Mandal Development Officer",
      te: "మండల అభివృద్ధి అధికారి",
      hi: "मंडल विकास अधिकारी"
    },
    department: {
      en: "Rural Development & Panchayat Raj",
      te: "గ్రామీణాభివృద్ధి & పంచాయతీ రాజ్",
      hi: "ग्रामीण विकास और पंचायत राज"
    },
    phone: "+91 8518290666",
    email: "mpdo.orvakal@ap.gov.in",
    permissions: [
      { en: "Rural housing schemes sanction (YSR/PMAY)", te: "గ్రామీణ గృహ నిర్మాణ పథకాల మంజూరు", hi: "ग्रामीण आवास योजनाओं की स्वीकृति" },
      { en: "MGNREGS employment works sanction", te: "ఉపాధి హామీ పథకం పనుల మంజూరు", hi: "मनरेगा रोजगार कार्यों की स्वीकृति" },
      { en: "Mandal infrastructure development funds", te: "మండల మౌలిక సదుపాయాల నిధుల నిర్వహణ", hi: "मंडल बुनियादी ढांचा विकास निधि" }
    ],
    location: {
      en: "Mandal Parishad Complex, Govt School Lane, Orvakal",
      te: "మండల పరిషత్ కార్యాలయం, ప్రభుత్వ పాఠశాల వీధి, ఓర్వకల్లు",
      hi: "मंडल परिषद परिसर, सरकारी स्कूल गली, ओरवाकल"
    },
    timings: {
      en: "10:00 AM - 05:00 PM (Sunday Closed)",
      te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)",
      hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)"
    },
    servicesDescription: {
      en: "Executes rural development plans, sanctions central and state welfare schemes (like PMAY housing), manages MGNREGS job card allocations, and handles panchayat development funds.",
      te: "గ్రామీణ అభివృద్ధి ప్రణాళికలు, సంక్షేమ గృహ నిర్మాణ పథకాల మంజూరు, ఉపాధి హామీ జాబ్ కార్డుల మంజూరు మరియు పంచాయతీల నిధుల పర్యవేక్షణ.",
      hi: "कल्याणकारी योजनाओं का क्रियान्वयन, सरकारी आवास योजनाओं की स्वीकृति, और मनरेगा (MGNREGS) रोजगार के कार्यों की देखरेख।"
    }
  },
  {
    id: "govt-9",
    officeId: "office-sach",
    name: {
      en: "Mr. P. Venkatesh",
      te: "శ్రీ పి. వెంకటేష్",
      hi: "श्री पी. वेंकटेश"
    },
    designation: {
      en: "Welfare & Education Assistant",
      te: "సంక్షేమ & విద్యా సహాయకుడు",
      hi: "कल्याण और शिक्षा सहायक"
    },
    department: {
      en: "Welfare & Social Audit",
      te: "సంక్షేమ & సామాజిక ఆడిట్",
      hi: "कल्याण और सामाजिक अंकेक्षण"
    },
    phone: "+91 9491012301",
    email: "wea.sach-orvakal@ap.gov.in",
    permissions: [
      { en: "Pension scheme validation", te: "పింఛను పథక లబ్ధిదారుల ధృవీకరణ", hi: "पेंशन योजना सत्यापन" },
      { en: "Student scholarship registration", te: "విద్యార్థి స్కాలర్‌షిప్ నమోదు", hi: "छात्र छात्रवृत्ति पंजीकरण" },
      { en: "Housing scheme applications review", te: "గృహ నిర్మాణ దరఖాస్తుల పరిశీలన", hi: "आवास योजना आवेदनों की समीक्षा" }
    ],
    location: {
      en: "Gram Sachivalayam Building, Orvakal",
      te: "గ్రామ సచివాలయ భవనం, ఓర్వకల్లు",
      hi: "ग्राम सचिवालय भवन, ओरवाकल"
    },
    timings: {
      en: "10:00 AM - 05:00 PM (Sunday Closed)",
      te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)",
      hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)"
    },
    servicesDescription: {
      en: "Verifies and processes state pension schemes, student scholarships (Talliki Vandanam), and oversees welfare schemes implementation.",
      te: "సామాజిక పింఛన్లు, విద్యా పథకాలు మరియు ఇతర సంక్షేమ కార్యక్రమాల క్షేత్రస్థాయి పరిశీలన మరియు దరఖాస్తుల నిర్వహణ.",
      hi: "सामाजिक सुरक्षा पेंशन, छात्रवृत्ति (तल्लिकी वंदनम) और अन्य कल्याणकारी योजनाओं के आवेदनों का सत्यापन और प्रसंस्करण।"
    }
  },
  {
    id: "govt-10",
    officeId: "office-sach",
    name: {
      en: "Mrs. G. Ramadevi",
      te: "శ్రీమతి జి. రమాదేవి",
      hi: "श्रीमती जी. रमादेवी"
    },
    designation: {
      en: "Village Surveyor",
      te: "గ్రామ సర్వేయర్",
      hi: "ग्राम सर्वेक्षक"
    },
    department: {
      en: "Land Records & Revenue",
      te: "భూ రికార్డులు & రెవెన్యూ",
      hi: "भूमि अभिलेख और राजस्व"
    },
    phone: "+91 9491012302",
    email: "survey.sach-orvakal@ap.gov.in",
    permissions: [
      { en: "Land boundary survey requests", te: "భూ సరిహద్దుల కొలత అభ్యర్థనలు", hi: "भूमि सीमा सर्वेक्षण अनुरोध" },
      { en: "Sub-division of agricultural plots", te: "వ్యవసాయ భూముల సబ్-డివిజన్", hi: "कृषि भूखंडों का उप-विभाजन" },
      { en: "Village map verification", te: "గ్రామ మ్యాప్ ధృవీకరణ", hi: "ग्राम मानचित्र सत्यापन" }
    ],
    location: {
      en: "Gram Sachivalayam Building, Orvakal",
      te: "గ్రామ సచివాలయ భవనం, ఓర్వకల్లు",
      hi: "ग्राम सचिवालय भवन, ओरवाकल"
    },
    timings: {
      en: "10:00 AM - 05:00 PM (Sunday Closed)",
      te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)",
      hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)"
    },
    servicesDescription: {
      en: "Conducts land surveys, assists in resolving boundary disputes, generates sub-division records, and updates village land maps.",
      te: "వ్యవసాయ మరియు నివాస స్థలాల కొలతలు, సరిహద్దు వివాదాల పరిష్కారం మరియు భూ రికార్డుల మ్యాపింగ్ సేవలు.",
      hi: "भूमि सर्वेक्षण, सीमा विवादों के समाधान में सहायता, भूमि उप-विभाजन का रिकॉर्ड और ग्राम मानचित्रों का रख-रखाव।"
    }
  },
  {
    id: "govt-11",
    officeId: "office-sach",
    name: {
      en: "Mr. K. Ashok",
      te: "శ్రీ కె. అశోక్",
      hi: "श्री के. अशोक"
    },
    designation: {
      en: "Panchayat Digital Assistant",
      te: "పంచాయతీ డిజిటల్ సహాయకుడు",
      hi: "पंचायत डिजिटल सहायक"
    },
    department: {
      en: "E-Governance & Digital Services",
      te: "ఈ-గవర్నెన్స్ & డిజిటల్ సేవలు",
      hi: "ई-गवर्नेंस और डिजिटल सेवाएं"
    },
    phone: "+91 9491012303",
    email: "da.sach-orvakal@ap.gov.in",
    permissions: [
      { en: "Certificate printing (Caste/Income)", te: "ధృవీకరణ పత్రాల ముద్రణ", hi: "प्रमाण पत्र मुद्रण" },
      { en: "Aadhaar e-KYC validation", te: "ఆధార్ బయోమెట్రిక్ e-KYC", hi: "आधार ई-केवाईसी सत्यापन" },
      { en: "Online scheme applications upload", te: "ఆన్‌లైన్ పథకాల దరఖాస్తుల అప్‌లోడ్", hi: "ऑनलाइन योजनाओं के आवेदन अपलोड" }
    ],
    location: {
      en: "Gram Sachivalayam Building, Orvakal",
      te: "గ్రామ సచివాలయ భవనం, ఓర్వకల్లు",
      hi: "ग्राम सचिवालय भवन, ओरवाकल"
    },
    timings: {
      en: "10:00 AM - 05:00 PM (Sunday Closed)",
      te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)",
      hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)"
    },
    servicesDescription: {
      en: "Manages digital services at the secretariat, facilitates online portal registrations, processes certificates, and handles Aadhaar-enabled payments.",
      te: "సచివాలయంలోని డిజిటల్ సేవలు, ప్రభుత్వ పథకాల ఆన్‌లైన్ దరఖాస్తుల నమోదు, ఈ-కేవైసీ మరియు బయోమెట్రిక్ ధృవీకరణలు.",
      hi: "सचिवालय में डिजिटल सेवाओं का प्रबंधन, ऑनलाइन पंजीकरण, प्रमाण पत्र प्रसंस्करण और आधार सक्षम भुगतान प्रणाली का संचालन।"
    }
  },
  {
    id: "govt-12",
    officeId: "office-sach",
    name: {
      en: "Mr. B. Suresh",
      te: "శ్రీ బి. సురేష్",
      hi: "श्री बी. सुरेश"
    },
    designation: {
      en: "Ward Amenities Secretary",
      te: "వార్డు సదుపాయాల కార్యదర్శి",
      hi: "वार्ड सुख-सुविधा सचिव"
    },
    department: {
      en: "Civic Infrastructure",
      te: "పౌర మౌలిక సదుపాయాలు",
      hi: "नागरिक बुनियादी ढांचा"
    },
    phone: "+91 9491012304",
    email: "was.sach-orvakal@ap.gov.in",
    permissions: [
      { en: "Streetlight repair requests", te: "వీధి దీపాల మరమ్మతుల నమోదు", hi: "स्ट्रीटलाइट मरम्मत अनुरोध" },
      { en: "Water pipeline leakage repair", te: "తాగునీటి పైప్‌లైన్ లీకేజీ మరమ్మతు", hi: "पानी की पाइपलाइन मरम्मत" },
      { en: "Sanitation & drainage cleaning", te: "డ్రైనేజీ శుభ్రత పనుల పర్యవేక్షణ", hi: "स्वच्छता और जल निकासी सफाई" }
    ],
    location: {
      en: "Gram Sachivalayam Building, Orvakal",
      te: "గ్రామ సచివాలయ భవనం, ఓర్వకల్లు",
      hi: "ग्राम सचिवालय भवन, ओरवाकल"
    },
    timings: {
      en: "10:00 AM - 05:00 PM (Sunday Closed)",
      te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)",
      hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)"
    },
    servicesDescription: {
      en: "Supervises local infrastructure maintenance, resolves drinking water supply issues, coordinates streetlight repairs, and manages sanitation drives in the village.",
      te: "స్థానిక వీధి దీపాలు, డ్రైనేజీ కాలువల శుభ్రత, మరియు తాగునీటి పైప్‌లైన్ల మరమ్మతుల పనుల పర్యవేక్షణ.",
      hi: "वार्ड स्तर पर पेयजल आपूर्ति, स्ट्रीट लाइट मरम्मत, और स्वच्छता अभियानों के प्रबंधन के लिए जिम्मेदार।"
    }
  }
];

export const emergencies: EmergencyContact[] = [
  {
    id: "emg-1",
    name: {
      en: "Orvakal Police Station",
      te: "ఓర్వకల్లు పోలీస్ స్టేషన్",
      hi: "ओरवाकल पुलिस स्टेशन"
    },
    phone: "+91 8518223344",
    type: "police",
    location: {
      en: "Near NH-40, Orvakal Bypass",
      te: "NH-40 సమీపంలో, ఓర్వకల్లు బైపాస్",
      hi: "एनएच-40 के पास, ओरवाकल बाईपास"
    }
  },
  {
    id: "emg-2",
    name: {
      en: "Orvakal Primary Health Center",
      te: "ఓర్వకల్లు ప్రాథమిక ఆరోగ్య కేంద్రం",
      hi: "ओरवाकल प्राथमिक स्वास्थ्य केंद्र"
    },
    phone: "+91 8518256789",
    type: "hospital",
    location: {
      en: "Main Road, opposite Gram Panchayat",
      te: "మెయిన్ రోడ్, గ్రామ పంచాయతీ ఎదురుగా",
      hi: "मुख्य मार्ग, ग्राम पंचायत के सामने"
    }
  },
  {
    id: "emg-3",
    name: {
      en: "Emergency Ambulance Services",
      te: "అత్యవసర అంబులెన్స్ సర్వీస్ (108)",
      hi: "आपातकालीन एम्बुलेंस सेवा (108)"
    },
    phone: "108",
    type: "ambulance",
    location: {
      en: "Kurnool District HQ (Standby in Orvakal)",
      te: "కర్నూలు జిల్లా హెచ్‌క్యూ (ఓర్వకల్లులో స్టాండ్‌బై)",
      hi: "कर्नूल जिला मुख्यालय (ओरवाकल में स्टैंडबाय)"
    }
  },
  {
    id: "emg-4",
    name: {
      en: "Fire & Rescue Station",
      te: "అగ్నిమాపక కేంద్రం (101)",
      hi: "अग्निशमन केंद्र (101)"
    },
    phone: "101",
    type: "fire",
    location: {
      en: "Kurnool Industrial Corridor Fire post",
      te: "కర్నూలు పారిశ్రామిక కారిడార్ ఫైర్ పోస్ట్",
      hi: "कर्नूल औद्योगिक गलियारा फायर पोस्ट"
    }
  },
  {
    id: "emg-5",
    name: {
      en: "NH-40 Toll Plaza Helpline & Towing",
      te: "NH-40 టోల్ ప్లాజా హెల్ప్‌లైన్ & టోయింగ్",
      hi: "एनएच-40 टोल प्लाजा हेल्पलाइन और टोइंग"
    },
    phone: "1033",
    type: "road-emergency",
    location: {
      en: "Orvakal Toll Plaza Crossing, NH-40",
      te: "ఓర్వకల్లు టోల్ ప్లాజా క్రాసింగ్, NH-40",
      hi: "ओरवाकल टोल प्लाजा क्रॉसिंग, एनएच-40"
    }
  },
  {
    id: "emg-6",
    name: {
      en: "Highway Patrol Police & Authorities",
      te: "హైవే పెట్రోల్ పోలీస్ & అధికారులు",
      hi: "राजमार्ग गश्ती पुलिस और अधिकारी"
    },
    phone: "+91 8518290911",
    type: "road-emergency",
    location: {
      en: "Industrial Corridor Outpost, NH-40",
      te: "పారిశ్రామిక కారిడార్ అవుట్‌పోస్ట్, NH-40",
      hi: "औद्योगिक गलियारा चौकी, एनएच-40"
    }
  },
  {
    id: "emg-7",
    name: {
      en: "Emergency Road Towing & Breakdown (Local)",
      te: "అత్యవసర రోడ్ టోయింగ్ & బ్రేక్‌డౌన్ సర్వీస్",
      hi: "आपातकालीन सड़क टोइंग और ब्रेकडाउन सेवा"
    },
    phone: "+91 9848555122",
    type: "road-emergency",
    location: {
      en: "Highway Junction Bypass, Orvakal",
      te: "హైవే జంక్షన్ బైపాస్, ఓర్వకల్లు",
      hi: "राजमार्ग जंक्शन बाईपास, ओरवाकल"
    }
  }
];

export const schools: SchoolTeacher[] = [
  {
    id: "sch-1",
    name: {
      en: "Zilla Parishad High School (ZPHS)",
      te: "జిల్లా పరిషత్ ఉన్నత పాఠశాల (ZPHS)",
      hi: "जिला परिषद हाई स्कूल (ZPHS)"
    },
    schoolName: {
      en: "ZPHS Orvakal",
      te: "ZPHS ఓర్వకల్లు",
      hi: "ZPHS ओरवाकल"
    },
    subject: {
      en: "English & Telugu Medium (Grades 6-10)",
      te: "ఇంగ్లీష్ & తెలుగు మీడియం (6-10 తరగతులు)",
      hi: "अंग्रेजी और तेलुगु माध्यम (कक्षा 6-10)"
    },
    phone: "+91 9989012345",
    type: "school",
    address: {
      en: "School Street, near Gram Panchayat, Orvakal",
      te: "పాఠశాల వీధి, గ్రామ పంచాయతీ సమీపంలో, ఓర్వకల్లు",
      hi: "स्कूल गली, ग्राम पंचायत के पास, ओरवाकल"
    },
    principal: {
      en: "Mr. G. Venkatasubbaiah, M.A., B.Ed.",
      te: "శ్రీ జి. వెంకటсубబయ్య, M.A., B.Ed.",
      hi: "श्री जी. वेंकटसुब्बैया, एम.ए., बी.एड."
    },
    timings: {
      en: "09:00 AM - 04:00 PM (Monday - Saturday)",
      te: "ఉదయం 09:00 - సాయంత్రం 04:00 (సోమ - శని)",
      hi: "सुबह 09:00 - शाम 04:00 (सोमवार - शनिवार)"
    },
    facilities: [
      { en: "Equipped Computer Lab with 15 systems", te: "15 కంప్యూటర్లతో కూడిన కంప్యూటర్ ల్యాబ్", hi: "15 प्रणालियों के साथ सुसज्जित कंप्यूटर लैब" },
      { en: "Science Laboratory", te: "సైన్స్ లాబొరేటరీ", hi: "विज्ञान प्रयोगशाला" },
      { en: "Large Sports Playground", te: "పెద్ద ఆట స్థలం", hi: "बड़ा खेल का मैदान" },
      { en: "Mid-day Meals Kitchen and Dining Hall", te: "మధ్యాహ్న భోజన వంటశాల మరియు డైనింగ్ హాల్", hi: "मध्याह्न भोजन रसोई और भोजन कक्ष" },
      { en: "Library with 1,200 books", te: "1,200 పుస్తకాలతో కూడిన లైబ్రరీ", hi: "1,200 पुस्तकों के साथ पुस्तकालय" }
    ],
    establishedYear: "1968"
  },
  {
    id: "sch-2",
    name: {
      en: "Model School & Junior College",
      te: "మోడల్ స్కూల్ & జూనియర్ కాలేజీ",
      hi: "मॉडल स्कूल और जूनियर कॉलेज"
    },
    schoolName: {
      en: "AP Model School, Orvakal",
      te: "ఏపీ మోడల్ స్కూల్, ఓర్వకల్లు",
      hi: "एपी मॉडल स्कूल, ओरवाकल"
    },
    subject: {
      en: "MPC, BiPC, CEC (Intermediate Secondary)",
      te: "MPC, BiPC, CEC (ఇంటర్మీడియట్)",
      hi: "एमपीसी, बाईपीसी, सीईसी (इंटरमीडिएट)"
    },
    phone: "+91 8123456789",
    type: "school",
    address: {
      en: "NH-40 Bypass Road, near Industrial Corridor, Orvakal",
      te: "NH-40 బైపాస్ రోడ్, పారిశ్రామిక కారిడార్ సమీపంలో, ఓర్వకల్లు",
      hi: "एनएच-40 बाईपास रोड, औद्योगिक गलियारे के पास, ओरवाकल"
    },
    principal: {
      en: "Mrs. V. Prameela Devi, M.Sc., M.Ed.",
      te: "శ్రీమతి వి. ప్రమీల దేవి, M.Sc., M.Ed.",
      hi: "श्रीमती वी. प्रमिला देवी, एम.एससी., एम.एड."
    },
    timings: {
      en: "09:00 AM - 04:30 PM (Monday - Saturday)",
      te: "ఉదయం 09:00 - సాయంత్రం 04:30 (సోమ - శని)",
      hi: "सुबह 09:00 - शाम 04:30 (सोमवार - शनिवार)"
    },
    facilities: [
      { en: "Smart Digital Classrooms", te: "స్మార్ట్ డిజిటల్ తరగతి గదులు", hi: "स्मार्ट डिजिटल कक्षाएं" },
      { en: "Physics, Chemistry, and Biology Laboratories", te: "ఫిజిక్స్, కెమిస్ట్రీ, మరియు బయాలజీ ల్యాబ్‌లు", hi: "भौतिकी, रसायन विज्ञान और जीव विज्ञान प्रयोगशालाएँ" },
      { en: "Dedicated Girls Hostel & Residential Facility", te: "బాలికల హాస్టల్ & నివాస సదుపాయం", hi: "समर्पित गर्ल्स हॉस्टल और आवासीय सुविधा" },
      { en: "Digital Library & Internet access", te: "డిజిటల్ లైబ్రరీ & ఇంటర్నెట్ సదుపాయం", hi: "डिजिटल लाइब्रेरी और इंटरनेट एक्सेस" }
    ],
    establishedYear: "2013"
  },
  {
    id: "sch-3",
    name: {
      en: "Mandal Parishad Upper Primary School (MPUP)",
      te: "మండల పరిషత్ ప్రాథమికోన్నత పాఠశాల (MPUP)",
      hi: "मंडल परिषद उच्च प्राथमिक विद्यालय (MPUP)"
    },
    schoolName: {
      en: "MPUP School, Orvakal",
      te: "MPUP స్కూల్, ఓర్వకల్లు",
      hi: "MPUP स्कूल, ओरवाकल"
    },
    subject: {
      en: "Telugu & English Medium (Grades 1-5)",
      te: "తెలుగు & ఇంగ్లీష్ మీడియం (1-5 తరగతులు)",
      hi: "तेलुगु और अंग्रेजी माध्यम (कक्षा 1-5)"
    },
    phone: "+91 9441098765",
    type: "school",
    address: {
      en: "Old Harijanawada Street, Orvakal",
      te: "పాత హరిజనవాడ వీధి, ఓర్వకల్లు",
      hi: "ओल्ड हरीजनवाड़ा गली, ओरवाकल"
    },
    principal: {
      en: "Mr. S. Abdul Rahim, B.A., T.T.C.",
      te: "శ్రీ ఎస్. అబ్దుల్ రహీమ్, B.A., T.T.C.",
      hi: "श्री एस. अब्दुल रहीम, बी.ए., टी.टी.सी."
    },
    timings: {
      en: "09:00 AM - 03:45 PM (Monday - Saturday)",
      te: "ఉదయం 09:00 - సాయంత్రం 03:45 (సోమ - శని)",
      hi: "सुबह 09:00 - शाम 03:45 (सोमवार - शनिवार)"
    },
    facilities: [
      { en: "Mid-day meals playground", te: "మధ్యాహ్న భోజన సదుపాయం మరియు ఆట స్థలం", hi: "मध्याह्न भोजन और खेल का मैदान" },
      { en: "Clean Drinking Water Reverse Osmosis Plant", te: "మినరల్ వాటర్ ప్లాంట్ సదుపాయం", hi: "शुद्ध पेयजल आरओ प्लांट" }
    ],
    establishedYear: "1985"
  },
  {
    id: "sch-4",
    name: {
      en: "Sri Saraswathi Shishu Mandir",
      te: "శ్రీ సరస్వతి శిశు మందిర్",
      hi: "श्री सरस्वती शिशु मंदिर"
    },
    schoolName: {
      en: "Saraswathi Vidya Mandir, Orvakal",
      te: "సరస్వతి విద్యా మందిర్, ఓర్వకల్లు",
      hi: "सरस्वती विद्या मंदिर, ओरवाकल"
    },
    subject: {
      en: "English Medium with Sanskrit & Value Education (Grades Nursery-10)",
      te: "ఇంగ్లీష్ మీడియం మరియు సంస్కృతం (నర్సరీ-10 తరగతులు)",
      hi: "अंग्रेजी माध्यम, संस्कृत और नैतिक शिक्षा (नर्सरी-10)"
    },
    phone: "+91 9908812345",
    type: "school",
    address: {
      en: "Chowdeswari Temple Lane, Orvakal",
      te: "చౌడేశ్వరి ఆలయ వీధి, ఓర్వకల్లు",
      hi: "चौडेश्वरी मंदिर गली, ओरवाकल"
    },
    principal: {
      en: "Mr. P. Srinivasa Rao, M.Sc., B.Ed.",
      te: "శ్రీ పి. శ్రీనివాసరావు, M.Sc., B.Ed.",
      hi: "श्री पी. श्रीनिवास राव, एम.एससी., बी.एड."
    },
    timings: {
      en: "08:30 AM - 04:00 PM (Monday - Saturday)",
      te: "ఉదయం 08:30 - సాయంత్రం 04:00 (సోమ - శని)",
      hi: "सुबह 08:30 - शाम 04:00 (सोमवार - शनिवार)"
    },
    facilities: [
      { en: "Yoga & Meditation Hall", te: "యోగా & ధ్యాన మందిరం", hi: "योग और ध्यान कक्ष" },
      { en: "Basics Computer Training Lab", te: "కంప్యూటర్ శిక్షణ ల్యాబ్", hi: "बुनियादी कंप्यूटर प्रशिक्षण लैब" },
      { en: "Cultural Activities & Library", te: "సాంస్కృతిక కార్యక్రమాలు & లైబ్రరీ", hi: "सांस्कृतिक गतिविधियां और पुस्तकालय" }
    ],
    establishedYear: "1995"
  }
];

export const flights: FlightInfo[] = [
  {
    id: "flg-1",
    flightNo: "6E-7281",
    airline: { en: "IndiGo", te: "ఇండిగో", hi: "इंडिगो" },
    from: { en: "Kurnool (KJB)", te: "కర్నూలు (KJB)", hi: "कर्नूल (KJB)" },
    to: { en: "Bengaluru (BLR)", te: "బెంగళూరు (BLR)", hi: "बेंगलुरु (BLR)" },
    departure: "11:15 AM",
    arrival: "12:20 PM",
    days: { en: "Mon, Wed, Fri", te: "సోమ, బుధ, శుక్ర", hi: "सोम, बुध, शुक्र" },
    status: { en: "On Time", te: "సమయానికి", hi: "समय पर" }
  },
  {
    id: "flg-2",
    flightNo: "6E-7925",
    airline: { en: "IndiGo", te: "ఇండిగో", hi: "इंडिगो" },
    from: { en: "Kurnool (KJB)", te: "కర్నూలు (KJB)", hi: "कर्नूल (KJB)" },
    to: { en: "Visakhapatnam (VTZ)", te: "విశాఖపట్నం (VTZ)", hi: "विशाखापत्तनम (VTZ)" },
    departure: "02:30 PM",
    arrival: "03:50 PM",
    days: { en: "Tue, Thu, Sat", te: "మంగళ, గురు, శని", hi: "मंगल, गुरु, शनि" },
    status: { en: "Delayed (30m)", te: "ఆలస్యం (30 ని.)", hi: "विलंबित (30 मिनट)" }
  }
];

export const buses: BusInfo[] = [
  {
    id: "bus-1",
    busNo: "APSRTC Palle Velugu",
    route: {
      en: "Kurnool Depot <-> Orvakal <-> Nandyal",
      te: "కర్నూలు డిపో <-> ఓర్వకల్లు <-> నంద్యాల",
      hi: "कर्नूल डिपो <-> ओरवाकल <-> नंदयाल"
    },
    timing: {
      en: "Every 15 minutes (5:00 AM - 10:30 PM)",
      te: "ప్రతి 15 నిమిషాలకు (ఉదయం 5:00 - రాత్రి 10:30)",
      hi: "हर 15 मिनट में (सुबह 5:00 - रात 10:30)"
    },
    type: { en: "Ordinary Rural Bus", te: "పల్లె వెలుగు బస్సు", hi: "साधारण ग्रामीण बस" }
  },
  {
    id: "bus-2",
    busNo: "APSRTC Express",
    route: {
      en: "Kurnool Depot <-> Orvakal <-> Betamcherla",
      te: "కర్నూలు డిపో <-> ఓర్వకల్లు <-> బేతంచెర్ల",
      hi: "कर्नूल डिपो <-> ओरवाकल <-> बेतमचेर्ला"
    },
    timing: {
      en: "Every 45 minutes (6:00 AM - 09:30 PM)",
      te: "ప్రతి 45 నిమిషాలకు (ఉదయం 6:00 - రాత్రి 09:30)",
      hi: "हर 45 मिनट में (सुबह 6:00 - रात 09:30)"
    },
    type: { en: "Express Service", te: "ఎక్స్‌ప్రెస్ సర్వీస్", hi: "एक्सप्रेस सेवा" }
  },
  {
    id: "bus-3",
    busNo: "APSRTC Palle Velugu",
    route: {
      en: "Kurnool Depot <-> Orvakal <-> Banaganapalli",
      te: "కర్నూలు డిపో <-> ఓర్వకల్లు <-> బనగానపల్లి",
      hi: "कर्नूल डिपो <-> ओरवाकल <-> बनगानपल्ली"
    },
    timing: {
      en: "Hourly Service (6:15 AM - 08:30 PM)",
      te: "ప్రతి గంటకు ఒక బస్సు (ఉదయం 6:15 - రాత్రి 08:30)",
      hi: "हर घंटे सेवा (सुबह 6:15 - रात 08:30)"
    },
    type: { en: "Ordinary Rural Bus", te: "పల్లె వెలుగు బస్సు", hi: "साधारण ग्रामीण बस" }
  }
];

export const trains: TrainInfo[] = [
  {
    id: "trn-1",
    trainNo: "12797",
    name: { en: "Venkatadri Express", te: "వెంకటాద్రి ఎక్స్‌ప్రెస్", hi: "वेंकट Adri एक्सप्रेस" },
    route: { en: "Kacheguda (HYD) <-> Kurnool City <-> Chittoor", te: "కాచిగూడ (HYD) <-> కర్నూలు సిటీ <-> చిత్తూరు", hi: "काचेगुडा (HYD) <-> कर्नूल सिटी <-> चित्तूर" },
    timing: { en: "Arrival: 00:58 AM / Departure: 01:00 AM", te: "రాక: 00:58 AM / పోక: 01:00 AM", hi: "आगमन: 00:58 AM / प्रस्थान: 01:00 AM" },
    days: { en: "Daily", te: "ప్రతిరోజూ", hi: "प्रतिदिन" }
  },
  {
    id: "trn-2",
    trainNo: "17693",
    name: { en: "Kacheguda - Guntakal Passenger", te: "కాచిగూడ - గుంతకల్ ప్యాసింజర్", hi: "काचेगुडा - गुंतकल पैसेंजर" },
    route: { en: "Kacheguda <-> Kurnool City <-> Guntakal", te: "కాచిగూడ <-> కర్నూలు సిటీ <-> గుంతకల్", hi: "काचेगुडा <-> कर्नूल सिटी <-> गुंतकल" },
    timing: { en: "Arrival: 09:38 AM / Departure: 09:40 AM", te: "రాక: 09:38 AM / పోక: 09:40 AM", hi: "आगमन: 09:38 AM / प्रस्थान: 09:40 AM" },
    days: { en: "Daily", te: "ప్రతిరోజూ", hi: "प्रतिदिन" }
  },
  {
    id: "trn-3",
    trainNo: "12786",
    name: { en: "Kacheguda - KSR Bengaluru Express", te: "కాచిగూడ - బెంగుళూరు ఎక్స్‌ప్రెస్", hi: "काचेगुडा - बेंगलुरु एक्सप्रेस" },
    route: { en: "Kacheguda <-> Kurnool City <-> Bengaluru (SBC)", te: "కాచిగూడ <-> కర్నూలు సిటీ <-> బెంగళూరు", hi: "काचेगुडा <-> कर्नूल सिटी <-> बेंगलुरु" },
    timing: { en: "Arrival: 11:28 PM / Departure: 11:30 PM", te: "రాక: 11:28 PM / పోక: 11:30 PM", hi: "आगमन: 11:28 PM / प्रस्थान: 11:30 PM" },
    days: { en: "Daily", te: "ప్రతిరోజూ", hi: "प्रतिदिन" }
  }
];

export const mandiRates: MandiRate[] = [
  {
    id: "mnd-1",
    crop: { en: "Cotton (పత్తి)", te: "పత్తి (Cotton)", hi: "कपास (Cotton)" },
    priceRange: { en: "Rs. 6,800 - Rs. 7,400", te: "రూ. 6,800 - రూ. 7,400", hi: "रु. 6,800 - रु. 7,400" },
    trend: "up"
  },
  {
    id: "mnd-2",
    crop: { en: "Groundnut (వేరుశనగ)", te: "వేరుశనగ (Groundnut)", hi: "मूंगफली (Groundnut)" },
    priceRange: { en: "Rs. 5,500 - Rs. 6,200", te: "రూ. 5,500 - రూ. 6,200", hi: "रु. 5,500 - रु. 6,200" },
    trend: "flat"
  },
  {
    id: "mnd-3",
    crop: { en: "Red Chillies (ఎండు మిర్చి)", te: "ఎండు మిర్చి (Red Chillies)", hi: "लाल मिर्च (Red Chillies)" },
    priceRange: { en: "Rs. 18,000 - Rs. 21,500", te: "రూ. 18,000 - రూ. 21,500", hi: "रु. 18,000 - रु. 21,500" },
    trend: "down"
  },
  {
    id: "mnd-4",
    crop: { en: "Paddy Common (వరి)", te: "వరి (Paddy)", hi: "धान (Paddy)" },
    priceRange: { en: "Rs. 2,183 - Rs. 2,203", te: "రూ. 2,183 - రూ. 2,203", hi: "रु. 2,183 - रु. 2,203" },
    trend: "up"
  },
  {
    id: "mnd-5",
    crop: { en: "Bengal Gram (శనగలు)", te: "శనగలు (Bengal Gram)", hi: "चना (Bengal Gram)" },
    priceRange: { en: "Rs. 5,440 - Rs. 5,800", te: "రూ. 5,440 - రూ. 5,800", hi: "रु. 5,440 - रु. 5,800" },
    trend: "flat"
  },
  {
    id: "mnd-6",
    crop: { en: "Maize (మొక్కజొన్న)", te: "మొక్కజొన్న (Maize)", hi: "मक्का (Maize)" },
    priceRange: { en: "Rs. 2,090 - Rs. 2,250", te: "రూ. 2,090 - రూ. 2,250", hi: "रु. 2,090 - रु. 2,250" },
    trend: "up"
  }
];

export const industries: IndustrialPlant[] = [
  {
    id: "ind-1",
    name: {
      en: "Greenco Solar Park",
      te: "గ్రీన్‌కో సోలార్ పార్క్",
      hi: "ग्रीनको सोलर पार्क"
    },
    sector: {
      en: "Renewable Energy (Solar)",
      te: "పునరుత్పాదక ఇంధనం (సోలార్)",
      hi: "अक्षय ऊर्जा (सौर)"
    },
    status: {
      en: "Fully Operational (1000+ MW Capacity)",
      te: "పూర్తిగా అందుబాటులో ఉంది (1000+ మెగావాట్ల సామర్థ్యం)",
      hi: "पूर्णतः चालू (1000+ मेगावाट क्षमता)"
    },
    hrContact: "+91 8518290123",
    location: {
      en: "Kurnool Solar Park Zone, Orvakal Mandal",
      te: "కర్నూలు సోలార్ పార్క్ జోన్, ఓర్వకల్లు మండలం",
      hi: "कर्नूल सोलर पार्क जोन, ओरवाकल मंडल"
    }
  },
  {
    id: "ind-2",
    name: {
      en: "UltraTech Cement Plant",
      te: "అల్ట్రాటెక్ సిమెంట్ ప్లాంట్",
      hi: "अल्ट्राटेक सीमेंट प्लांट"
    },
    sector: {
      en: "Heavy Manufacturing & Infrastructure",
      te: "భారీ తయారీ & మౌలిక సదుపాయాలు",
      hi: "भारी विनिर्माण और बुनियादी ढांचा"
    },
    status: {
      en: "Operational (Mega Cement Plant)",
      te: "అందుబాటులో ఉంది (మెగా సిమెంట్ ప్లాంట్)",
      hi: "चालू (मेगा सीमेंट प्लांट)"
    },
    hrContact: "+91 8518290234",
    location: {
      en: "Industrial Corridor Phase-1, Budawada Road",
      te: "పారిశ్రామిక కారిడార్ ఫేజ్-1, బుడవడ రోడ్",
      hi: "औद्योगिक गलियारा चरण -1, बुडावाड़ा रोड"
    }
  },
  {
    id: "ind-3",
    name: {
      en: "Ramco Cement Grinding Unit",
      te: "రామ్‌కో సిమెంట్స్ లిమిటెడ్ (గ్రైండింగ్ యూనిట్)",
      hi: "रामको सीमेंट ग्राइंडिंग यूनिट"
    },
    sector: {
      en: "Building Materials",
      te: "భవన నిర్మాణ సామగ్రి",
      hi: "भवन निर्माण सामग्री"
    },
    status: {
      en: "Operational (Grinding Unit)",
      te: "అందుబాటులో ఉంది (గ్రైండింగ్ యూనిట్)",
      hi: "चालू (ग्राइंडिंग यूनिट)"
    },
    hrContact: "+91 8518290456",
    location: {
      en: "Nandyal Highway, Orvakal Bypass",
      te: "నంద్యాల హైవే, ఓర్వకల్లు బైపాస్",
      hi: "नंदयाल राजमार्ग, ओरवाकल बाईपास"
    }
  },
  {
    id: "ind-4",
    name: {
      en: "Kurnool Mega Food Park",
      te: "కర్నూలు మెగా ఫుడ్ పార్క్",
      hi: "कर्नूल मेगा फूड पार्क"
    },
    sector: {
      en: "Food Processing & Agro Industries",
      te: "ఆహార ప్రాసెసింగ్ & ఆగ్రో పరిశ్రమలు",
      hi: "खाद्य प्रसंस्करण और कृषि उद्योग"
    },
    status: {
      en: "Under Execution (Allotments Active)",
      te: "నిర్మాణ దశలో ఉంది (కేటాయింపులు ప్రారంభం)",
      hi: "निष्पादन के तहत (आवंटन सक्रिय)"
    },
    hrContact: "+91 8518290789",
    location: {
      en: "APIIC Industrial Area, Orvakal Bypass",
      te: "APIIC పారిశ్రామిక ప్రాంతం, ఓర్వకల్లు",
      hi: "एपीआईआईसी औद्योगिक क्षेत्र, ओरवाकल"
    }
  },
  {
    id: "ind-5",
    name: {
      en: "JSW Steel Processing Facility",
      te: "JSW స్టీల్ ప్రాసెసింగ్ ప్లాంట్",
      hi: "जेएसडब्ल्यू स्टील प्रोसेसिंग प्लांट"
    },
    sector: {
      en: "Metallurgy & Steel Manufacturing",
      te: "లోహశాస్త్రం & ఉక్కు తయారీ",
      hi: "धातुकर्म और इस्पात निर्माण"
    },
    status: {
      en: "Registered & Proposed",
      te: "నమోదైంది & ప్రతిపాదించబడింది",
      hi: "पंजीकृत और प्रस्तावित"
    },
    hrContact: "+91 8518290511",
    location: {
      en: "Kurnool Mega Industrial Hub, Orvakal",
      te: "కర్నూలు మెగా పారిశ్రామిక హబ్, ఓర్వకల్లు",
      hi: "कर्नूल मेगा औद्योगिक केंद्र, ओरवाकल"
    }
  },
  {
    id: "ind-6",
    name: {
      en: "NPTC Solar Power Project",
      te: "NPTC సోలార్ పవర్ ప్రాజెక్ట్",
      hi: "एनपीटीसी सौर ऊर्जा परियोजना"
    },
    sector: {
      en: "Green Energy & Utilities",
      te: "గ్రీన్ ఎనర్జీ & యుటిలిటీస్",
      hi: "हरित ऊर्जा और उपयोगिताएँ"
    },
    status: {
      en: "Operational (500+ MW Capacity)",
      te: "అందుబాటులో ఉంది (500+ మెగావాట్ల సామర్థ్యం)",
      hi: "चालू (500+ मेगावाट क्षमता)"
    },
    hrContact: "+91 8518290622",
    location: {
      en: "Solar Park Zone, Orvakal",
      te: "సోలార్ పార్క్ జోన్, ఓర్వకల్లు",
      hi: "सौर पार्क क्षेत्र, ओरवाकल"
    }
  },
  {
    id: "ind-7",
    name: {
      en: "Jairaj Ispat Limited",
      te: "జైరాజ్ ఇస్పాత్ లిమిటెడ్",
      hi: "जयराज इस्पात लिमिटेड"
    },
    sector: {
      en: "Steel & Iron Manufacturing",
      te: "ఉక్కు & ఇనుము పరిశ్రమ",
      hi: "इस्पात और लोहा विनिर्माण"
    },
    status: {
      en: "Construction Phase (Upcoming Mega Plant)",
      te: "నిర్మాణ దశలో ఉంది (త్వరలో ప్రారంభం)",
      hi: "निर्माण चरण (आगामी मेगा प्लांट)"
    },
    hrContact: "+91 8518290888",
    location: {
      en: "Industrial Corridor, Orvakal Bypass",
      te: "పారిశ్రామిక కారిడార్, ఓర్వకల్లు బైపాస్",
      hi: "औद्योगिक गलियारा, ओरवाकल बाईपास"
    }
  },
  {
    id: "ind-8",
    name: {
      en: "Reliance Food Processing Unit",
      te: "రిలయన్స్ ఫుడ్ ప్రాసెసింగ్ యూనిట్",
      hi: "रिलायंस फूड प्रोसेसिंग यूनिट"
    },
    sector: {
      en: "Food Processing & Agro Products",
      te: "ఆహార ప్రాసెసింగ్ & వ్యవసాయ ఉత్పత్తులు",
      hi: "खाद्य प्रसंस्करण और कृषि उत्पाद"
    },
    status: {
      en: "Proposed (Land Allocated)",
      te: "ప్రతిపాదించబడింది (భూమి కేటాయించబడింది)",
      hi: "प्रस्तावित (भूमि आवंटित)"
    },
    hrContact: "+91 8518290777",
    location: {
      en: "Kurnool Mega Food Park Zone, Orvakal",
      te: "కర్నూలు మెగా ఫుడ్ పార్క్ జోన్, ఓర్వకల్లు",
      hi: "कर्नूल मेगा फूड पार्क क्षेत्र, ओरवाकल"
    }
  }
];

export const notices: Notice[] = [
  {
    id: "ntc-1",
    title: {
      en: "Jal Jeevan Mission & Gram Panchayat Water Supply Timings",
      te: "జల జీవన్ మిషన్ & గ్రామ పంచాయితీ తాగునీటి సరఫరా సమయాలు",
      hi: "जल जीवन मिशन और ग्राम पंचायत पेयजल आपूर्ति का समय"
    },
    content: {
      en: "Panchayat notices: Daily drinking water through pipelines will run from 6:30 AM to 8:00 AM. Keep tanks prepared.",
      te: "పంచాయతీ నోటీస్: ప్రతిరోజూ ఉదయం 6:30 నుండి 8:00 వరకు తాగునీరు పైపుల ద్వారా సరఫరా చేయబడుతుంది. నిల్వ చేసుకోండి.",
      hi: "पंचायत सूचना: रोजाना सुबह 6:30 से 8:00 बजे तक पेयजल आपूर्ति होगी। पानी संचय की तैयारी रखें।"
    },
    date: "2026-06-10",
    type: "info"
  },
  {
    id: "ntc-2",
    title: {
      en: "Power Maintenance Feeder Repair Disconnection",
      te: "ఫీడర్ లైన్ మరమ్మతుల వల్ల విద్యుత్ సరఫరా నిలిపివేత",
      hi: "बिजली फीडर मरम्मत हेतु विद्युत आपूर्ति बंद"
    },
    content: {
      en: "APSPDCL Grid scheduled maintenance on Orvakal Feeder line. Disconnection on June 12th (Friday) from 9 AM to 1 PM.",
      te: "ఫీడర్ మరమ్మతుల వల్ల జూన్ 12 (శుక్రవారం) ఉదయం 9:00 నుండి మధ్యాహ్నం 1:00 వరకు విద్యుత్ సరఫరా నిలిపివేయబడుతుంది.",
      hi: "ओरवाकल फीडर पर मरम्मत कार्य। 12 जून (शुक्रवार) सुबह 9 से दोपहर 1 बजे तक बिजली बंद रहेगी।"
    },
    date: "2026-06-11",
    type: "alert"
  }
];

export const worshipPlaces: WorshipPlace[] = [
  {
    id: "wrp-1",
    name: { en: "Sri Chowdeswari Devi Temple", te: "శ్రీ చౌడేశ్వరి దేవి ఆలయం", hi: "श्री चौडेश्वरी देवी मंदिर" },
    type: "temple",
    location: { en: "Old Village center, Orvakal", te: "పాత ఊరి మధ్యలో, ఓర్వకల్లు", hi: "पुराना गाँव केंद्र, ओरवाकल" },
    details: {
      en: "Ancient and historic temple in Orvakal. Daily Pujas from 6 AM - 11 AM and 5 PM - 8 PM.",
      te: "ఓర్వకల్లులోని పురాతన చారిత్రక ఆలయం. రోజూ పూజలు ఉదయం 6-11, సాయంత్రం 5-8 వరకు ఉంటాయి.",
      hi: "ओरवाकल का प्राचीन और ऐतिहासिक मंदिर। दैनिक पूजा सुबह 6 बजे से 11 बजे और शाम 5 बजे से रात 8 बजे तक।"
    }
  },
  {
    id: "wrp-2",
    name: { en: "Orvakal Jamia Masjid (Mosque)", te: "ఓర్వకల్లు జామియా మసీదు", hi: "ओरवाकल जामिया मस्जिद" },
    type: "mosque",
    location: { en: "Bazaar Lane, Orvakal", te: "బజార్ వీధి, ఓర్వకల్లు", hi: "बाजार लेन, ओरवाकल" },
    details: {
      en: "Centrally located mosque. Jumma prayers on Fridays from 12:30 PM - 2:00 PM.",
      te: "ఊరి మధ్యలో ఉన్న మసీదు. ప్రతి శుక్రవారం మధ్యాహ్నం 12:30 నుండి 2:00 వరకు ప్రత్యేక ప్రార్థనలు ఉంటాయి.",
      hi: "केंद्र में स्थित मस्जिद। शुक्रवार को दोपहर 12:30 बजे से दोपहर 2:00 बजे तक विशेष नमाज (जुम्मा)।"
    }
  }
];

export const attractions: Attraction[] = [
  {
    id: "att-1",
    name: { en: "Orvakal Rock Garden", te: "ఓర్వకల్లు రాక్ గార్డెన్", hi: "ओरवाकल रॉक गार्डन" },
    description: {
      en: "Natural silica rock formations surrounded by water reservoirs. Famous shooting spot with boating, paths, restaurant and trekking.",
      te: "నీటి జలాశయాల మధ్య సహజ సిద్ధంగా ఏర్పడిన సిలికా శిలలు. బోటింగ్, పార్క్ మార్గాలు, రెస్టారెంట్ మరియు ట్రెకింగ్ స్పాట్.",
      hi: "जल जलाशयों से घिरी प्राकृतिक सिलिका चट्टानें। नौका विहार, पार्क पथ, रेस्तरां और ट्रेकिंग के साथ पर्यटन स्थल।"
    },
    distance: { en: "3 km from Village Center", te: "గ్రామ కేంద్రం నుండి 3 కి.మీ", hi: "ग्राम केंद्र से 3 किमी" },
    timing: { en: "8:00 AM - 6:00 PM (Entry: Rs 20)", te: "ఉదయం 8:00 - సాయంత్రం 6:00 (రూ. 20)", hi: "सुबह 8:00 - शाम 6:00 (शुल्क: रु 20)" },
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "att-2",
    name: { en: "Ketavaram Prehistoric Rock Paintings", te: "కేతవరం ప్రాచీన రాతి చిత్రాలు", hi: "केतवरम प्रागैतिहासिक शैल चित्र" },
    description: {
      en: "Ancient rock paintings dating back to the Palaeolithic era (approx 10,000 BC) depicting bulls, deer, and human figures.",
      te: "పాత రాతియుగం కాలం నాటి పురాతన రాతి చిత్రాలు (సుమారు క్రీ.పూ 10,000). ఎడ్లు, జింకలు మరియు మానవ చిత్రాలు కనిపిస్తాయి.",
      hi: "पुरापाषाण काल ​​(लगभग 10,000 ईसा पूर्व) के प्राचीन शैल चित्र जिसमें बैल, हिरण और मानव आकृतियाँ चित्रित हैं।"
    },
    distance: { en: "15 km from Orvakal", te: "ఓర్వకల్లు నుండి 15 కి.మీ", hi: "ओरवाकल से 15 किमी" },
    timing: { en: "Sunrise - Sunset (Entry Free)", te: "సూర్యోదయం నుండి సూర్యాస్తమయం వరకు (ఉచితం)", hi: "सूर्योदय - सूर्यास्त (प्रवेश निःशुल्क)" },
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "att-3",
    name: { en: "Kurnool Airport (Orvakal Landmark)", te: "కర్నూలు విమానాశ్రయం (ఓర్వకల్లు)", hi: "कर्नूल हवाई अड्डा (ओरवाकल)" },
    description: {
      en: "State-of-the-art regional airport supporting domestic flights. Features solar power fields and modern flight transit desks.",
      te: "దేశీయ విమాన సర్వీసులు అందించే అత్యాధునిక ప్రాంతీయ విమానాశ్రయం. సోలార్ విద్యుత్ ఉత్పత్తి కేంద్రం ప్రత్యేకత.",
      hi: "घरेलू उड़ानों का समर्थन करने वाला अत्याधुनिक क्षेत्रीय हवाई अड्डा। सौर ऊर्जा क्षेत्र और आधुनिक उड़ान पारगमन डेस्क शामिल हैं।"
    },
    distance: { en: "4 km from Village Center", te: "గ్రామ కేంద్రం నుండి 4 కి.మీ", hi: "ग्राम केंद्र से 4 किमी" },
    timing: { en: "Passenger hours depend on flights", te: "విమాన వేళలను బట్టి ప్రవేశం ఉంటుంది", hi: "उड़ानों के अनुसार प्रवेश समय" },
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "att-4",
    name: { en: "Yaganti Uma Maheswara Cave Temple", te: "యాగంటి ఉమామహేశ్వర స్వామి దేవాలయం & గుహలు", hi: "यागंती उमा महेश्वर गुफा मंदिर" },
    description: {
      en: "Famous 15th-century historical temple known for the growing stone Nandi basavanna, pushkarini pond, and Venkateswara cave.",
      te: "పరిమాణం పెరిగే నంది విగ్రహం, పుష్కరిణి నీటి కొలను మరియు వెంకటేశ్వర గుహకు ప్రసిద్ధి చెందిన 15వ శతాబ్దపు చారిత్రక ఆలయం.",
      hi: "बढ़ते हुए पत्थर के नंदी, पुष्करिणी तालाब और वेंकटेश्वर गुफा के लिए प्रसिद्ध 15वीं शताब्दी का ऐतिहासिक मंदिर।"
    },
    distance: { en: "35 km from Orvakal", te: "ఓర్వకల్లు నుండి 35 కి.మీ", hi: "ओरवाकल से 35 किमी" },
    timing: { en: "6:00 AM - 1:00 PM, 3:00 PM - 8:00 PM", te: "ఉదయం 6:00 - మధ్యాహ్నం 1:00, సాయంత్రం 3:00 - రాత్రి 8:00", hi: "सुबह 6:00 - दोपहर 1:00, दोपहर 3:00 - रात 8:00" },
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80"
  }
];

export const rentalCars: RentalCar[] = [
  {
    id: "rcr-1",
    provider: { en: "Sri Balaji Travels & Airport Cabs", te: "శ్రీ బాలాజీ ట్రావెల్స్ & ఎయిర్‌పోర్ట్ క్యాబ్స్", hi: "श्री बालाजी ट्रेवल्स और एयरपोर्ट कैब्स" },
    vehicle: { en: "Suzuki Swift Dzire (Sedan) / Innova (SUV)", te: "స్విఫ్ట్ డిజైర్ / టయోటా ఇన్నోవా", hi: "स्वीफ्ट डिजायर / टोयोटा इनोवा" },
    rate: { en: "Rs. 12/km Sedan, Rs. 16/km SUV", te: "Sedan: రూ. 12/కి.మీ, SUV: రూ. 16/కి.మీ", hi: "रु. 12/किमी सेडान, रु. 16/किमी एसयूवी" },
    phone: "+91 9848123445",
    available: true
  }
];

export const powerSchedules: PowerSchedule[] = [
  {
    id: "pwr-1",
    feederName: { en: "Orvakal Agricultural Feeder 1", te: "ఓర్వకల్లు వ్యవసాయ ఫీడర్ 1", hi: "ओरवाकल कृषि फीडर 1" },
    dayTimings: { en: "8:00 AM - 11:30 AM (3-Phase)", te: "ఉదయం 8:00 - 11:30 (3-ఫేస్)", hi: "सुबह 8:00 - 11:30 (3-फेज)" },
    nightTimings: { en: "11:00 PM - 2:30 AM (3-Phase)", te: "రాత్రి 11:00 - 2:30 (3-ఫేస్)", hi: "रात 11:00 - 2:30 (3-फेज)" },
    status: { en: "Active", te: "సరఫరా అవుతోంది", hi: "सक्रिय" }
  }
];

export const repairMechanics: RepairMechanic[] = [
  {
    id: "rep-1",
    name: { en: "Nagaraju Pump & Motor Rewinding Work", te: "నాగరాజు పంప్ & మోటార్ రివైండింగ్ వర్క్స్", hi: "नागराज पंप और मोटर रिवाइंडिंग वर्क्स" },
    specialty: "motor",
    rating: 4.9,
    phone: "+91 9441223388",
    location: { en: "Gaddipadu Road, Orvakal", te: "గడ్డిపాడు రోడ్, ఓర్వకల్లు", hi: "गद्दीपाडु रोड, ओरवाकल" },
    available: true
  }
];

export const agriContacts: AgriContact[] = [
  {
    id: "agc-1",
    name: { en: "Mrs. G. Sujatha (Mandal Agricultural Officer)", te: "శ్రీమతి జి. సుజాత (మండల వ్యవసాయ అధికారి)", hi: "श्रीमती जी. सुजाता (मंडल कृषि अधिकारी)" },
    designation: { en: "Rythu Bharosa Kendram (RBK)", te: "రైతు భరోసా కేంద్రం (RBK)", hi: "रायथू भरोसा केंद्र (आरबीके)" },
    phone: "+91 9849901235",
    location: { en: "RBK Office, Orvakal Bypass", te: "RBK ఆఫీస్, ఓర్వకల్లు", hi: "आरबीके कार्यालय, ओरवाकल" }
  }
];

export const vegMandiRates: VegMandiRate[] = [
  {
    id: "vmnd-1",
    item: { en: "Tomatoes (టమోటా)", te: "టమోటా (Tomato)", hi: "टमाटर (Tomato)" },
    priceRange: { en: "Rs. 25 - Rs. 30 / kg", te: "రూ. 25 - రూ. 30 / కిలోకు", hi: "रु. 25 - रु. 30 / किलो" },
    trend: "up"
  },
  {
    id: "vmnd-2",
    item: { en: "Onions (ఉల్లిపాయలు)", te: "ఉల్లిపాయలు (Onions)", hi: "प्याज (Onions)" },
    priceRange: { en: "Rs. 25 - Rs. 40 / kg", te: "రూ. 25 - రూ. 40 / కిలోకు", hi: "रु. 25 - रु. 40 / किलो" },
    trend: "up"
  },
  {
    id: "vmnd-3",
    item: { en: "Green Chillies (పచ్చిమిర్చి)", te: "పచ్చిమిర్చి (Green Chillies)", hi: "हरी मिर्च (Green Chillies)" },
    priceRange: { en: "Rs. 40 - Rs. 55 / kg", te: "రూ. 40 - రూ. 55 / కిలోకు", hi: "रु. 40 - रु. 55 / किलो" },
    trend: "down"
  },
  {
    id: "vmnd-4",
    item: { en: "Brinjals (వంకాయ)", te: "వంకాయ (Brinjal)", hi: "बैंगन (Brinjal)" },
    priceRange: { en: "Rs. 30 - Rs. 45 / kg", te: "రూ. 30 - రూ. 45 / కిలోకు", hi: "रु. 30 - रु. 45 / किलो" },
    trend: "flat"
  }
];

// ================== NEW MSP & CROP HOLIDAY DATABASE ==================

export interface MspRate {
  id: string;
  crop: LocalizedText;
  mspPrice: LocalizedText;
  season: LocalizedText;
}

export const govtMspRates: MspRate[] = [
  {
    id: "msp-1",
    crop: { en: "Paddy (Fine Variety)", te: "వరి (సన్న రకం)", hi: "धान (ग्रेड-ए)" },
    mspPrice: { en: "Rs. 2,203 / Quintal", te: "రూ. 2,203 / క్వింటాల్‌కి", hi: "रु. 2,203 / क्विंटल" },
    season: { en: "Kharif 2025-26", te: "ఖరీఫ్ 2025-26", hi: "खरीफ 2025-26" }
  },
  {
    id: "msp-2",
    crop: { en: "Bengal Gram", te: "శనగలు", hi: "चना" },
    mspPrice: { en: "Rs. 5,440 / Quintal", te: "రూ. 5,440 / క్వింటాల్‌కి", hi: "रु. 5,440 / क्विंटल" },
    season: { en: "Rabi 2025-26", te: "రబీ 2025-26", hi: "रबी 2025-26" }
  },
  {
    id: "msp-3",
    crop: { en: "Maize", te: "మొక్కజొన్న", hi: "मक्का" },
    mspPrice: { en: "Rs. 2,090 / Quintal", te: "రూ. 2,090 / క్వింటాల్‌కి", hi: "रु. 2,090 / क्विंटल" },
    season: { en: "Kharif 2025-26", te: "ఖరీఫ్ 2025-26", hi: "खरीफ 2025-26" }
  },
  {
    id: "msp-4",
    crop: { en: "Cotton (Long Staple)", te: "పత్తి (పొడుగు పింజ)", hi: "कपास (लॉन्ग स्टेपल)" },
    mspPrice: { en: "Rs. 7,020 / Quintal", te: "రూ. 7,020 / క్వింటాల్‌కి", hi: "रु. 7,020 / क्विंटल" },
    season: { en: "Kharif 2025-26", te: "ఖరీఫ్ 2025-26", hi: "खरीफ 2025-26" }
  },
  {
    id: "msp-5",
    crop: { en: "Groundnut", te: "వేరుశనగ", hi: "मूंगफली" },
    mspPrice: { en: "Rs. 6,377 / Quintal", te: "రూ. 6,377 / క్వింటాల్‌కి", hi: "रु. 6,377 / क्विंटल" },
    season: { en: "Kharif 2025-26", te: "ఖరీఫ్ 2025-26", hi: "खरीफ 2025-26" }
  }
];

export interface CropHolidayInfo {
  id: string;
  zone: LocalizedText;
  advisory: LocalizedText;
  waterStatus: LocalizedText;
  recommendation: LocalizedText;
}

export const cropHolidays: CropHolidayInfo[] = [
  {
    id: "ch-1",
    zone: { en: "Orvakal Lower Canal Ayacut", te: "ఓర్వకల్లు దిగువ కాలువ ఆయకట్టు", hi: "ओरवाकल निचली नहर क्षेत्र" },
    advisory: { en: "High water stress expected due to delayed canal water release.", te: "కాలువ నీరు ఆలస్యం కావడం వల్ల అధిక నీటి ఎద్దడి ఏర్పడే అవకాశం ఉంది.", hi: "नहर के पानी की देरी से रिहाई के कारण उच्च जल तनाव की आशंका।" },
    waterStatus: { en: "Deficit (30% below normal)", te: "కొరత (సాధారణం కంటే 30% తక్కువ)", hi: "कमी (सामान्य से 30% कम)" },
    recommendation: { en: "Declare Crop Holiday for Paddy; cultivate low-water groundnuts, millets or pulses instead.", te: "వరి పంటకు బదులుగా తక్కువ నీరు అవసరమయ్యే వేరుశనగ, చిరుధాన్యాలు లేదా పప్పుధాన్యాలను సాగు చేయండి.", hi: "धान के लिए फसल अवकाश घोषित करें; इसके बजाय कम पानी वाली मूंगफली, बाजरा या दालों की खेती करें।" }
  },
  {
    id: "ch-2",
    zone: { en: "Budawada Black Soil Belt", te: "బుడవడ నల్ల రేగడి నేలల జోన్", hi: "बुडावाड़ा काली मिट्टी क्षेत्र" },
    advisory: { en: "Pest outbreak danger (Pink bollworm) in early sown cotton blocks.", te: "ముందస్తుగా సాగు చేసిన పత్తి పంటలో గులాబీ రంగు పురుగు ఉధృతి పెరిగే ప్రమాదం ఉంది.", hi: "जल्दी बोई गई कपास में कीट (गुलाबी सुंडी) के प्रकोप का खतरा।" },
    waterStatus: { en: "Adequate ground water", te: "సరిపడా భూగర్భ జలాలు", hi: "पर्याप्त भूजल" },
    recommendation: { en: "Delay cotton sowing until mid-June; follow crop rotation with maize or fodder.", te: "పత్తి విత్తడాన్ని జూన్ మధ్య వరకు వాయిదా వేయండి; మొక్కజొన్న లేదా మేత పంటల మార్పిడిని అనుసరించండి.", hi: "जून के मध्य तक कपास की बुवाई में देरी करें; मक्का या चारे के साथ फसल चक्र का पालन करें।" }
  }
];

// ================== NEW AGRICULTURAL EXPANDED ARRAYS ==================

export const tractorRentals: TractorRental[] = [
  {
    id: "trc-1",
    ownerName: { en: "T. Veerabhadra Reddy", te: "టి. వీరభద్ర రెడ్డి", hi: "टी. वीरभद्र रेड्डी" },
    phone: "+91 9440812344",
    tractorModel: { en: "John Deere 5050D (50 HP) with Plough", te: "జాన్ డీర్ 5050D (నాగలితో)", hi: "जॉन डीरे 5050D (हल के साथ)" },
    rate: { en: "Rs. 900 / hour", te: "రూ. 900 / గంటకు", hi: "रु. 900 / घंटा" },
    location: { en: "Orvakal Main Village", te: "ఓర్వకల్లు గ్రామం", hi: "ओरवाकल मुख्य गांव" },
    available: true
  },
  {
    id: "trc-2",
    ownerName: { en: "M. Chinna Obanna", te: "ఎం. చిన్న ఓబన్న", hi: "एम. चिन्ना ओबन्ना" },
    phone: "+91 9652344551",
    tractorModel: { en: "Mahindra Arjun 555 (Harvester Attached)", te: "మహీంద్రా అర్జున్ 555 (హార్వెస్టర్)", hi: "महिंद्रा अर्जुन 555 (हार्वेस्टर युक्त)" },
    rate: { en: "Rs. 1,800 / hour", te: "రూ. 1,800 / గంటకు", hi: "रु. 1,800 / घंटा" },
    location: { en: "Highway Bypass Colony", te: "హైవే బైపాస్ కాలనీ", hi: "हाईवे बाईपास कॉलोनी" },
    available: true
  }
];

export const advisories: CropAdvisory[] = [
  {
    id: "adv-1",
    title: { en: "Pest Alert: Pink Bollworm in Cotton Crops", te: "పంట తెగులు హెచ్చరిక: పత్తిలో గులాబీ రంగు కాయతొలిచే పురుగు", hi: "कीट चेतावनी: कपास की फसलों में गुलाबी सुंडी" },
    content: {
      en: "Farming notice: Spray Neem Oil (1500ppm) or install pheromone traps (5 per acre) immediately. Avoid excessive nitrogenous fertilizers.",
      te: "వ్యవసాయ సలహా: వేప నూనెను పిచికారీ చేయండి లేదా ఎకరాకు 5 లింగాకర్షణ బుట్టలను ఏర్పాటు చేయండి. నత్రజని ఎరువుల వాడకం తగ్గించండి.",
      hi: "कृषि सलाह: नीम के तेल (1500ppm) का छिड़काव करें या फेरोमोन जाल (5 प्रति एकड़) लगाएं। नाइट्रोजन युक्त उर्वरकों का अधिक उपयोग न करें।"
    },
    category: "pest",
    date: "2026-06-11"
  },
  {
    id: "adv-2",
    title: { en: "Kurnool District Soil Testing campaign", te: "కర్నూలు జిల్లా మట్టి పరీక్షల ప్రచారం", hi: "कर्नूल जिला मृदा परीक्षण अभियान" },
    content: {
      en: "Get your soil health cards. Bring dry soil samples to Orvakal Rythu Bharosa Kendram. Subsidy available for micronutrients.",
      te: "మట్టి ఆరోగ్య కార్డులను పొందండి. మట్టి నమూనాలను రైతు భరోసా కేంద్రానికి తీసుకురండి. సూక్ష్మపోషకాలపై రాయితీ లభిస్తుంది.",
      hi: "अपनी मिट्टी का स्वास्थ्य कार्ड प्राप्त करें। सूखी मिट्टी के नमूने ओरवाकल रायथू भरोसा केंद्र पर लाएं।"
    },
    category: "soil",
    date: "2026-06-09"
  }
];

export const waterReservoirs: WaterLevel[] = [
  {
    id: "wtl-1",
    reservoirName: { en: "Orvakal Irrigation Canal (Midi Channel)", te: "ఓర్వకల్లు నీటిపారుదల కాలువ", hi: "ओरवाकल सिंचाई नहर" },
    levelInfo: { en: "Flow Level: 4.8 Feet (Moderate Flow)", te: "ప్రవాహ మట్టం: 4.8 అడుగులు (మధ్యస్థం)", hi: "प्रवाह स्तर: 4.8 फीट (सामान्य प्रवाह)" },
    capacityInfo: { en: "Target: Supply to 1200 agricultural acres", te: "లక్ష్యం: 1200 ఎకరాల వ్యవసాయ భూమి", hi: "लक्ष्य: 1200 कृषि एकड़ में जलापूर्ति" },
    status: { en: "Water Released from Telugu Ganga", te: "తెలుగు గంగ ద్వారా నీరు విడుదల చేయబడింది", hi: "तेलुगु गंगा से पानी छोड़ा गया" }
  },
  {
    id: "wtl-2",
    reservoirName: { en: "Gram Panchayat Drinking Water Tank", te: "గ్రామ పంచాయతీ తాగునీటి ట్యాంక్", hi: "ग्राम पंचायत पेयजल टैंक" },
    levelInfo: { en: "Capacity: 80% Full", te: "నిల్వ సామర్థ్యం: 80% నిండింది", hi: "क्षमता: 80% पूर्ण" },
    capacityInfo: { en: "Volume: 2.5 Lakh Liters", te: "పరిమాణం: 2.5 లక్షల లీటర్లు", hi: "मात्रा: 2.5 लाख लीटर" },
    status: { en: "Chlorination Completed Today", te: "ఈరోజు క్లోరినేషన్ పూర్తి చేయబడింది", hi: "आज क्लोरीनीकरण का कार्य पूरा हुआ" }
  }
];

// ================== GENERAL COMMERCE SERVICES LISTINGS (24 Categories) ==================

export const commercialShops: CommercialShop[] = [
  // 1. Restaurant
  {
    id: "shp-rest-1",
    category: "restaurant",
    name: { en: "Srinivasa Pure Veg Udupi Restaurant", te: "శ్రీనివాస ప్యూర్ వెజ్ ఉడుపి హోటల్ (రెస్టారెంట్)", hi: "श्रीनिवास प्योर वेज उडुपी रेस्तरां" },
    owner: { en: "H. Madhava Bhat", te: "హెచ్. మాధవ భట్", hi: "एच. माधव भट" },
    phone: "+91 9989123890",
    timing: { en: "6:00 AM - 10:30 PM", te: "ఉదయం 6:00 - రాత్రి 10:30", hi: "सुबह 6:00 - रात 10:30" },
    location: { en: "Highway Circle Crossroad, Orvakal", te: "హైవే సర్కిల్ క్రాస్‌రోడ్, ఓర్వకల్లు", hi: "हाईवे सर्कल चौराहा, ओरवाकल" },
    details: { en: "Famous for South Indian tiffins (Idli, Dosa) and executive afternoon meals.", te: "దక్షిణ భారత టిఫిన్స్ (ఇడ్లీ, దోశ) మరియు మధ్యాహ్నం రుచికరమైన భోజనానికి ప్రసిద్ధి.", hi: "दक्षिण भारतीय टिफिन (इडली, डोसा) और दोपहर के दोपहर के भोजन के लिए प्रसिद्ध।" },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80"
  },
  // 2. Hotel (Hospitality stays)
  {
    id: "shp-hot-1",
    category: "hotel",
    name: { en: "Haritha Rock Garden Resort (APTDC)", te: "హరిత రాక్ గార్డెన్ రిసార్ట్ (APTDC)", hi: "हरिता रॉक गार्डन रिसॉर्ट (APTDC)" },
    owner: { en: "AP Tourism Department Manager", te: "ఏపీ పర్యాటక శాఖ మేనేజర్", hi: "आंध्र प्रदेश पर्यटन विभाग प्रबंधक" },
    phone: "+91 8518200101",
    timing: { en: "24 Hours Check-in", te: "24 గంటల సేవ", hi: "24 घंटे उपलब्ध" },
    location: { en: "Orvakal Rock Gardens, Highway Bypass", te: "ఓర్వకల్లు రాక్ గార్డెన్స్, హైవే బైపాస్", hi: "ओरवाकल रॉक गार्डन, हाईवे बाईपास" },
    stars: 3,
    priceRate: { en: "Rs. 2,200 - Rs. 4,500 / day", te: "రూ. 2,200 - రూ. 4,500 / రోజుకు", hi: "रु. 2,200 - रु. 4,500 / दिन" },
    details: { en: "Sleek 3-Star AC cottages, multi-cuisine restaurant, and children play park.", te: "3-స్టార్ ఏసీ కాటేజీలు, రెస్టారెంట్ మరియు పిల్లల ప్లే పార్క్.", hi: "3-स्टार एसी कॉटेज, मल्टी-क्यूज़ीन रेस्तरां और बच्चों का पार्क।" },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
  },
  // 3. Home rentals / PGs
  {
    id: "shp-rnt-1",
    category: "rentals",
    name: { en: "Balaji Executive PG Rooms for Men", te: "బాలాజీ ఎగ్జిక్యూటివ్ పురుషుల పీజీ రూమ్స్", hi: "पुरुषों के लिए बालाजी एक्जीक्यूटिव पीजी कमरे" },
    owner: { en: "K. Prasad Rao", te: "కె. ప్రసాదరావు", hi: "के. प्रसाद राव" },
    phone: "+91 9490123456",
    timing: { en: "Contact (6:00 AM - 10:00 PM)", te: "ఉదయం 6:00 - రాత్రి 10:00", hi: "सुबह 6:00 - रात 10:00" },
    location: { en: "Near Airport Road, Orvakal", te: "ఎయిర్‌పోర్ట్ రోడ్ సమీపంలో, ఓర్వకల్లు", hi: "हवाई अड्डा रोड के पास, ओरवाकल" },
    priceRate: { en: "Rs. 4,500 / month (Food included)", te: "రూ. 4,500 / నెలకు (భోజనంతో సహా)", hi: "रु. 4,500 / माह (भोजन सहित)" },
    details: { en: "Single and double sharing, high-speed Wi-Fi, laundry facilities and hot water.", te: "సింగిల్ మరియు డబుల్ షేరింగ్, వై-ఫై, వేడి నీటి సదుపాయం.", hi: "सिंगल और डबल शेयरिंग, हाई-स्पीड वाई-फाई, लाँड्री सुविधाएं और गर्म पानी।" },
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80"
  },
  // 4. Banquet halls
  {
    id: "shp-banq-1",
    category: "banquet",
    name: { en: "Sri Srinivasa Kalyana Mandapam (AC Banquet)", te: "శ్రీ శ్రీనివాస కళ్యాణ మండపం (ఫంక్షన్ హాల్)", hi: "श्री श्रीनिवास कल्याण मंडपम (बैंक्वेट हॉल)" },
    owner: { en: "M. Subbarayudu", te: "ఎం. సుబ్బారాయుడు", hi: "एम. सुब्बारायुडु" },
    phone: "+91 9440552211",
    timing: { en: "Event bookings (24/7 support)", te: "బుకింగ్స్ లభిస్తాయి", hi: "बुकिंग उपलब्ध" },
    location: { en: "Mandal HQ Road, Orvakal", te: "మండల్ హెచ్‌క్యూ రోడ్, ఓర్వకల్లు", hi: "मंडल मुख्यालय रोड, ओरवाकल" },
    capacity: 1000,
    priceRate: { en: "Rs. 45,000 - Rs. 75,000 / event", te: "రూ. 45,000 - రూ. 75,000 / ఈవెంట్‌కు", hi: "रु. 45,000 - रु. 75,000 / आयोजन" },
    details: { en: "Spacious air-conditioned hall, grand staging, separate dining area, backup generator.", te: "పెద్ద ఏసీ హాల్, స్టేజ్, డైనింగ్ ఏరియా, జనరేటర్ సదుపాయం ఉంది.", hi: "विशाल वातानुकूलित हॉल, भव्य मंच, अलग भोजन क्षेत्र, बैकअप जनरेटर।" },
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80"
  },
  // 5. Tuitions
  {
    id: "shp-tut-1",
    category: "tuitions",
    name: { en: "Sri Sai Mathematics Academy & Coaching", te: "శ్రీ సాయి మ్యాథమెటిక్స్ అకాడమీ (కోచింగ్ సెంటర్)", hi: "श्री साई गणित अकादमी और कोचिंग" },
    owner: { en: "P. Ranganath (M.Sc. Maths)", te: "పి. రంగనాథ్ (M.Sc. Maths)", hi: "पी. रंगनाथ (एम.एससी. गणित)" },
    phone: "+91 9441112233",
    timing: { en: "5:00 PM - 8:30 PM", te: "సాయంత్రం 5:00 - రాత్రి 8:30", hi: "शाम 5:00 - रात 8:30" },
    location: { en: "High School Lane, Orvakal", te: "హైస్కూల్ రోడ్, ఓర్వకల్లు", hi: "हाई स्कूल गली, ओरवाकल" },
    details: { en: "Specialised coaching for Class 8-10, Inter Maths (MPC), and polytechnic entrance exams.", te: "8-10 తరగతులు, ఇంటర్ మరియు పాలిటెక్నిక్ ప్రవేశ పరీక్షలకు ప్రత్యేక కోచింగ్.", hi: "कक्षा 8-10, इंटर गणित (एमपीसी) और पॉलिटेक्निक प्रवेश परीक्षाओं के लिए विशेष कोचिंग।" }
  },
  // 6. Boutique/Tailor
  {
    id: "shp-btq-1",
    category: "boutique",
    name: { en: "Sri Lakshmi Tailors & Ladies Boutique", te: "శ్రీ లక్ష్మీ టైలర్స్ & లేడీస్ బోటిక్", hi: "श्री लक्ष्मी दर्जी और देवियों बुटीक" },
    owner: { en: "Mrs. L. Prabhavathi", te: "శ్రీమతి ఎల్. ప్రభావతి", hi: "श्रीमती एल. प्रभावती" },
    phone: "+91 9010112244",
    timing: { en: "9:00 AM - 8:30 PM", te: "ఉదయం 9:00 - రాత్రి 8:30", hi: "सुबह 9:00 - रात 8:30" },
    location: { en: "Main Bazaar Street, Orvakal", te: "మెయిన్ బజార్ వీధి, ఓర్వకల్లు", hi: "मुख्य बाजार मार्ग, ओरवाकल" },
    details: { en: "Computerized designer embroidery, blouse stitching, custom dresses, and designer sarees.", te: "కంప్యూటర్ డిజైనర్ వర్క్, బ్లౌజ్ స్టిచ్చింగ్ మరియు డిజైనర్ చీరలు లభిస్తాయి.", hi: "कंप्यूटरीकृत डिजाइनर कढ़ाई, ब्लाउज सिलाई और डिजाइनर साड़ियां।" }
  },
  // 7. Cloth shopping
  {
    id: "shp-cld-1",
    category: "clothing",
    name: { en: "Srinivasa Cloth Showroom & Matching Center", te: "శ్రీనివాస క్లాత్ షోరూమ్ & మ్యాచింగ్ సెంటర్", hi: "श्रीनिवास कपड़ा शोरूम और मैचिंग सेंटर" },
    owner: { en: "T. Chenna Kesavulu", te: "టి. చెన్నకేశవులు", hi: "टी. चेन्ना केशवुलु" },
    phone: "+91 9849556611",
    timing: { en: "9:00 AM - 9:30 PM", te: "ఉదయం 9:00 - రాత్రి 9:30", hi: "सुबह 9:00 - रात 9:30" },
    location: { en: "Panchayat Building Shop 4, Orvakal", te: "పంచాయతీ కాంప్లెక్స్ షాప్ 4, ఓర్వకల్లు", hi: "पंचायत भवन दुकान 4, ओरवाकल" },
    details: { en: "Sarees, suiting, shirting, lining cloths, matching pieces and readymade kids wear.", te: "చీరలు, సూటింగ్స్, షర్టింగ్స్ మరియు పిల్లల రెడీమేడ్ దుస్తులు లభిస్తాయి.", hi: "साड़ियां, सूटिंग, शर्टिंग, मैचिंग पीस और रेडीमेड बच्चों के कपड़े।" }
  },
  // 8. Wholesalers
  {
    id: "shp-whl-1",
    category: "wholesaler",
    name: { en: "Kurnool Kirana Wholesalers - Orvakal Branch", te: "కర్నూలు కిరాణా హోల్‌సేల్ వ్యాపారులు - ఓర్వకల్లు బ్రాంచ్", hi: "कर्नूल किराना थोक विक्रेता - ओरवाकल शाखा" },
    owner: { en: "V. Narayana Reddy", te: "వై. నారాయణ రెడ్డి", hi: "वाई. नारायण रेड्डी" },
    phone: "+91 9441238765",
    timing: { en: "7:00 AM - 8:30 PM", te: "ఉదయం 7:00 - రాత్రి 8:30", hi: "सुबह 7:00 - रात 8:30" },
    location: { en: "Mandi Bypass Road, Orvakal", te: "మండి బైపాస్ రోడ్, ఓర్వకల్లు", hi: "मंडी बाईपास रोड, ओरवाकल" },
    details: { en: "Wholesale suppliers of rice bags, pulses, cooking oils, sugar and spices for village shops.", te: "బియ్యం బస్తాలు, పప్పులు, నూనెలు మరియు హోల్‌సేల్ కిరాణా సరుకులు సరఫరా చేయబడతాయి.", hi: "गाँव की दुकानों के लिए चावल की बोरी, दालें, खाना पकाने का तेल और चीनी के थोक आपूर्तिकर्ता।" }
  },
  // 9. Hardware shops
  {
    id: "shp-hard-1",
    category: "hardware",
    name: { en: "Sri Vasavi Hardware, Paints & Electricals", te: "శ్రీ వాసవి హార్డ్‌వేర్, పెయింట్స్ & ఎలక్ట్రికల్స్", hi: "श्री वासवी हार्डवेयर, पेंट्स और इलेक्ट्रिकल्स" },
    owner: { en: "G. Venkateswarlu", te: "జి. వెంకటేశ్వర్లు", hi: "जी. वेंकटेश्वरलू" },
    phone: "+91 9441122889",
    timing: { en: "8:00 AM - 9:00 PM", te: "ఉదయం 8:00 - రాత్రి 9:00", hi: "सुबह 8:00 - रात 9:00" },
    location: { en: "NH-40 Bypass Road, near Auto stand, Orvakal", te: "NH-40 బైపాస్ రోడ్, ఆటో స్టాండ్ సమీపంలో, ఓర్వకల్లు", hi: "एनएच-40 बाईपास रोड, ऑटो स्टैंड के पास, ओरवाकल" },
    details: { en: "Pipes, electrical wires, switches, building paints, motor starters and plumbing tools.", te: "పైపులు, ఎలక్ట్రికల్ వైర్లు, మోటార్ స్టార్టర్లు మరియు ప్లంబింగ్ సామగ్రి లభిస్తాయి.", hi: "पाइप, बिजली के तार, स्विच, भवन निर्माण पेंट, मोटर स्टार्टर और नलसाजी उपकरण।" }
  },
  // 10. Stationery
  {
    id: "shp-sta-1",
    category: "stationery",
    name: { en: "Sri Sai Stationery, Xerox & Lamination", te: "శ్రీ సాయి స్టేషనరీ, జిరాక్స్ & లామినేషన్", hi: "श्री साई स्टेशनरी, फोटोकॉपी और लेमिनेशन" },
    owner: { en: "M. Ramanamma", te: "ఎం. రమణమ్మ", hi: "एम. रमनम्मा" },
    phone: "+91 9849123456",
    timing: { en: "8:00 AM - 9:00 PM", te: "ఉదయం 8:00 - రాత్రి 9:00", hi: "सुबह 8:00 - रात 9:00" },
    location: { en: "Opposite Zilla Parishad High School, Orvakal", te: "ZPHS స్కూల్ ఎదురుగా, ఓర్వకల్లు", hi: "जिला परिषद हाई स्कूल के सामने, ओरवाकल" },
    details: { en: "School notebooks, textbooks, pens, color printouts, xerox, lamination, and project files.", te: "స్కూల్ నోట్‌బుక్స్, పెన్నులు, జిరాక్స్, లామినేషన్ మరియు ప్రాజెక్ట్ ఫైల్స్ సదుపాయం.", hi: "स्कूल की कॉपियाँ, पाठ्यपुस्तकें, पेन, फोटोकॉपी, लेमिनेशन और प्रोजेक्ट फ़ाइलें।" }
  },
  // 11. Event Supplies & Vehicle Rentals
  {
    id: "shp-evt-1",
    category: "event-rental",
    name: { en: "Sri Venkateswara Tent House & Dj Sound System", te: "శ్రీ వెంకటేశ్వర టెంట్ హౌస్ & డీజే సౌండ్ సిస్టమ్", hi: "श्री वेंकटेश्वर टेंट हाउस और डीजे साउंड सिस्टम" },
    owner: { en: "S. Khaja Moinuddin", te: "ఎస్. ఖాజా మొయినుద్దీన్", hi: "एस. ख्वाजा मोइनुद्दीन" },
    phone: "+91 9010123456",
    timing: { en: "Order bookings (6:00 AM - 11:00 PM)", te: "ఉదయం 6:00 - రాత్రి 11:00", hi: "सुबह 6:00 - रात 11:00" },
    location: { en: "Indira Nagar Colony, Orvakal", te: "ఇందిరా నగర్ కాలనీ, ఓర్వకల్లు", hi: "इंदिरा नगर कॉलोनी, ओरवाकल" },
    priceRate: { en: "Contact for wedding packages", te: "ప్యాకేజీల కోసం సంప్రదించండి", hi: "पैकेज के लिए संपर्क करें" },
    details: { en: "Event suppliers: Tents, chairs, tables, wedding stage decorations, audio sound systems and lighting.", te: "ఈవెంట్ సప్లైస్: పెళ్ళి టెంట్లు, కుర్చీలు, డెకరేషన్ మరియు డీజే సౌండ్ సిస్టమ్స్ లభిస్తాయి.", hi: "इवेंट आपूर्तिकर्ता: टेंट, कुर्सियां, टेबल, शादी के स्टेज की सजावट, ऑडियो साउंड सिस्टम और लाइटिंग।" }
  },
  // 12. Car & Vehicle Rentals
  {
    id: "shp-car-1",
    category: "car-rental",
    name: { en: "Orvakal Cabs & Local Travels Desk", te: "ఓర్వకల్లు క్యాబ్స్ & ట్రావెల్స్ డెస్క్", hi: "ओरवाकल कैब्स और स्थानीय ट्रेवल्स डेस्क" },
    owner: { en: "G. Venkatesh", te: "జి. వెంకటేష్", hi: "जी. वेंकटेश" },
    phone: "+91 9652123456",
    timing: { en: "24/7 Cab booking", te: "24 గంటల బుకింగ్స్", hi: "24/7 कैब बुकिंग" },
    location: { en: "Near NH-40 Junction Cross, Orvakal", te: "NH-40 జంక్షన్, ఓర్వకల్లు", hi: "एनएच-40 जंक्शन के पास, ओरवाकल" },
    priceRate: { en: "Sedan: Rs 12/km | SUV: Rs 16/km", te: "Sedan: రూ. 12/కి.మీ | SUV: రూ. 16/కి.మీ", hi: "सेडान: रु 12/किमी | एसयूवी: रु 16/किमी" },
    details: { en: "Local and outstation taxi booking, airport pickup/drops, tourist tour packages.", te: "స్థానిక మరియు దూర ప్రయాణాల కోసం టాక్సీ సదుపాయం, ఎయిర్‌పోర్ట్ పికప్/డ్రాప్ సేవలు.", hi: "स्थानीय और बाहरी टैक्सी बुकिंग, हवाई अड्डा पिकअप/ड्रॉप, पर्यटन टूर पैकेज।" }
  },
  // 13. Driving school
  {
    id: "shp-drv-1",
    category: "driving-school",
    name: { en: "Maruthi Motor Driving School", te: "మారుతి మోటార్ డ్రైవింగ్ స్కూల్", hi: "मारुति मोटर ड्राइविंग स्कूल" },
    owner: { en: "K. Chenna Kesavulu", te: "కె. చెన్నకేశవులు", hi: "के. चेन्ना केशवुलु" },
    phone: "+91 9701234567",
    timing: { en: "6:00 AM - 10:00 AM, 4:00 PM - 7:00 PM", te: "ఉదయం 6-10, సాయంత్రం 4-7 వరకు", hi: "सुबह 6-10, शाम 4-7 बजे तक" },
    location: { en: "Bypass Ring Road, Orvakal", te: "బైపాస్ రింగ్ రోడ్, ఓర్వకల్లు", hi: "बाईपास रिंग रोड, ओरवाकल" },
    details: { en: "Excellent 4-wheeler and 2-wheeler driving training. RTO license processing guidance included.", te: "కార్ మరియు మోటార్ సైకిల్ డ్రైవింగ్ శిక్షణ. RTO లైసెన్స్ గైడెన్స్ ఇవ్వబడుతుంది.", hi: "चार पहिया और दो पहिया वाहन ड्राइविंग प्रशिक्षण। आरटीओ लाइसेंस सहायता शामिल है।" }
  },
  // 14. Medical stores
  {
    id: "shp-med-1",
    category: "medical",
    name: { en: "Balaji Medical & General Agency", te: "బాలాజీ మెడికల్ & జనరల్ ఏజెన్సీ", hi: "बालाजी मेडिकल एंड जनरल एजेंसी" },
    owner: { en: "K. Prasad Rao", te: "కె. ప్రసాదరావు", hi: "के. प्रसाद राव" },
    phone: "+91 9490123456",
    timing: { en: "8:00 AM - 11:00 PM (Emergency delivery)", te: "ఉదయం 8:00 - రాత్రి 11:00 (అత్యవసర సరఫరా)", hi: "सुबह 8:00 - रात 11:00 (आपातकालीन आपूर्ति)" },
    location: { en: "Opposite Primary Health Center, Orvakal", te: "ప్రాథమిక ఆరోగ్య కేంద్రం ఎదురుగా, ఓర్వకల్లు", hi: "प्राथमिक स्वास्थ्य केंद्र के सामने, ओरवाकल" },
    details: { en: "All prescription medicines, first-aid kits, pediatric medicines, baby foods and general items.", te: "అన్ని రకాల ప్రిస్క్రిప్షన్ మందులు, ప్రథమ చికిత్స కిట్లు, జనరల్ మెడిసిన్ లభిస్తాయి.", hi: "सभी डॉक्टर के पर्चे की दवाएं, प्राथमिक चिकित्सा किट, बाल चिकित्सा दवाएं और सामान्य वस्तुएं।" }
  },
  // 15. Milk Dairies
  {
    id: "shp-dry-1",
    category: "dairy",
    name: { en: "Sri Krishna Milk Collection & Dairy Center", te: "శ్రీ కృష్ణ పాల సేకరణ & డెయిరీ కేంద్రం", hi: "श्री कृष्णा दुग्ध संग्रह और डेयरी केंद्र" },
    owner: { en: "T. Anjaneyulu", te: "టి. ఆంజనేయులు", hi: "टी. आंजनेयुलु" },
    phone: "+91 9652122334",
    timing: { en: "5:00 AM - 9:00 AM, 5:00 PM - 8:00 PM", te: "ఉదయం 5-9, సాయంత్రం 5-8 వరకు", hi: "सुबह 5-9, शाम 5-8 बजे तक" },
    location: { en: "Gaddipadu Feeder road, Orvakal", te: "గడ్డిపాడు రోడ్, ఓర్వకల్లు", hi: "गद्दीपाडु रोड, ओरवाकल" },
    details: { en: "Pure cow and buffalo milk collection and sales. Ghee, butter, paneer and local curd available.", te: "స్వచ్ఛమైన ఆవు మరియు గేదె పాలు లభిస్తాయి. నెయ్యి, కోవా మరియు పెరుగు అందుబాటులో ఉన్నాయి.", hi: "शुद्ध गाय और भैंस के दूध का संग्रह और बिक्री। घी, मक्खन, पनीर और दही उपलब्ध।" }
  },
  // 16. Water Supplier
  {
    id: "shp-wtr-1",
    category: "water-supplier",
    name: { en: "Ganga Mineral Drinking Water Supplies", te: "గంగా మినరల్ స్వచ్ఛమైన తాగునీటి సరఫరా", hi: "गंगा मिनरल शुद्ध पेयजल आपूर्ति" },
    owner: { en: "K. Ramanjaneyulu", te: "కె. రామాంజనేయులు", hi: "के. रामान्जनेयुलु" },
    phone: "+91 9059556677",
    timing: { en: "24 Hours Delivery Service", te: "24 గంటల సరఫరా", hi: "24 घंटे डिलीवरी" },
    location: { en: "Panchayat Office lane, Orvakal", te: "పంచాయతీ ఆఫీస్ లేన్, ఓర్వకల్లు", hi: "पंचायत कार्यालय गली, ओरवाकल" },
    priceRate: { en: "Rs. 15 per 20 Liters Mineral Can", te: "20 లీటర్ల మినరల్ కాన్ రూ. 15", hi: "रु. 15 प्रति 20 लीटर मिनरल वाटर कैन" },
    details: { en: "Home delivery of chilled 20L mineral water cans for houses, factory offices and functions.", te: "ఇళ్లకు మరియు ఫ్యాక్టరీ ఆఫీసులకు 20 లీటర్ల మినరల్ వాటర్ క్యాన్లు హోమ్ డెలివరీ చేయబడతాయి.", hi: "घरों, कारखाने के कार्यालयों और समारोहों के लिए ठंडे 20L मिनरल वाटर कैन की होम डिलीवरी।" }
  },
  // 17. Laundry
  {
    id: "shp-lau-1",
    category: "laundry",
    name: { en: "Sri Rama Laundry & Dry Cleaning", te: "శ్రీ రామ లాండ్రీ & డ్రై క్లీనింగ్", hi: "श्री राम कपड़े धोने और ड्राई क्लीनिंग" },
    owner: { en: "M. Ramanjaneyulu", te: "ఎం. రామాంజనేయులు", hi: "एम. रामान्जनेयुलु" },
    phone: "+91 9059123456",
    timing: { en: "7:00 AM - 8:30 PM", te: "ఉదయం 7:00 - రాత్రి 8:30", hi: "सुबह 7:00 - रात 8:30" },
    location: { en: "Indira Nagar crossroads, Orvakal", te: "ఇందిరా నగర్ క్రాస్‌రోడ్స్, ఓర్వకల్లు", hi: "इंदिरा नगर चौराहा, ओरवाकल" },
    details: { en: "Steam ironing, dry wash for suits, blanket washing, and quick same-day cloth pressing.", te: "స్టీమ్ ఇస్త్రీ, బ్లేజర్ డ్రై క్లీనింగ్, దుప్పట్ల వాషింగ్ సేవలు కలవు.", hi: "स्टीम आयरनिंग, सूट की ड्राई वाश, कंबल धुलाई और त्वरित कपड़ों की प्रेसिंग।" }
  },
  // 18. Pesticide & Seeds
  {
    id: "shp-pest-1",
    category: "pesticide",
    name: { en: "Sri Srinivasa Agro Agencies & Fertilizer Store", te: "శ్రీ శ్రీనివాస ఆగ్రో ఏజెన్సీస్ & ఎరువుల దుకాణం", hi: "श्री श्रीनिवास एग्रो एजेंसीज और उर्वरक स्टोर" },
    owner: { en: "T. Srinivasa Reddy", te: "టి. శ్రీనివాస రెడ్డి", hi: "टी. श्रीनिवास रेड्डी" },
    phone: "+91 9440890123",
    timing: { en: "7:30 AM - 8:30 PM", te: "ఉదయం 7:30 - రాత్రి 8:30", hi: "सुबह 7:30 - रात 8:30" },
    location: { en: "Orvakal Main Road, near Gram Panchayat Office", te: "ఓర్వకల్లు మెయిన్ రోడ్, గ్రామ పంచాయతీ సమీపంలో", hi: "ओरवाकल मुख्य मार्ग, ग्राम पंचायत कार्यालय के पास" },
    details: { en: "High-quality seeds, chemical and organic fertilizers, pesticides, and soil health advice.", te: "నాణ్యమైన విత్తనాలు, సేంద్రీయ ఎరువులు, పురుగుమందులు మరియు వ్యవసాయ సలహాలు లభిస్తాయి.", hi: "उच्च गुणवत्ता वाले बीज, रासायनिक और जैविक उर्वरक, कीटनाशक और कृषि सलाह।" }
  },
  // 19. Courier & Cargo
  {
    id: "shp-cour-1",
    category: "courier",
    name: { en: "Professional Couriers & Cargo Orvakal Depot", te: "ప్రొఫెషనల్ కొరియర్స్ & కార్గో ఓర్వకల్లు", hi: "प्रोफेशनल कूरियर और कार्गो ओरवाकल डिपो" },
    owner: { en: "M. Subba Rayudu", te: "ఎం. సుబ్బారాయుడు", hi: "एम. सुब्बा रायडू" },
    phone: "+91 9059882233",
    timing: { en: "9:00 AM - 7:00 PM (Sunday Closed)", te: "ఉదయం 9:00 - సాయంత్రం 7:00", hi: "सुबह 9:00 - शाम 7:00" },
    location: { en: "Highway Junction Bypass, near Toll Plaza", te: "హైవే జంక్షన్ బైపాస్, టోల్ ప్లాజా సమీపంలో", hi: "हाईवे जंक्शन बाईपास, टोल प्लाजा के पास" },
    details: { en: "Fast courier delivery, parcel booking, cargo shipping, and home delivery services.", te: "వేగవంతమైన కొరియర్ మరియు పార్సెల్ బుకింగ్, కార్గో షిప్పింగ్ సేవలు కలవు.", hi: "तेज कूरियर वितरण, पार्सल बुकिंग, कार्गो शिपिंग और होम डिलीवरी सेवाएं।" }
  },
  // 20. Auto Stand & Transport
  {
    id: "shp-auto-1",
    category: "auto",
    name: { en: "Orvakal Junction Bypass Auto Stand", te: "ఓర్వకల్లు జంక్షన్ బైపాస్ ఆటో స్టాండ్", hi: "ओरवाकल जंक्शन बाईपास ऑटो स्टैंड" },
    owner: { en: "Local Auto Association Coordinator", te: "స్థానిక ఆటో సంఘం నిర్వాహకులు", hi: "स्थानीय ऑटो संघ समन्वयक" },
    phone: "+91 9652554433",
    timing: { en: "24 Hours Services", te: "24 గంటల సేవలు", hi: "24 घंटे उपलब्ध" },
    location: { en: "NH-40 Bypass Crossing, Orvakal Junction", te: "NH-40 బైపాస్ క్రాసింగ్, ఓర్వకల్లు జంక్షన్", hi: "एनएच-40 बाईपास क्रॉसिंग, ओरवाकल जंक्शन" },
    details: { en: "Local auto-rickshaws available for passenger travel to Kurnool, Nandyal, and surrounding villages.", te: "కర్నూలు, నంద్యాల మరియు చుట్టుపక్కల గ్రామాలకు ప్రయాణించడానికి లోకల్ ఆటోలు అందుబాటులో ఉంటాయి.", hi: "कर्नूल, नंदयाल और आसपास के गांवों की यात्रा के लिए ऑटो रिक्शा सेवा।" }
  },
  // 21. Drivers
  {
    id: "shp-driv-1",
    category: "drivers",
    name: { en: "Sri Sai Local Drivers & Tractor Chauffeurs Group", te: "శ్రీ సాయి లోకల్ డ్రైవర్లు & ట్రాక్టర్ డ్రైవర్స్ గ్రూప్", hi: "श्री साई लोकल ड्राइवर्स और ट्रैक्टर ड्राइवर्स समूह" },
    owner: { en: "K. Ramu", te: "కె. రాము", hi: "के. रामू" },
    phone: "+91 9059332211",
    timing: { en: "6:00 AM - 11:00 PM (Hourly booking)", te: "ఉదయం 6:00 - రాత్రి 11:00", hi: "सुबह 6:00 - रात 11:00" },
    location: { en: "Bypass Colony, Orvakal", te: "బైపాస్ కాలనీ, ఓర్వకల్లు", hi: "बाईपास कॉलोनी, ओरवाकल" },
    details: { en: "Experienced heavy vehicle, car, and tractor drivers available for hire on daily/weekly basis.", te: "కార్, ట్రాక్టర్ మరియు హెవీ వెహికల్ డ్రైవర్లు రోజువారీ/వార ప్రాతిపదికన అద్దెకు లభిస్తారు.", hi: "दैनिक या साप्ताहिक आधार पर किराए के लिए अनुभवी कार, ट्रैक्टर और भारी वाहन चालक।" }
  }
];

export const jobs: JobPost[] = [
  {
    id: "job-1",
    title: { en: "Solar Panel Maintenance Technician", te: "సోలార్ ప్యానెల్ నిర్వహణ టెక్నీషియన్", hi: "सौर पैनल रखरखाव तकनीशियन" },
    company: { en: "Greenko Energy Solutions", te: "గ్రీన్‌కో ఎనర్జీ సొల్యూషన్స్", hi: "ग्रीनको एनर्जी सॉल्यूशंस" },
    type: "full-time",
    salary: { en: "Rs. 18,000 - Rs. 22,000 / month", te: "రూ. 18,000 - రూ. 22,000 / నెలకు", hi: "रु. 18,000 - रु. 22,000 / माह" },
    requirements: { en: "ITI Electrical / Diploma in Electrical. 1+ year experience preferred.", te: "ఐటిఐ ఎలక్ట్రికల్ / డిప్లొమా. 1 సంవత్సరం అనుభవం ఉండాలి.", hi: "आईटीआई इलेक्ट्रिकल / इलेक्ट्रिकल में डिप्लोमा। 1+ वर्ष का अनुभव वरीय।" },
    description: { en: "Responsible for daily inspection, cleaning, and basic troubleshooting of solar panels at Orvakal Solar Park.", te: "ఓర్వకల్లు సోలార్ పార్క్‌లో సోలార్ ప్యానెళ్ల రోజువారీ తనిఖీ మరియు శుభ్రపరచడం.", hi: "ओरवाकल सौर पार्क में सौर पैनलों के दैनिक निरीक्षण, सफाई और बुनियादी समस्या निवारण के लिए जिम्मेदार।" },
    phone: "+91 9849902345",
    postedDate: "2026-06-08"
  },
  {
    id: "job-2",
    title: { en: "Warehouse Assistant & Loader", te: "వేర్‌హౌస్ అసిస్టెంట్ & లోడర్", hi: "गोदाम सहायक और लोडर" },
    company: { en: "Kurnool Industrial Logistics", te: "కర్నూలు ఇండస్ట్రియల్ లాజిస్టిక్స్", hi: "कर्नूल इंडस्ट्रियल लॉजिस्टिक्स" },
    type: "contract",
    salary: { en: "Rs. 500 / day", te: "రూ. 500 / రోజుకు", hi: "रु. 500 / दिन" },
    requirements: { en: "Physical fitness. Standard work hours. Secondary school education.", te: "శారీరక ధృఢత్వం. పదో తరగతి అర్హత.", hi: "शारीरिक फिटनेस। माध्यमिक विद्यालय शिक्षा।" },
    description: { en: "Loading and unloading raw materials and finished goods at the Orvakal Mandal industrial warehouse complex.", te: "ఓర్వకల్లు పారిశ్రామిక వేర్‌హౌస్‌లో సరుకు లోడింగ్ మరియు అన్‌లోడింగ్ చేయడం.", hi: "ओरवाकल मंडल औद्योगिक गोदाम परिसर में कच्चे माल और तैयार माल की लोडिंग और अनलोडिंग।" },
    phone: "+91 9059876543",
    postedDate: "2026-06-10"
  }
];

export const labourRegistry: Labour[] = [
  {
    id: "lab-1",
    name: { en: "K. Pedda Obanna", te: "కె. పెద్ద ఓబన్న", hi: "के. पेड्डा ओबन्ना" },
    skill: { en: "Mason / Construction Worker", te: "మేస్త్రీ / భవన నిర్మాణ కార్మికుడు", hi: "राजमिस्त्री / निर्माण श्रमिक" },
    rate: { en: "Rs. 750 / day", te: "రూ. 750 / రోజుకు", hi: "रु. 750 / दिन" },
    phone: "+91 9440598711",
    location: { en: "Orvakal Bypass Road", te: "ఓర్వకల్లు బైపాస్ రోడ్", hi: "ओरवाकल बाईपास रोड" }
  },
  {
    id: "lab-2",
    name: { en: "M. Gangadhar", te: "ఎం. గంగాధర్", hi: "एम. गंगाधर" },
    skill: { en: "Agricultural Harvest Helper", te: "వ్యవసాయ కోత సహాయకుడు", hi: "कृषि फसल कटाई सहायक" },
    rate: { en: "Rs. 550 / day", te: "రూ. 550 / రోజుకు", hi: "रु. 550 / दिन" },
    phone: "+91 9652123987",
    location: { en: "Gaddipadu Village limits", te: "గడ్డిపాడు గ్రామ పరిసరాలు", hi: "गद्दीपाडु गांव सीमा" }
  }
];

export const rentals: RentalProperty[] = [
  {
    id: "rnt-1",
    type: "house",
    rent: 6500,
    deposit: 15000,
    contactName: { en: "V. Somasekhar Reddy", te: "వై. సోమశేఖర్ రెడ్డి", hi: "वाई. सोमशेखर रेड्डी" },
    phone: "+91 9848123099",
    details: { en: "Spacious 2 BHK Independent House, 24/7 Borewell Water, parking available, near main bypass.", te: "2 BHK స్వతంత్ర ఇల్లు, నిరంతర నీటి సదుపాయం, పార్కింగ్ ఉంది.", hi: "विशाल 2 बीएचके स्वतंत्र घर, 24/7 बोरवेल का पानी, पार्किंग उपलब्ध।" },
    location: { en: "Sri Rama Nagar, Orvakal", te: "శ్రీ రామ నగర్, ఓర్వకల్లు", hi: "श्री राम नगर, ओरवाकल" },
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "rnt-2",
    type: "pg",
    rent: 3500,
    deposit: 3500,
    contactName: { en: "T. Narayana Swamy", te: "టి. నారాయణ స్వామి", hi: "टी. नारायण स्वामी" },
    phone: "+91 9989012776",
    details: { en: "Single sharing room for working professionals. Wi-Fi and power backup available.", te: "పనిచేసే ఉద్యోగులకు సింగిల్ రూమ్. వైఫై సదుపాయం కలదు.", hi: "काम करने वाले पेशेवरों के लिए सिंगल रूम। वाई-फाई और पावर बैकअप उपलब्ध।" },
    location: { en: "Industrial Development Zone, Orvakal", te: "ఇండస్ట్రియల్ జోన్, ఓర్వకల్లు", hi: "औद्योगिक विकास क्षेत्र, ओरवाकल" },
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=400&q=80"
  }
];

// ================== POSTAL SERVICES & BANKS SCHEMAS & DATA ==================

export interface PostalService {
  id: string;
  name: LocalizedText;
  schemes?: FinancialScheme[];
  postmaster: LocalizedText;
  phone: string;
  pincode: string;
  location: LocalizedText;
  timing: LocalizedText;
  services: LocalizedText[];
}

export interface BankAndAtm {
  id: string;
  name: LocalizedText;
  schemes?: FinancialScheme[];
  branch: LocalizedText;
  ifsc: string;
  phone: string;
  location: LocalizedText;
  hasAtm: boolean;
  atmStatus: LocalizedText;
  timing: LocalizedText;
}


export const postalServices: PostalService[] = [
  {
    id: "post-1",
    name: { en: "Orvakal Sub Post Office (S.O.)", te: "ఓర్వకల్లు సబ్ పోస్ట్ ఆఫీస్", hi: "ओरवाकल उप डाकघर" },
    postmaster: { en: "Mr. K. Mallikarjuna", te: "శ్రీ కే. మల్లికార్జున", hi: "श्री के. मल्लिकार्जुन" },
    phone: "+91 8518290200",
    pincode: "518452",
    location: { en: "Main Bazar Road, Orvakal", te: "మెయిన్ బజార్ రోడ్, ఓర్వకల్లు", hi: "मुख्य बाजार रोड, ओरवाकल" },
    timing: { en: "9:00 AM - 5:00 PM (Sunday Closed)", te: "ఉదయం 9:00 - సాయంత్రం 5:00", hi: "सुबह 9:00 - शाम 5:00" },
    services: [
      { en: "Speed Post & Registered Post", te: "స్పీడ్ పోస్ట్ & రిజిస్టర్డ్ పోస్ట్", hi: "स्पीड पोस्ट और पंजीकृत पोस्ट" },
      { en: "Savings Accounts & Sukanya Samriddhi Yojana", te: "పొదుపు ఖాతాలు & సుకన్య సమృద్ధి యోజన", hi: "बचत खाते और सुकन्या समृद्धि योजना" },
      { en: "Aadhaar Enabled Payment System (AePS)", te: "ఆధార్ ఆధారిత చెల్లింపు సేవలు (AePS)", hi: "आधार सक्षम भुगतान प्रणाली (AePS)" }
    ]
  }
];

export const banksAndAtms: BankAndAtm[] = [
  {
    id: "bnk-1",
    name: { en: "State Bank of India (SBI)", te: "స్టేట్ బ్యాంక్ ఆఫ్ ఇండియా (SBI)", hi: "भारतीय स्टेट बैंक (SBI)" },
    branch: { en: "Orvakal Branch", te: "ఓర్వకల్లు బ్రాంచ్", hi: "ओरवाकल शाखा" },
    ifsc: "SBIN0011122",
    phone: "+91 8518290300",
    location: { en: "Highway Circle Junction, Orvakal", te: "హైవే సర్కిల్ జంక్షన్, ఓర్వకల్లు", hi: "हाईवे सर्कल जंक्शन, ओरवाकल" },
    hasAtm: true,
    atmStatus: { en: "Working (24/7 Cash Available)", te: "పనిచేస్తుంది (24/7 నగదు అందుబాటులో ఉంది)", hi: "सक्रिय (24/7 नकद उपलब्ध)" },
    timing: { en: "10:00 AM - 4:00 PM", te: "ఉదయం 10:00 - సాయంత్రం 4:00", hi: "सुबह 10:00 - शाम 4:00" }
  },
  {
    id: "bnk-2",
    name: { en: "Andhra Pragathi Grameena Bank (APGB)", te: "ఆంధ్ర ప్రగతి గ్రామీణ బ్యాంక్ (APGB)", hi: "ఆంధ్ర ప్రగతి గ్రామీణ బ్యాంక్ (APGB)" },
    branch: { en: "Orvakal Branch", te: "ఓర్వకల్లు బ్రాంచ్", hi: "ओरवाकल शाखा" },
    ifsc: "APGB0002233",
    phone: "+91 8518290400",
    location: { en: "Mandal Office Road, Orvakal", te: "మండల కార్యాలయ రోడ్, ఓర్వకల్లు", hi: "मंडल कार्यालय रोड, ओरवाकल" },
    hasAtm: true,
    atmStatus: { en: "Working (Cash Available)", te: "పనిచేస్తుంది (నగదు అందుబాటులో ఉంది)", hi: "सक्रिय (नकद उपलब्ध)" },
    timing: { en: "10:00 AM - 4:00 PM", te: "ఉదయం 10:00 - సాయంత్రం 4:00", hi: "सुबह 10:00 - शाम 4:00" }
  },
  {
    id: "bnk-3",
    name: { en: "Canara Bank", te: "కెనరా బ్యాంక్", hi: "केनरा बैंक" },
    branch: { en: "Orvakal Branch", te: "ఓర్వకల్లు బ్రాంచ్", hi: "ओरवाकल शाखा" },
    ifsc: "CNRB0013388",
    phone: "+91 8518290500",
    location: { en: "Mandi Road, near Bus Stand, Orvakal", te: "మండి రోడ్, బస్ స్టాండ్ సమీపంలో, ఓర్వకల్లు", hi: "मंडी रोड, बस स्टैंड के पास, ओरवाकल" },
    hasAtm: true,
    atmStatus: { en: "Working (24/7 Cash Available)", te: "పనిచేస్తుంది (24/7 నగదు అందుబాటులో ఉంది)", hi: "सक्रिय (24/7 नकद उपलब्ध)" },
    timing: { en: "10:00 AM - 4:00 PM", te: "ఉదయం 10:00 - సాయంత్రం 4:00", hi: "सुबह 10:00 - शाम 4:00" }
  }
];

export const govtSchemes: GovtScheme[] = [
  ...stateSchemes,
  ...centralSchemes,
  ...bankSchemes,
  ...postalSchemes
];

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: {
      en: "Greenco Group to expand Renewable Energy storage near Orvakal",
      te: "ఓర్వకల్లు సమీపంలో గ్రీన్‌కో పునరుత్పాదక ఇంధన నిల్వ ప్రాజెక్ట్ విస్తరణ",
      hi: "ग्रीनको ग्रुप ओरवाकल के पास अक्षय ऊर्जा भंडारण का विस्तार करेगा"
    },
    source: { en: "Economic Times", te: "ఎకనామిక్ టైమ్స్", hi: "इकोनॉमिक टाइम्स" },
    date: "2026-06-08",
    summary: {
      en: "Greenco plans to invest Rs 4,500 Crore in expanding its Pumped Solar-Wind Integrated storage capacity in the Kurnool cluster, creating 800+ local technical jobs.",
      te: "కర్నూలు క్లస్టర్ లో సోలార్-విండ్ ఇంటిగ్రేటెడ్ పవర్ స్టోరేజ్ సామర్థ్యం విస్తరణకు గ్రీన్‌కో రూ. 4,500 కోట్ల పెట్టుబడి పెట్టనుంది, దీనివల్ల 800 మందికి పైగా స్థానికులకు ఉద్యోగ అవకాశాలు లభిస్తాయి.",
      hi: "ग्रीनको ने कर्नूल क्लस्टर में अपनी पंपयुक्त सौर-पवन एकीकृत भंडारण क्षमता का विस्तार करने के लिए 4,500 करोड़ रुपये के निवेश की योजना बनाई है, जिससे 800+ तकनीकी रोजगार पैदा होंगे।"
    }
  },
  {
    id: "news-2",
    title: {
      en: "Kurnool Airport (Orvakal) flight operations report 25% traffic rise",
      te: "కర్నూలు విమానాశ్రయం (ఓర్వకల్లు) లో ప్రయాణీకుల సంఖ్య 25% పెరిగింది",
      hi: "कर्नूल हवाई अड्डे (ओरवाकल) पर उड़ानों में 25% यात्री वृद्धि दर्ज"
    },
    source: { en: "AP Civil Aviation", te: "ఏపీ సివిల్ ఏవియేషన్", hi: "एपी नागरिक उड्डयन Authority" },
    date: "2026-06-05",
    summary: {
      en: "Vande Bharat connecting routes and regional business travel have fueled a 25% passenger increase at KJB airport. Direct flights to Chennai and Visakhapatnam are in final discussions.",
      te: "ప్రాంతీయ వ్యాపార ప్రయాణాలు పెరగడం వల్ల ఓర్వకల్లు విమానాశ్రయంలో ప్రయాణీకుల రద్దీ 25% పెరిగింది. త్వరలో చెన్నై మరియు విశాఖపట్నానికి నేరుగా విమాన సర్వీసులు ప్రారంభం కానున్నాయి.",
      hi: "क्षेत्रीय व्यापार यात्राओं के कारण केजेबी हवाई अड्डे पर यात्रियों की संख्या में 25% की वृद्धि हुई है। चेन्नई और विशाखापत्तनम के लिए सीधी उड़ानों पर अंतिम बातचीत चल रही है।"
    }
  },
  {
    id: "news-3",
    title: {
      en: "Jairaj Ispat steel grinding plant starts trial runs in Orvakal corridor",
      te: "ఓర్వకల్లు పారిశ్రామిక కారిడార్ లో జైరాజ్ ఇస్పాత్ స్టీల్ గ్రైండింగ్ ప్లాంట్ ట్రయల్ రన్స్ ప్రారంభం",
      hi: "जयराज इस्पात स्टील ग्राइंडिंग प्लांट ने ओरवाकल में परीक्षण शुरू किया"
    },
    source: { en: "Industrial Update", te: "ఇండస్ట్రియల్ అప్ డేట్", hi: "इंडस्ट्रियल अपडेट" },
    date: "2026-05-28",
    summary: {
      en: "Jairaj Ispat Limited has commenced cold trial runs of its upcoming steel bar rolling and processing mill. Commercial production is slated for next month, employing 500 local youths.",
      te: "జైరాజ్ ఇస్పాత్ లిమిటెడ్ తన నూతన స్టీల్ రోలింగ్ మిల్లు యొక్క ట్రయల్ రన్స్ విజయవంతంగా ప్రారంభించింది. వచ్చే నెల నుండి వాణిజ్య ఉత్పత్తి ప్రారంభం కానుంది, దీనివల్ల 500 మంది యువతకు ఉపాధి లభిస్తుంది.",
      hi: "जयराज इस्पात लिमिटेड ने अपनी आगामी स्टील बार रोलिंग मिल का परीक्षण सफलतापूर्वक शुरू कर दिया है। अगले महीने से वाणिज्यिक उत्पादन शुरू होने की उम्मीद है, जिससे 500 युवाओं को रोजगार मिलेगा।"
    }
  },
  {
    id: "news-4",
    title: {
      en: "Reliance Agro Food Processing unit allocated 50 acres in Mega Food Park",
      te: "మెగా ఫుడ్ పార్క్ లో రిలయన్స్ ఆగ్రో ఫుడ్ ప్రాసెసింగ్ యూనిట్ కు 50 ఎకరాల భూమి కేటాయింపు",
      hi: "रिलायंस एग्रो फूड प्रोसेसिंग यूनिट को मेगा फूड पार्क में 50 एकड़ भूमि आवंटित"
    },
    source: { en: "APIIC Desk", te: "APIIC డెస్క్", hi: "एपीआईआईसी डेस्क" },
    date: "2026-05-20",
    summary: {
      en: "APIIC has cleared the land allocation of 50 acres to Reliance Group for setting up a fruit processing and juice concentrate unit at Kurnool Mega Food Park, Orvakal.",
      te: "ఓర్వకల్లు మెగా ఫుడ్ పార్క్ లో పండ్ల ప్రాసెసింగ్ మరియు జ్యూస్ కాన్సంట్రేట్ యూనిట్ ఏర్పాటుకు రిలయన్స్ గ్రూప్ కు 50 ఎకరాల భూమి కేటాయింపును APIIC ఆమోదించింది.",
      hi: "एपीआईआईसी ने ओरवाकल के मेगा फूड पार्क में रिलायंस ग्रुप को फ्रूट प्रोसेसिंग और जूस यूनिट स्थापित करने के लिए 50 एकड़ भूमि के आवंटन को मंजूरी दे दी है।"
    }
  }
];

// ================== EXTRA ADDED DATA (COMMITTEES, crops, FERTILIZERS) ==================

export interface Committee {
  id: string;
  name: LocalizedText;
  president: LocalizedText;
  membersCount: number;
  phone: string;
  purpose: LocalizedText;
  meetings: LocalizedText;
}

export const committees: Committee[] = [
  {
    id: "com-1",
    name: { en: "Temple Committee", te: "ఆలయ కమిటీ", hi: "मंदिर समिति" },
    president: { en: "T. Narayana Reddy", te: "టి. నారాయణ రెడ్డి", hi: "टी. नारायण रेड्डी" },
    membersCount: 15,
    phone: "+91 9440129911",
    purpose: { en: "Manages village temple funds, festivals, and infrastructure maintenance.", te: "గ్రామ దేవాలయాల నిధులు, ఉత్సవాలు మరియు మౌలిక సదుపాయాల పర్యవేక్షణ.", hi: "ग्राम मंदिर निधि, उत्सवों और बुनियादी ढांचे के रख-रखाव का प्रबंधन।" },
    meetings: { en: "First Sunday of every month", te: "ప్రతి నెల మొదటి ఆదివారం", hi: "हर महीने का पहला रविवार" }
  },
  {
    id: "com-2",
    name: { en: "Kaavali Committee (Village Guard)", te: "కావలి కమిటీ", hi: "कावली समिति (ग्राम रक्षक)" },
    president: { en: "K. Pedda Pullanna", te: "కె. పెద్ద పుల్లన్న", hi: "के. पेड्डा पुल्लन्ना" },
    membersCount: 20,
    phone: "+91 9959341235",
    purpose: { en: "Coordinates neighborhood watches, night patrols, and security measures with Police.", te: "రాత్రి సమయాలలో కావలి తిరుగుట, గ్రామ భద్రతా చర్యల పర్యవేక్షణ.", hi: "रात की गश्त और पुलिस के साथ सुरक्षा उपायों का समन्वय।" },
    meetings: { en: "Bi-weekly on Saturdays", te: "ప్రతి రెండు వారాలకొకసారి శనివారం", hi: "हर दो सप्ताह में शनिवार को" }
  },
  {
    id: "com-3",
    name: { en: "Watershed Committee", te: "వాటర్‌షెడ్ కమిటీ", hi: "वाटरशेड समिति" },
    president: { en: "M. Chinna Obulanna", te: "ఎం. చిన్న ఓబులన్న", hi: "एम. चिन्ना ओबुलन्ना" },
    membersCount: 12,
    phone: "+91 9652314561",
    purpose: { en: "Oversees local lake desiltation, watershed conservation, and farm pond works.", te: "చెరువుల పూడికతీత, జల సంరక్షణ మరియు వ్యవసాయ కుంటల పనుల పర్యవేక్షణ.", hi: "स्थानीय तालाबों की गाद निकालना, जल संरक्षण और कृषि तालाबों के कार्यों की देखरेख।" },
    meetings: { en: "Monthly on 10th", te: "ప్రతి నెల 10వ తేదీన", hi: "हर महीने की 10 तारीख को" }
  },
  {
    id: "com-4",
    name: { en: "Church Committee", te: "చర్చి కమిటీ", hi: "चर्च समिति" },
    president: { en: "Y. Joseph", te: "వై. జోసెఫ్", hi: "वाई. जोसेफ" },
    membersCount: 10,
    phone: "+91 9010452391",
    purpose: { en: "Manages local church prayers, charity funds, and festival events.", te: "చర్చి ప్రార్థనలు, సేవా కార్యక్రమాలు మరియు పండుగ ఏర్పాట్లు.", hi: "स्थानीय चर्च की प्रार्थनाओं, धर्मार्थ निधियों और त्योहारों का प्रबंधन।" },
    meetings: { en: "Every Sunday after service", te: "ప్రతి ఆదివారం ప్రార్థన అనంతరం", hi: "हर रविवार सेवा के बाद" }
  },
  {
    id: "com-5",
    name: { en: "Mosque Committee", te: "మసీదు కమిటీ", hi: "मस्जिद समिति" },
    president: { en: "Md. Abdul Latheef", te: "మహమ్మద్ అబ్దుల్ లతీఫ్", hi: "मोहम्मद अब्दुल लतीफ" },
    membersCount: 12,
    phone: "+91 9494301242",
    purpose: { en: "Coordinates daily prayers, Ramzan charity allocations, and madrasa maintenance.", te: "రోజువారీ ప్రార్థనలు, రంజాన్ తోఫా పంపిణీ మరియు మసీదు పర్యవేక్షణ.", hi: "दैनिक नमाज़, रमज़ान दान और मदरसे के रख-रखाव का समन्वय।" },
    meetings: { en: "Monthly on 5th", te: "ప్రతి నెల 5వ తేదీన", hi: "हर महीने की 5 तारीख को" }
  },
  {
    id: "com-6",
    name: { en: "Cricket & Sports Club", te: "క్రికెట్ & స్పోర్ట్స్ క్లబ్", hi: "क्रिकेट और स्पोर्ट्स क्लब" },
    president: { en: "P. Vinay Kumar", te: "పి. వినయ్ కుమార్", hi: "पी. विनय कुमार" },
    membersCount: 35,
    phone: "+91 7702951234",
    purpose: { en: "Organizes local youth tournaments and maintains the village cricket ground.", te: "యువతకు క్రికెట్ టోర్నమెంట్ల నిర్వహణ మరియు క్రీడా మైదాన పర్యవేక్షణ.", hi: "स्थानीय युवाओं के लिए खेल प्रतियोगिताओं का आयोजन और खेल मैदान का रखरखाव।" },
    meetings: { en: "Every Sunday evening", te: "ప్రతి ఆదివారం సాయంత్రం", hi: "हर रविवार शाम" }
  },
  {
    id: "com-7",
    name: { en: "Students Club", te: "స్టూడెంట్స్ క్లబ్", hi: "स्टूडेंट्स क्लब" },
    president: { en: "K. Haritha", te: "కె. హరిత", hi: "के. हरिता" },
    membersCount: 25,
    phone: "+91 8897012351",
    purpose: { en: "Facilitates study circles, group discussions, and distributes study materials.", te: "గ్రూప్ స్టడీ సర్కిల్స్ నిర్వహణ, పుస్తకాల పంపిణీ మరియు కెరీర్ గైడెన్స్.", hi: "अध्ययन समूहों का संचालन, पुस्तकों का वितरण और करियर मार्गदर्शन।" },
    meetings: { en: "Bi-weekly on Sundays", te: "ప్రతి రెండు వారాలకొకసారి ఆదివారం", hi: "हर दो सप्ताह में रविवार को" }
  },
  {
    id: "com-8",
    name: { en: "Education and workshop club", te: "ఎడ్యుకేషన్ & వర్క్‌షాప్ క్లబ్", hi: "शिक्षा और कार्यशाला क्लब" },
    president: { en: "Prof. S. Ramakrishna", te: "ప్రొఫెసర్ ఎస్. రామకృష్ణ", hi: "प्रो. एस. रामकृष्ण" },
    membersCount: 15,
    phone: "+91 9441223344",
    purpose: { en: "Conducts technology workshops, farm machinery training, and career seminars.", te: "నూతన సాంకేతిక వర్క్‌షాప్‌లు మరియు వ్యవసాయ శిక్షణా తరగతుల నిర్వహణ.", hi: "कृषि और तकनीकी कार्यशालाओं और करियर सेमिनारों का आयोजन।" },
    meetings: { en: "Last Saturday of every month", te: "ప్రతి నెల చివరి శనివారం", hi: "हर महीने का आखिरी शनिवार" }
  },
  {
    id: "com-9",
    name: { en: "Business club", te: "బిజినెస్ క్లబ్", hi: "बिजनेस क्लब" },
    president: { en: "G. Venkateswarlu", te: "జి. వెంకటేశ్వర్లు", hi: "जी. वेंकटेश्वरलू" },
    membersCount: 18,
    phone: "+91 9963012999",
    purpose: { en: "Promotes local entrepreneurship, cottage industries, and bank credit access.", te: "స్థానిక చిరు వ్యాపారాలు మరియు కుటీర పరిశ్రమల అభివృద్ధికి తోడ్పాటు.", hi: "स्थानीय व्यवसायों, कुटीर उद्योगों और बैंकों से ऋण प्राप्त करने में सहायता।" },
    meetings: { en: "First Monday of every month", te: "ప్రతి నెల మొదటి సోమవారం", hi: "हर महीने का पहला सोमवार" }
  }
];

export interface CommercialCrop {
  id: string;
  name: LocalizedText;
  soilType: LocalizedText;
  waterRequirement: LocalizedText;
  duration: LocalizedText;
  yield: LocalizedText;
  demand: LocalizedText;
  marketPrice: LocalizedText;
}

export const commercialCrops: CommercialCrop[] = [
  {
    id: "crp-1",
    name: { en: "Cotton (Kapas)", te: "పత్తి", hi: "कपास" },
    soilType: { en: "Black cotton soil / deep loamy soil", te: "నల్ల రేగడి నేలలు / సారవంతమైన లోమ్ నేలలు", hi: "काली मिट्टी / दोमट मिट्टी" },
    waterRequirement: { en: "Medium (500-700 mm), dry weather during harvesting", te: "మధ్యస్థం (పంట కోత సమయంలో పొడి వాతావరణం ఉండాలి)", hi: "मध्यम, कटाई के समय शुष्क मौसम" },
    duration: { en: "150 - 180 Days", te: "150 - 180 రోజులు", hi: "150 - 180 दिन" },
    yield: { en: "8 - 12 Quintals / Acre", te: "ఎకరాకు 8 - 12 క్వింటాళ్లు", hi: "8 - 12 क्विंटल / एकड़" },
    demand: { en: "Very High (local ginning mills & export centers)", te: "చాలా ఎక్కువ (స్థానిక మిల్లులు & ఎగుమతులు)", hi: "बहुत अधिक (स्थानीय मिलें और निर्यात)" },
    marketPrice: { en: "Rs. 6,800 - Rs. 7,500 / Quintal", te: "రూ. 6,800 - రూ. 7,500 / క్వింటాల్‌కి", hi: "रु. 6,800 - रु. 7,500 / क्विंटल" }
  },
  {
    id: "crp-2",
    name: { en: "Chillies (Teja & Guntur varieties)", te: "మిరప", hi: "मिर्च" },
    soilType: { en: "Red loamy and black soils with good drainage", te: "నీరు నిలవని ఎర్ర లోమ్ మరియు నల్ల నేలలు", hi: "अच्छी जल निकासी वाली लाल दोमट और काली मिट्टी" },
    waterRequirement: { en: "High (Irrigated crop, regular moisture needed)", te: "ఎక్కువ (నిరంతరం తేమ అందించాలి)", hi: "अधिक (नियमित सिंचाई आवश्यक)" },
    duration: { en: "180 - 210 Days", te: "180 - 210 రోజులు", hi: "180 - 210 दिन" },
    yield: { en: "15 - 20 Quintals (Dry) / Acre", te: "ఎకరాకు 15 - 20 క్వింటాళ్లు (ఎండినవి)", hi: "15 - 20 क्विंटल (सूखी) / एकड़" },
    demand: { en: "Extremely High (Guntur Mirchi Yard trading hub)", te: "అత్యధికం (గుంటూరు మార్కెట్ యార్డ్ ద్వారా వ్యాపారం)", hi: "अत्यधिक उच्च (गुंटूर मिर्ची यार्ड निर्यात)" },
    marketPrice: { en: "Rs. 18,000 - Rs. 24,000 / Quintal", te: "రూ. 18,000 - రూ. 24,000 / క్వింటాల్‌కి", hi: "रु. 18,000 - रु. 24,000 / क्विंटल" }
  },
  {
    id: "crp-3",
    name: { en: "Groundnut (K-6 / Bold varieties)", te: "వేరుశనగ", hi: "मूंगफली" },
    soilType: { en: "Sandy loam / light red soils", te: "ఇసుక లోమ్ / తేలికపాటి ఎర్ర నేలలు", hi: "बलुई दोमट / हल्की लाल मिट्टी" },
    waterRequirement: { en: "Low-Medium (critical pegging stage moisture)", te: "తక్కువ-మధ్యస్థం (ఊడలు దిగే దశలో నీరు అవసరం)", hi: "कम-मध्यम (पेगिंग चरण में नमी आवश्यक)" },
    duration: { en: "105 - 115 Days", te: "105 - 115 రోజులు", hi: "105 - 115 दिन" },
    yield: { en: "10 - 15 Quintals / Acre", te: "ఎకరాకు 10 - 15 క్వింటాళ్లు", hi: "10 - 15 क्विंटल / एकड़" },
    demand: { en: "High (oil extraction units in Kurnool region)", te: "ఎక్కువ (కర్నూలు ఆయిల్ మిల్లుల కొనుగోలు)", hi: "उच्च (कर्नूल क्षेत्र में तेल मिलें)" },
    marketPrice: { en: "Rs. 6,200 - Rs. 6,800 / Quintal", te: "రూ. 6,200 - రూ. 6,800 / క్వింటాల్‌కి", hi: "रु. 6,200 - रु. 6,800 / क्विंटल" }
  },
  {
    id: "crp-4",
    name: { en: "Pomegranate (Anar)", te: "దానిమ్మ", hi: "अनार" },
    soilType: { en: "Deep gravelly loamy soil, tolerates salinity", te: "లోతైన గ్రావెల్ లోమ్ నేలలు, ఉప్పు నేలలను తట్టుకుంటుంది", hi: "बजरीली दोमट मिट्टी, लवणता सहिष्णु" },
    waterRequirement: { en: "Low (Horticulture drip-irrigated)", te: "తక్కువ (బిందు సేద్యం ద్వారా సాగు)", hi: "कम (ड्रिप सिंचाई उपयुक्त)" },
    duration: { en: "Perennial (Harvest starts from 2nd Year)", te: "బహువార్షిక (2వ సంవత్సరం నుండి కోత ప్రారంభం)", hi: "बारहमासी (दूसरे वर्ष से कटाई शुरू)" },
    yield: { en: "4 - 5 Tons / Acre", te: "ఎకరాకు 4 - 5 టన్నులు", hi: "4 - 5 टन / एकड़" },
    demand: { en: "High (fruit markets in Bangalore/Hyderabad)", te: "ఎక్కువ (బెంగళూరు/హైదరాబాద్ పండ్ల మార్కెట్లు)", hi: "उच्च (बेंगलुरु / हैदराबाद फल बाजार)" },
    marketPrice: { en: "Rs. 80,000 - Rs. 1,20,000 / Ton", te: "రూ. 80,000 - రూ. 1,20,000 / టన్నుకు", hi: "रु. 80,000 - रु. 1,20,000 / टन" }
  },
  {
    id: "crp-5",
    name: { en: "Turmeric (Haldi)", te: "పసుపు", hi: "हल्दी" },
    soilType: { en: "Sandy loam or clayey loam with organic matter", te: "సేంద్రీయ పదార్థాలున్న ఇసుక లోమ్ లేదా నల్ల రేగడి నేలలు", hi: "जैविक पदार्थों से युक्त बलुई दोमट या दोमट मिट्टी" },
    waterRequirement: { en: "High, regular watering except before harvest", te: "ఎక్కువ (కోతకు ముందు తప్ప మిగతా దశల్లో నిరంతర నీరు అవసరం)", hi: "अधिक, खुदाई से पहले को छोड़कर नियमित सिंचाई आवश्यक" },
    duration: { en: "210 - 270 Days", te: "210 - 270 రోజులు", hi: "210 - 270 दिन" },
    yield: { en: "8 - 10 Tons / Acre", te: "ఎకరాకు 8 - 10 టన్నులు", hi: "8 - 10 टन / एकड़" },
    demand: { en: "High (spices markets & pharmaceutical companies)", te: "ఎక్కువ (మసాలా మార్కెట్లు & ఫార్మా కంపెనీల కొనుగోలు)", hi: "उच्च (मसाला बाजार और फार्मास्युटिकल कंपनियां)" },
    marketPrice: { en: "Rs. 12,000 - Rs. 15,000 / Quintal", te: "రూ. 12,000 - రూ. 15,000 / క్వింటాల్‌కి", hi: "रु. 12,000 - रु. 15,000 / क्विंटल" }
  },
  {
    id: "crp-6",
    name: { en: "Aloe Vera", te: "కలబంద", hi: "एलोवेरा" },
    soilType: { en: "Well-drained sandy or gravelly loam, dry climates", te: "నీరు నిలవని ఇసుక మరియు ఇసుక లోమ్ నేలలు", hi: "अच्छी जल निकासी वाली रेतीली या बजरीली दोमट मिट्टी" },
    waterRequirement: { en: "Very Low (drought tolerant, avoid water logging)", te: "చాలా తక్కువ (తేమ నిల్వ ఉండకూడదు, తక్కువ నీరు అవసరం)", hi: "बहुत कम (सूखा सहिष्णु, जलभराव से बचें)" },
    duration: { en: "240 - 300 Days (continuous harvesting)", te: "240 - 300 రోజులు (నిరంతర కోతలు సాధ్యం)", hi: "240 - 300 दिन (लगातार कटाई संभव)" },
    yield: { en: "15 - 20 Tons / Acre", te: "ఎకరాకు 15 - 20 టన్నులు", hi: "15 - 20 टन / एकड़" },
    demand: { en: "High (cosmetic, herbal and wellness products)", te: "ఎక్కువ (సౌందర్య సాధనాలు & ఆయుర్వేద ఉత్పత్తులు)", hi: "उच्च (सौंदर्य प्रसाधन, हर्बल और कल्याण उत्पाद)" },
    marketPrice: { en: "Rs. 5,000 - Rs. 8,000 / Ton", te: "రూ. 5,000 - రూ. 8,000 / టన్నుకు", hi: "रु. 5,000 - रु. 8,000 / टन" }
  }
];

export interface FertilizerRecommendation {
  id: string;
  crop: LocalizedText;
  fertilizer: LocalizedText;
  dosage: LocalizedText;
  stage: LocalizedText;
}

export const fertilizerRecommendations: FertilizerRecommendation[] = [
  {
    id: "fer-1",
    crop: { en: "Paddy (Rice)", te: "వరి (వరి నాట్లు)", hi: "धान (चावल)" },
    fertilizer: { en: "NPK (Nitrogen, Phosphorus, Potassium) + Urea", te: "ఎన్‌పీకే (నత్రజని, భాస్వరం, పొటాషియం) + యూరియా", hi: "एनपीके (नाइट्रोजन, फास्फोरस, पोटेशियम) + यूरिया" },
    dosage: { en: "Urea: 110 kg, N: 50 kg, P: 24 kg, K: 20 kg per Acre", te: "యూరియా: 110 కిలోలు, N: 50 కిలోలు, P: 24 కిలోలు, K: 20 కిలోలు ఎకరాకు", hi: "यूरिया: 110 किलोग्राम, एन: 50 किलोग्राम, पी: 24 किलोग्राम, के: 20 किलोग्राम प्रति एकड़" },
    stage: {
      en: "Apply entire Phosphorus as basal. Nitrogen in 3 splits: basal, active tillering, panicle initiation.",
      te: "మొత్తం భాస్వరం విత్తేటప్పుడే వేయాలి. నత్రజని 3 విడతలుగా: నాటు వేసేటప్పుడు, పిలకల దశ, ఈనక దశ.",
      hi: "पूरा फास्फोरस बेसल खुराक के रूप में डालें। नाइट्रोजन 3 भागों में: बेसल, कल्ले फूटने और बाली आने पर।"
    }
  },
  {
    id: "fer-2",
    crop: { en: "Groundnut", te: "వేరుశనగ", hi: "मूंगफली" },
    fertilizer: { en: "Urea, NPK, Gypsum", te: "యూరియా, ఎన్‌పీకే, జిప్సం", hi: "यूरिया, एनपीके, जिप्सम" },
    dosage: { en: "Urea: 30 kg, N: 12 kg, P: 20 kg, K: 20 kg, Gypsum: 200 kg per Acre", te: "యూరియా: 30 కిలోలు, N: 12 కిలోలు, P: 20 కిలోలు, K: 20 కిలోలు, జిప్సం: 200 కిలోలు ఎకరాకు", hi: "यूरिया: 30 किलोग्राम, एन: 12 किलोग्राम, पी: 20 किलोग्राम, के: 20 किलोग्राम, जिप्सम: 200 किलोग्राम प्रति एकड़" },
    stage: {
      en: "NPK as basal. Apply Gypsum at 45 days (pegging stage) for pod filling.",
      te: "ఎన్‌పీకే విత్తేటప్పుడే వేయాలి. కాయలు నిండేందుకు 45 రోజుల (ఊడలు దిగే) దశలో జిప్సం వేయాలి.",
      hi: "एनपीके बेसल के रूप में। फली भरने के लिए 45 दिनों (पेगिंग चरण) पर जिप्सम डालें।"
    }
  },
  {
    id: "fer-3",
    crop: { en: "Cotton", te: "పత్తి", hi: "कपास" },
    fertilizer: { en: "Urea, Nitrogen, Phosphorus, Potassium", te: "యూరియా, నత్రజని, భాస్వరం, పొటాషియం", hi: "यूरिया, नाइट्रोजन, फास्फोरस, पोटेशियम" },
    dosage: { en: "Urea: 130 kg, N: 60 kg, P: 30 kg, K: 30 kg per Acre", te: "యూరియా: 130 కిలోలు, N: 60 కిలోలు, P: 30 కిలోలు, K: 30 కిలోలు ఎకరాకు", hi: "यूरिया: 130 किलोग्राम, एन: 60 किलोग्राम, पी: 30 किलोग्राम, के: 30 किलोग्राम प्रति एकड़" },
    stage: {
      en: "Split N & K into 3 equal parts at 30, 60, and 90 days. Apply under adequate moisture.",
      te: "నత్రజని & పొటాష్‌ను విత్తిన 30, 60, 90 రోజులలో 3 విడతలుగా వేయాలి. తేమ ఉన్నప్పుడే వేయాలి.",
      hi: "एन और के को बुवाई के 30, 60 और 90 दिनों में 3 समान भागों में डालें। पर्याप्त नमी में ही प्रयोग करें।"
    }
  },
  {
    id: "fer-4",
    crop: { en: "Bengal Gram (Chickpea)", te: "శనగ", hi: "चना (बंगाल ग्राम)" },
    fertilizer: { en: "Urea, NPK, Sulfur", te: "యూరియా, ఎన్‌పీకే, సల్ఫర్", hi: "यूरिया, एनपीके, सल्फर" },
    dosage: { en: "Urea: 20 kg, N: 8 kg, P: 20 kg, Sulfur: 10 kg per Acre", te: "యూరియా: 20 కిలోలు, N: 8 కిలోలు, P: 20 కిలోలు, సల్ఫర్: 10 కిలోలు ఎకరాకు", hi: "यूरिया: 20 किलोग्राम, एन: 8 किलोग्राम, पी: 20 किलोग्राम, सल्फर: 10 किलोग्राम प्रति एकड़" },
    stage: {
      en: "Apply all fertilizers as basal before sowing. Seed treatment with Rhizobium is highly recommended.",
      te: "విత్తే ముందే అన్ని ఎరువులు బేసల్ మోతాదుగా వేయాలి. రైజోబియంతో విత్తన శుద్ధి సిఫార్సు చేయబడింది.",
      hi: "बुवाई से पहले सभी उर्वरकों को बेसल के रूप में डालें। राइजोबियम से बीज उपचार अत्यधिक अनुशंसित है।"
    }
  },
  {
    id: "fer-5",
    crop: { en: "Chillies", te: "మిరప", hi: "మిర్చి" },
    fertilizer: { en: "Organic Manure, Urea, NPK, Micronutrients (Boron/Zinc)", te: "సేంద్రీయ ఎరువు, యూరియా, ఎన్‌పీకే, సూక్ష్మపోషకాలు (బోరాన్/జింక్)", hi: "जैविक खाद, यूरिया, एनपीके, सूक्ष्म पोषक तत्व (बोरान/जिंक)" },
    dosage: { en: "Manure: 10 tons, Urea: 160 kg, N: 70 kg, P: 35 kg, K: 35 kg per Acre", te: "పశువుల ఎరువు: 10 టన్నులు, యూరియా: 160 కిలోలు, N: 70 కిలోలు, P: 35 కిలోలు, K: 35 కిలోలు ఎకరాకు", hi: "खाद: 10 टन, यूरिया: 160 किलोग्राम, एन: 70 किलोग्राम, पी: 35 किलोग्राम, के: 35 किलोग्राम प्रति एकड़" },
    stage: {
      en: "Manure as basal. NPK split in 4 doses. Spray micronutrients at flowering/fruiting.",
      te: "పశువుల ఎరువు నాటేటప్పుడు. ఎన్‌పీకే ఎరువులు 4 విడతలుగా. పూత/కాత దశలలో సూక్ష్మపోషకాలు పిచికారీ చేయాలి.",
      hi: "खाद बेसल के रूप में। एनपीके 4 खुराकों में विभाजित। फूल आने/फल लगने पर सूक्ष्म पोषक तत्वों का छिड़काव करें।"
    }
  }
];
