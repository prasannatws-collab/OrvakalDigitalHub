import { useState } from 'react';
import { Plus, MapPin, Star, Phone, Sprout, Droplet, Building2, Utensils, UserCheck, Wrench, Car, Package, FileText, GraduationCap, Compass, Home, Briefcase, Bell, Landmark } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { useRentals } from '../hooks/useRentals';
import { commercialShops, worshipPlaces } from '../data/hospitalityData';
import { Modal } from '../../../core/components/Modal';
import type { CommercialShop, RentalProperty } from '../../../types';

interface HospitalityCatalogProps {
  searchQuery: string;
  selectedServiceCategory: string | null;
  setSelectedServiceCategory: (cat: string | null) => void;
  onClose?: () => void;
}

export const HospitalityCatalog = ({
  searchQuery,
  selectedServiceCategory,
  setSelectedServiceCategory,
  onClose
}: HospitalityCatalogProps) => {
  const { t, getTxt, lang } = useLanguage();
  const {
    localRentals,
    rentalFormOpen,
    setRentalFormOpen,
    newRental,
    setNewRental,
    handlePostRental
  } = useRentals();

  const [selectedShop, setSelectedShop] = useState<CommercialShop | null>(null);
  const [selectedRental, setSelectedRental] = useState<RentalProperty | null>(null);

  const serviceCategories = [
    { key: 'medical', labelKey: 'cat_medical', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ) },
    { key: 'pesticide', labelKey: 'cat_pesticide', icon: <Sprout size={20} /> },
    { key: 'dairy', labelKey: 'cat_dairy', icon: <Droplet size={20} /> },
    { key: 'water-supplier', labelKey: 'cat_water_supplier', icon: <Droplet size={20} /> },
    { key: 'wholesaler', labelKey: 'cat_wholesaler', icon: <Building2 size={20} /> },
    { key: 'restaurant', labelKey: 'cat_restaurant', icon: <Utensils size={20} /> },
    { key: 'laundry', labelKey: 'cat_laundry', icon: <UserCheck size={20} /> },
    { key: 'hardware', labelKey: 'cat_hardware', icon: <Wrench size={20} /> },
    { key: 'auto', labelKey: 'cat_auto', icon: <span style={{ fontSize: '1.25rem' }}>🛺</span> },
    { key: 'drivers', labelKey: 'cat_drivers', icon: <span style={{ fontSize: '1.25rem' }}>👤</span> },
    { key: 'car-rental', labelKey: 'cat_car_rental', icon: <Car size={20} /> },
    { key: 'courier', labelKey: 'cat_courier', icon: <Package size={20} /> },
    { key: 'stationery', labelKey: 'cat_stationery', icon: <FileText size={20} /> },
    { key: 'tuitions', labelKey: 'cat_tuitions', icon: <GraduationCap size={20} /> },
    { key: 'driving-school', labelKey: 'cat_driving_school', icon: <Compass size={20} /> },
    { key: 'rentals', labelKey: 'cat_rentals', icon: <Home size={20} /> },
    { key: 'boutique', labelKey: 'cat_boutique', icon: <UserCheck size={20} /> },
    { key: 'clothing', labelKey: 'cat_clothing', icon: <Briefcase size={20} /> },
    { key: 'event-rental', labelKey: 'cat_event_rental', icon: <Bell size={20} /> },
    { key: 'banquet', labelKey: 'cat_banquet', icon: <Landmark size={20} /> },
    { key: 'hotel', labelKey: 'cat_hotel', icon: <Compass size={20} /> },
    { key: 'temple', labelKey: 'cat_temple', icon: <span style={{ fontSize: '1.25rem' }}>🛕</span> },
    { key: 'mosque', labelKey: 'cat_mosque', icon: <span style={{ fontSize: '1.25rem' }}>🕌</span> },
    { key: 'church', labelKey: 'cat_church', icon: <span style={{ fontSize: '1.25rem' }}>⛪</span> }
  ];

  const categoryStyles: Record<string, { bg: string, color: string }> = {
    medical: { bg: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)', color: '#dc2626' },
    pesticide: { bg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)', color: '#16a34a' },
    dairy: { bg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', color: '#0284c7' },
    'water-supplier': { bg: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)', color: '#00838f' },
    wholesaler: { bg: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)', color: '#ea580c' },
    restaurant: { bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', color: '#d97706' },
    laundry: { bg: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)', color: '#7c3aed' },
    hardware: { bg: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)', color: '#475569' },
    auto: { bg: 'linear-gradient(135deg, #fef9c3 0%, #fef08a 100%)', color: '#ca8a04' },
    drivers: { bg: 'linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)', color: '#0d9488' },
    'car-rental': { bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', color: '#b45309' },
    courier: { bg: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)', color: '#4f46e5' },
    stationery: { bg: 'linear-gradient(135deg, #fae8ff 0%, #f5d0fe 100%)', color: '#c084fc' },
    tuitions: { bg: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', color: '#059669' },
    'driving-school': { bg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', color: '#0369a1' },
    rentals: { bg: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)', color: '#9333ea' },
    boutique: { bg: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)', color: '#db2777' },
    clothing: { bg: 'linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%)', color: '#e11d48' },
    'event-rental': { bg: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)', color: '#d84315' },
    banquet: { bg: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)', color: '#d97706' },
    hotel: { bg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', color: '#166534' },
    temple: { bg: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', color: '#ea580c' },
    mosque: { bg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', color: '#166534' },
    church: { bg: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', color: '#2563eb' }
  };

  const getShopCategoryName = (cat: string) => {
    const key = `cat_${cat.replace('-', '_')}`;
    const dict = t as any;
    return dict[key] || cat;
  };

  const getCategoryDescription = (key: string) => {
    const descriptions: Record<string, { en: string, te: string, hi: string }> = {
      medical: { en: "Pharmacies, clinics, and medical stores.", te: "మందుల షాపులు మరియు క్లినిక్లు.", hi: "दवा की दुकानें और क्लीनिक।" },
      pesticide: { en: "Fertilizers, quality seeds, and pesticides.", te: "ఎరువులు, పురుగుల మందులు మరియు విత్తనాలు.", hi: "उर्वरक, कीटनाशक और उत्तम बीज।" },
      dairy: { en: "Fresh milk, curd, and local dairy centers.", te: "పాలు, పెరుగు మరియు స్థానిక పాల కేంద్రాలు.", hi: "ताजा दूध, दही और डेयरी उत्पाद।" },
      'water-supplier': { en: "Purified water cans and tanker suppliers.", te: "మినరల్ వాటర్ క్యాన్లు మరియు సప్లయర్లు.", hi: "पेयजल कैन और टैंकर आपूर्ति कर्ता।" },
      wholesaler: { en: "Wholesale groceries and general kirana.", te: "హోల్‌సేల్ కిరాణా మరియు జనరల్ స్టోర్స్.", hi: "थोक किराना और जनरल मर्चेंट।" },
      restaurant: { en: "Local eateries, dhabas, and restaurants.", te: "స్థానిక హోటళ్ళు, ధాబాలు మరియు రెస్టారెంట్లు.", hi: "भोजन, ढाबा और स्थानीय रेस्टोरेंट।" },
      laundry: { en: "Dry cleaning, ironing, and laundry services.", te: "లాండ్రీ, డ్రై క్లీనింగ్ మరియు ఇస్త్రీ సేవలు.", hi: "कपड़े धोने और इस्त्री की सेवाएं।" },
      hardware: { en: "Electricals, plumbing tools, and hardware.", te: "ఎలక్ట్రికల్, ప్లంబింగ్ సామాగ్రి మరియు హార్డ్‌వేర్.", hi: "इलेक्ट्रिकल, प्लंबिंग और हार्डवेयर स्टोर।" },
      auto: { en: "Auto stand locations and local auto drivers.", te: "ఆటో స్టాండ్లు మరియు అందుబాటులో ఉన్న ఆటోలు.", hi: "स्थानीय ऑटो स्टैंड और चालक संपर्क।" },
      drivers: { en: "Professional drivers for hire and travel.", te: "కార్ డ్రైవర్లు మరియు ఇతర వాహన చోదకులు.", hi: "यात्रा और किराए के लिए पेशेवर चालक।" },
      'car-rental': { en: "Rental cars, taxi services, and travel desks.", te: "క్యాబ్స్, ట్రావెల్స్ మరియు వాహనాల అద్దెలు.", hi: "किराए की कार और टैक्सी सेवाएं।" },
      courier: { en: "Parcel delivery, cargo, and speed post.", te: "కొరియర్, పార్సెల్ సర్వీస్ మరియు స్పీడ్ పోస్ట్.", hi: "पार्सल डिलीवरी, कूरियर और स्पीड पोस्ट।" },
      stationery: { en: "Notebooks, printing, Xerox, and books.", te: "స్టేషనరీ, జిరాక్స్ మరియు పుస్తకాల దుకాణాలు.", hi: "स्टेशनरी, फोटोकॉपी और किताबों की दुकानें।" },
      tuitions: { en: "School tuitions and competitive coaching.", te: "ట్యూషన్లు మరియు వివిధ కోచింగ్ సెంటర్లు.", hi: "स्कूली ट्यूशन और प्रतियोगी कोचिंग।" },
      'driving-school': { en: "Learn car and bike driving with license help.", te: "డ్రైవింగ్ స్కూల్స్ మరియు లైసెన్స్ సహాయం.", hi: "कार और बाइक ड्राइविंग ट्रेनिंग।" },
      rentals: { en: "House renting, rooms, and PG accommodation.", te: "ఇల్లు, సింగిల్ రూమ్స్ మరియు పీజీ అద్దెలు.", hi: "किराए के मकान, कमरे और पीजी आवास।" },
      boutique: { en: "Boutique designs, tailor shops, and styling.", te: "బోటిక్స్ మరియు లేడీస్ టైలరింగ్ షాపులు.", hi: "फैंसी बुटीक और लेडीज टेलरिंग।" },
      clothing: { en: "Apparel shopping and readymade clothing.", te: "బట్టల దుకాణాలు మరియు రెడీమేడ్ దుస్తులు.", hi: "कपड़े और रेडीमेड कपड़ों के शो-रूम।" },
      'event-rental': { en: "Tent house, sound systems, and lighting.", te: "టెంట్ హౌస్, మైక్ సెట్లు మరియు డెకరేషన్ సప్లైస్.", hi: "तंबू, लाउडस्पीकर और लाइटिंग उपकरण।" },
      banquet: { en: "Marriage halls, function halls, and gardens.", te: "ఫంక్షన్ హాళ్ళు మరియు వివాహ వేదికలు.", hi: "विवाह भवन, उत्सव हॉल और गार्डन।" },
      hotel: { en: "Lodges, guest houses, and hotels.", te: "వసతి గృహాలు, లాడ్జీలు మరియు హోటళ్ళు.", hi: "लॉज, गेस्ट हाउस और होटल ठहरने की जगह।" },
      temple: { en: "Historical and local temples to visit.", te: "స్థానిక మరియు చారిత్రక దేవాలయాలు.", hi: "दर्शन के लिए स्थानीय और ऐतिहासिक मंदिर।" },
      mosque: { en: "Local mosques and prayer timings.", te: "స్థానిక మసీదులు మరియు ప్రార్థన సమయాలు.", hi: "स्थानीय मस्जिदें और नमाज़ का समय।" },
      church: { en: "Local churches and Sunday services.", te: "స్థానిక చర్చీలు మరియు ఆదివారం ప్రార్థనలు.", hi: "स्थानीय चर्च और रविवार प्रार्थना सभा।" }
    };
    const desc = descriptions[key] || { en: "Browse details and contacts.", te: "వివరాలు మరియు కాంటాక్ట్స్ చూడండి.", hi: "विवरण और संपर्क देखें।" };
    return desc[lang] || desc['en'];
  };

  if (selectedServiceCategory === null) {
    return (
      <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', borderBottom: '1px solid hsl(var(--border) / 0.5)', paddingBottom: '8px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>
            🛍️ {lang === 'en' ? "Services Catalog" : lang === 'te' ? "సేవల కేటలాగ్" : "सेवा सूची"}
          </span>
          {onClose && (
            <button
              className="btn btn-secondary"
              style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid hsl(var(--primary) / 0.2)' }}
              onClick={onClose}
            >
              🏠 {lang === 'en' ? "Go to Dashboard" : lang === 'te' ? "డాష్‌బోర్డ్‌కు వెళ్ళు" : "डैशबोर्ड पर जाएं"}
            </button>
          )}
        </div>
        <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))', marginBottom: '4px' }}>
          <h4 style={{ fontSize: '0.85rem' }}>{t.servicesTitle}</h4>
          <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>{t.servicesPrompt}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginTop: '4px' }}>
          {serviceCategories.map((cat) => {
            const catStyle = categoryStyles[cat.key] || { bg: 'hsl(var(--accent))', color: 'hsl(var(--primary))' };
            return (
              <div key={cat.key} className="govt-menu-card" onClick={() => setSelectedServiceCategory(cat.key)}>
                <div className="govt-menu-icon" style={{ background: catStyle.bg, color: catStyle.color }}>
                  {cat.icon}
                </div>
                <div className="govt-menu-info">
                  <span className="govt-menu-title">
                    {(t as any)[cat.labelKey] || cat.key}
                  </span>
                  <span className="govt-menu-desc">
                    {getCategoryDescription(cat.key)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const isWorship = ['temple', 'mosque', 'church'].includes(selectedServiceCategory);
  
  const filteredWorship = isWorship ? worshipPlaces.filter(wp => wp.type === selectedServiceCategory && (
    searchQuery === '' ||
    getTxt(wp.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
    getTxt(wp.location).toLowerCase().includes(searchQuery.toLowerCase())
  )) : [];

  const filteredShops = isWorship ? [] : commercialShops.filter(shop => shop.category === selectedServiceCategory && (
    searchQuery === '' ||
    getTxt(shop.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
    getTxt(shop.location).toLowerCase().includes(searchQuery.toLowerCase())
  ));

  const showRentals = selectedServiceCategory === 'rentals';

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button className="btn btn-secondary" style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem' }} onClick={() => setSelectedServiceCategory(null)}>
            ⬅️ {t.backToMenu}
          </button>
          {showRentals && (
            <button className="btn btn-primary" style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem' }} onClick={() => setRentalFormOpen(!rentalFormOpen)}>
              <Plus size={10} /> {t.addRental}
            </button>
          )}
        </div>
        {onClose && (
          <button
            className="btn btn-secondary"
            style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid hsl(var(--primary) / 0.2)' }}
            onClick={onClose}
          >
            🏠 {lang === 'en' ? "Go to Dashboard" : lang === 'te' ? "డాష్‌బోర్డ్‌కు వెళ్ళు" : "डैशबोर्ड पर जाएं"}
          </button>
        )}
      </div>

      {showRentals && rentalFormOpen && (
        <div className="card" style={{ border: '1px dashed hsl(var(--primary))' }}>
          <h4 style={{ fontSize: '0.78rem' }}>{t.addRental}</h4>
          <form onSubmit={handlePostRental} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
            <div className="form-group">
              <label className="form-label">Type</label>
              <select className="form-input" value={newRental.type} onChange={(e) => setNewRental({ ...newRental, type: e.target.value })} aria-label="Rental Property Type Select">
                <option value="house">House / Villa</option>
                <option value="pg">Paying Guest (PG)</option>
                <option value="room">Single Room</option>
                <option value="commercial">Commercial Shop</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Rent (Rs. / month)</label>
              <input type="number" className="form-input" value={newRental.rent} onChange={(e) => setNewRental({ ...newRental, rent: e.target.value })} required />
            </div>
            <div className="form-group">
              <label className="form-label">Deposit (Rs.)</label>
              <input type="number" className="form-input" value={newRental.deposit} onChange={(e) => setNewRental({ ...newRental, deposit: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Owner Name</label>
              <input type="text" className="form-input" value={newRental.contactName} onChange={(e) => setNewRental({ ...newRental, contactName: e.target.value })} required />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input type="tel" className="form-input" value={newRental.phone} onChange={(e) => setNewRental({ ...newRental, phone: e.target.value })} required />
            </div>
            <div className="form-group">
              <label className="form-label">Location / Area</label>
              <input type="text" className="form-input" value={newRental.location} onChange={(e) => setNewRental({ ...newRental, location: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Amenities</label>
              <textarea className="form-input" rows={2} value={newRental.details} onChange={(e) => setNewRental({ ...newRental, details: e.target.value })}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Publish Property</button>
          </form>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredShops.length === 0 && filteredWorship.length === 0 && (!showRentals || localRentals.length === 0) ? (
          <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{t.noItems}</p>
          </div>
        ) : (
          <>
            {isWorship && filteredWorship.map(wp => (
              <div key={wp.id} className="card" style={{ padding: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge badge-info" style={{ 
                    fontSize: '0.6rem', 
                    textTransform: 'capitalize', 
                    background: wp.type === 'temple' ? '#fef08a' : wp.type === 'mosque' ? '#dcfce7' : '#dbeafe', 
                    color: wp.type === 'temple' ? '#a16207' : wp.type === 'mosque' ? '#15803d' : '#1d4ed8' 
                  }}>
                    {wp.type === 'temple' ? 'Temple' : wp.type === 'mosque' ? 'Mosque' : 'Church'}
                  </span>
                  <span style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))' }}>Active: 6 AM - 8 PM</span>
                </div>
                <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))', marginTop: '4px', marginBlockEnd: '2px' }}>{getTxt(wp.name)}</h4>
                <div style={{ display: 'flex', gap: '4px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', alignItems: 'center' }}>
                  <MapPin size={12} /> <span>{getTxt(wp.location)}</span>
                </div>
                <p style={{ fontSize: '0.7rem', margin: 0, color: 'hsl(var(--muted-foreground))', borderTop: '1px dashed hsl(var(--border))', paddingTop: '6px', marginTop: '6px' }}>
                  {getTxt(wp.details)}
                </p>
              </div>
            ))}

            {filteredShops.map(shop => (
              <div key={shop.id} className="card" style={{ padding: shop.image ? 0 : '14px' }}>
                {shop.image && <img src={shop.image} alt={getTxt(shop.name)} className="rental-img" />}
                <div style={{ padding: shop.image ? '12px' : 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '0.85rem', color: 'hsl(var(--primary))' }}>{getTxt(shop.name)}</h4>
                    <span className="badge badge-success">{lang === 'en' ? 'Verified' : lang === 'te' ? 'ధృవీకరించబడింది' : 'सत्यापित'}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                    <div><strong>{t.owner}:</strong> {getTxt(shop.owner)}</div>
                    <div><strong>{t.timing}:</strong> {getTxt(shop.timing)}</div>
                    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                      <MapPin size={10} /> <span>{getTxt(shop.location)}</span>
                    </div>
                  </div>

                  {shop.stars && (
                    <div style={{ display: 'flex', gap: '2px', alignItems: 'center', marginTop: '2px' }}>
                      {Array.from({ length: shop.stars }).map((_, i) => <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />)}
                      <span style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', marginLeft: '4px' }}>({shop.stars} Star)</span>
                    </div>
                  )}

                  {shop.capacity && (
                    <div style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                      <strong>{t.capacity}:</strong> {shop.capacity} {lang === 'en' ? 'Guests' : lang === 'te' ? 'అతిథులు' : 'अतिथि'}
                    </div>
                  )}

                  {shop.priceRate && (
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--secondary))' }}>
                      {getTxt(shop.priceRate)}
                    </div>
                  )}

                  {shop.details && (
                    <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>
                      {getTxt(shop.details)}
                    </p>
                  )}

                  <div className="action-bar">
                    <a href={`tel:${shop.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}>
                      <Phone size={10} /> {t.callNow}
                    </a>
                    <button className="btn btn-secondary" onClick={() => setSelectedShop(shop)}>
                      {t.viewDetails}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {showRentals && localRentals.map(property => (
              <div key={property.id} className="card" style={{ padding: 0 }}>
                <img src={property.image} alt="Property preview" className="rental-img" />
                <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="badge badge-info" style={{ textTransform: 'uppercase' }}>{property.type}</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'hsl(var(--secondary))' }}>₹{property.rent.toLocaleString()}/mo</span>
                  </div>
                  <h4 style={{ fontSize: '0.8rem' }}>{getTxt(property.location)}</h4>
                  <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>{getTxt(property.details)}</p>
                  <div className="action-bar">
                    <a href={`tel:${property.phone}`} className="btn btn-primary" style={{ textDecoration: 'none' }}><Phone size={10} /> Call Owner</a>
                    <button className="btn btn-secondary" onClick={() => setSelectedRental(property)}>{t.viewDetails}</button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Details Modals */}
      <Modal isOpen={selectedShop !== null} onClose={() => setSelectedShop(null)} title={selectedShop ? getShopCategoryName(selectedShop.category) : ''}>
        {selectedShop && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h4 style={{ fontSize: '0.9rem' }}>{getTxt(selectedShop.name)}</h4>
            
            {selectedShop.stars && (
              <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                {Array.from({ length: selectedShop.stars }).map((_, i) => <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />)}
                <span style={{ fontSize: '0.65rem', color: 'hsl(var(--muted-foreground))', marginLeft: '4px' }}>({selectedShop.stars} Star Stays)</span>
              </div>
            )}

            {selectedShop.capacity && (
              <div style={{ fontSize: '0.75rem' }}>
                <strong>{t.capacity}:</strong> {selectedShop.capacity} {lang === 'en' ? 'Guests' : lang === 'te' ? 'అతిథులు' : 'अतिथि'}
              </div>
            )}

            {selectedShop.priceRate && (
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'hsl(var(--secondary))' }}>
                {getTxt(selectedShop.priceRate)}
              </div>
            )}

            <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem' }}>
              <div><strong>{t.owner}:</strong> {getTxt(selectedShop.owner)}</div>
              <div><strong>{t.timing}:</strong> {getTxt(selectedShop.timing)}</div>
              <div><strong>{t.address}:</strong> {getTxt(selectedShop.location)}</div>
            </div>

            {selectedShop.details && (
              <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', fontSize: '0.75rem' }}>
                <strong>Details:</strong>
                <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>{getTxt(selectedShop.details)}</p>
              </div>
            )}
            <a href={`tel:${selectedShop.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', marginTop: '10px', display: 'block', textAlign: 'center' }}>
              <Phone size={12} /> {t.callNow}
            </a>
          </div>
        )}
      </Modal>

      <Modal isOpen={selectedRental !== null} onClose={() => setSelectedRental(null)} title="Rental Stay Details">
        {selectedRental && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'capitalize' }}>{selectedRental.type} for Rent</h4>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'hsl(var(--secondary))' }}>₹{selectedRental.rent.toLocaleString()}/mo</div>
            <div style={{ fontSize: '0.75rem' }}><strong>Deposit:</strong> ₹{selectedRental.deposit.toLocaleString()}</div>
            <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem' }}>
              <div><strong>Owner / Contact:</strong> {getTxt(selectedRental.contactName)}</div>
              <div><strong>Phone:</strong> {selectedRental.phone}</div>
              <div><strong>Location:</strong> {getTxt(selectedRental.location)}</div>
            </div>
            {selectedRental.details && (
              <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', fontSize: '0.75rem' }}>
                <strong>Amenities / Details:</strong>
                <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', marginTop: '2px' }}>{getTxt(selectedRental.details)}</p>
              </div>
            )}
            <a href={`tel:${selectedRental.phone}`} className="btn btn-primary" style={{ textDecoration: 'none', marginTop: '10px', display: 'block', textAlign: 'center' }}><Phone size={12} /> Call Owner</a>
          </div>
        )}
      </Modal>
    </div>
  );
};
