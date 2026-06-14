import type { WorshipPlace, Attraction, RentalCar, Notice, NewsItem, Committee } from '../types';

export const worshipPlaces: WorshipPlace[] = [
  // 1. Temples
  {
    id: "wrp-t1",
    name: { en: "Sri Chennakesava Swamy & Sri Rama Swamy Temple", te: "శ్రీ చెన్నకేశవ స్వామి & శ్రీ రామ స్వామి దేవాలయం", hi: "श्री चेन्नाकेशव स्वामी और श्री राम स्वामी मंदिर" },
    type: "temple",
    location: { en: "Main Bazar, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" },
    details: { en: "Daily Pujas from 6:30 AM - 11:00 AM & 04:30 PM - 08:00 PM.", te: "ప్రతిరోజూ ఉదయం 6:30 - 11:00 మరియు సాయంత్రం 04:30 - రాత్రి 08:00 వరకు పూజలు జరుగును.", hi: "दैनिक पूजा सुबह 6:30 - 11:00 और शाम 04:30 - रात 08:00 बजे।" }
  },
  {
    id: "wrp-t2",
    name: { en: "Sri Anjaneya Swamy Temple", te: "శ్రీ ఆంజనేయ స్వామి దేవాలయం", hi: "श्री आंजनेय स्वामी मंदिर" },
    type: "temple",
    location: { en: "Main Bazar, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" },
    details: { en: "Daily Pujas from 6:30 AM - 11:00 AM & 04:30 PM - 08:00 PM.", te: "ప్రతిరోజూ ఉదయం 6:30 - 11:00 మరియు సాయంత్రం 04:30 - రాత్రి 08:00 వరకు పూజలు జరుగును.", hi: "दैनिक पूजा सुबह 6:30 - 11:00 और शाम 04:30 - रात 08:00 बजे।" }
  },
  {
    id: "wrp-t3",
    name: { en: "Sri Jeeveswara Swamy Temple", te: "శ్రీ జీవేశ్వర స్వామి దేవాలయం", hi: "श्री जीवेश्वर स्वामी मंदिर" },
    type: "temple",
    location: { en: "Orvakal, Kurnool, Andhra Pradesh 518010", te: "ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" },
    details: { en: "Local historic temple in Orvakal village.", te: "ఓర్వకల్లు గ్రామంలోని స్థానిక చారిత్రక దేవాలయం.", hi: "ओरवाकल गाँव में स्थानीय ऐतिहासिक मंदिर।" }
  },
  {
    id: "wrp-t4",
    name: { en: "Sri Nageswara Swamy temple", te: "శ్రీ నాగేశ్వర స్వామి దేవాలయం", hi: "श्री नागेश्वर स्वामी मंदिर" },
    type: "temple",
    location: { en: "Main Bazar, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" },
    details: { en: "Important local shrine dedicated to Lord Shiva.", te: "మహాశివుడి స్థానిక ఆలయం.", hi: "भगवान शिव को समर्पित महत्वपूर्ण स्थानीय मंदिर।" }
  },
  {
    id: "wrp-t5",
    name: { en: "Sunkulamma Temple", te: "సుంకులమ్మ దేవాలయం", hi: "सुंकुलम्मा मंदिर" },
    type: "temple",
    location: { en: "Main Bazar, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" },
    details: { en: "Ancient village deity temple, highly revered during local festivals.", te: "గ్రామ దేవత సుంకులమ్మ ఆలయం, పండుగలలో విశేష పూజలు జరుగును.", hi: "प्राचीन ग्राम देवी मंदिर, स्थानीय त्योहारों के दौरान अत्यधिक पूजनीय।" }
  },
  {
    id: "wrp-t6",
    name: { en: "Kommu cheruvu Anjaneya Swamy temple", te: "కొమ్ము చెరువు ఆంజనేయ స్వామి దేవాలయం", hi: "कोम्मू चेरुवू आंजनेय स्वामी मंदिर" },
    type: "temple",
    location: { en: "J642+9W8, Oudumbur Tonda, Komma Cheruvu, Kaba, Orvakal, Kurnool, Andhra Pradesh 518010", te: "J642+9W8, ఔదుంబర్ తండా, కొమ్మ చెరువు, కాబా, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "J642+9W8, औदुम्बर तंडा, कोम्मा चेरुवू, काबा, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" },
    details: { en: "Scenic temple located near the Komma Cheruvu lake.", te: "కొమ్మ చెరువు జలాశయం సమీపంలో ఉన్న సుందరమైన ఆలయం.", hi: "कोम्मा चेरुवू झील के पास स्थित सुंदर मंदिर।" }
  },
  {
    id: "wrp-t7",
    name: { en: "Yaganteswara Swamy temple", te: "యాగంతేశ్వర స్వామి దేవాలయం", hi: "यागंतेश्वर स्वामी मंदिर" },
    type: "temple",
    location: { en: "J4JX+Q5C yaganteswara swamy, N.Konthalapadu, Orvakal, Kurnool, Andhra Pradesh 518010", te: "J4JX+Q5C యాగంతేశ్వర స్వామి, ఎన్.కొంతలపాడు, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "J4JX+Q5C यागंतेश्वर स्वामी, एन.कोंथलापाडु, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "wrp-t8",
    name: { en: "Sri Bugga Rameswara Swamy Temple", te: "శ్రీ బుగ్గ రామేశ్వర స్వామి దేవాలయం", hi: "श्री बुग्गा रामेश्वर स्वामी मंदिर" },
    type: "temple",
    location: { en: "Kalvabugga, Kaba, Orvakal, Kurnool, Andhra Pradesh 518010", te: "కల్వబుగ్గ, కాబా, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "कलवाबुग्गा, काबा, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" },
    details: { en: "Famous temple known for its natural water spring flowing around the Shiva Lingam.", te: "శివలింగం చుట్టూ ప్రవహించే సహజ సిద్ధమైన నీటి బుగ్గకు ప్రసిద్ధి చెందిన పుణ్యక్షేత్రం.", hi: "प्राकृतिक जल स्रोत के लिए प्रसिद्ध शिव मंदिर।" }
  },

  // 2. Mosques
  {
    id: "wrp-m1",
    name: { en: "Jamia masjid", te: "జామియా మసీదు", hi: "जामिया मस्जिद" },
    type: "mosque",
    location: { en: "Main Bazar, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "wrp-m2",
    name: { en: "Masjid - E - Shareef", te: "మసీదు-ఎ-షరీఫ్", hi: "मस्जिद-ए-शरीफ" },
    type: "mosque",
    location: { en: "Main Bazar, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "wrp-m3",
    name: { en: "Allah bhakshas Dargah", te: "అల్లా బక్షా దర్గా", hi: "अल्लाह बख्श दरगाह" },
    type: "mosque",
    location: { en: "Orvakal, Kurnool, Andhra Pradesh 518010", te: "ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "wrp-m4",
    name: { en: "Syed sha Sultan Mehemood Shah Qadri Dargah", te: "సయ్యద్ షా సుల్తాన్ మెహమూద్ షా ఖాద్రీ దర్గా", hi: "सैयद शाह सुल्तान महमूद शाह कादरी दरगाह" },
    type: "mosque",
    location: { en: "Main Bazar, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },

  // 3. Churches
  {
    id: "wrp-c1",
    name: { en: "RCM Church", te: "ఆర్‌సిఎమ్ చర్చీ", hi: "आरसीएम चर्च" },
    type: "church",
    location: { en: "Near Busstop, Orvakal, Kurnool, Andhra Pradesh 518010", te: "బస్టాండ్ సమీపంలో, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "बस स्टॉप के पास, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "wrp-c2",
    name: { en: "ABM CHURCH ORVAKAL", te: "ఏబీఎమ్ చర్చీ ఓర్వకల్లు", hi: "एबीएम चर्च ओरवाकल" },
    type: "church",
    location: { en: "Orvakal, Kurnool, Andhra Pradesh 518010", te: "ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  }
];

export const attractions: Attraction[] = [
  {
    id: "att-1",
    name: { en: "Orvakallu Rock Gardens", te: "ఓర్వకల్లు రాక్ గార్డెన్స్", hi: "ओरवाकल रॉक गार्डन" },
    description: {
      en: "Natural silica rock formations surrounded by water reservoirs. Famous shooting spot with boating, paths, restaurant and trekking.",
      te: "నీటి జలాశయాల మధ్య సహజ సిద్ధంగా ఏర్పడిన సిలికా శిలలు. బోటింగ్, పార్క్ మార్గాలు, రెస్టారెంట్ మరియు ట్రెకింగ్ స్పాట్.",
      hi: "जल जलाशयों से घिरी प्राकृतिक सिलिका चट्टानें। नौका विहार, पार्क पथ, रेस्तरां और ट्रेकिंग के साथ पर्यटन स्थल।"
    },
    distance: { en: "Beside Highway", te: "హైవే పక్కన", hi: "राजमार्ग के पास" },
    timing: { en: "8:00 AM - 6:00 PM", te: "ఉదయం 8:00 - సాయంత్రం 6:00", hi: "सुबह 8:00 - शाम 6:00" },
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "att-2",
    name: { en: "Ketavaram Rock Paintings", te: "కేతవరం రాతి చిత్రాలు", hi: "केतवरम शैल चित्र" },
    description: {
      en: "Ancient rock paintings dating back to the Palaeolithic era (approx 10,000 BC) depicting bulls, deer, and human figures.",
      te: "పాత రాతియుగం కాలం నాటి పురాతన రాతి చిత్రాలు (సుమారు క్రీ.పూ 10,000). ఎడ్లు, జింకలు మరియు మానవ చిత్రాలు కనిపిస్తాయి.",
      hi: "पुरापाषाण काल ​​(लगभग 10,000 ईसा पूर्व) के प्राचीन शैल चित्र जिसमें बैल, हिरण और मानव आकृतियाँ चित्रित हैं।"
    },
    distance: { en: "Ketavaram Village, Orvakal, Kurnool, Andhra Pradesh 518010", te: "కేతవరం గ్రామం, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "केतवरम गाँव, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" },
    timing: { en: "Sunrise - Sunset", te: "సూర్యోదయం నుండి సూర్యాస్తమయం వరకు", hi: "सूर्योदय - सूर्यास्त" },
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80"
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
