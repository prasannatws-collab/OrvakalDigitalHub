import type { LocalizedText } from '../types';

export interface GovtOfficeDetailed {
  id: string;
  name: LocalizedText;
  location: LocalizedText;
  timings: LocalizedText;
  phone: string;
  icon: string;
  services: LocalizedText[];
}

export const govtOffices: GovtOfficeDetailed[] = [
  {
    id: "office-gp",
    name: { en: "Gram Panchayat Office", te: "గ్రామ పంచాయతీ కార్యాలయం", hi: "ग्राम पंचायत कार्यालय" },
    location: { en: "Main Road, Orvakal", te: "మెయిన్ రోడ్, ఓర్వకల్లు", hi: "मुख्य मार्ग, ओरवाकल" },
    timings: { en: "10:00 AM - 05:00 PM (Sunday Closed)", te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)", hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)" },
    phone: "+91 9440123456",
    icon: "Building2",
    services: [
      { en: "Drinking Water Connection Approval", te: "తాగునీటి కనెక్షన్ అనుమతి", hi: "पेयजल कनेक्शन की स्वीकृति" },
      { en: "Property Tax Assessment & Payments", te: "ఆస్తి పన్ను అంచనా & చెల్లింపులు", hi: "संपत्ति कर निर्धारण और भुगतान" },
      { en: "Streetlight Repair & Maintenance Requests", te: "వీధి దీపాల మరమ్మతు అభ్యర్థనలు", hi: "स्ट्रीटलाइट मरम्मत और रखरखाव अनुरोध" },
      { en: "Sanitation & Drainage Cleaning Complaints", te: "పారిశుద్ధ్య & డ్రైనేజీ శుభ్రత ఫిర్యాదులు", hi: "स्वच्छता और जल निकासी सफाई शिकायतें" }
    ]
  },
  {
    id: "office-sach",
    name: { en: "Gram Sachivalayam (Village Secretariat)", te: "గ్రామ సచివాలయం", hi: "ग्राम सचिवालय" },
    location: { en: "Panchayat Compound, Orvakal", te: "పంచాయతీ ఆవరణ, ఓర్వకల్లు", hi: "पंचायत परिसर, ओरवाकल" },
    timings: { en: "10:00 AM - 05:00 PM (Sunday Closed)", te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)", hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)" },
    phone: "+91 9440654321",
    icon: "ShieldAlert",
    services: [
      { en: "Birth & Death Certificates registration", te: "జనన & మరణ ధృవీకరణ పత్రాల నమోదు", hi: "जन्म और मृत्यु प्रमाण पत्र पंजीकरण" },
      { en: "Integrated Caste & Income Certificates applications", te: "కుల & ఆదాయ ధృవీకరణ పత్రాల దరఖాస్తులు", hi: "एकीकृत जाति और आय प्रमाण पत्र आवेदन" },
      { en: "Aadhaar e-KYC & Bio-metric validations", te: "ఆధార్ బయోమెట్రిక్ e-KYC ధృవీకరణ", hi: "आधार ई-केवाईसी और बायोमेट्रिक सत्यापन" },
      { en: "Welfare Pension Scheme enrollment verification", te: "సంక్షేమ పింఛను పథక అర్హత ధృవీకరణ", hi: "कल्याण पेंशन योजना नामांकन सत्यापन" }
    ]
  },
  {
    id: "office-rbk",
    name: { en: "Rythu Bharosa Kendram (RBK)", te: "రైతు భరోసా కేంద్రం (RBK)", hi: "रायथू भरोसा केंद्र (आरबीके)" },
    location: { en: "Mandi Bypass Road, Orvakal", te: "మండి బైపాస్ రోడ్, ఓర్వకల్లు", hi: "मंडी बाईपास रोड, ओरवाकल" },
    timings: { en: "08:00 AM - 06:00 PM (Daily)", te: "ఉదయం 8:00 - సాయంత్రం 6:00 (ప్రతిరోజూ)", hi: "सुबह 8:00 - शाम 6:00 (प्रतिदिन)" },
    phone: "+91 9849901235",
    icon: "Sprout",
    services: [
      { en: "Subsidized Seeds & Fertilizers booking", te: "రాయితీ విత్తనాలు & ఎరువుల బుకింగ్", hi: "रियायती बीज और उर्वरक बुकिंग" },
      { en: "E-Panta crop registration & booking", te: "ఈ-పంట నమోదు (E-Panta)", hi: "ई-पंटा फसल पंजीकरण और बुकिंग" },
      { en: "Free Soil Health Card testing & dispatch", te: "ఉచిత మట్టి పరీక్షలు & సలహాలు", hi: "मुफ्त मिट्टी स्वास्थ्य कार्ड परीक्षण और प्रेषण" },
      { en: "Agri-equipment rental services", te: "వ్యవసాయ పరికరాల అద్దె సేవలు", hi: "कृषि उपकरण किराए पर लेने की सेवाएं" }
    ]
  },
  {
    id: "office-sro",
    name: { en: "Sub-Registrar Office (SRO)", te: "సబ్-రిజిస్ట్రార్ కార్యాలయం", hi: "उप-पंजीयक कार्यालय" },
    location: { en: "SRO Complex, Old Highway Junction, Orvakal", te: "ఎస్ఆర్ఓ కాంప్లెక్స్, పాత హైవే జంక్షన్, ఓర్వకల్లు", hi: "एसआरओ कॉम्प्लेक्स, पुराना हाईवे जंक्शन, ओरवाकल" },
    timings: { en: "10:00 AM - 05:00 PM (Sunday Closed)", te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)", hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)" },
    phone: "+91 8518290444",
    icon: "FileText",
    services: [
      { en: "Agricultural & Residential Land registrations", te: "వ్యవసాయ & నివాస స్థలాల రిజిస్ట్రేషన్లు", hi: "कृषि और आवासीय भूमि पंजीकरण" },
      { en: "Marriage Registration & Certificate issuance", te: "వివాహ రిజిస్ట్రేషన్ & సర్టిఫికेట్ జారీ", hi: "विवाह पंजीकरण और प्रमाण पत्र जारी करना" },
      { en: "Encumbrance Certificate (EC) generation", te: "ఈసీ (ఎన్‌కంబరెన్స్ సర్టిఫికేట్) జారీ", hi: "भार प्रमाण पत्र (EC) जनरेशन" },
      { en: "Sale Deeds, Gift Deeds, & Mortgage Deeds registration", te: "క్రయ విక్రయాలు, బహుమతి & తాకట్టు దస్తావేజుల రిజిస్ట్రేషన్", hi: "बिक्री विलेख, उपहार विलेख और बंधक विलेख पंजीकरण" }
    ]
  },
  {
    id: "office-mro",
    name: { en: "Mandal Revenue Office (MRO Tahsildar)", te: "మండల రెవెన్యూ కార్యాలయం (MRO)", hi: "मंडल राजस्व कार्यालय (एमआरओ)" },
    location: { en: "Court Road, Orvakal", te: "కోర్టు రోడ్, ఓర్వకల్లు", hi: "Court Road, ओरवाकल" },
    timings: { en: "10:00 AM - 05:00 PM (Sunday Closed)", te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)", hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)" },
    phone: "+91 8518290555",
    icon: "Landmark",
    services: [
      { en: "Agricultural Land Mutation (Pattadar Passbook updates)", te: "వ్యవసాయ భూమి మ్యుటేషన్ (పట్టాదార్ పాస్ పుస్తకం)", hi: "कृषि भूमि नामांतरण (म्यूटेशन) और पट्टादार पासबुक अपडेट" },
      { en: "Resolving Land boundaries & survey disputes", te: "భూ సరిహద్దులు & కొలతల వివాదాల పరిష్కారం", hi: "भूमि सीमा और सर्वेक्षण विवादों का समाधान" },
      { en: "Caste, Income, & Residence final approvals", te: "కుల, ఆదాయ, నివాస ధృవీకరణ పత్రాల తుది ఆమోదం", hi: "जाति, आय और निवास प्रमाण पत्र की अंतिम मंजूरी" },
      { en: "Mandal level administrative certifications", te: "మండల స్థాయి పరిపాలనా ధృవీకరణ పత్రాల జారీ", hi: "मंडल स्तर के प्रशासनिक प्रमाणपत्र" }
    ]
  },
  {
    id: "office-mpdo",
    name: { en: "Mandal Parishad Development Office (MPDO)", te: "మండల పరిషత్ అభివృద్ధి కార్యాలయం (MPDO)", hi: "मंडल परिषद विकास कार्यालय" },
    location: { en: "Mandal Parishad Complex, Orvakal", te: "మండల పరిషత్ కార్యాలయం, ఓర్వకల్లు", hi: "मंडल परिषद परिसर, ओरवाकल" },
    timings: { en: "10:00 AM - 05:00 PM (Sunday Closed)", te: "ఉదయం 10:00 - సాయంత్రం 5:00 (ఆదివారం సెలవు)", hi: "सुबह 10:00 - शाम 5:00 (रविवार बंद)" },
    phone: "+91 8518290666",
    icon: "Activity",
    services: [
      { en: "Rural housing schemes sanction (YSR / PMAY)", te: "గ్రామీణ గృహ నిర్మాణ పథకాల మంజూరు (YSR/PMAY)", hi: "ग्रामीण आवास योजनाओं की स्वीकृति (YSR / PMAY)" },
      { en: "MGNREGS (Employment Guarantee) work allocations", te: "ఉపాధి హామీ పథకం (MGNREGS) పనుల కేటాయింపు", hi: "मनरेगा (रोजगार गारंटी) कार्य आवंटन" },
      { en: "Mandal infrastructure development funds disbursement", te: "మండల మౌలిక సదుపాయాల అభివృద్ధి నిధుల మంజూరు", hi: "मंडल बुनियादी ढांचा विकास निधि वितरण" },
      { en: "Panchayat governance inspections & review", te: "పంచాయతీల పాలనా వ్యవహారాల తనిఖీ", hi: "पंचायत शासन निरीक्षण और समीक्षा" }
    ]
  },
  {
    id: "office-ms",
    name: { en: "MeeSeva Center", te: "మీసేవ కేంద్రం", hi: "मीसेवा केंद्र" },
    location: { en: "Opposite SBI, Main Road, Orvakal", te: "స్టేట్ బ్యాంక్ ఎదురుగా, మెయిన్ రోడ్, ఓర్వకల్లు", hi: "भारतीय स्टेट बैंक के सामने, मुख्य मार्ग, ओरवाकल" },
    timings: { en: "08:30 AM - 07:30 PM (Sunday Closed)", te: "ఉదయం 8:30 - రాత్రి 7:30 (ఆదివారం సెలవు)", hi: "सुबह 8:30 - शाम 7:30 (रविवार बंद)" },
    phone: "+91 8518290333",
    icon: "Clock",
    services: [
      { en: "All Digital Public Services Applications", te: "అన్ని రకాల ప్రభుత్వ డిజిటల్ సేవల దరఖాస్తులు", hi: "सभी डिजिटल सार्वजनिक सेवा आवेदन" },
      { en: "Adangal & 1B land records certified copies", te: "అడంగల్ & 1B భూ రికార్డుల సర్టిఫైడ్ కాపీలు", hi: "अदंगल और 1B भूमि रिकॉर्ड की प्रमाणित प्रतियां" },
      { en: "Electricity & utility bill payments", te: "కరెంట్ బిల్లులు & ఇతర పన్నుల చెల్లింపులు", hi: "बिजली और अन्य उपयोगिता बिल भुगतान" },
      { en: "Passport & Pan card online application", te: "పాస్‌పోర్ట్ & పాన్ కార్డ్ ఆన్‌లైన్ దరఖాస్తులు", hi: "पासपोर्ट और पैन कार्ड ऑनलाइन आवेदन" }
    ]
  },
  {
    id: "office-apiic",
    name: { en: "APIIC Office", te: "APIIC కార్యాలయం", hi: "एपीआईआईसी कार्यालय" },
    location: { en: "Bypass Road, Orvakal", te: "బైపాస్ రోడ్, ఓర్వకల్లు", hi: "बाईपास रोड, ओरवाकल" },
    timings: { en: "09:00 AM - 06:00 PM (Sunday Closed)", te: "ఉదయం 9:00 - సాయంత్రం 6:00 (ఆదివారం సెలవు)", hi: "सुबह 9:00 - शाम 6:00 (रविवार बंद)" },
    phone: "+91 9848098765",
    icon: "Building2",
    services: [
      { en: "Industrial Land allotment applications status", te: "పారిశ్రామిక స్థలాల కేటాయింపు దరఖాస్తుల స్థితి", hi: "औद्योगिक भूमि आवंटन आवेदन की स्थिति" },
      { en: "Factory building plan clearance updates", te: "ఫ్యాక్టరీ నిర్మాణ ప్లాన్ ఆమోదాల నవీకరణలు", hi: "कारखाना भवन योजना मंजूरी अपडेट" },
      { en: "Industrial water & power setup coordination", te: "పారిశ్రామిక విద్యుత్ & నీటి సరఫరా సమన్వయం", hi: "औद्योगिक पानी और बिजली सेटअप समन्वय" }
    ]
  }
];
