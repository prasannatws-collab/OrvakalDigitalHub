import type { FlightInfo, BusInfo, TrainInfo } from '../../../types';

export const flights: FlightInfo[] = [
  {
    id: "flg-1",
    flightNo: "6E-7281",
    airline: { en: "IndiGo", te: "ఇండిగో", hi: "इंडिगो" },
    from: { en: "Kurnool (KJB)", te: "కర్నూలు (KJB)", hi: "कर्नूल (KJB)" },
    to: { en: "Bengaluru (BLR)", te: "బెంగళూరు (BLR)", hi: "बेंगलुरु (BLR)" },
    departure: "11:15 AM",
    arrival: "12:20 PM",
    days: { en: "Mon, Wed, Fri", te: "సోమ, బుధ, శుక్ర", hi: "सोम, बुध, शुक्र" },
    status: { en: "On Time", te: "సమయానికి", hi: "समय पर" }
  },
  {
    id: "flg-2",
    flightNo: "6E-7925",
    airline: { en: "IndiGo", te: "ఇండిగో", hi: "इंडिगो" },
    from: { en: "Kurnool (KJB)", te: "కర్నూలు (KJB)", hi: "कर्नूल (KJB)" },
    to: { en: "Visakhapatnam (VTZ)", te: "విశాఖపట్నం (VTZ)", hi: "विशाखापत्तनम (VTZ)" },
    departure: "02:30 PM",
    arrival: "03:50 PM",
    days: { en: "Tue, Thu, Sat", te: "మంగళ, గురు, శని", hi: "मंगल, गुरु, शनि" },
    status: { en: "Delayed (30m)", te: "ఆలస్యం (30 ని.)", hi: "विलंबित (30 मिनट)" }
  }
];


export const buses: BusInfo[] = [
  {
    id: "bus-1",
    busNo: "APSRTC Palle Velugu",
    route: {
      en: "Kurnool Depot <-> Orvakal <-> Nandyal",
      te: "కర్నూలు డిపో <-> ఓర్వకల్లు <-> నంద్యాల",
      hi: "कर्नूल डिपो <-> ओरवाकल <-> नंदयाल"
    },
    timing: {
      en: "Every 15 minutes (5:00 AM - 10:30 PM)",
      te: "ప్రతి 15 నిమిషాలకు (ఉదయం 5:00 - రాత్రి 10:30)",
      hi: "हर 15 मिनट में (सुबह 5:00 - रात 10:30)"
    },
    type: { en: "Ordinary Rural Bus", te: "పల్లె వెలుగు బస్సు", hi: "साधारण ग्रामीण बस" }
  },
  {
    id: "bus-2",
    busNo: "APSRTC Express",
    route: {
      en: "Kurnool Depot <-> Orvakal <-> Betamcherla",
      te: "కర్నూలు డిపో <-> ఓర్వకల్లు <-> బేతంచెర్ల",
      hi: "कर्नूल डिपो <-> ओरवाकल <-> बेतमचेर्ला"
    },
    timing: {
      en: "Every 45 minutes (6:00 AM - 09:30 PM)",
      te: "ప్రతి 45 నిమిషాలకు (ఉదయం 6:00 - రాత్రి 09:30)",
      hi: "हर 45 मिनट में (सुबह 6:00 - रात 09:30)"
    },
    type: { en: "Express Service", te: "ఎక్స్‌ప్రెస్ సర్వీస్", hi: "एक्सप्रेस सेवा" }
  },
  {
    id: "bus-3",
    busNo: "APSRTC Palle Velugu",
    route: {
      en: "Kurnool Depot <-> Orvakal <-> Banaganapalli",
      te: "కర్నూలు డిపో <-> ఓర్వకల్లు <-> బనగానపల్లి",
      hi: "कर्नूल डिपो <-> ओरवाकल <-> बनगानपल्ली"
    },
    timing: {
      en: "Hourly Service (6:15 AM - 08:30 PM)",
      te: "ప్రతి గంటకు ఒక బస్సు (ఉదయం 6:15 - రాత్రి 08:30)",
      hi: "हर घंटे सेवा (सुबह 6:15 - रात 08:30)"
    },
    type: { en: "Ordinary Rural Bus", te: "పల్లె వెలుగు బస్సు", hi: "साधारण ग्रामीण बस" }
  }
];


export const trains: TrainInfo[] = [
  {
    id: "trn-1",
    trainNo: "12797",
    name: { en: "Venkatadri Express", te: "వెంకటాద్రి ఎక్స్‌ప్రెస్", hi: "वेंकट Adri एक्सप्रेस" },
    route: { en: "Kacheguda (HYD) <-> Kurnool City <-> Chittoor", te: "కాచిగూడ (HYD) <-> కర్నూలు సిటీ <-> చిత్తూరు", hi: "काचेगुडा (HYD) <-> कर्नूल सिटी <-> चित्तूर" },
    timing: { en: "Arrival: 00:58 AM / Departure: 01:00 AM", te: "రాక: 00:58 AM / పోక: 01:00 AM", hi: "आगमन: 00:58 AM / प्रस्थान: 01:00 AM" },
    days: { en: "Daily", te: "ప్రతిరోజూ", hi: "प्रतिदिन" }
  },
  {
    id: "trn-2",
    trainNo: "17693",
    name: { en: "Kacheguda - Guntakal Passenger", te: "కాచిగూడ - గుంతకల్ ప్యాసింజర్", hi: "काचेगुडा - गुंतकल पैसेंजर" },
    route: { en: "Kacheguda <-> Kurnool City <-> Guntakal", te: "కాచిగూడ <-> కర్నూలు సిటీ <-> గుంతకల్", hi: "काचेगुडा <-> कर्नूल सिटी <-> गुंतकल" },
    timing: { en: "Arrival: 09:38 AM / Departure: 09:40 AM", te: "రాక: 09:38 AM / పోక: 09:40 AM", hi: "आगमन: 09:38 AM / प्रस्थान: 09:40 AM" },
    days: { en: "Daily", te: "ప్రతిరోజూ", hi: "प्रतिदिन" }
  },
  {
    id: "trn-3",
    trainNo: "12786",
    name: { en: "Kacheguda - KSR Bengaluru Express", te: "కాచిగూడ - బెంగుళూరు ఎక్స్‌ప్రెస్", hi: "काचेगुडा - बेंगलुरु एक्सप्रेस" },
    route: { en: "Kacheguda <-> Kurnool City <-> Bengaluru (SBC)", te: "కాచిగూడ <-> కర్నూలు సిటీ <-> బెంగళూరు", hi: "काचेगुडा <-> कर्नूल सिटी <-> बेंगलुरु" },
    timing: { en: "Arrival: 11:28 PM / Departure: 11:30 PM", te: "రాక: 11:28 PM / పోక: 11:30 PM", hi: "आगमन: 11:28 PM / प्रस्थान: 11:30 PM" },
    days: { en: "Daily", te: "ప్రతిరోజూ", hi: "प्रतिदिन" }
  }
];

