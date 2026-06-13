import type { WorshipPlace, Attraction, RentalCar, Notice, NewsItem, Committee } from '../types';

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
    source: { en: "Industrial Update", te: "ఇండస్ట్రియల్ అప్‌డేట్", hi: "इंडस्ट्रियल अपडेट" },
    date: "2026-06-01",
    summary: {
      en: "Jairaj Ispat completed setting up its massive steel grinding outpost. Direct trial runs began today. Full operations will employ over 120 villagers.",
      te: "జైరాజ్ ఇస్పాత్ తన ఉక్కు ప్లాంట్ నిర్మాణాన్ని పూర్తి చేసింది. ఈరోజు ట్రయల్ రన్స్ ప్రారంభమయ్యాయి. దీనివల్ల 120 మందికి పైగా గ్రామస్తులకు ఉపాధి లభిస్తుంది.",
      hi: "जयराज इस्पात ने अपने बड़े स्टील ग्राइंडिंग आउटपोस्ट की स्थापना पूरी की। ट्रायल रन आज शुरू हुआ। पूर्ण परिचालन से 120 से अधिक ग्रामीणों को रोजगार मिलेगा।"
    }
  }
];

export const committees: Committee[] = [
  {
    id: "com-1",
    name: {
      en: "Water & Sanitation Committee",
      te: "నీరు & పారిశుద్ధ్య కమిటీ",
      hi: "जल और स्वच्छता समिति"
    },
    president: {
      en: "Mr. B. Srinivasa Rao (Sarpanch)",
      te: "శ్రీ బి. శ్రీనివాసరావు (సర్పంచ్)",
      hi: "श्री बी. श्रीनिवास राव (सरपंच)"
    },
    membersCount: 11,
    phone: "+91 9440123456",
    purpose: {
      en: "Overseeing safe drinking water distribution, maintaining borewells, and village cleanliness drives.",
      te: "సురక్షిత తాగునీటి సరఫరా, బోరుబావుల నిర్వహణ మరియు పారిశుద్ధ్య కార్యక్రమాల పర్యవేక్షణ.",
      hi: "सुरक्षित पेयजल वितरण की देखरेख, बोरवेल का रख-रखाव और ग्राम स्वच्छता अभियान।"
    },
    meetings: {
      en: "First Monday of every month @ Gram Panchayat Office",
      te: "ప్రతి నెల మొదటి సోమవారం @ గ్రామ పంచాయతీ కార్యాలయం",
      hi: "हर महीने का पहला सोमवार @ ग्राम पंचायत कार्यालय"
    }
  },
  {
    id: "com-2",
    name: {
      en: "Village Education Committee",
      te: "గ్రామ విద్యా కమిటీ (VEC)",
      hi: "ग्राम शिक्षा समिति"
    },
    president: {
      en: "Mrs. K. Lakshmi Prasad (Sec)",
      te: "శ్రీమతి కె. లక్ష్మీ ప్రసాద్",
      hi: "श्रीमती के. लक्ष्मी प्रसाद"
    },
    membersCount: 9,
    phone: "+91 9440654321",
    purpose: {
      en: "Monitoring school attendance, mid-day meals quality, and school infrastructure maintenance.",
      te: "పాఠశాలల హాజరు శాతం పెంచడం, మధ్యాహ్న భోజన నాణ్యత పరిశీలన మరియు మౌలిక సదుపాయాల పర్యవేక్షణ.",
      hi: "स्कूल उपस्थिति की निगरानी, ​​मध्याह्न भोजन की गुणवत्ता और स्कूल के बुनियादी ढांचे का रख-रखाव।"
    },
    meetings: {
      en: "Second Saturday of every month @ ZPHS School Library",
      te: "ప్రతి నెల రెండవ శనివారం @ ZPHS స్కూల్ లైబ్రరీ",
      hi: "हर महीने का दूसरा शनिवार @ ZPHS स्कूल पुस्तकालय"
    }
  },
  {
    id: "com-3",
    name: {
      en: "Agricultural Advisory Board",
      te: "వ్యవసాయ సలహా మండలి",
      hi: "कृषि सलाहकार बोर्ड"
    },
    president: {
      en: "Mr. T. Veerabhadra Reddy",
      te: "శ్రీ టి. వీరభద్ర రెడ్డి",
      hi: "श्री टी. वीरभद्र रेड्डी"
    },
    membersCount: 15,
    phone: "+91 9440812344",
    purpose: {
      en: "Advising farmers on crop selection, pest control, coordinating with Rythu Bharosa Kendram for seeds and fertilizers.",
      te: "పంటల ఎంపిక, తెగుళ్ల నివారణ మరియు విత్తనాలు, ఎరువుల సరఫరా కోసం రైతు భరోసా కేంద్రంతో సమన్వయం.",
      hi: "फसल चयन, कीट नियंत्रण पर किसानों को सलाह देना, बीजों और उर्वरकों के लिए रायथू भरोसा केंद्र के साथ समन्वय करना।"
    },
    meetings: {
      en: "Prior to Kharif & Rabi seasons @ Rythu Bharosa Kendram",
      te: "ఖరీఫ్ & రబీ సీజన్ల ప్రారంభానికి ముందు @ రైతు భరోసా కేంద్రం",
      hi: "खरीफ और रबी सीजन से पहले @ रायथू भरोसा केंद्र"
    }
  }
];
