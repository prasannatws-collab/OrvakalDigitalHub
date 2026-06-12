import type { PowerSchedule, RepairMechanic, AgriContact, VegMandiRate, MandiRate, TractorRental, CropAdvisory, WaterLevel, MspRate, CropHolidayInfo, CommercialCrop, FertilizerRecommendation } from '../../../types';

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
