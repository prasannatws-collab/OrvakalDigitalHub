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
}

export const HospitalityCatalog = ({
  searchQuery,
  selectedServiceCategory,
  setSelectedServiceCategory
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

  if (selectedServiceCategory === null) {
    return (
      <div className="fade-in">
        <div className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
          <h4 style={{ fontSize: '0.85rem' }}>{t.servicesTitle}</h4>
          <p style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>{t.servicesPrompt}</p>
        </div>
        <div className="services-menu-grid">
          {serviceCategories.map((cat) => {
            const catStyle = categoryStyles[cat.key] || { bg: 'hsl(var(--accent))', color: 'hsl(var(--primary))' };
            return (
              <div key={cat.key} className="services-menu-card" onClick={() => setSelectedServiceCategory(cat.key)}>
                <div className="services-menu-icon" style={{ background: catStyle.bg, color: catStyle.color }}>
                  {cat.icon}
                </div>
                <span className="services-menu-label">
                  {(t as any)[cat.labelKey] || cat.key}
                </span>
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button className="btn btn-secondary" style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem' }} onClick={() => setSelectedServiceCategory(null)}>
          ⬅️ {t.backToMenu}
        </button>
        {showRentals && (
          <button className="btn btn-primary" style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem' }} onClick={() => setRentalFormOpen(!rentalFormOpen)}>
            <Plus size={10} /> {t.addRental}
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
