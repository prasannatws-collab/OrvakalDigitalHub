import type { LocalizedText } from '../types';

export interface BankStaff {
  role: LocalizedText;
  name: LocalizedText;
  phone: string;
}

export interface BankDetailed {
  id: string;
  name: LocalizedText;
  branch: LocalizedText;
  ifsc: string;
  phone: string;
  location: LocalizedText;
  hasAtm: boolean;
  atmStatus: LocalizedText;
  timing: LocalizedText;
  staff: BankStaff[];
  services: LocalizedText[];
  schemes: {
    name: LocalizedText;
    description: LocalizedText;
  }[];
}

export const banksAndAtms: BankDetailed[] = [
  {
    id: "bnk-1",
    name: { en: "State Bank of India (SBI)", te: "స్టేట్ బ్యాంక్ ఆఫ్ ఇండియా (SBI)", hi: "भारतीय स्टेट बैंक (SBI)" },
    branch: { en: "Orvakal Branch", te: "ఓర్వకల్లు బ్రాంచ్", hi: "ओरवाकल शाखा" },
    ifsc: "SBIN0011122",
    phone: "+91 8518290300",
    location: { en: "Highway Circle Junction, Orvakal", te: "హైవే సర్కిల్ జంక్షన్, ఓర్వకల్లు", hi: "हाईवे सर्कल जंक्शन, ओरवाकल" },
    hasAtm: true,
    atmStatus: { en: "Working (24/7 Cash Available)", te: "పనిచేస్తుంది (24/7 నగదు అందుబాటులో ఉంది)", hi: "सक्रिय (24/7 नकद उपलब्ध)" },
    timing: { en: "10:00 AM - 04:00 PM", te: "ఉదయం 10:00 - సాయంత్రం 4:00", hi: "सुबह 10:00 - शाम 4:00" },
    staff: [
      {
        role: { en: "Branch Manager", te: "బ్రాంచ్ మేనేజర్", hi: "शाखा प्रबंधक" },
        name: { en: "Mr. S. K. Sharma", te: "శ్రీ ఎస్. కె. శర్మ", hi: "श्री एस. के. शर्मा" },
        phone: "+91 8518290301"
      },
      {
        role: { en: "Assistant Manager (Agri Division)", te: "సహాయ మేనేజర్ (వ్యవసాయ విభాగం)", hi: "सहायक प्रबंधक (कृषि प्रभाग)" },
        name: { en: "Mr. T. Prasad Rao", te: "శ్రీ టి. ప్రసాద్ రావు", hi: "श्री टी. प्रसाद राव" },
        phone: "+91 8518290302"
      }
    ],
    services: [
      { en: "Savings & Current Accounts opening", te: "పొదుపు & కరెంట్ ఖాతాల ప్రారంభం", hi: "बचत और चालू खाते खोलना" },
      { en: "Gold & Jewel Loans", te: "బంగారు ఆభరణాల రుణాలు", hi: "स्वर्ण और आभूषण ऋण" },
      { en: "Kisan Credit Card (KCC) / Crop Loans", te: "కిసాన్ క్రెడిట్ కార్డ్ (KCC) / పంట రుణాలు", hi: "किसान क्रेडिट कार्ड (KCC) / फसल ऋण" },
      { en: "Fixed & Recurring Deposits", te: "స్థిర & రికరింగ్ డిపాజిట్లు", hi: "सावधि और आवर्ती जमा" }
    ],
    schemes: [
      {
        name: { en: "PM Jan Dhan Yojana (PMJDY)", te: "పీఎం జన్ ధన్ యోజన", hi: "पीएम जन धन योजना" },
        description: { en: "Zero balance savings account with RuPay debit card and ₹10,000 overdraft facility.", te: "RuPay డెబిట్ కార్డు మరియు రూ. 10,000 ఓవర్‌డ్రాఫ్ట్ సదుపాయంతో సున్నా బ్యాలెన్స్ ఖాతా.", hi: "रुपे डेबिट कार्ड और ₹10,000 ओवरड्राफ्ट सुविधा के साथ शून्य बैलेंस बचत खाता।" }
      },
      {
        name: { en: "Pradhan Mantri Mudra Yojana (PMMY)", te: "పీఎం ముద్రా యోజన", hi: "प्रधान मंत्री मुद्रा योजना" },
        description: { en: "Collateral-free business development loans up to ₹10 Lakhs for small business units.", te: "చిన్న వ్యాపారాల కోసం రూ. 10 లక్షల వరకు ఎటువంటి గ్యారెంటీ లేని వ్యాపార అభివృద్ధి రుణాలు.", hi: "लघु व्यावसायिक इकाइयों के लिए ₹10 लाख तक के संपार्श्विक-मुक्त व्यावसायिक विकास ऋण।" }
      }
    ]
  },
  {
    id: "bnk-2",
    name: { en: "Andhra Pragathi Grameena Bank (APGB)", te: "ఆంధ్ర ప్రగతి గ్రామీణ బ్యాంక్ (APGB)", hi: "आंध्र प्रगति ग्रामीण बैंक (APGB)" },
    branch: { en: "Orvakal Branch", te: "ఓర్వకల్లు బ్రాంచ్", hi: "ओरवाकल शाखा" },
    ifsc: "APGB0002233",
    phone: "+91 8518290400",
    location: { en: "Mandal Office Road, Orvakal", te: "మండల కార్యాలయ రోడ్, ఓర్వకల్లు", hi: "मंडल कार्यालय रोड, ओरवाकल" },
    hasAtm: true,
    atmStatus: { en: "Working (Cash Available)", te: "పనిచేస్తుంది (నగదు అందుబాటులో ఉంది)", hi: "सक्रिय (नकद उपलब्ध)" },
    timing: { en: "10:00 AM - 04:00 PM", te: "ఉదయం 10:00 - సాయంత్రం 4:00", hi: "सुबह 10:00 - शाम 4:00" },
    staff: [
      {
        role: { en: "Branch Manager", te: "బ్రాంచ్ మేనేజర్", hi: "शाखा प्रबंधक" },
        name: { en: "Mr. M. Srinivasa Reddy", te: "శ్రీ ఎం. శ్రీనివాస రెడ్డి", hi: "श्री एम. श्रीनिवास रेड्डी" },
        phone: "+91 8518290401"
      },
      {
        role: { en: "Agricultural Officer", te: "వ్యవసాయ అధికారి", hi: "कृषि अधिकारी" },
        name: { en: "Mrs. G. Swetha", te: "శ్రీమతి జి. శ్వేత", hi: "श्रीमती जी. श्वेता" },
        phone: "+91 8518290402"
      }
    ],
    services: [
      { en: "Agriculture Gold Loans & Land Mortgages", te: "వ్యవసాయ బంగారు రుణాలు & భూమి తాకట్టు రుణాలు", hi: "कृषि स्वर्ण ऋण और भूमि बंधक" },
      { en: "Self-Help Group (SHG) bank linkage & loans", te: "స్వయం సహాయక సంఘాల (SHG) బ్యాంక్ లింకేజీ & రుణాలు", hi: "स्वयं सहायता समूह (SHG) बैंक लिंकेज और ऋण" },
      { en: "Crop loans & subsidy coordination", te: "పంట రుణాలు & సబ్సిడీల సమన్వయం", hi: "फसल ऋण और सब्सिडी समन्वय" }
    ],
    schemes: [
      {
        name: { en: "Agri Infrastructure Fund (AIF)", te: "వ్యవసాయ మౌలిక సదుపాయాల నిధి (AIF)", hi: "कृषि अवसंरचना कोष (AIF)" },
        description: { en: "Medium-long term debt financing facility for post-harvest management infrastructure with 3% interest subvention.", te: "3% వడ్డీ రాయితీతో పంట అనంతర మౌలిక సదుపాయాల కల్పన కొరకు మధ్య మరియు దీర్ఘకాలిక రుణ సదుపాయం.", hi: "3% ब्याज छूट के साथ फसल कटाई के बाद प्रबंधन बुनियादी ढांचे के लिए मध्यम-दीर्घकालिक ऋण वित्तपोषण सुविधा।" }
      },
      {
        name: { en: "YSR Cheyutha Payout Support", te: "వైఎస్సార్ చేయూత చెల్లింపుల సహాయం", hi: "वाईएसआर चेयुथा भुगतान सहायता" },
        description: { en: "Assisting eligible women in withdrawing their annual financial assistance directly from branch.", te: "అర్హులైన మహిళలు తమ వార్షిక ఆర్థిక సహాయాన్ని బ్రాంచ్ నుండి నేరుగా డ్రా చేసుకోవడానికి సహాయం.", hi: "पात्र महिलाओं को शाखा से सीधे अपनी वार्षिक वित्तीय सहायता वापस लेने में सहायता करना।" }
      }
    ]
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
    timing: { en: "10:00 AM - 04:00 PM", te: "ఉదయం 10:00 - సాయంత్రం 4:00", hi: "सुबह 10:00 - शाम 4:00" },
    staff: [
      {
        role: { en: "Branch Manager", te: "బ్రాంచ్ మేనేజర్", hi: "शाखा प्रबंधक" },
        name: { en: "Mr. P. Christopher", te: "శ్రీ పి. క్రిస్టోఫర్", hi: "श्री पी. क्रिस्टोफर" },
        phone: "+91 8518290501"
      }
    ],
    services: [
      { en: "Retail loans (Housing, Car, Education)", te: "చిల్లర రుణాలు (ఇల్లు, కారు, విద్య)", hi: "रिटेल ऋण (आवास, कार, शिक्षा)" },
      { en: "Direct Benefit Transfer (DBT) linkage", te: "ప్రత్యక్ష ప్రయోజన బదిలీ (DBT) బ్యాంక్ లింక్", hi: "प्रत्यक्ष लाभ हस्तांतरण (DBT) लिंकेज" },
      { en: "Internet banking & Mobile App support", te: "ఇంటర్నెట్ బ్యాంకింగ్ & మొబైల్ యాప్ సేవలు", hi: "इंटरनेट बैंकिंग और मोबाइल ऐप सहायता" }
    ],
    schemes: [
      {
        name: { en: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)", te: "పీఎం సురక్ష బీమా యojana (PMSBY)", hi: "प्रधान मंत्री सुरक्षा बीमा योजना (PMSBY)" },
        description: { en: "Accident insurance coverage of ₹2 Lakhs at a premium of just ₹20 per year.", te: "సంవత్సరానికి కేవలం రూ. 20 ప్రీమియంతో రూ. 2 లక్షల ప్రమాద బీమా రక్షణ.", hi: "केवल ₹20 प्रति वर्ष के प्रीमियम पर ₹2 लाख का दुर्घटना बीमा कवर।" }
      }
    ]
  }
];
