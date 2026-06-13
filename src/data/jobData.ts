import type { JobPost, Labour, RentalProperty } from '../types';

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
