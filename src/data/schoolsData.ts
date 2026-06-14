import type { LocalizedText } from '../types';

export interface SchoolStaff {
  role: LocalizedText;
  name: LocalizedText;
  phone: string;
}

export interface SchoolDetailed {
  id: string;
  name: LocalizedText;
  schoolName: LocalizedText;
  subject: LocalizedText;
  phone: string;
  type: 'school' | 'tuition';
  address: LocalizedText;
  principal: LocalizedText;
  timings: LocalizedText;
  facilities: LocalizedText[];
  establishedYear: string;
  staff: SchoolStaff[];
}

export const schools: SchoolDetailed[] = [
  {
    id: "sch-1",
    name: {
      en: "Zilla Parishad High School (ZPHS)",
      te: "జిల్లా పరిషత్ ఉన్నత పాఠశాల (ZPHS)",
      hi: "जिला परिषद हाई स्कूल (ZPHS)"
    },
    schoolName: {
      en: "ZPHS Boys & Girls School, Orvakal",
      te: "ZPHS బాలుర & బాలికల ఉన్నత పాఠశాల, ఓర్వకల్లు",
      hi: "जेडपीएचएस बालक एवं बालिका हाई स्कूल, ओरवाकल"
    },
    subject: {
      en: "Telugu & English Medium (Grades 6-10)",
      te: "తెలుగు & ఇంగ్లీష్ మీడియం (6-10 తరగతులు)",
      hi: "तेलुगु और अंग्रेजी माध्यम (कक्षा 6-10)"
    },
    phone: "+91 9440623450",
    type: "school",
    address: {
      en: "Government School Lane, Orvakal",
      te: "ప్రభుత్వ పాఠశాల వీధి, ఓర్వకల్లు",
      hi: "सरकारी स्कूल गली, ओरवाकल"
    },
    principal: {
      en: "Mr. G. Raghunath, M.A., B.Ed. (Headmaster)",
      te: "శ్రీ జి. రఘునాథ్, M.A., B.Ed. (ప్రధానోపాధ్యాయులు)",
      hi: "श्री जी. रघुनाथ, एम.ए., बी.एड. (प्रधानाध्यापक)"
    },
    timings: {
      en: "09:00 AM - 04:30 PM (Monday - Saturday)",
      te: "ఉదయం 09:00 - సాయంత్రం 04:30 (సోమ - శని)",
      hi: "सुबह 09:00 - शाम 04:30 (सोमवार - शनिवार)"
    },
    facilities: [
      { en: "Mid-day Meals Program", te: "మధ్యాహ్న భోజన పథకం", hi: "मध्याह्न भोजन कार्यक्रम" },
      { en: "Science Laboratory", te: "సైన్స్ లాబొరేటరీ", hi: "विज्ञान प्रयोगशाला" },
      { en: "Drinking Water RO Plant", te: "తాగునీటి మినరల్ ప్లాంట్", hi: "पेयजल आरओ प्लांट" },
      { en: "Library & Sports Playground", te: "గ్రంథాలయం & ఆట స్థలం", hi: "पुस्तकालय और खेल का मैदान" }
    ],
    establishedYear: "1972",
    staff: [
      {
        role: { en: "Headmaster", te: "ప్రధానోపాధ్యాయులు", hi: "प्रधानाध्यापक" },
        name: { en: "Mr. G. Raghunath", te: "శ్రీ జి. రఘునాథ్", hi: "श्री जी. रघुनाथ" },
        phone: "+91 9440623450"
      },
      {
        role: { en: "Mathematics Assistant", te: "గణిత ఉపాధ్యాయులు", hi: "गणित सहायक" },
        name: { en: "Mr. K. Raghavan", te: "శ్రీ కె. రాఘవన్", hi: "श्री के. राघवन" },
        phone: "+91 9848123411"
      },
      {
        role: { en: "Physical Science Assistant", te: "భౌతిక శాస్త్ర ఉపాధ్యాయులు", hi: "भौतिक विज्ञान सहायक" },
        name: { en: "Mrs. V. Kalyani", te: "శ్రీమతి వి. కల్యాణి", hi: "श्रीमती वी. कल्याणी" },
        phone: "+91 9848123412"
      }
    ]
  },
  {
    id: "sch-2",
    name: {
      en: "Mandal Parishad Primary School (MPPS)",
      te: "మండల పరిషత్ ప్రాథమిక పాఠశాల (MPPS)",
      hi: "मंडल परिषद प्राथमिक स्कूल (MPPS)"
    },
    schoolName: {
      en: "MPPS Urdu Medium Primary School, Orvakal",
      te: "MPPS ఉర్దూ మీడియం ప్రాథమిక పాఠశాల, ఓర్వకల్లు",
      hi: "एमपीपीएस उर्दू माध्यम प्राथमिक स्कूल, ओरवाकल"
    },
    subject: {
      en: "Urdu & English Medium (Grades 1-5)",
      te: "ఉర్దూ & ఇంగ్లీష్ మీడియం (1-5 తరగతులు)",
      hi: "उर्दू और अंग्रेजी माध्यम (कक्षा 1-5)"
    },
    phone: "+91 9440623451",
    type: "school",
    address: {
      en: "Masjid Bazar Lane, Orvakal",
      te: "మసీదు బజార్ వీధి, ఓర్వకల్లు",
      hi: "मस्जिद बाजार गली, ओरवाकल"
    },
    principal: {
      en: "Mrs. Shaik Farzana, B.A., D.Ed. (Headmistress)",
      te: "శ్రీమతి షేక్ ఫర్జానా, B.A., D.Ed. (ప్రధానోపాధ్యాయురాలు)",
      hi: "श्रीमती शेख फरजाना, बीए, डी.एड. (प्रधानाध्यापिका)"
    },
    timings: {
      en: "09:00 AM - 04:00 PM (Monday - Saturday)",
      te: "ఉదయం 09:00 - సాయంత్రం 04:00 (సోమ - శని)",
      hi: "सुबह 09:00 - शाम 04:00 (सोमवार - शनिवार)"
    },
    facilities: [
      { en: "Mid-day Meals Program", te: "మధ్యాహ్న భోజన పథకం", hi: "मध्याह्न भोजन कार्यक्रम" },
      { en: "Primary Class Activity Room", te: "ప్రాథమిక తరగతి యాక్టివిటీ గది", hi: "प्राथमिक कक्षा गतिविधि कक्ष" },
      { en: "RO Drinking Water", te: "శుద్ధ తాగునీటి సదుపాయం", hi: "आरओ पेयजल" }
    ],
    establishedYear: "1980",
    staff: [
      {
        role: { en: "Headmistress", te: "ప్రధానోపాధ్యాయురాలు", hi: "प्रधानाध्यापिका" },
        name: { en: "Mrs. Shaik Farzana", te: "శ్రీమతి షేక్ ఫర్జానా", hi: "श्रीमती शेख फरजाना" },
        phone: "+91 9440623451"
      }
    ]
  },
  {
    id: "sch-3",
    name: {
      en: "Government Girls High School",
      te: "ప్రభుత్వ బాలికల ఉన్నత పాఠశాల",
      hi: "सरकारी कन्या हाई स्कूल"
    },
    schoolName: {
      en: "Govt Girls High School, Orvakal",
      te: "ప్రభుత్వ బాలికల ఉన్నత పాఠశాల, ఓర్వకల్లు",
      hi: "सरकारी कन्या हाई स्कूल, ओरवाकल"
    },
    subject: {
      en: "Telugu & English Medium (Grades 6-10 Girls only)",
      te: "తెలుగు & ఇంగ్లీష్ మీడియం (6-10 తరగతులు - బాలికలు)",
      hi: "तेलुगु और अंग्रेजी माध्यम (कक्षा 6-10 केवल लड़कियां)"
    },
    phone: "+91 9440623452",
    type: "school",
    address: {
      en: "Mandal Office Road, Orvakal",
      te: "మండల కార్యాలయ రోడ్, ఓర్వకల్లు",
      hi: "मंडल कार्यालय रोड, ओरवाकल"
    },
    principal: {
      en: "Mrs. P. Shanthi Kumari, M.Sc., M.Ed.",
      te: "శ్రీమతి పి. శాంతి కుమారి, M.Sc., M.Ed.",
      hi: "श्रीमती पी. शांति कुमारी, एम.एससी., एम.एड."
    },
    timings: {
      en: "09:00 AM - 04:30 PM (Monday - Saturday)",
      te: "ఉదయం 09:00 - సాయంత్రం 04:30 (సోమ - శని)",
      hi: "सुबह 09:00 - शाम 04:30 (सोमवार - शनिवार)"
    },
    facilities: [
      { en: "Mid-day meals playground", te: "మధ్యాహ్న భోజన సదుపాయం మరియు ఆట స్థలం", hi: "मध्याह्न भोजन और खेल का मैदान" },
      { en: "Clean Drinking Water Reverse Osmosis Plant", te: "మినరల్ వాటర్ ప్లాంట్ సదుపాయం", hi: "शुद्ध पेयजल आरओ प्लांट" }
    ],
    establishedYear: "1985",
    staff: [
      {
        role: { en: "Principal", te: "ప్రిన్సిపాల్", hi: "प्राचार्य" },
        name: { en: "Mrs. P. Shanthi Kumari", te: "శ్రీమతి పి. శాంతి కుమారి", hi: "श्रीमती पी. शांति कुमारी" },
        phone: "+91 9440623452"
      }
    ]
  }
];
export const tuitions = [];
export const schoolsAndTuitions = [...schools];
