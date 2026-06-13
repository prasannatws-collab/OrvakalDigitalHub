import type { LocalizedText } from '../types';

export interface RegisteredCompany {
  id: string;
  name: LocalizedText;
  sector: LocalizedText;
  location: LocalizedText;
  description: LocalizedText;
}

export const registeredCompanies: RegisteredCompany[] = [
  {
    id: "reg-1",
    name: {
      en: "Jai Raj Ispat",
      te: "జై రాజ్ ఇస్పాత్",
      hi: "जय राज इस्पात"
    },
    sector: {
      en: "Steel & Metallurgy",
      te: "ఉక్కు & లోహశాస్త్రం",
      hi: "इस्पात और धातुकर्म"
    },
    location: {
      en: "Orvakal Mega Industrial Hub",
      te: "ఓర్వకల్లు మెగా పారిశ్రామిక హబ్",
      hi: "ओरवाकल मेगा औद्योगिक हब"
    },
    description: {
      en: "The company operates a major TMT steel bar manufacturing plant in the Orvakal Mega Industrial Hub. It is a flagship facility that has already been established and is active in the region.",
      te: "ఈ సంస్థ ఓర్వకల్లు మెగా ఇండస్ట్రియల్ హబ్‌లో ఒక ప్రధాన TMT స్టీల్ బార్ తయారీ ప్లాంట్‌ను నిర్వహిస్తోంది. ఇది ఇప్పటికే స్థాపించబడి, ఈ ప్రాంతంలో క్రియాశీలకంగా ఉన్న ఒక ఫ్లాగ్‌షిప్ సదుపాయం.",
      hi: "यह कंपनी ओरवाकल मेगा इंडस्ट्रियल हब में एक प्रमुख टीएमटी स्टील बार विनिर्माण संयंत्र संचालित करती है। यह एक प्रमुख सुविधा है जो पहले से ही स्थापित है और क्षेत्र में सक्रिय है।"
    }
  },
  {
    id: "reg-2",
    name: {
      en: "Virupaksha Organics Limited",
      te: "విరూపాక్ష ఆర్గానిక్స్ లిమిటెడ్",
      hi: "विरूपाक्ष ऑर्गेनिक्स लिमिटेड"
    },
    sector: {
      en: "Pharmaceuticals (APIs)",
      te: "ఫార్మాస్యూటికల్స్ (APIs)",
      hi: "फार्मास्युटिकल्स (एपीआई)"
    },
    location: {
      en: "IP Guttapadu Cluster, Orvakal Node",
      te: "IP గుట్టపాడు క్లస్టర్, ఓర్వకల్లు నోడ్",
      hi: "आईपी गुट्टापाडु क्लस्टर, ओरवाकल नोड"
    },
    description: {
      en: "This Hyderabad-based pharmaceutical company has been allotted over 100 acres in the IP Guttapadu cluster at the Orvakal Node. The facility is intended for the manufacturing of Active Pharmaceutical Ingredients (APIs) and organic chemicals.",
      te: "హైదరాబాద్‌కు చెందిన ఈ ఫార్మాస్యూటికల్ కంపెనీకి ఓర్వకల్లు నోడ్‌లోని IP గుట్టపాడు క్లస్టర్‌లో 100 ఎకరాలకు పైగా కేటాయించారు. ఈ సదుపాయం యాక్టివ్ ఫార్మాస్యూటికల్ ఇంగ్రిడియంట్స్ (APIs) మరియు సేంద్రీయ రసాయనాల తయారీకి ఉద్దేశించబడింది.",
      hi: "हैदराबाद स्थित इस दवा कंपनी को ओरवाकल नोड में आईपी गुट्टापाडु क्लस्टर में 100 एकड़ से अधिक आवंटित किया गया है। यह सुविधा सक्रिय दवा सामग्री (एपीआई) और कार्बनिक रसायनों के निर्माण के लिए है।"
    }
  },
  {
    id: "reg-3",
    name: {
      en: "Sigachi Industries Limited",
      te: "సిగాచి ఇండస్ట్రీస్ లిమిటెడ్",
      hi: "सिगाची इंडस्ट्रीज लिमिटेड"
    },
    sector: {
      en: "Pharmaceutical Excipients & Chemicals",
      te: "ఫార్మాస్యూటికల్ ఎక్సిపియంట్స్ & రసాయనాలు",
      hi: "फार्मास्युटिकल एक्सीसिएंट्स और रसायन"
    },
    location: {
      en: "Orvakal Node",
      te: "ఓర్వకల్లు నోడ్",
      hi: "ओरवाकल नोड"
    },
    description: {
      en: "A leading manufacturer of pharmaceutical excipients (such as microcrystalline cellulose), this company has formalized expansion plans into the Orvakal hub.",
      te: "ఫార్మాస్యూటికల్ ఎక్సిపియంట్స్ (ఉదాహరణకు మైక్రోక్రిస్టలైన్ సెల్యులోజ్) తయారీలో అగ్రగామిగా ఉన్న ఈ సంస్థ, ఓర్వకల్లు హబ్‌లోకి విస్తరణ ప్రణాళికలను అధికారికంగా ఖరారు చేసింది.",
      hi: "फार्मास्युटिकल एक्सीसिएंट्स (जैसे माइक्रोक्रिस्टलाइन सेलुलोज) की एक अग्रणी निर्माता, इस कंपनी ने ओरवाकल हब में विस्तार योजनाओं को अंतिम रूप दिया है।"
    }
  }
];
