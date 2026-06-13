import type { LocalizedText } from '../types';

export interface PoliceOfficer {
  role: LocalizedText;
  name: LocalizedText;
  phone: string;
}

export interface PatrolSchedule {
  name: LocalizedText;
  timing: LocalizedText;
  description: LocalizedText;
}

export interface PoliceDetailed {
  id: string;
  name: LocalizedText;
  district: LocalizedText;
  phone: string;
  siPhone: string;
  location: LocalizedText;
  timing: LocalizedText;
  staff: PoliceOfficer[];
  patrols: PatrolSchedule[];
  helplines: {
    name: LocalizedText;
    phone: string;
  }[];
  highwayAssistance: {
    service: LocalizedText;
    contact: string;
    details: LocalizedText;
  }[];
  services: LocalizedText[];
}

export const policeStations: PoliceDetailed[] = [
  {
    id: "police-1",
    name: { en: "Orvakal Police Station", te: "ఓర్వకల్లు పోలీస్ స్టేషన్", hi: "ओरवाकल पुलिस स्टेशन" },
    district: { en: "Kurnool District Police Command", te: "కర్నూలు జిల్లా పోలీస్ కమాండ్", hi: "कर्नूल जिला पुलिस कमान" },
    phone: "+91 8518223344",
    siPhone: "+91 9440796753",
    location: { en: "Near NH-40, Orvakal Bypass, Kurnool District, AP", te: "NH-40 సమీపంలో, ఓర్వకల్లు బైపాస్, కర్నూలు జిల్లా, AP", hi: "एनएच-40 के पास, ओरवाकल बाईपास, कर्नूल जिला, एपी" },
    timing: { en: "24/7 Security Services", te: "24/7 రక్షణ సేవలు", hi: "24/7 सुरक्षा सेवाएं" },
    staff: [
      {
        role: { en: "Station House Officer (SI)", te: "స్టేషన్ హౌస్ ఆఫీసర్ (SI)", hi: "थानाध्यक्ष (SI)" },
        name: { en: "Mr. K. Mallikarjuna Reddy (Sub-Inspector)", te: "శ్రీ కె. మల్లికార్జున రెడ్డి", hi: "श्री के. मल्लिकार्जुन रेड्डी" },
        phone: "+91 9440796753"
      },
      {
        role: { en: "Assistant Sub-Inspector (ASI)", te: "సహాయ సబ్-ఇన్‌స్పెక్టర్ (ASI)", hi: "सहायक उप-निरीक्षक (ASI)" },
        name: { en: "Mr. P. Narasimhulu", te: "శ్రీ పి. నరసింహులు", hi: "श्री पी. नरसिम्हुलू" },
        phone: "+91 9440796754"
      }
    ],
    patrols: [
      {
        name: { en: "Day Village Beats", te: "పగటి పూట గ్రామ పెట్రోలింగ్", hi: "दिन की ग्राम गश्त" },
        timing: { en: "08:00 AM - 06:00 PM", te: "ఉదయం 08:00 - సాయంత్రం 06:00", hi: "सुबह 08:00 - शाम 06:00" },
        description: { en: "Regular police patrols in residential and main bazar streets.", te: "నివాస ప్రాంతాలు మరియు ప్రధాన బజార్ వీధుల్లో నిరంతరం పోలీస్ నిఘా.", hi: "आवासीय और मुख्य बाजार की गलियों में नियमित पुलिस गश्त।" }
      },
      {
        name: { en: "Night Village Beats", te: "రాత్రి పూట గ్రామ పెట్రోలింగ్", hi: "रात की ग्राम गश्त" },
        timing: { en: "10:00 PM - 05:00 AM", te: "రాత్రి 10:00 - ఉదయం 05:00", hi: "रात 10:00 - सुबह 05:00" },
        description: { en: "Night beat policing with siren patrols to prevent thefts and ensure safety.", te: "దొంగతనాలను నివారించడానికి మరియు భద్రతను నిర్ధారించడానికి సైరన్ పెట్రోలింగ్.", hi: "चोरी रोकने और सुरक्षा सुनिश्चित करने के लिए सायरन गश्त के साथ नाइट बीट पुलिसिंग।" }
      },
      {
        name: { en: "Highway Patrol (NH-40 Corridor)", te: "హైవే పెట్రోలింగ్ (NH-40)", hi: "राजमार्ग गश्त (NH-40 कॉरिडोर)" },
        timing: { en: "24 Hours / 7 Days", te: "24 గంటలు / 7 రోజులు", hi: "24 घंटे / 7 दिन" },
        description: { en: "Constant mobile patrolling on NH-40 for highway safety and traveler assistance.", te: "ప్రయాణికుల భద్రత కోసం NH-40 పై నిరంతర మొబైల్ పెట్రోలింగ్.", hi: "राजमार्ग सुरक्षा और यात्रियों की सहायता के लिए एनएच-40 पर निरंतर मोबाइल गश्त।" }
      }
    ],
    helplines: [
      { name: { en: "Station Emergency desk", te: "పోలీస్ స్టేషన్ అత్యవసర డెస్క్", hi: "थाना आपातकालीन डेस्क" }, phone: "+91 8518223344" },
      { name: { en: "Highway Patrol Mobile Car", te: "హైవే పెట్రోల్ మొబైల్ వాహనం", hi: "राजमार्ग गश्त मोबाइल कार" }, phone: "+91 9440796911" },
      { name: { en: "Disha Women Safety line", te: "దిశా మహిళా భద్రతా హెల్ప్‌లైన్", hi: "दिशा महिला सुरक्षा लाइन" }, phone: "1091" },
      { name: { en: "State Police Emergency", te: "రాష్ట్ర పోలీస్ అత్యవసర నంబర్", hi: "राज्य पुलिस आपातकाल" }, phone: "100 / 112" }
    ],
    highwayAssistance: [
      {
        service: { en: "Toll Plaza Towing & Recovery", te: "టోల్ ప్లాజా టోయింగ్ & రికవరీ సేవలు", hi: "टोल प्लाजा टोइंग और रिकवरी" },
        contact: "1033",
        details: { en: "Provides 24/7 free towing for breakdown vehicles on NH-40 corridor.", te: "NH-40 కారిడార్‌లో వాహనాలు మొరాయించినప్పుడు 24/7 ఉచిత టోయింగ్ సేవలు.", hi: "एनएच-40 कॉरिडोर पर खराब हुए वाहनों के लिए 24/7 मुफ्त टोइंग प्रदान करता है।" }
      },
      {
        service: { en: "Highway Ambulance Standby", te: "హైవే అంబులెన్స్ సేవలు", hi: "राजमार्ग एम्बुलेंस स्टैंडबाय" },
        contact: "108",
        details: { en: "Trauma care ambulance on standby at Orvakal Toll circle crossing.", te: "ఓర్వకల్లు టోల్ సర్కిల్ జంక్షన్ వద్ద అత్యవసర చికిత్స అంబులెన్స్ సిద్ధంగా ఉంటుంది.", hi: "ओरवाकल टोल सर्कल क्रॉसिंग पर स्टैंडबाय पर ट्रॉमा केयर एम्बुलेंस।" }
      },
      {
        service: { en: "Industrial Corridor Outpost", te: "ఇండస్ట్రియల్ కారిడార్ అవుట్‌పోస్ట్", hi: "औद्योगिक गलियारा चौकी" },
        contact: "+91 8518290911",
        details: { en: "Police outpost located near Mega Solar and industrial parks junction.", te: "మెగా సోలార్ మరియు పారిశ్రామిక పార్కుల జంక్షన్ వద్ద ఉండే పోలీస్ అవుట్‌పోస్ట్.", hi: "मेगा सोलर और औद्योगिक पार्क जंक्शन के पास स्थित पुलिस चौकी।" }
      }
    ],
    services: [
      { en: "Disha Women Help Desk - Immediate security & counseling for women", te: "దిశా మహిళా హెల్ప్ డెస్క్ - మహిళలకు తక్షణ రక్షణ & కౌన్సిలింగ్", hi: "दिशा महिला सहायता डेस्क - महिलाओं के लिए तत्काल सुरक्षा और परामर्श" },
      { en: "Citizen FIR Help Desk - File lost documents, vehicles and registration updates", te: "సిటిజన్ FIR హెల్ప్ డెస్క్ - కోల్పోయిన పత్రాలు, వాహనాల ఫిర్యాదులు", hi: "नागरिक प्राथमिकी सहायता डेस्क - खोए हुए दस्तावेज, वाहनों की रिपोर्ट" },
      { en: "Passport & Job Verification - Verification processing and character certificate", te: "పాస్‌పోర్ట్ & ఉద్యోగ ధృవీకరణ - వెరిఫికేషన్ ప్రక్రియ సేవలు", hi: "पासपोर्ट और नौकरी सत्यापन - चरित्र प्रमाण पत्र प्रसंस्करण" }
    ]
  }
];
export const policeEmergency = policeStations[0];
