import type { LocalizedText } from '../types';

export interface HubNewsItem {
  id: string;
  title: LocalizedText;
  source: LocalizedText;
  date: string;
  summary: LocalizedText;
}

export interface HubCompany {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
}

export interface HubBulletPoint {
  boldText: LocalizedText;
  normalText: LocalizedText;
}

export interface HubSection {
  id: string;
  title: LocalizedText;
  content?: LocalizedText;
  bullets?: HubBulletPoint[];
}

export interface HubResource {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const industrialPresenceContext: HubSection = {
  id: "presence-context",
  title: {
    en: "Context on Industrial Presence",
    te: "పారిశ్రామిక ఉనికి గురించిన సమాచారం",
    hi: "औद्योगिक उपस्थिति पर संदर्भ"
  },
  content: {
    en: "It is important to distinguish between large-scale anchor industries and the numerous smaller engineering and manufacturing units already operating in the Kurnool district, many of which serve the regional industrial ecosystem.",
    te: "కర్నూలు జిల్లాలో ఇప్పటికే నడుస్తున్న అనేక చిన్న ఇంజనీరింగ్ మరియు తయారీ విభాగాలకు మరియు భారీ పరిశ్రమలకు మధ్య తేడాను గుర్తించడం చాలా ముఖ్యం, వీటిలో చాలా యూనిట్లు ప్రాంతీయ పారిశ్రామిక వ్యవస్థకు సేవలు అందిస్తున్నాయి.",
    hi: "कर्नूल जिले में पहले से काम कर रही कई छोटी इंजीनियरिंग और विनिर्माण इकाइयों और बड़े पैमाने के उद्योगों के बीच अंतर करना महत्वपूर्ण है, जिनमें से कई क्षेत्रीय औद्योगिक पारिस्थितिकी तंत्र की सेवा करती हैं।"
  },
  bullets: [
    {
      boldText: { en: "Diverse Sectoral Base: ", te: "విభిన్న రంగాలు: ", hi: "विविध क्षेत्रीय आधार: " },
      normalText: {
        en: "Historically, the area has hosted various small to medium-scale machinery manufacturers, foundries, and fabrication units. You may find local listings for entities involved in engineering, packaging, and industrial equipment supplying to the region.",
        te: "చారిత్రకంగా, ఈ ప్రాంతం వివిధ చిన్న తరహా మరియు మధ్య తరహా యంత్రాల తయారీదారులు, ఫౌండరీలు మరియు ఫ్యాబ్రికేషన్ యూనిట్లను కలిగి ఉంది. ఇంజనీరింగ్, ప్యాకేజింగ్ మరియు పారిశ్రామిక పరికరాల సరఫరాలో నిమగ్నమైన సంస్థల స్థానిక జాబితాలను మీరు ఇక్కడ కనుగొనవచ్చు.",
        hi: "ऐतिहासिक रूप से, इस क्षेत्र ने विभिन्न लघु से मध्यम श्रेणी के मशीनरी निर्माताओं, फाउंड्री और फैब्रिकेशन इकाइयों की मेजबानी की है। आप इस क्षेत्र में इंजीनियरिंग, पैकेजिंग और औद्योगिक उपकरण आपूर्ति में शामिल संस्थाओं के स्थानीय विवरण पा सकते हैं।"
      }
    },
    {
      boldText: { en: "Upcoming Growth: ", te: "రాబోయే వృద్ధి: ", hi: "आगामी विकास: " },
      normalText: {
        en: "The state government is actively marketing the hub to reach a massive investment target of ₹50,000 crore. Consequently, many more \"registrations\" and land allotments are expected as the infrastructure (power, water, and logistics) is finalized.",
        te: "ఈ హబ్‌ను మరింత అభివృద్ధి చేయడానికి మరియు ₹50,000 కోట్ల పెట్టుబడి లక్ష్యాన్ని చేరుకోవడానికి రాష్ట్ర ప్రభుత్వం చురుకుగా మార్కెటింగ్ చేస్తోంది. దీనివల్ల, అవసరమైన మౌలిక సదుపాయాలు (కరెంట్, నీరు, మరియు రవాణా) పూర్తవుతుండటంతో మరిన్ని కంపెనీల నమోదులు మరియు భూమి కేటాయింపులు ఆశించవచ్చు.",
        hi: "राज्य सरकार ₹50,000 करोड़ के बड़े निवेश लक्ष्य तक पहुँचने के लिए सक्रिय रूप से हब का प्रचार कर रही है। परिणामस्वरूप, बुनियादी ढांचे (बिजली, पानी और रसद) के अंतिम रूप लेते ही कई और पंजीकरण और भूमि आवंटन होने की उम्मीद है।"
      }
    }
  ]
};

export const keyCompanies: HubCompany[] = [
  {
    id: "comp-virupaksha",
    name: {
      en: "Virupaksha Organics Ltd",
      te: "విరూపాక్ష ఆర్గానిక్స్ లిమిటెడ్",
      hi: "विरुपाक्ष ऑर्गेनिक्स लिमिटेड"
    },
    description: {
      en: "A Hyderabad-based company that has received approval for the allotment of over 100 acres in the Guttapadu Industrial Cluster. They are establishing a major manufacturing facility for Active Pharmaceutical Ingredients (APIs) and organic chemicals, with a substantial investment commitment (approx. ₹1,225 crore) creating 1,500+ jobs.",
      te: "గుట్టపాడు ఇండస్ట్రియల్ క్లస్టర్‌లో 100 ఎకరాలకు పైగా స్థలాన్ని కేటాయించేందుకు అనుమతి పొందిన హైదరాబాద్‌కు చెందిన కంపెనీ. వీరు దాదాపు ₹1,225 కోట్ల పెట్టుబడితో 1,500 మందికి పైగా ఉద్యోగాలను సృష్టించేలా యాక్టివ్ ఫార్మాస్యూటికల్ ఇంగ్రీడియంట్స్ (APIs) మరియు సేంద్రీయ రసాయనాల తయారీ ప్లాంట్‌ను ఏర్పాటు చేస్తున్నారు.",
      hi: "हैदराबाद स्थित एक कंपनी जिसे गुट्टापाडू औद्योगिक क्लस्टर में 100 एकड़ से अधिक आवंटन की मंजूरी मिली है। वे लगभग ₹1,225 करोड़ के निवेश के साथ एक्टिव फार्मास्युटिकल सामग्री (APIs) और कार्बनिक रसायनों के लिए एक प्रमुख विनिर्माण सुविधा स्थापित कर रहे हैं जिससे 1,500+ नौकरियां पैदा होंगी।"
    }
  },
  {
    id: "comp-sigachi",
    name: {
      en: "Sigachi Industries Ltd",
      te: "సిగాచీ ఇండస్ట్రీస్ లిమిటెడ్",
      hi: "सिगाची इंडस्ट्रीज लिमिटेड"
    },
    description: {
      en: "Another Hyderabad-based firm specializing in pharmaceutical excipients, such as microcrystalline cellulose (MCC). They are expanding their operations to the Orvakal node to establish a facility for Bulk Drugs, Drug Intermediates, and Specialty Chemicals on approximately 25 acres (Plot A-10).",
      te: "ఫార్మాస్యూటికల్ ఎక్సిపియెంట్స్ (ఉదా. మైక్రోక్రిస్టలైన్ సెల్యులోజ్) తయారీలో నైపుణ్యం కలిగిన హైదరాబాద్‌కు చెందిన మరొక సంస్థ. వీరు బల్క్ డ్రగ్స్, డ్రగ్ ఇంటర్మీడియట్స్ మరియు స్పెషాలిటీ కెమికల్స్ తయారీ యూనిట్‌ను ఏర్పాటు చేయడానికి ఓర్వకల్లు నోడ్‌లో దాదాపు 25 ఎకరాలలో (ప్లాట్ A-10) కార్యకలాపాలను విస్తరిస్తున్నారు.",
      hi: "फर्मास्युटिकल एक्सीसिएंट्स (जैसे माइक्रोक्रिस्टलाइन सेलुलोज - MCC) में विशेषज्ञता रखने वाली हैदराबाद की एक अन्य फर्म। वे लगभग 25 एकड़ (प्लॉट ए-10) पर बल्क ड्रग्स, ड्रग इंटरमीडिएट्स और स्पेशलिटी केमिकल्स के लिए एक प्लांट स्थापित करने के लिए ओरवाकल नोड में अपने परिचालन का विस्तार कर रहे हैं।"
    }
  },
  {
    id: "comp-mandava",
    name: {
      en: "Sri Mandava Bio-Tech & Partners",
      te: "శ్రీ మాండవ బయో-టెక్ & పార్టనర్స్",
      hi: "श्री मांडवा बायो-टेक एंड पार्टनर्स"
    },
    description: {
      en: "Developing high-value agro-processing and biological packaging operations to leverage the local logistics networks and primary agricultural produce in the Kurnool district.",
      te: "కర్నూలు జిల్లాలోని రవాణా సదుపాయాలను మరియు ప్రాథమిక వ్యవసాయ ఉత్పత్తులను ఉపయోగించుకోవడానికి విలువైన ఆగ్రో-ప్రాసెసింగ్ మరియు బయోలాజికల్ ప్యాకేజింగ్ విభాగాలను అభివృద్ధి చేస్తున్నారు.",
      hi: "कर्नूल जिले में स्थानीय रसद नेटवर्क और प्राथमिक कृषि उत्पादों का लाभ उठाने के लिए उच्च मूल्य वाले कृषि-प्रसंस्करण और जैविक पैकेजिंग परिचालन का विकास कर रहे हैं।"
    }
  }
];

export const keyInfrastructure: HubSection = {
  id: "key-infrastructure",
  title: {
    en: "Key Infrastructure & Support Features",
    te: "కీలక మౌలిక సదుపాయాలు & సహాయక సేవలు",
    hi: "प्रमुख बुनियादी ढांचा और सहायता सुविधाएं"
  },
  content: {
    en: "To attract investment, the Andhra Pradesh government provides a business-friendly environment at the Orvakal Industrial Hub by focusing on \"plug-and-play\" infrastructure and strategic policy support.",
    te: "పెట్టుబడులను ఆకర్షించడానికి, ఆంధ్రప్రదేశ్ ప్రభుత్వం ఓర్వకల్లు పారిశ్రామిక హబ్‌లో 'ప్లగ్-అండ్-ప్లే' మౌలిక సదుపాయాలు మరియు వ్యూహాత్మక విధానాలపై దృష్టి పెట్టడం ద్వారా వ్యాపార అనుకూల వాతావరణాన్ని అందిస్తోంది.",
    hi: "निवेश को आकर्षित करने के लिए, आंध्र प्रदेश सरकार 'प्लग-एंड-प्ले' बुनियादी ढांचे और रणनीतिक नीति समर्थन पर ध्यान केंद्रित करके ओरवाकल औद्योगिक हब में व्यापार-अनुकूल वातावरण प्रदान करती है।"
  },
  bullets: [
    {
      boldText: { en: "Power & Water: ", te: "విద్యుత్ & నీరు: ", hi: "बिजली और पानी: " },
      normalText: {
        en: "Dedicated, reliable power supply and water allocation (sourced from the Srisailam foreshore/Muchumarri project) are key priorities for industrial utility.",
        te: "పరిశ్రమల అవసరాల కోసం అంకితమైన, నమ్మకమైన విద్యుత్ సరఫరా మరియు నీటి కేటాయింపు (శ్రీశైలం ఫోర్‌షోర్/ముచ్చుమర్రి ప్రాజెక్ట్ నుండి) ఇక్కడ ప్రధాన ప్రాధాన్యతలుగా ఉన్నాయి.",
        hi: "औद्योगिक उपयोगिता के लिए समर्पित, विश्वसनीय बिजली आपूर्ति और पानी का आवंटन (श्रीशैलम फोरशोर/मुचुमरी परियोजना से प्राप्त) प्रमुख प्राथमिकताएं हैं।"
      }
    },
    {
      boldText: { en: "Logistics: ", te: "రవాణా & లాజిస్టిక్స్: ", hi: "रसद (Logistics): " },
      normalText: {
        en: "The hub is designed with integrated logistics zones, internal road networks, and storm drainage systems to support heavy and light manufacturing.",
        te: "భారీ మరియు తేలికపాటి తయారీ రంగాలకు మద్దతుగా ఇంటిగ్రేటెడ్ లాజిస్టిక్స్ జోన్లు, అంతర్గత రోడ్ల నెట్‌వర్క్ మరియు డ్రైనేజీ వ్యవస్థలతో ఈ హబ్ రూపొందించబడింది.",
        hi: "भारी और हल्के विनिर्माण का समर्थन करने के लिए हब को एकीकृत रसद क्षेत्रों, आंतरिक सड़क नेटवर्क और जल निकासी प्रणालियों के साथ डिज़ाइन किया गया है।"
      }
    },
    {
      boldText: { en: "Waste Management: ", te: "వ్యర్థాల నిర్వహణ: ", hi: "अपशिष्ट प्रबंधन: " },
      normalText: {
        en: "Planned Common Effluent Treatment Plants (CETPs) and bio-waste disposal facilities are included in the master plan to meet environmental compliance standards.",
        te: "పర్యావరణ నిబంధనలను పాటించడానికి వీలుగా కామన్ ఎఫ్లుయెంట్ ట్రీట్‌మెంట్ ప్లాంట్లు (CETPs) మరియు బయో-వ్యర్థాల నిర్మూలన సౌకర్యాలు మాస్టర్ ప్లాన్‌లో చేర్చబడ్డాయి.",
        hi: "पर्यावरणीय अनुपालन मानकों को पूरा करने के लिए मास्टर प्लान में योजनाबद्ध कॉमन एफ्लुएंट ट्रीटमेंट प्लांट (CETP) और जैव-अपशिष्ट निपटान सुविधाएं शामिल हैं।"
      }
    },
    {
      boldText: { en: "Sector-Specific Parks: ", te: "రంగానికి సంబంధించిన ప్రత్యేక పార్కులు: ", hi: "क्षेत्र-विशिष्ट पार्क: " },
      normalText: {
        en: "The hub includes dedicated clusters like the Guttapadu MSME Park, which is specifically designed to provide smaller enterprises with ready-to-use land and supporting utilities at subsidized rates to encourage rapid scaling.",
        te: "ఈ హబ్‌లో గుట్టపాడు MSME పార్క్ వంటి ప్రత్యేక క్లస్టర్లు ఉన్నాయి. ఇవి చిన్న సంస్థలు త్వరితగతిన విస్తరించడానికి వీలుగా సిద్ధంగా ఉన్న స్థలాన్ని మరియు ఇతర సౌకర్యాలను సబ్సిడీ రేట్లలో అందించడానికి ప్రత్యేకంగా రూపొందించబడ్డాయి.",
        hi: "हब में गुट्टापाडू एमएसएमई पार्क जैसे समर्पित क्लस्टर शामिल हैं, जो विशेष रूप से छोटे उद्यमों को रियायती दरों पर उपयोग के लिए तैयार भूमि और सहायक सुविधाएं प्रदान करने के लिएं डिज़ाइन किए गए हैं ताकि तेजी से विकास को बढ़ावा दिया जा सके।"
      }
    }
  ]
};

export const policyIncentives: HubSection = {
  id: "policy-incentives",
  title: {
    en: "Policy Incentives & Land Allotment",
    te: "పాలసీ ప్రోత్సాహకాలు & భూమి కేటాయింపు",
    hi: "नीतिगत प्रोत्साहन और भूमि आवंटन"
  },
  bullets: [
    {
      boldText: { en: "MSME Support: ", te: "MSME మద్దతు: ", hi: "एमएसएमई सहायता: " },
      normalText: {
        en: "Incentives for small and medium-sized enterprises are generally aligned with state industrial policies (such as the Industrial Development Policy), which often include subsidies on capital investment, power cost reimbursements, and interest subvention for loans.",
        te: "చిన్న మరియు మధ్య తరహా పరిశ్రమలకు సంబంధించిన ప్రోత్సాహకాలు సాధారణంగా రాష్ట్ర పారిశ్రామిక విధానాలకు (ఇండస్ట్రియల్ డెవలప్‌మెంట్ పాలసీ వంటివి) అనుగుణంగా ఉంటాయి. వీటిలో పెట్టుబడిపై సబ్సిడీలు, విద్యుత్ వ్యయం రీయింబర్స్‌మెంట్ మరియు రుణాలపై వడ్డీ రాయితీలు ఉంటాయి.",
        hi: "लघु और मध्यम उद्यमों के लिए प्रोत्साहन आम तौर पर राज्य की औद्योगिक नीतियों (जैसे औद्योगिक विकास नीति) के साथ संरेखित होते हैं, जिसमें अक्सर पूंजी निवेश पर सब्सिडी, बिजली लागत की प्रतिपूर्ति और ऋण के लिए ब्याज छूट शामिल होती है।"
      }
    },
    {
      boldText: { en: "Land Allotment: ", te: "భూమి కేటాయింపు: ", hi: "भूमि आवंटन: " },
      normalText: {
        en: "The Andhra Pradesh Industrial Infrastructure Corporation (APIIC) acts as the nodal agency, facilitating land allotment and ensuring that the land is properly cleared for industrial use.",
        te: "ఆంధ్రప్రదేశ్ పారిశ్రామిక మౌలిక సదుపాయాల సంస్థ (APIIC) నోడల్ ఏజెన్సీగా పనిచేస్తూ, భూమి కేటాయింపులను సులభతరం చేస్తుంది మరియు పారిశ్రామిక అవసరాలకు అనువుగా మార్చడాన్ని పర్యవేక్షిస్తుంది.",
        hi: "आंध्र प्रदेश औद्योगिक बुनियादी ढांचा निगम (APIIC) नोडल एजेंसी के रूप में कार्य करता है, जो भूमि आवंटन की सुविधा प्रदान करता है और यह सुनिश्चित करता है कि भूमि औद्योगिक उपयोग के लिए पूरी तरह से तैयार हो।"
      }
    }
  ]
};

export const hubResources: HubResource[] = [
  {
    id: "res-apiic",
    title: {
      en: "APIIC (Andhra Pradesh Industrial Infrastructure Corporation)",
      te: "APIIC (ఆంధ్రప్రదేశ్ పారిశ్రామిక మౌలిక సదుపాయాల సంస్థ)",
      hi: "APIIC (आंध्र प्रदेश औद्योगिक बुनियादी ढांचा निगम)"
    },
    description: {
      en: "The primary authority for land allotments and infrastructure development. You can monitor their site for active RFPs (Requests for Proposal) and land availability.",
      te: "భూమి కేటాయింపులు మరియు మౌలిక సదుపాయాల అభివృద్ధికి ప్రాథమిక అధికార సంస్థ. భూమి లభ్యత మరియు యాక్టివ్ ప్రతిపాదనల (RFPs) కొరకు వీరి వెబ్‌సైట్‌ను చూడవచ్చు.",
      hi: "भूमि आवंटन और बुनियादी ढांचे के विकास के लिए प्राथमिक प्राधिकरण। आप सक्रिय प्रस्तावों (RFP) और भूमि की उपलब्धता के लिए उनकी साइट की निगरानी कर सकते हैं।"
    }
  },
  {
    id: "res-eproc",
    title: {
      en: "Andhra Pradesh e-Procurement Portal",
      te: "ఆంధ్రప్రదేశ్ ఈ-ప్రొక్యూర్మెంట్ పోర్టల్",
      hi: "आंध्र प्रदेश ई-प्रोक्योरमेंट पोर्टल"
    },
    description: {
      en: "Often used for bidding on industrial projects or accessing tender documents related to the development of the Orvakal hub.",
      te: "ఓర్వకల్లు హబ్ అభివృద్ధికి సంబంధించిన టెండర్ పత్రాలను పొందడానికి లేదా పారిశ్రామిక ప్రాజెక్టుల బిడ్డింగ్ కోసం తరచుగా దీనిని ఉపయోగిస్తారు.",
      hi: "अक्सर औद्योगिक परियोजनाओं पर बोली लगाने या ओरवाकल हब के विकास से संबंधित निविदा दस्तावेजों तक पहुँचने के लिए उपयोग किया जाता है।"
    }
  },
  {
    id: "res-invest",
    title: {
      en: "Invest India / India Investment Grid (IIG)",
      te: "ఇన్వెస్ట్ ఇండియా / ఇండియా ఇన్వెస్ట్‌మెంట్ గ్రిడ్ (IIG)",
      hi: "इन्वेस्ट इंडिया / इंडिया इन्वेस्टमेंट ग्रिड (IIG)"
    },
    description: {
      en: "A national platform that tracks major infrastructure projects and often lists specific investment opportunities and contact details for the project sponsors.",
      te: "ప్రధాన మౌలిక సదుపాయాల ప్రాజెక్టులను ట్రాక్ చేసే మరియు నిర్దిష్ట పెట్టుబడి అవకాశాలను మరియు ప్రాజెక్ట్ నిర్వాహకుల కాంటాక్ట్ వివరాలను చూపే జాతీయ వేదిక.",
      hi: "एक राष्ट्रीय मंच जो प्रमुख बुनियादी ढांचा परियोजनाओं को ट्रैक करता है और अक्सर विशिष्ट निवेश अवसरों और परियोजना प्रायोजकों के संपर्क विवरण को सूचीबद्ध करता है।"
    }
  }
];
