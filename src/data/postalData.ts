import type { LocalizedText } from '../types';

export interface PostalStaff {
  role: LocalizedText;
  name: LocalizedText;
  phone: string;
}

export interface PostalDetailed {
  id: string;
  name: LocalizedText;
  postmaster: LocalizedText;
  phone: string;
  pincode: string;
  location: LocalizedText;
  timing: LocalizedText;
  staff: PostalStaff[];
  services: LocalizedText[];
  schemes: {
    name: LocalizedText;
    description: LocalizedText;
  }[];
}

export const postalServices: PostalDetailed[] = [
  {
    id: "post-1",
    name: { en: "Orvakal Sub Post Office (S.O.)", te: "ఓర్వకల్లు సబ్ పోస్ట్ ఆఫీస్", hi: "ओरवाकल उप डाकघर" },
    postmaster: { en: "Mr. K. Mallikarjuna", te: "శ్రీ కే. మల్లికార్జున", hi: "श्री के. मल्लिकार्जुन" },
    phone: "+91 8518290200",
    pincode: "518452",
    location: { en: "Main Bazar Road, Orvakal", te: "మెయిన్ బజార్ రోడ్, ఓర్వకల్లు", hi: "मुख्य बाजार रोड, ओरवाकल" },
    timing: { en: "09:00 AM - 05:00 PM (Sunday Closed)", te: "ఉదయం 9:00 - సాయంత్రం 5:00", hi: "सुबह 9:00 - शाम 5:00" },
    staff: [
      {
        role: { en: "Sub Postmaster", te: "సబ్ పోస్ట్‌మాస్టర్", hi: "उप डाकपाल" },
        name: { en: "Mr. K. Mallikarjuna", te: "శ్రీ కే. మల్లికార్జున", hi: "श्री के. मल्लिकार्जुन" },
        phone: "+91 8518290200"
      },
      {
        role: { en: "Postman / Mail Delivery", te: "పోస్టుమాన్ / డెలివరీ ఏజెంట్", hi: "डाकिया / वितरण एजेंट" },
        name: { en: "Mr. G. Ramu", te: "శ్రీ జి. రాము", hi: "श्री जी. रामू" },
        phone: "+91 9988776655"
      }
    ],
    services: [
      { en: "Speed Post, Registered Post, & Parcel Booking", te: "స్పీడ్ పోస్ట్, రిజిస్టర్డ్ పోస్ట్ & పార్సెల్ బుకింగ్", hi: "स्पीड पोस्ट, पंजीकृत पोस्ट और पार्सल बुकिंग" },
      { en: "Post Office Savings Bank (POSB) savings accounts", te: "పోస్ట్ ఆఫీస్ సేవింగ్స్ బ్యాంక్ (POSB) పొదుపు ఖాతాలు", hi: "डाकघर बचत बैंक (POSB) बचत खाते" },
      { en: "Aadhaar enrollment, updates & correction services", te: "ఆధార్ నమోదు మరియు అప్‌డేట్ సేవలు", hi: "आधार नामांकन, अपडेट और सुधार सेवाएं" },
      { en: "Aadhaar Enabled Payment System (AePS) payouts", te: "ఆధార్ ఆధారిత నగదు చెల్లింపు సేవలు (AePS)", hi: "आधार सक्षम भुगतान प्रणाली (AePS) भुगतान" }
    ],
    schemes: [
      {
        name: { en: "Sukanya Samriddhi Yojana (SSY)", te: "సుకన్య సమృద్ధి యోజన", hi: "सुकन्या समृद्धि योजना" },
        description: { en: "Welfare scheme for girl children with high interest rates and tax exemptions.", te: "అధిక వడ్డీ రేట్లు మరియు పన్ను మినహాయింపులతో బాలికల సంక్షేమ పథకం.", hi: "बालिकाओं के कल्याण के लिए उच्च ब्याज दरों और कर छूट वाली योजना।" }
      },
      {
        name: { en: "Public Provident Fund (PPF)", te: "పబ్లిక్ ప్రావిడెంట్ ఫండ్ (PPF)", hi: "पब्लिक प्रोविडेंट फंड (PPF)" },
        description: { en: "15-year long term savings scheme offering tax exemptions and safe interest growth.", te: "సురక్షితమైన వడ్డీ మరియు పన్ను మినహాయింపులను ఇచ్చే 15 సంవత్సరాల పొదుపు పథకం.", hi: "कर छूट और सुरक्षित ब्याज वृद्धि की पेशकश करने वाली 15-वर्षीय दीर्घकालिक बचत योजना।" }
      },
      {
        name: { en: "Kisan Vikas Patra (KVP)", te: "కిసాన్ వికాస్ పత్ర (KVP)", hi: "किसान विकास पत्र (KVP)" },
        description: { en: "Savings certificate scheme that doubles the principal investment amount over a specified period.", te: "నిర్దిష్ట కాలవ్యవధిలో పెట్టుబడి పెట్టిన అసలు మొత్తాన్ని రెట్టింపు చేసే పొదుపు సర్టిఫికేట్ పథకం.", hi: "बचत प्रमाणपत्र योजना जो एक निर्दिष्ट अवधि में मूल निवेश राशि को दोगुना कर देती है।" }
      }
    ]
  }
];
