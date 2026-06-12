import type { CommercialShop, WorshipPlace, Attraction, RentalCar } from '../../../types';

export const commercialShops: CommercialShop[] = [
  // 1. Restaurant
  {
    id: "shp-rest-1",
    category: "restaurant",
    name: { en: "Srinivasa Pure Veg Udupi Restaurant", te: "శ్రీనివాస ప్యూర్ వెజ్ ఉడుపి హోటల్ (రెస్టారెంట్)", hi: "श्रीनिवास प्योर वेज उडुपी रेस्तरां" },
    owner: { en: "H. Madhava Bhat", te: "హెచ్. మాధవ భట్", hi: "एच. माधव भट" },
    phone: "+91 9989123890",
    timing: { en: "6:00 AM - 10:30 PM", te: "ఉదయం 6:00 - రాత్రి 10:30", hi: "सुबह 6:00 - रात 10:30" },
    location: { en: "Highway Circle Crossroad, Orvakal", te: "హైవే సర్కిల్ క్రాస్‌రోడ్, ఓర్వకల్లు", hi: "हाईवे सर्कल चौराहा, ओरवाकल" },
    details: { en: "Famous for South Indian tiffins (Idli, Dosa) and executive afternoon meals.", te: "దక్షిణ భారత టిఫిన్స్ (ఇడ్లీ, దోశ) మరియు మధ్యాహ్నం రుచికరమైన భోజనానికి ప్రసిద్ధి.", hi: "दक्षिण भारतीय टिफिन (इडली, डोसा) और दोपहर के दोपहर के भोजन के लिए प्रसिद्ध।" },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80"
  },
  // 2. Hotel (Hospitality stays)
  {
    id: "shp-hot-1",
    category: "hotel",
    name: { en: "Haritha Rock Garden Resort (APTDC)", te: "హరిత రాక్ గార్డెన్ రిసార్ట్ (APTDC)", hi: "हरिता रॉक गार्डन रिसॉर्ट (APTDC)" },
    owner: { en: "AP Tourism Department Manager", te: "ఏపీ పర్యాటక శాఖ మేనేజర్", hi: "आंध्र प्रदेश पर्यटन विभाग प्रबंधक" },
    phone: "+91 8518200101",
    timing: { en: "24 Hours Check-in", te: "24 గంటల సేవ", hi: "24 घंटे उपलब्ध" },
    location: { en: "Orvakal Rock Gardens, Highway Bypass", te: "ఓర్వకల్లు రాక్ గార్డెన్స్, హైవే బైపాస్", hi: "ओरवाकल रॉक गार्डन, हाईवे बाईपास" },
    stars: 3,
    priceRate: { en: "Rs. 2,200 - Rs. 4,500 / day", te: "రూ. 2,200 - రూ. 4,500 / రోజుకు", hi: "रु. 2,200 - रु. 4,500 / दिन" },
    details: { en: "Sleek 3-Star AC cottages, multi-cuisine restaurant, and children play park.", te: "3-స్టార్ ఏసీ కాటేజీలు, రెస్టారెంట్ మరియు పిల్లల ప్లే పార్క్.", hi: "3-स्टार एसी कॉटेज, मल्टी-क्यूज़ीन रेस्तरां और बच्चों का पार्क।" },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
  },
  // 3. Home rentals / PGs
  {
    id: "shp-rnt-1",
    category: "rentals",
    name: { en: "Balaji Executive PG Rooms for Men", te: "బాలాజీ ఎగ్జిక్యూటివ్ పురుషుల పీజీ రూమ్స్", hi: "पुरुषों के लिए बालाजी एक्जीक्यूटिव पीजी कमरे" },
    owner: { en: "K. Prasad Rao", te: "కె. ప్రసాదరావు", hi: "के. प्रसाद राव" },
    phone: "+91 9490123456",
    timing: { en: "Contact (6:00 AM - 10:00 PM)", te: "ఉదయం 6:00 - రాత్రి 10:00", hi: "सुबह 6:00 - रात 10:00" },
    location: { en: "Near Airport Road, Orvakal", te: "ఎయిర్‌పోర్ట్ రోడ్ సమీపంలో, ఓర్వకల్లు", hi: "हवाई अड्डा रोड के पास, ओरवाकल" },
    priceRate: { en: "Rs. 4,500 / month (Food included)", te: "రూ. 4,500 / నెలకు (భోజనంతో సహా)", hi: "रु. 4,500 / माह (भोजन सहित)" },
    details: { en: "Single and double sharing, high-speed Wi-Fi, laundry facilities and hot water.", te: "సింగిల్ మరియు డబుల్ షేరింగ్, వై-ఫై, వేడి నీటి సదుపాయం.", hi: "सिंगल और डबल शेयरिंग, हाई-स्पीड वाई-फाई, लाँड्री सुविधाएं और गर्म पानी।" },
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80"
  },
  // 4. Banquet halls
  {
    id: "shp-banq-1",
    category: "banquet",
    name: { en: "Sri Srinivasa Kalyana Mandapam (AC Banquet)", te: "శ్రీ శ్రీనివాస కళ్యాణ మండపం (ఫంక్షన్ హాల్)", hi: "श्री श्रीनिवास कल्याण मंडपम (बैंक्वेट हॉल)" },
    owner: { en: "M. Subbarayudu", te: "ఎం. సుబ్బారాయుడు", hi: "एम. सुब्बारायुडु" },
    phone: "+91 9440552211",
    timing: { en: "Event bookings (24/7 support)", te: "బుకింగ్స్ లభిస్తాయి", hi: "बुकिंग उपलब्ध" },
    location: { en: "Mandal HQ Road, Orvakal", te: "మండల్ హెచ్‌క్యూ రోడ్, ఓర్వకల్లు", hi: "मंडल मुख्यालय रोड, ओरवाकल" },
    capacity: 1000,
    priceRate: { en: "Rs. 45,000 - Rs. 75,000 / event", te: "రూ. 45,000 - రూ. 75,000 / ఈవెంట్‌కు", hi: "रु. 45,000 - रु. 75,000 / आयोजन" },
    details: { en: "Spacious air-conditioned hall, grand staging, separate dining area, backup generator.", te: "పెద్ద ఏసీ హాల్, స్టేజ్, డైనింగ్ ఏరియా, జనరేటర్ సదుపాయం ఉంది.", hi: "विशाल वातानुकूलित हॉल, भव्य मंच, अलग भोजन क्षेत्र, बैकअप जनरेटर।" },
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80"
  },
  // 5. Tuitions
  {
    id: "shp-tut-1",
    category: "tuitions",
    name: { en: "Sri Sai Mathematics Academy & Coaching", te: "శ్రీ సాయి మ్యాథమెటిక్స్ అకాడమీ (కోచింగ్ సెంటర్)", hi: "श्री साई गणित अकादमी और कोचिंग" },
    owner: { en: "P. Ranganath (M.Sc. Maths)", te: "పి. రంగనాథ్ (M.Sc. Maths)", hi: "पी. रंगनाथ (एम.एससी. गणित)" },
    phone: "+91 9441112233",
    timing: { en: "5:00 PM - 8:30 PM", te: "సాయంత్రం 5:00 - రాత్రి 8:30", hi: "शाम 5:00 - रात 8:30" },
    location: { en: "High School Lane, Orvakal", te: "హైస్కూల్ రోడ్, ఓర్వకల్లు", hi: "हाई स्कूल गली, ओरवाकल" },
    details: { en: "Specialised coaching for Class 8-10, Inter Maths (MPC), and polytechnic entrance exams.", te: "8-10 తరగతులు, ఇంటర్ మరియు పాలిటెక్నిక్ ప్రవేశ పరీక్షలకు ప్రత్యేక కోచింగ్.", hi: "कक्षा 8-10, इंटर गणित (एमपीसी) और पॉलिटेक्निक प्रवेश परीक्षाओं के लिए विशेष कोचिंग।" }
  },
  // 6. Boutique/Tailor
  {
    id: "shp-btq-1",
    category: "boutique",
    name: { en: "Sri Lakshmi Tailors & Ladies Boutique", te: "శ్రీ లక్ష్మీ టైలర్స్ & లేడీస్ బోటిక్", hi: "श्री लक्ष्मी दर्जी और देवियों बुटीक" },
    owner: { en: "Mrs. L. Prabhavathi", te: "శ్రీమతి ఎల్. ప్రభావతి", hi: "श्रीमती एल. प्रभावती" },
    phone: "+91 9010112244",
    timing: { en: "9:00 AM - 8:30 PM", te: "ఉదయం 9:00 - రాత్రి 8:30", hi: "सुबह 9:00 - रात 8:30" },
    location: { en: "Main Bazaar Street, Orvakal", te: "మెయిన్ బజార్ వీధి, ఓర్వకల్లు", hi: "मुख्य बाजार मार्ग, ओरवाकल" },
    details: { en: "Computerized designer embroidery, blouse stitching, custom dresses, and designer sarees.", te: "కంప్యూటర్ డిజైనర్ వర్క్, బ్లౌజ్ స్టిచ్చింగ్ మరియు డిజైనర్ చీరలు లభిస్తాయి.", hi: "कंप्यूटरीकृत डिजाइनर कढ़ाई, ब्लाउज सिलाई और डिजाइनर साड़ियां।" }
  },
  // 7. Cloth shopping
  {
    id: "shp-cld-1",
    category: "clothing",
    name: { en: "Srinivasa Cloth Showroom & Matching Center", te: "శ్రీనివాస క్లాత్ షోరూమ్ & మ్యాచింగ్ సెంటర్", hi: "श्रीनिवास कपड़ा शोरूम और मैचिंग सेंटर" },
    owner: { en: "T. Chenna Kesavulu", te: "టి. చెన్నకేశవులు", hi: "टी. चेन्ना केशवुलु" },
    phone: "+91 9849556611",
    timing: { en: "9:00 AM - 9:30 PM", te: "ఉదయం 9:00 - రాత్రి 9:30", hi: "सुबह 9:00 - रात 9:30" },
    location: { en: "Panchayat Building Shop 4, Orvakal", te: "పంచాయతీ కాంప్లెక్స్ షాప్ 4, ఓర్వకల్లు", hi: "पंचायत भवन दुकान 4, ओरवाकल" },
    details: { en: "Sarees, suiting, shirting, lining cloths, matching pieces and readymade kids wear.", te: "చీరలు, సూటింగ్స్, షర్టింగ్స్ మరియు పిల్లల రెడీమేడ్ దుస్తులు లభిస్తాయి.", hi: "साड़ियां, सूटिंग, शर्टिंग, मैचिंग पीस और रेडीमेड बच्चों के कपड़े।" }
  },
  // 8. Wholesalers
  {
    id: "shp-whl-1",
    category: "wholesaler",
    name: { en: "Kurnool Kirana Wholesalers - Orvakal Branch", te: "కర్నూలు కిరాణా హోల్‌సేల్ వ్యాపారులు - ఓర్వకల్లు బ్రాంచ్", hi: "कर्नूल किराना थोक विक्रेता - ओरवाकल शाखा" },
    owner: { en: "V. Narayana Reddy", te: "వై. నారాయణ రెడ్డి", hi: "वाई. नारायण रेड्डी" },
    phone: "+91 9441238765",
    timing: { en: "7:00 AM - 8:30 PM", te: "ఉదయం 7:00 - రాత్రి 8:30", hi: "सुबह 7:00 - रात 8:30" },
    location: { en: "Mandi Bypass Road, Orvakal", te: "మండి బైపాస్ రోడ్, ఓర్వకల్లు", hi: "मंडी बाईपास रोड, ओरवाकल" },
    details: { en: "Wholesale suppliers of rice bags, pulses, cooking oils, sugar and spices for village shops.", te: "బియ్యం బస్తాలు, పప్పులు, నూనెలు మరియు హోల్‌సేల్ కిరాణా సరుకులు సరఫరా చేయబడతాయి.", hi: "गाँव की दुकानों के लिए चावल की बोरी, दालें, खाना पकाने का तेल और चीनी के थोक आपूर्तिकर्ता।" }
  },
  // 9. Hardware shops
  {
    id: "shp-hard-1",
    category: "hardware",
    name: { en: "Sri Vasavi Hardware, Paints & Electricals", te: "శ్రీ వాసవి హార్డ్‌వేర్, పెయింట్స్ & ఎలక్ట్రికల్స్", hi: "श्री वासवी हार्डवेयर, पेंट्स और इलेक्ट्रिकल्स" },
    owner: { en: "G. Venkateswarlu", te: "జి. వెంకటేశ్వర్లు", hi: "जी. वेंकटेश्वरलू" },
    phone: "+91 9441122889",
    timing: { en: "8:00 AM - 9:00 PM", te: "ఉదయం 8:00 - రాత్రి 9:00", hi: "सुबह 8:00 - रात 9:00" },
    location: { en: "NH-40 Bypass Road, near Auto stand, Orvakal", te: "NH-40 బైపాస్ రోడ్, ఆటో స్టాండ్ సమీపంలో, ఓర్వకల్లు", hi: "एनएच-40 बाईपास रोड, ऑटो स्टैंड के पास, ओरवाकल" },
    details: { en: "Pipes, electrical wires, switches, building paints, motor starters and plumbing tools.", te: "పైపులు, ఎలక్ట్రికల్ వైర్లు, మోటార్ స్టార్టర్లు మరియు ప్లంబింగ్ సామగ్రి లభిస్తాయి.", hi: "पाइप, बिजली के तार, स्विच, भवन निर्माण पेंट, मोटर स्टार्टर और नलसाजी उपकरण।" }
  },
  // 10. Stationery
  {
    id: "shp-sta-1",
    category: "stationery",
    name: { en: "Sri Sai Stationery, Xerox & Lamination", te: "శ్రీ సాయి స్టేషనరీ, జిరాక్స్ & లామినేషన్", hi: "श्री साई स्टेशनरी, फोटोकॉपी और लेमिनेशन" },
    owner: { en: "M. Ramanamma", te: "ఎం. రమణమ్మ", hi: "एम. रमनम्मा" },
    phone: "+91 9849123456",
    timing: { en: "8:00 AM - 9:00 PM", te: "ఉదయం 8:00 - రాత్రి 9:00", hi: "सुबह 8:00 - रात 9:00" },
    location: { en: "Opposite Zilla Parishad High School, Orvakal", te: "ZPHS స్కూల్ ఎదురుగా, ఓర్వకల్లు", hi: "जिला परिषद हाई स्कूल के सामने, ओरवाकल" },
    details: { en: "School notebooks, textbooks, pens, color printouts, xerox, lamination, and project files.", te: "స్కూల్ నోట్‌బుక్స్, పెన్నులు, జిరాక్స్, లామినేషన్ మరియు ప్రాజెక్ట్ ఫైల్స్ సదుపాయం.", hi: "स्कूल की कॉपियाँ, पाठ्यपुस्तकें, पेन, फोटोकॉपी, लेमिनेशन और प्रोजेक्ट फ़ाइलें।" }
  },
  // 11. Event Supplies & Vehicle Rentals
  {
    id: "shp-evt-1",
    category: "event-rental",
    name: { en: "Sri Venkateswara Tent House & Dj Sound System", te: "శ్రీ వెంకటేశ్వర టెంట్ హౌస్ & డీజే సౌండ్ సిస్టమ్", hi: "श्री वेंकटेश्वर टेंट हाउस और डीजे साउंड सिस्टम" },
    owner: { en: "S. Khaja Moinuddin", te: "ఎస్. ఖాజా మొయినుద్దీన్", hi: "एस. ख्वाजा मोइनुद्दीन" },
    phone: "+91 9010123456",
    timing: { en: "Order bookings (6:00 AM - 11:00 PM)", te: "ఉదయం 6:00 - రాత్రి 11:00", hi: "सुबह 6:00 - रात 11:00" },
    location: { en: "Indira Nagar Colony, Orvakal", te: "ఇందిరా నగర్ కాలనీ, ఓర్వకల్లు", hi: "इंदिरा नगर कॉलोनी, ओरवाकल" },
    priceRate: { en: "Contact for wedding packages", te: "ప్యాకేజీల కోసం సంప్రదించండి", hi: "पैकेज के लिए संपर्क करें" },
    details: { en: "Event suppliers: Tents, chairs, tables, wedding stage decorations, audio sound systems and lighting.", te: "ఈవెంట్ సప్లైస్: పెళ్ళి టెంట్లు, కుర్చీలు, డెకరేషన్ మరియు డీజే సౌండ్ సిస్టమ్స్ లభిస్తాయి.", hi: "इवेंट आपूर्तिकर्ता: टेंट, कुर्सियां, टेबल, शादी के स्टेज की सजावट, ऑडियो साउंड सिस्टम और लाइटिंग।" }
  },
  // 12. Car & Vehicle Rentals
  {
    id: "shp-car-1",
    category: "car-rental",
    name: { en: "Orvakal Cabs & Local Travels Desk", te: "ఓర్వకల్లు క్యాబ్స్ & ట్రావెల్స్ డెస్క్", hi: "ओरवाकल कैब्स और स्थानीय ट्रेवल्स डेस्क" },
    owner: { en: "G. Venkatesh", te: "జి. వెంకటేష్", hi: "जी. वेंकटेश" },
    phone: "+91 9652123456",
    timing: { en: "24/7 Cab booking", te: "24 గంటల బుకింగ్స్", hi: "24/7 कैब बुकिंग" },
    location: { en: "Near NH-40 Junction Cross, Orvakal", te: "NH-40 జంక్షన్, ఓర్వకల్లు", hi: "एनएच-40 जंक्शन के पास, ओरवाकल" },
    priceRate: { en: "Sedan: Rs 12/km | SUV: Rs 16/km", te: "Sedan: రూ. 12/కి.మీ | SUV: రూ. 16/కి.మీ", hi: "सेडान: रु 12/किमी | एसयूवी: रु 16/किमी" },
    details: { en: "Local and outstation taxi booking, airport pickup/drops, tourist tour packages.", te: "స్థానిక మరియు దూర ప్రయాణాల కోసం టాక్సీ సదుపాయం, ఎయిర్‌పోర్ట్ పికప్/డ్రాప్ సేవలు.", hi: "स्थानीय और बाहरी टैक्सी बुकिंग, हवाई अड्डा पिकअप/ड्रॉप, पर्यटन टूर पैकेज।" }
  },
  // 13. Driving school
  {
    id: "shp-drv-1",
    category: "driving-school",
    name: { en: "Maruthi Motor Driving School", te: "మారుతి మోటార్ డ్రైవింగ్ స్కూల్", hi: "मारुति मोटर ड्राइविंग स्कूल" },
    owner: { en: "K. Chenna Kesavulu", te: "కె. చెన్నకేశవులు", hi: "के. चेन्ना केशवुलु" },
    phone: "+91 9701234567",
    timing: { en: "6:00 AM - 10:00 AM, 4:00 PM - 7:00 PM", te: "ఉదయం 6-10, సాయంత్రం 4-7 వరకు", hi: "सुबह 6-10, शाम 4-7 बजे तक" },
    location: { en: "Bypass Ring Road, Orvakal", te: "బైపాస్ రింగ్ రోడ్, ఓర్వకల్లు", hi: "बाईपास रिंग रोड, ओरवाकल" },
    details: { en: "Excellent 4-wheeler and 2-wheeler driving training. RTO license processing guidance included.", te: "కార్ మరియు మోటార్ సైకిల్ డ్రైవింగ్ శిక్షణ. RTO లైసెన్స్ గైడెన్స్ ఇవ్వబడుతుంది.", hi: "चार पहिया और दो पहिया वाहन ड्राइविंग प्रशिक्षण। आरटीओ लाइसेंस सहायता शामिल है।" }
  },
  // 14. Medical stores
  {
    id: "shp-med-1",
    category: "medical",
    name: { en: "Balaji Medical & General Agency", te: "బాలాజీ మెడికల్ & జనరల్ ఏజెన్సీ", hi: "बालाजी मेडिकल एंड जनरल एजेंसी" },
    owner: { en: "K. Prasad Rao", te: "కె. ప్రసాదరావు", hi: "के. प्रसाद राव" },
    phone: "+91 9490123456",
    timing: { en: "8:00 AM - 11:00 PM (Emergency delivery)", te: "ఉదయం 8:00 - రాత్రి 11:00 (అత్యవసర సరఫరా)", hi: "सुबह 8:00 - रात 11:00 (आपातकालीन आपूर्ति)" },
    location: { en: "Opposite Primary Health Center, Orvakal", te: "ప్రాథమిక ఆరోగ్య కేంద్రం ఎదురుగా, ఓర్వకల్లు", hi: "प्राथमिक स्वास्थ्य केंद्र के सामने, ओरवाकल" },
    details: { en: "All prescription medicines, first-aid kits, pediatric medicines, baby foods and general items.", te: "అన్ని రకాల ప్రిస్క్రిప్షన్ మందులు, ప్రథమ చికిత్స కిట్లు, జనరల్ మెడిసిన్ లభిస్తాయి.", hi: "सभी डॉक्टर के पर्चे की दवाएं, प्राथमिक चिकित्सा किट, बाल चिकित्सा दवाएं और सामान्य वस्तुएं।" }
  },
  // 15. Milk Dairies
  {
    id: "shp-dry-1",
    category: "dairy",
    name: { en: "Sri Krishna Milk Collection & Dairy Center", te: "శ్రీ కృష్ణ పాల సేకరణ & డెయిరీ కేంద్రం", hi: "श्री कृष्णा दुग्ध संग्रह और डेयरी केंद्र" },
    owner: { en: "T. Anjaneyulu", te: "టి. ఆంజనేయులు", hi: "टी. आंजनेयुलु" },
    phone: "+91 9652122334",
    timing: { en: "5:00 AM - 9:00 AM, 5:00 PM - 8:00 PM", te: "ఉదయం 5-9, సాయంత్రం 5-8 వరకు", hi: "सुबह 5-9, शाम 5-8 बजे तक" },
    location: { en: "Gaddipadu Feeder road, Orvakal", te: "గడ్డిపాడు రోడ్, ఓర్వకల్లు", hi: "गद्दीपाडु रोड, ओरवाकल" },
    details: { en: "Pure cow and buffalo milk collection and sales. Ghee, butter, paneer and local curd available.", te: "స్వచ్ఛమైన ఆవు మరియు గేదె పాలు లభిస్తాయి. నెయ్యి, కోవా మరియు పెరుగు అందుబాటులో ఉన్నాయి.", hi: "शुद्ध गाय और भैंस के दूध का संग्रह और बिक्री। घी, मक्खन, पनीर और दही उपलब्ध।" }
  },
  // 16. Water Supplier
  {
    id: "shp-wtr-1",
    category: "water-supplier",
    name: { en: "Ganga Mineral Drinking Water Supplies", te: "గంగా మినరల్ స్వచ్ఛమైన తాగునీటి సరఫరా", hi: "गंगा मिनरल शुद्ध पेयजल आपूर्ति" },
    owner: { en: "K. Ramanjaneyulu", te: "కె. రామాంజనేయులు", hi: "के. रामान्जनेयुलु" },
    phone: "+91 9059556677",
    timing: { en: "24 Hours Delivery Service", te: "24 గంటల సరఫరా", hi: "24 घंटे डिलीवरी" },
    location: { en: "Panchayat Office lane, Orvakal", te: "పంచాయతీ ఆఫీస్ లేన్, ఓర్వకల్లు", hi: "पंचायत कार्यालय गली, ओरवाकल" },
    priceRate: { en: "Rs. 15 per 20 Liters Mineral Can", te: "20 లీటర్ల మినరల్ కాన్ రూ. 15", hi: "रु. 15 प्रति 20 लीटर मिनरल वाटर कैन" },
    details: { en: "Home delivery of chilled 20L mineral water cans for houses, factory offices and functions.", te: "ఇళ్లకు మరియు ఫ్యాక్టరీ ఆఫీసులకు 20 లీటర్ల మినరల్ వాటర్ క్యాన్లు హోమ్ డెలివరీ చేయబడతాయి.", hi: "घरों, कारखाने के कार्यालयों और समारोहों के लिए ठंडे 20L मिनरल वाटर कैन की होम डिलीवरी।" }
  },
  // 17. Laundry
  {
    id: "shp-lau-1",
    category: "laundry",
    name: { en: "Sri Rama Laundry & Dry Cleaning", te: "శ్రీ రామ లాండ్రీ & డ్రై క్లీనింగ్", hi: "श्री राम कपड़े धोने और ड्राई क्लीनिंग" },
    owner: { en: "M. Ramanjaneyulu", te: "ఎం. రామాంజనేయులు", hi: "एम. रामान्जनेयुलु" },
    phone: "+91 9059123456",
    timing: { en: "7:00 AM - 8:30 PM", te: "ఉదయం 7:00 - రాత్రి 8:30", hi: "सुबह 7:00 - रात 8:30" },
    location: { en: "Indira Nagar crossroads, Orvakal", te: "ఇందిరా నగర్ క్రాస్‌రోడ్స్, ఓర్వకల్లు", hi: "इंदिरा नगर चौराहा, ओरवाकल" },
    details: { en: "Steam ironing, dry wash for suits, blanket washing, and quick same-day cloth pressing.", te: "స్టీమ్ ఇస్త్రీ, బ్లేజర్ డ్రై క్లీనింగ్, దుప్పట్ల వాషింగ్ సేవలు కలవు.", hi: "स्टीम आयरनिंग, सूट की ड्राई वाश, कंबल धुलाई और त्वरित कपड़ों की प्रेसिंग।" }
  },
  // 18. Pesticide & Seeds
  {
    id: "shp-pest-1",
    category: "pesticide",
    name: { en: "Sri Srinivasa Agro Agencies & Fertilizer Store", te: "శ్రీ శ్రీనివాస ఆగ్రో ఏజెన్సీస్ & ఎరువుల దుకాణం", hi: "श्री श्रीनिवास एग्रो एजेंसीज और उर्वरक स्टोर" },
    owner: { en: "T. Srinivasa Reddy", te: "టి. శ్రీనివాస రెడ్డి", hi: "टी. श्रीनिवास रेड्डी" },
    phone: "+91 9440890123",
    timing: { en: "7:30 AM - 8:30 PM", te: "ఉదయం 7:30 - రాత్రి 8:30", hi: "सुबह 7:30 - रात 8:30" },
    location: { en: "Orvakal Main Road, near Gram Panchayat Office", te: "ఓర్వకల్లు మెయిన్ రోడ్, గ్రామ పంచాయతీ సమీపంలో", hi: "ओरवाकल मुख्य मार्ग, ग्राम पंचायत कार्यालय के पास" },
    details: { en: "High-quality seeds, chemical and organic fertilizers, pesticides, and soil health advice.", te: "నాణ్యమైన విత్తనాలు, సేంద్రీయ ఎరువులు, పురుగుమందులు మరియు వ్యవసాయ సలహాలు లభిస్తాయి.", hi: "उच्च गुणवत्ता वाले बीज, रासायनिक और जैविक उर्वरक, कीटनाशक और कृषि सलाह।" }
  },
  // 19. Courier & Cargo
  {
    id: "shp-cour-1",
    category: "courier",
    name: { en: "Professional Couriers & Cargo Orvakal Depot", te: "ప్రొఫెషనల్ కొరియర్స్ & కార్గో ఓర్వకల్లు", hi: "प्रोफेशनल कूरियर और कार्गो ओरवाकल डिपो" },
    owner: { en: "M. Subba Rayudu", te: "ఎం. సుబ్బారాయుడు", hi: "एम. सुब्बा रायडू" },
    phone: "+91 9059882233",
    timing: { en: "9:00 AM - 7:00 PM (Sunday Closed)", te: "ఉదయం 9:00 - సాయంత్రం 7:00", hi: "सुबह 9:00 - शाम 7:00" },
    location: { en: "Highway Junction Bypass, near Toll Plaza", te: "హైవే జంక్షన్ బైపాస్, టోల్ ప్లాజా సమీపంలో", hi: "हाईवे जंक्शन बाईपास, टोल प्लाजा के पास" },
    details: { en: "Fast courier delivery, parcel booking, cargo shipping, and home delivery services.", te: "వేగవంతమైన కొరియర్ మరియు పార్సెల్ బుకింగ్, కార్గో షిప్పింగ్ సేవలు కలవు.", hi: "तेज कूरियर वितरण, पार्सल बुकिंग, कार्गो शिपिंग और होम डिलीवरी सेवाएं।" }
  },
  // 20. Auto Stand & Transport
  {
    id: "shp-auto-1",
    category: "auto",
    name: { en: "Orvakal Junction Bypass Auto Stand", te: "ఓర్వకల్లు జంక్షన్ బైపాస్ ఆటో స్టాండ్", hi: "ओरवाकल जंक्शन बाईपास ऑटो स्टैंड" },
    owner: { en: "Local Auto Association Coordinator", te: "స్థానిక ఆటో సంఘం నిర్వాహకులు", hi: "स्थानीय ऑटो संघ समन्वयक" },
    phone: "+91 9652554433",
    timing: { en: "24 Hours Services", te: "24 గంటల సేవలు", hi: "24 घंटे उपलब्ध" },
    location: { en: "NH-40 Bypass Crossing, Orvakal Junction", te: "NH-40 బైపాస్ క్రాసింగ్, ఓర్వకల్లు జంక్షన్", hi: "एनएच-40 बाईपास क्रॉसिंग, ओरवाकल जंक्शन" },
    details: { en: "Local auto-rickshaws available for passenger travel to Kurnool, Nandyal, and surrounding villages.", te: "కర్నూలు, నంద్యాల మరియు చుట్టుపక్కల గ్రామాలకు ప్రయాణించడానికి లోకల్ ఆటోలు అందుబాటులో ఉంటాయి.", hi: "कर्नूल, नंदयाल और आसपास के गांवों की यात्रा के लिए ऑटो रिक्शा सेवा।" }
  },
  // 21. Drivers
  {
    id: "shp-driv-1",
    category: "drivers",
    name: { en: "Sri Sai Local Drivers & Tractor Chauffeurs Group", te: "శ్రీ సాయి లోకల్ డ్రైవర్లు & ట్రాక్టర్ డ్రైవర్స్ గ్రూప్", hi: "श्री साई लोकल ड्राइवर्स और ट्रैक्टर ड्राइवर्स समूह" },
    owner: { en: "K. Ramu", te: "కె. రాము", hi: "के. रामू" },
    phone: "+91 9059332211",
    timing: { en: "6:00 AM - 11:00 PM (Hourly booking)", te: "ఉదయం 6:00 - రాత్రి 11:00", hi: "सुबह 6:00 - रात 11:00" },
    location: { en: "Bypass Colony, Orvakal", te: "బైపాస్ కాలనీ, ఓర్వకల్లు", hi: "बाईपास कॉलोनी, ओरवाकल" },
    details: { en: "Experienced heavy vehicle, car, and tractor drivers available for hire on daily/weekly basis.", te: "కార్, ట్రాక్టర్ మరియు హెవీ వెహికల్ డ్రైవర్లు రోజువారీ/వార ప్రాతిపదికన అద్దెకు లభిస్తారు.", hi: "दैनिक या साप्ताहिक आधार पर किराए के लिए अनुभवी कार, ट्रैक्टर और भारी वाहन चालक।" }
  }
];


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

