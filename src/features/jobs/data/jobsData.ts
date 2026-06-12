import type { JobPost, Labour, RentalProperty, IndustrialPlant } from '../../../types';

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

