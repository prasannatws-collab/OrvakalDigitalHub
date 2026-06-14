import type { CommercialShop } from '../types';

export const commercialShops: CommercialShop[] = [
  // 1. Food & Restaurants
  {
    id: "shp-rest-1",
    category: "restaurant",
    name: { en: "Haritha Rock Gardens & Restaurants", te: "హరిత రాక్ గార్డెన్స్ & రెస్టారెంట్స్", hi: "हरिता रॉक गार्डन एंड रेस्टोरेंट" },
    owner: { en: "AP Tourism Development Corp", te: "ఏపీ పర్యాటక అభివృద్ధి సంస్థ", hi: "आंध्र प्रदेश पर्यटन विकास निगम" },
    phone: "",
    timing: { en: "09:30 AM - 08:30 PM", te: "ఉదయం 09:30 - రాత్రి 08:30", hi: "सुबह 09:30 - रात 08:30" },
    location: { en: "National Highway, Orvakal, Kurnool, Andhra Pradesh 518010", te: "జాతీయ రహదారి, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "राष्ट्रीय राजमार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" },
    details: { en: "Premium multi-cuisine restaurant inside the scenic Rock Gardens compound.", te: "రాక్ గార్డెన్స్ లోపల ప్రీమియం రెస్టారెంట్, రుచికరమైన ఆహారం లభిస్తుంది.", hi: "सुंदर रॉक गार्डन परिसर के अंदर प्रीमियम रेस्तरां।" },
    stars: 4.5
  },
  {
    id: "shp-rest-2",
    category: "restaurant",
    name: { en: "Reddy Dhaba Restaurant", te: "రెడ్డి ధాబా రెస్టారెంట్", hi: "रेड्डी ढाबा रेस्तरां" },
    owner: { en: "Y. Narayana Reddy", te: "వై. నారాయణ రెడ్డి", hi: "वाई. नारायण रेड्डी" },
    phone: "",
    timing: { en: "09:30 AM - 08:30 PM", te: "ఉదయం 09:30 - రాత్రి 08:30", hi: "सुबह 09:30 - रात 08:30" },
    location: { en: "National Highway, Orvakal, Kurnool, Andhra Pradesh 518010", te: "జాతీయ రహదారి, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "राष्ट्रीय राजमार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" },
    details: { en: "Popular highway dhaba known for spicy local Rayalaseema dishes.", te: "రాయలసీమ నాటుకోడి మరియు ఘాటైన స్థానిక వంటకాలకు ప్రసిద్ధి చెందిన హైవే ధాబా.", hi: "मसालेदार स्थानीय रायलसीमा व्यंजनों के लिए लोकप्रिय राजमार्ग ढाबा।" }
  },
  {
    id: "shp-rest-3",
    category: "restaurant",
    name: { en: "HB Restaurant", te: "హెచ్‌బి రెస్టారెంట్", hi: "एचबी रेस्तरां" },
    owner: { en: "H. Bhaskar", te: "హెచ్. భాస్కర్", hi: "एच. भास्कर" },
    phone: "",
    timing: { en: "09:30 AM - 08:30 PM", te: "ఉదయం 09:30 - రాత్రి 08:30", hi: "सुबह 09:30 - रात 08:30" },
    location: { en: "National Highway, Orvakal, Kurnool, Andhra Pradesh 518010", te: "జాతీయ రహదారి, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "राष्ट्रीय राजमार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-rest-4",
    category: "restaurant",
    name: { en: "Aero One Restaurant", te: "ఏరో వన్ రెస్టారెంట్", hi: "एरो वन रेस्तरां" },
    owner: { en: "Airport Transit Services", te: "ఎయిర్‌పోర్ట్ ట్రాన్సిట్ సర్వీసెస్", hi: "हवाई अड्डा पारगमन सेवाएं" },
    phone: "",
    timing: { en: "09:30 AM - 08:30 PM", te: "ఉదయం 09:30 - రాత్రి 08:30", hi: "सुबह 09:30 - रात 08:30" },
    location: { en: "National Highway, Orvakal, Kurnool, Andhra Pradesh 518010", te: "జాతీయ రహదారి, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "राष्ट्रीय राजमार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },

  // 2. Hotels/Stays
  {
    id: "shp-htl-1",
    category: "hotel",
    name: { en: "Aero One Hotel & Transit Stay", te: "ఏరో వన్ హోటల్ & ట్రాన్సిట్ స్టే", hi: "एरो वन होटल एंड ट्रांजिट स्टे" },
    owner: { en: "Airport Chauffeurs Group", te: "ఎయిర్‌పోర్ట్ చౌఫర్స్ గ్రూప్", hi: "हवाई अड्डा चालक समूह" },
    phone: "",
    timing: { en: "09:30 AM - 08:30 PM", te: "ఉదయం 09:30 - రాత్రి 08:30", hi: "सुबह 09:30 - रात 08:30" },
    location: { en: "National Highway, Orvakal, Kurnool, Andhra Pradesh 518010", te: "జాతీయ రహదారి, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "राष्ट्रीय राजमार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-htl-2",
    category: "hotel",
    name: { en: "Haritha Rock Gardens & Restaurants", te: "హరిత రాక్ గార్డెన్స్ & రెస్టారెంట్స్", hi: "हरिता रॉक गार्डन एंड रेस्टोरेंट" },
    owner: { en: "AP Tourism Development Corp Stay", te: "ఏపీ పర్యాటక అభివృద్ధి సంస్థ స్టే", hi: "आंध्र प्रदेश पर्यटन विकास निगम ठहरने का स्थान" },
    phone: "",
    timing: { en: "09:30 AM - 08:30 PM", te: "ఉదయం 09:30 - రాత్రి 08:30", hi: "सुबह 09:30 - रात 08:30" },
    location: { en: "National Highway, Orvakal, Kurnool, Andhra Pradesh 518010", te: "జాతీయ రహదారి, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "राष्ट्रीय राजमार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },

  // 3. Home rentals / PGs (Retained mock data)
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
    name: { en: "Sri Jeeveswara Swamy Kalyana Mandapam", te: "శ్రీ జీవేశ్వర స్వామి కల్యాణ మండపం", hi: "श्री जीवेश्वर स्वामी कल्याण मंडपम" },
    owner: { en: "Temple Administration Committee", te: "ఆలయ పాలక మండలి", hi: "मंदिर प्रशासन समिति" },
    phone: "",
    timing: { en: "Event bookings (24/7 support)", te: "ఈవెంట్ బుకింగ్స్ అందుబాటులో ఉన్నాయి", hi: "आयोजन बुकिंग उपलब्ध" },
    location: { en: "Orvakal, Kurnool, Andhra Pradesh 518010", te: "ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },

  // 5. Tuitions (Retained mock data)
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

  // 6. Boutique/Tailor (Retained mock data)
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
    name: { en: "Lucky Kids & Mens Wear", te: "లక్కీ కిడ్స్ & మెన్స్ వేర్", hi: "लकी किड्स एंड मेन्स वियर" },
    owner: { en: "S. Khadar Basha", te: "ఎస్. ఖాదర్ బాషా", hi: "एस. खादर बाशा" },
    phone: "",
    timing: { en: "9:00 AM - 9:00 PM", te: "ఉదయం 9:00 - రాత్రి 9:00", hi: "सुबह 9:00 - रात 9:00" },
    location: { en: "Near Busstop, Orvakal, Kurnool, Andhra Pradesh 518010", te: "బస్టాండ్ సమీపంలో, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "बस स्टॉप के पास, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-cld-2",
    category: "clothing",
    name: { en: "Jeevitha cloth store", te: "జీవిత క్లాత్ స్టోర్", hi: "जीविता क्लॉथ स्टोर" },
    owner: { en: "M. Jeevitha", te: "ఎం. జీవిత", hi: "एम. जीविता" },
    phone: "",
    timing: { en: "9:00 AM - 9:00 PM", te: "ఉదయం 9:00 - రాత్రి 9:00", hi: "सुबह 9:00 - रात 9:00" },
    location: { en: "Near Busstop, Orvakal, Kurnool, Andhra Pradesh 518010", te: "బస్టాండ్ సమీపంలో, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "बस स्टॉप के पास, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },

  // 8. Wholesalers & Kirana (Mapped from Kiranam section in sheet)
  {
    id: "shp-whl-1",
    category: "wholesaler",
    name: { en: "Hariprasad Kiranam stores", te: "హరిప్రసాద్ కిరాణా స్టోర్స్", hi: "हरिप्रसाद किराना स्टोर्स" },
    owner: { en: "K. Hariprasad", te: "కె. హరిప్రసాద్", hi: "के. हरिप्रसाद" },
    phone: "",
    timing: { en: "07:00 AM - 09:00 PM", te: "ఉదయం 07:00 - రాత్రి 09:00", hi: "सुबह 07:00 - रात 09:00" },
    location: { en: "Main Bazar, Main route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, మెయిన్ రూట్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, मुख्य मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-whl-2",
    category: "wholesaler",
    name: { en: "Janardhan Kiranam Stores", te: "జనార్ధన్ కిరాణా స్టోర్స్", hi: "जनार्दन किराना स्टोर्स" },
    owner: { en: "M. Janardhan", te: "ఎం. జనార్ధన్", hi: "एम. जनार्दन" },
    phone: "",
    timing: { en: "07:00 AM - 09:00 PM", te: "ఉదయం 07:00 - రాత్రి 09:00", hi: "सुबह 07:00 - रात 09:00" },
    location: { en: "Main Bazar, Main route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, మెయిన్ రూట్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, मुख्य मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-whl-3",
    category: "wholesaler",
    name: { en: "Javaiah Kiranam Stores", te: "జవయ్య కిరాణా స్టోర్స్", hi: "जवैया किराना स्टोर्स" },
    owner: { en: "P. Javaiah", te: "పి. జవయ్య", hi: "पी. जवैया" },
    phone: "",
    timing: { en: "07:00 AM - 09:00 PM", te: "ఉదయం 07:00 - రాత్రి 09:00", hi: "सुबह 07:00 - रात 09:00" },
    location: { en: "Main Bazar, Main route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, మెయిన్ రూట్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, मुख्य मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-whl-4",
    category: "wholesaler",
    name: { en: "Venkatesh Kiranam Stores", te: "వెంకటేష్ కిరాణా స్టోర్స్", hi: "वेंकटेश किराना स्टोर्स" },
    owner: { en: "K. Venkatesh", te: "కె. వెంకటేష్", hi: "के. वेंकटेश" },
    phone: "",
    timing: { en: "07:00 AM - 09:00 PM", te: "ఉదయం 07:00 - రాత్రి 09:00", hi: "सुबह 07:00 - रात 09:00" },
    location: { en: "Nandikotkuru Road, Orvakal, Kurnool, Andhra Pradesh 518010", te: "నందికొట్కూరు రోడ్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "नंदीकोटकुड़ू रोड, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-whl-5",
    category: "wholesaler",
    name: { en: "Sreedhar Kiranam Stores", te: "శ్రీధర్ కిరాణా స్టోర్స్", hi: "श्रीधर किराना स्टोर्स" },
    owner: { en: "T. Sreedhar", te: "టి. శ్రీధర్", hi: "टी. श्रीधर" },
    phone: "",
    timing: { en: "07:00 AM - 09:00 PM", te: "ఉదయం 07:00 - రాత్రి 09:00", hi: "सुबह 07:00 - रात 09:00" },
    location: { en: "Nandikotkuru Road, Orvakal, Kurnool, Andhra Pradesh 518010", te: "నందికొట్కూరు రోడ్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "नंदीकोटकुड़ू रोड, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },

  // 9. Hardware shops
  {
    id: "shp-hard-1",
    category: "hardware",
    name: { en: "Khaja Bande Nawaz Traders", te: "ఖాజా బందే నవాజ్ ట్రేడర్స్", hi: "ख्वाजा बंदे नवाज ट्रेडर्स" },
    owner: { en: "S. K. Chanda Basha", te: "ఎస్. కె. చందా బాషా", hi: "एस. के. चंदा बाशा" },
    phone: "",
    timing: { en: "09:30 AM - 08:30 PM", te: "ఉదయం 09:30 - రాత్రి 08:30", hi: "सुबह 09:30 - रात 08:30" },
    location: { en: "Beside Busstop, Orvakal, Kurnool, Andhra Pradesh 518010", te: "బస్టాండ్ పక్కన, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "बस स्टॉप के पास, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-hard-2",
    category: "hardware",
    name: { en: "Veerabhadra Traders", te: "వీరభద్ర ట్రేడర్స్", hi: "वीरभद्र ट्रेडर्स" },
    owner: { en: "G. Veerabhadra Reddy", te: "జి. వీరభద్ర రెడ్డి", hi: "जी. वीरभद्र रेड्डी" },
    phone: "",
    timing: { en: "09:30 AM - 08:30 PM", te: "ఉదయం 09:30 - రాత్రి 08:30", hi: "सुबह 09:30 - रात 08:30" },
    location: { en: "Main Bazar Route, Orvakal, Andhra Pradesh 518010", te: "మెయిన్ బజార్ రూట్, ఓర్వకల్లు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार मार्ग, ओरवाकल, आंध्र प्रदेश 518010" }
  },

  // 10. Stationery (Retained mock data)
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

  // 11. Event Supplies (Retained mock data)
  {
    id: "shp-evt-1",
    category: "event-rental",
    name: { en: "Sri Venkateswara Tent House & Dj Sound System", te: "శ్రీ వెంకటేశ్వర టెంట్ హౌస్ & డీజే సౌండ్ సిస్టమ్", hi: "श्री वेंकटेश्वर टेंट हाउस और डीजे साउंड सिस्टम" },
    owner: { en: "S. Khaja Moinuddin", te: "ఎస్. ఖాజా మొయినుద్దీన్", hi: "एस. ख्वाजा मोइनुद्दीन" },
    phone: "+91 9010123456",
    timing: { en: "Order bookings (6:00 AM - 11:00 PM)", te: "ఉదయం 6:00 - రాత్రి 11:00", hi: "सुबह 6:00 - रात 11:00" },
    location: { en: "Indira Nagar Colony, Orvakal", te: "ఇందిరా నగర్ కాలనీ, ఓర్వకల్లు", hi: "इंदिरा नगर कॉलोनी, ओरवाकल" },
    priceRate: { en: "Contact for wedding packages", te: "ప్యాకేజీల కోసం సంప్రదించండి", hi: "पैकेज के लिए संपर्क करें" },
    details: { en: "Event suppliers: Tents, chairs, tables, wedding stage decorations, audio sound systems and lighting.", te: "ఈవెంట్ సప్లైస్: పెళ్ళి టెంట్లు, కుర్చీలు, డెకరేషన్ మరియు డీజే సౌండ్ సిస్టమ్స్ లభిస్తాయి.", hi: "इवेंट आपूर्तिकर्ता: टेंट, कुर्सियां, टेबल, शादी के स्टेज की सजावट, audio sound systems और लाइटिंग।" }
  },

  // 12. Car & Vehicle Rentals (Retained mock data)
  {
    id: "shp-car-1",
    category: "car-rental",
    name: { en: "Orvakal Cabs & Local Travels Desk", te: "ఓర్వకల్లు క్యాబ్స్ & ట్రావెల్స్ డెస్క్", hi: "ओरवाकल कैब्स और स्थानीय ट्रेवल्स डेस्क" },
    owner: { en: "G. Venkatesh", te: "జి. వెంకటేష్", hi: "जी. वेंकटेश" },
    phone: "+91 9652123456",
    timing: { en: "24/7 Cab booking", te: "24 గంటల బుకింగ్స్", hi: "24/7 कैब बुकिंग" },
    location: { en: "Near NH-40 Junction Cross, Orvakal", te: "NH-40 జంక్షన్, ఓర్వకల్లు", hi: "एनएच-40 जंक्शन के पास, ओरवाकल" },
    priceRate: { en: "Sedan: Rs 12/km | SUV: Rs 16/km", te: "Sedan: రూ. 12/కి.మీ | SUV: రూ. 16/కి.మీ", hi: "सेडान: रु 12/किमी | एसयूवी: रु 16/किमी" }
  },

  // 13. Driving school (Retained mock data)
  {
    id: "shp-drv-1",
    category: "driving-school",
    name: { en: "Maruthi Motor Driving School", te: "మారుతి మోటార్ డ్రైవింగ్ స్కూల్", hi: "मारुति मोटर ड्राइविंग स्कूल" },
    owner: { en: "K. Chenna Kesavulu", te: "కె. చేన్నకేశవులు", hi: "के. चेन्ना केशवुलु" },
    phone: "+91 9701234567",
    timing: { en: "6:00 AM - 10:00 AM, 4:00 PM - 7:00 PM", te: "ఉదయం 6-10, సాయంత్రం 4-7 వరకు", hi: "सुबह 6-10, शाम 4-7 बजे तक" },
    location: { en: "Bypass Ring Road, Orvakal", te: "బైపాస్ రింగ్ రోడ్, ఓర్వకల్లు", hi: "बाईपास रिंग रोड, ओरवाकल" }
  },

  // 14. Medical stores
  {
    id: "shp-med-1",
    category: "medical",
    name: { en: "Sri Sri Medicals & General Stores", te: "శ్రీ శ్రీ మెడికల్స్ & జనరల్ స్టోర్స్", hi: "श्री श्री मेडिकल्स एंड जनरल स्टोर्स" },
    owner: { en: "S. Chinnaiah", te: "ఎస్. చిన్నయ్య", hi: "एस. चिन्नाैया" },
    phone: "",
    timing: { en: "07:00 AM - 09:00 PM", te: "ఉదయం 07:00 - రాత్రి 09:00", hi: "सुबह 07:00 - रात 09:00" },
    location: { en: "Near Bus Stand, beside MR Mechanic, Orvakal, Kurnool, Andhra Pradesh 518010", te: "బస్టాండ్ సమీపంలో, ఎంఆర్ మెకానిక్ పక్కన, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "बस स्टैंड के पास, एमआर मैकेनिक के पास, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-med-2",
    category: "medical",
    name: { en: "Mohan Medical & General Stores", te: "మోహన్ మెడికల్ & జనరల్ స్టోర్స్", hi: "मोहन मेडिकल एंड जनरल स्टोर्स" },
    owner: { en: "T. Mohan Rao", te: "టి. మోహన్ రావు", hi: "टी. मोहन राव" },
    phone: "",
    timing: { en: "07:00 AM - 09:00 PM", te: "ఉదయం 07:00 - రాత్రి 09:00", hi: "सुबह 07:00 - रात 09:00" },
    location: { en: "Main Bazar, Main route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, మెయిన్ రూట్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, मुख्य मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-med-3",
    category: "medical",
    name: { en: "Chennakesava Medical Stores", te: "చెన్నకేశవ మెడికల్ స్టోర్స్", hi: "चेन्नाकेशव मेडिकल स्टोर्स" },
    owner: { en: "K. Chennakesavulu", te: "కె. చెన్నకేశవులు", hi: "के. चेन्नाकेशवुलु" },
    phone: "",
    timing: { en: "07:00 AM - 09:00 PM", te: "ఉదయం 07:00 - రాత్రి 09:00", hi: "सुबह 07:00 - रात 09:00" },
    location: { en: "Main Bazar, Main route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, మెయిన్ రూట్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, मुख्य मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-med-4",
    category: "medical",
    name: { en: "Karthik Medical & General Stores", te: "కార్తీక్ మెడికల్ & జనరల్ స్టోర్స్", hi: "कार्तिक मेडिकल एंड जनरल स्टोर्स" },
    owner: { en: "P. Karthik", te: "పి. కార్తీక్", hi: "पी. कार्तिक" },
    phone: "",
    timing: { en: "Open daily", te: "ప్రతిరోజు తెరవబడును", hi: "प्रतिदिन खुला है" },
    location: { en: "MSPO+553, Main Bazar Road, Orvakal, Kurnool, Andhra Pradesh 518010", te: "MSPO+553, మెయిన్ బజార్ రోడ్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "MSPO+553, मुख्य बाजार रोड, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },

  // 15. Milk Dairies
  {
    id: "shp-dry-1",
    category: "dairy",
    name: { en: "Basha Milk Parlour", te: "బాషా మిల్క్ పార్లర్", hi: "बाशा मिल्क पार्लर" },
    owner: { en: "S. Basha", te: "ఎస్. బాషా", hi: "एस. बाशा" },
    phone: "",
    timing: { en: "06:00 AM - 07:00 PM", te: "ఉదయం 06:00 - సాయంత్రం 07:00", hi: "सुबह 06:00 - शाम 07:00" },
    location: { en: "Main Bazar, Main route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, మెయిన్ రూట్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, मुख्य मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-dry-2",
    category: "dairy",
    name: { en: "Vasavi Milk Parlour", te: "వాసవి మిల్క్ పార్లర్", hi: "वासवी मिल्क पार्लर" },
    owner: { en: "G. Vasavi", te: "జి. వాసవి", hi: "जी. वासवी" },
    phone: "",
    timing: { en: "06:00 AM - 07:00 PM", te: "ఉదయం 06:00 - సాయంత్రం 07:00", hi: "सुबह 06:00 - शाम 07:00" },
    location: { en: "Main Bazar, Main route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, మెయిన్ రూట్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, मुख्य मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-dry-3",
    category: "dairy",
    name: { en: "Vasavi Milk Parlour (Branch)", te: "వాసవి మిల్క్ పార్లర్ (బ్రాంచ్)", hi: "वासवी मिल्क पार्लर (शाखा)" },
    owner: { en: "G. Vasavi", te: "జి. వాసవి", hi: "जी. वासवी" },
    phone: "",
    timing: { en: "06:00 AM - 07:00 PM", te: "ఉదయం 06:00 - సాయంత్రం 07:00", hi: "सुबह 06:00 - शाम 07:00" },
    location: { en: "Main Bazar, Main route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, మెయిన్ రూట్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, मुख्य मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },

  // 16. Water Supplier
  {
    id: "shp-wtr-1",
    category: "water-supplier",
    name: { en: "SLV Mineral Water", te: "ఎస్ఎల్వి మినరల్ వాటర్", hi: "एसएलवी मिनरल वाटर" },
    owner: { en: "S. L. Venkatesh", te: "ఎస్. ఎల్. వెంకటేష్", hi: "एस. एल. वेंकटेश" },
    phone: "",
    timing: { en: "06:00 AM - 12:30 PM & 04:30 PM - 08:00 PM", te: "ఉదయం 06:00 - మధ్యాహ్నం 12:30 & సాయంత్రం 04:30 - రాత్రి 08:00", hi: "सुबह 06:00 - दोपहर 12:30 और शाम 04:30 - रात 08:00" },
    location: { en: "Opp to Canara Bank, Main Bazar Route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "కెనరా బ్యాంక్ ఎదురుగా, మెయిన్ బజార్ రోడ్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "केनरा बैंक के सामने, मुख्य बाजार मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-wtr-2",
    category: "water-supplier",
    name: { en: "Nagesh Mineral Water", te: "నాగేష్ మినరల్ వాటర్", hi: "नागेश मिनरल वाटर" },
    owner: { en: "K. Nagesh", te: "కె. నాగేష్", hi: "के. नागेश" },
    phone: "",
    timing: { en: "06:00 AM - 08:00 PM", te: "ఉదయం 06:00 - రాత్రి 08:00", hi: "सुबह 06:00 - रात 08:00" },
    location: { en: "Main Bazar Route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్ రోడ్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-wtr-3",
    category: "water-supplier",
    name: { en: "Gnana Mineral Water", te: "జ్ఞాన మినరల్ వాటర్", hi: "ज्ञान मिनरल वाटर" },
    owner: { en: "K. Gnaneshwar", te: "కె. జ్ఞానేశ్వర్", hi: "के. ज्ञानेश्वर" },
    phone: "",
    timing: { en: "06:00 AM - 08:00 PM", te: "ఉదయం 06:00 - రాత్రి 08:00", hi: "सुबह 06:00 - रात 08:00" },
    location: { en: "Main Bazar Route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్ రోడ్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },

  // 17. Laundry (Retained mock data)
  {
    id: "shp-lau-1",
    category: "laundry",
    name: { en: "Sri Rama Laundry & Dry Cleaning", te: "శ్రీ రామ లాండ్రీ & డ్రై క్లీనింగ్", hi: "श्री राम कपड़े धोने और ड्राई क्लीनिंग" },
    owner: { en: "M. Ramanjaneyulu", te: "ఎం. రామాంజనేయులు", hi: "एम. रामान्जनेयुलु" },
    phone: "+91 9059123456",
    timing: { en: "7:00 AM - 8:30 PM", te: "ఉదయం 7:00 - రాత్రి 8:30", hi: "सुबह 7:00 - रात 8:30" },
    location: { en: "Indira Nagar crossroads, Orvakal", te: "ఇందిరా నగర్ క్రాస్‌రోడ్స్, ఓర్వకల్లు", hi: "इंदिरा नगर चौराहा, ओरवाकल" }
  },

  // 18. Pesticide & Seeds
  {
    id: "shp-pest-1",
    category: "pesticide",
    name: { en: "Gromor Agro", te: "గ్రోమోర్ ఆగ్రో", hi: "ग्रोमोर एग्रो" },
    owner: { en: "Gromor Fertilizer Group", te: "గ్రోమోర్ సంఘం", hi: "ग्रोमोर फर्टिलाइजर ग्रुप" },
    phone: "",
    timing: { en: "09:00 AM - 09:00 PM", te: "ఉదయం 09:00 - రాత్రి 09:00", hi: "सुबह 09:00 - रात 09:00" },
    location: { en: "Main route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ రూట్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-pest-2",
    category: "pesticide",
    name: { en: "Kissan Agrimart", te: "కిసాన్ అగ్రిమార్ట్", hi: "किसान एग्रीमार्ट" },
    owner: { en: "K. R. Rao", te: "కె. ఆర్. రావు", hi: "के. आर. राव" },
    phone: "",
    timing: { en: "09:00 AM - 09:00 PM", te: "ఉదయం 09:00 - రాత్రి 09:00", hi: "सुबह 09:00 - रात 09:00" },
    location: { en: "Main route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ రూట్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-pest-3",
    category: "pesticide",
    name: { en: "Kranthi Grama Abhivridhi - Rythu Pathekam", te: "క్రాంతి గ్రామ అభివృద్ధి - రైతు పథకం", hi: "क्रांति ग्राम अभिवृद्धि - रायथू पथेकम" },
    owner: { en: "Rythu Society Coordinator", te: "రైతు సంఘ నిర్వాహకులు", hi: "रायथू सोसायटी समन्वयक" },
    phone: "",
    timing: { en: "09:00 AM - 09:00 PM", te: "ఉదయం 09:00 - రాత్రి 09:00", hi: "सुबह 09:00 - रात 09:00" },
    location: { en: "Main route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ రూట్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-pest-4",
    category: "pesticide",
    name: { en: "Srivari Traders", te: "శ్రీవారి ట్రేడర్స్", hi: "श्रीवारी ट्रेडर्स" },
    owner: { en: "T. Srinivasa Rao", te: "టి. శ్రీనివాసరావు", hi: "टी. श्रीनिवास राव" },
    phone: "",
    timing: { en: "09:00 AM - 09:00 PM", te: "ఉదయం 09:00 - రాత్రి 09:00", hi: "सुबह 09:00 - रात 09:00" },
    location: { en: "Main route, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ రూట్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य मार्ग, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },

  // 19. Courier & Cargo
  {
    id: "shp-cour-1",
    category: "courier",
    name: { en: "DTDC COURIER EXPRESS LIMITED", te: "డీటీడీసీ కొరియర్ ఎక్స్‌ప్రెస్ లిమిటెడ్", hi: "डीटीडीसी कूरियर एक्सप्रेस लिमिटेड" },
    owner: { en: "DTDC Franchise Manager", te: "డీటీడీసీ ఫ్రాంచైజ్ మేనేజర్", hi: "डीटीडीसी फ्रैंचाइज़ी प्रबंधक" },
    phone: "",
    timing: { en: "09:00 AM - 08:00 PM", te: "ఉదయం 09:00 - రాత్రి 08:00", hi: "सुबह 09:00 - रात 08:00" },
    location: { en: "SHOP NO 1, BYREDDYNAGAR, Orvakal, Andhra Pradesh 518010", te: "షాప్ నెం 1, బైరెడ్డినగర్, ఓర్వకల్లు, ఆంధ్రప్రదేశ్ 518010", hi: "दुकान संख्या 1, बायरेड्डीनगर, ओरवाकल, आंध्र प्रदेश 518010" }
  },

  // 20. Auto Stand & Transport (Retained mock data)
  {
    id: "shp-auto-1",
    category: "auto",
    name: { en: "Orvakal Junction Bypass Auto Stand", te: "ఓర్వకల్లు జంక్షన్ బైపాస్ ఆటో స్టాండ్", hi: "ओरवाकल जंक्शन बाईपास ऑटो स्टैंड" },
    owner: { en: "Local Auto Association Coordinator", te: "స్థానిక ఆటో సంఘం నిర్వాహకులు", hi: "स्थानीय ऑटो संघ समन्वयक" },
    phone: "+91 9652554433",
    timing: { en: "24 Hours Services", te: "24 గంటల సేవలు", hi: "24 घंटे उपलब्ध" },
    location: { en: "NH-40 Bypass Crossing, Orvakal Junction", te: "NH-40 బైపాస్ క్రాసింగ్, ఓర్వకల్లు జంక్షన్", hi: "एनएच-40 बाईपास क्रॉसिंग, ओरवाकल जंक्शन" }
  },

  // 21. Drivers (Retained mock data)
  {
    id: "shp-driv-1",
    category: "drivers",
    name: { en: "Sri Sai Local Drivers & Tractor Chauffeurs Group", te: "శ్రీ సాయి లోకల్ డ్రైవర్లు & ట్రాక్టర్ డ్రైవర్స్ గ్రూప్", hi: "श्री साई लोकल ड्राइवर्स और ट्रैक्टर ड्राइवर्स समूह" },
    owner: { en: "K. Ramu", te: "కె. రాము", hi: "के. रामू" },
    phone: "+91 9059332211",
    timing: { en: "6:00 AM - 11:00 PM (Hourly booking)", te: "ఉదయం 6:00 - రాత్రి 11:00", hi: "सुबह 6:00 - रात 11:00" },
    location: { en: "Bypass Colony, Orvakal", te: "బైపాస్ కాలనీ, ఓర్వకల్లు", hi: "बाईपास कॉलोनी, ओरवाकल" }
  },

  // 22. Veterinary (New Category)
  {
    id: "shp-vet-1",
    category: "veterinary",
    name: { en: "Veterinary Dispensary", te: "పశువైద్య శాల (డిస్పెన్సరీ)", hi: "पशु चिकित्सालय (औषधालय)" },
    owner: { en: "Government Veterinary Doctor", te: "ప్రభుత్వ పశువైద్యులు", hi: "सरकारी पशु चिकित्सक" },
    phone: "",
    timing: { en: "09:00 AM - 02:00 PM", te: "ఉదయం 09:00 - మధ్యాహ్నం 02:00", hi: "सुबह 09:00 - दोपहर 02:00" },
    location: { en: "Near Busstop, Orvakal, Kurnool, Andhra Pradesh 518010", te: "బస్టాండ్ సమీపంలో, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "बस स्टॉप के पास, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },

  // 23. Markets (New Category)
  {
    id: "shp-mkt-1",
    category: "market",
    name: { en: "Rythu Market", te: "రైతు బజార్", hi: "रायथू बाजार" },
    owner: { en: "Panchayat Market Board", te: "పంచాయతీ మార్కెట్ బోర్డు", hi: "पंचायत विपणन बोर्ड" },
    phone: "",
    timing: { en: "Saturday 04:00 PM - 08:00 PM", te: "ప్రతి శనివారం సాయంత్రం 04:00 - రాత్రి 08:00", hi: "शनिवार शाम 04:00 - रात 08:00" },
    location: { en: "Main Bazar, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మెయిన్ బజార్, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-mkt-2",
    category: "market",
    name: { en: "Tobacco Market (ITC)", te: "పొగాకు మార్కెట్ (ITC)", hi: "तंबाकू बाजार (आईटीसी)" },
    owner: { en: "ITC Limited Coordinator", te: "ఐటీసీ లిమిటెడ్ కోఆర్డినేటర్", hi: "आईटीसी लिमिटेड समन्वयक" },
    phone: "",
    timing: { en: "Seasonal Operation", te: "సీజనల్ వ్యాపారం", hi: "मौसमी परिचालन" },
    location: { en: "Near Busstop, Orvakal, Kurnool, Andhra Pradesh 518010", te: "బస్టాండ్ సమీపంలో, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "बस स्टॉप के पास, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-mkt-3",
    category: "market",
    name: { en: "Tobacco Market", te: "పొగాకు మార్కెట్", hi: "तंबाकू बाजार" },
    owner: { en: "Local Tobacco Association", te: "స్థానిక పొగాకు వర్తక సంఘం", hi: "स्थानीय तंबाकू संघ" },
    phone: "",
    timing: { en: "Seasonal Operation", te: "సీజనల్ వ్యాపారం", hi: "मौसमी परिचालन" },
    location: { en: "Near Busstop, Orvakal, Kurnool, Andhra Pradesh 518010", te: "బస్టాండ్ సమీపంలో, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "बस स्टॉप के पास, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-mkt-4",
    category: "market",
    name: { en: "ITC Tobacco Warehouse Masapeta", te: "ఐటీసీ పొగాకు గిడ్డంగి మసపేట", hi: "आईटीसी तंबाकू गोदाम मसापेटा" },
    owner: { en: "ITC Warehouse Manager", te: "ఐటీసీ గిడ్డంగి మేనేజర్", hi: "आईटीसी गोदाम प्रबंधक" },
    phone: "",
    timing: { en: "09:00 AM - 05:00 PM", te: "ఉదయం 09:00 - సాయంత్రం 05:00", hi: "सुबह 09:00 - शाम 05:00" },
    location: { en: "Masapeta, Orvakal, Kurnool, Andhra Pradesh 518010", te: "మసపేట, ఓర్వకల్లు, కర్నూలు, ఆంధ్రప్రదేశ్ 518010", hi: "मसापेटा, ओरवाकल, कर्नूल, आंध्र प्रदेश 518010" }
  },

  // 24. Internet & Cable (New Category)
  {
    id: "shp-net-1",
    category: "internet-tv",
    name: { en: "SRI VENKATESWARA CABLE NETWORK", te: "శ్రీ వెంకటేశ్వర కేబుల్ నెట్‌వర్క్", hi: "श्री वेंकटेश्वर केबल नेटवर्क" },
    owner: { en: "T. Venkateswarlu", te: "టి. వెంకటేశ్వర్లు", hi: "टी. वेंकटेश्वरलू" },
    phone: "",
    timing: { en: "08:00 AM - 09:00 PM", te: "ఉదయం 08:00 - రాత్రి 09:00", hi: "सुबह 08:00 - रात 09:00" },
    location: { en: "Main bazar, Orvakal, Andhra Pradesh 518010", te: "మెయిన్ బజార్, ఓర్వకల్లు, ఆంధ్రప్రదేశ్ 518010", hi: "मुख्य बाजार, ओरवाकल, आंध्र प्रदेश 518010" }
  },

  // 25. Decors (New Category)
  {
    id: "shp-dec-1",
    category: "decors",
    name: { en: "DVR Decorations", te: "డీవీఆర్ డెకరేషన్స్", hi: "डीवीआर डेकोरेशन" },
    owner: { en: "D. V. Ramana", te: "డి. వి. రమణ", hi: "डी. वी. रमना" },
    phone: "",
    timing: { en: "Open for bookings", te: "బుకింగ్స్ అందుబాటులో ఉన్నాయి", hi: "बुकिंग के लिए उपलब्ध" },
    location: { en: "Guttapadu main road, Ongole - Kurnool Main Rd, Orvakal, Andhra Pradesh 518010", te: "గుట్టపాడు మెయిన్ రోడ్, ఒంగోలు - కర్నూలు మెయిన్ రోడ్, ఓర్వకల్లు, ఆంధ్రప్రదేశ్ 518010", hi: "गुट्टापाडु मुख्य मार्ग, ओंगोल - कर्नूल मुख्य मार्ग, ओरवाकल, आंध्र प्रदेश 518010" }
  },
  {
    id: "shp-dec-2",
    category: "decors",
    name: { en: "R S DECORATION", te: "ఆర్ ఎస్ డెకరేషన్", hi: "आर एस डेकोरेशन" },
    owner: { en: "R. Srinivas", te: "ఆర్. శ్రీనివాస్", hi: "आर. श्रीनिवास" },
    phone: "",
    timing: { en: "Open for bookings", te: "బుకింగ్స్ అందుబాటులో ఉన్నాయి", hi: "बुकिंग के लिए उपलब्ध" },
    location: { en: "Near Busstop, Orvakal, Andhra Pradesh 518010", te: "బస్టాండ్ సమీపంలో, ఓర్వకల్లు, ఆంధ్రప్రదేశ్ 518010", hi: "बस स्टॉप के पास, ओरवाकल, आंध्र प्रदेश 518010" }
  }
];
