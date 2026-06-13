import type { GovtOffice, GovtOfficer, EmergencyContact, SchoolTeacher, PostalService, BankAndAtm, GovtScheme } from '../types';
import { stateSchemes } from './schemes/stateSchemes';
import { centralSchemes } from './schemes/centralSchemes';
import { bankSchemes } from './schemes/bankSchemes';
import { postalSchemes } from './schemes/postalSchemes';

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
      te: "ఆندرప్రదేశ్ పారిశ్రామిక మౌలిక సదుపాయాల సంస్థ",
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
      { en: "Soil health card testing dispatch", te: "మట్టి పరీక్షలు & సలహాలు", hi: "मृदा स्वास्थ्य कार्ड परीक्षण प्रेषण" }
    ],
    location: {
      en: "Rythu Bharosa Kendram Building, Mandi Bypass Road, Orvakal",
      te: "రైతు భరోసా కేంద్రం భవనం, మండి బైపాస్ రోడ్, ఓర్వకల్లు",
      hi: "रायथू भरोसा केंद्र भवन, मंदी बाईपास रोड, ओरवाकल"
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
      te: "శ్రీ జి. వెంకటసుబ్బయ్య, M.A., B.Ed.",
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
