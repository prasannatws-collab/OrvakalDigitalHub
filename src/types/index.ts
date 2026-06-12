export interface LocalizedText {
  en: string;
  te: string;
  hi: string;
}

export type Language = 'en' | 'te' | 'hi';

export interface FinancialScheme {
  name: LocalizedText;
  description: LocalizedText;
  rateOfInterest?: string;
  benefits: LocalizedText;
}

export interface GovtOffice {
  id: string;
  name: LocalizedText;
  location: LocalizedText;
  timings: LocalizedText;
  phone: string;
  icon: string;
}

export interface GovtOfficer {
  id: string;
  officeId?: string;
  name: LocalizedText;
  designation: LocalizedText;
  department: LocalizedText;
  phone: string;
  email: string;
  permissions: LocalizedText[];
  location?: LocalizedText;
  timings?: LocalizedText;
  servicesDescription?: LocalizedText;
}

export interface EmergencyContact {
  id: string;
  name: LocalizedText;
  phone: string;
  type: 'police' | 'hospital' | 'fire' | 'ambulance' | 'road-emergency';
  location: LocalizedText;
}

export interface SchoolTeacher {
  id: string;
  name: LocalizedText;
  schoolName: LocalizedText;
  subject: LocalizedText;
  phone: string;
  type: 'school' | 'tuition';
  address?: LocalizedText;
  principal?: LocalizedText;
  timings?: LocalizedText;
  facilities?: LocalizedText[];
  establishedYear?: string;
}

export interface GovtScheme {
  id: string;
  title: LocalizedText;
  type?: 'state' | 'central' | 'bank' | 'postal';
  category: 'farmer' | 'students' | 'women' | 'business' | 'insurance' | 'investment' | 'welfare';
  description: LocalizedText;
  benefits: LocalizedText;
  eligibility: LocalizedText;
  applyProcess: LocalizedText;
}

export interface NewsItem {
  id: string;
  title: LocalizedText;
  source: LocalizedText;
  date: string;
  summary: LocalizedText;
  link?: string;
}

export interface ServiceWorker {
  id: string;
  name: LocalizedText;
  trade: 'plumber' | 'electrician' | 'housework' | 'maintenance';
  rating: number;
  phone: string;
  address: LocalizedText;
  available: boolean;
}

export interface Store {
  id: string;
  name: LocalizedText;
  category: 'grocery' | 'medical' | 'milk' | 'general';
  owner: LocalizedText;
  phone: string;
  timing: LocalizedText;
  location: LocalizedText;
}

export interface Vendor {
  id: string;
  name: LocalizedText;
  item: LocalizedText;
  price: LocalizedText;
  phone: string;
  location: LocalizedText;
}

export interface RentalProperty {
  id: string;
  type: 'house' | 'pg' | 'room' | 'commercial';
  rent: number;
  deposit: number;
  contactName: LocalizedText;
  phone: string;
  details: LocalizedText;
  location: LocalizedText;
  image: string;
}

export interface JobPost {
  id: string;
  title: LocalizedText;
  company: LocalizedText;
  type: 'full-time' | 'contract' | 'daily-wages';
  salary: LocalizedText;
  requirements: LocalizedText;
  description: LocalizedText;
  phone: string;
  postedDate: string;
}

export interface Labour {
  id: string;
  name: LocalizedText;
  skill: LocalizedText;
  rate: LocalizedText;
  phone: string;
  location: LocalizedText;
}

export interface FlightInfo {
  id: string;
  flightNo: string;
  airline: LocalizedText;
  from: LocalizedText;
  to: LocalizedText;
  departure: string;
  arrival: string;
  days: LocalizedText;
  status: LocalizedText;
}

export interface BusInfo {
  id: string;
  busNo: string;
  route: LocalizedText;
  timing: LocalizedText;
  type: LocalizedText;
}

export interface TrainInfo {
  id: string;
  trainNo: string;
  name: LocalizedText;
  route: LocalizedText;
  timing: LocalizedText;
  days: LocalizedText;
}

export interface MandiRate {
  id: string;
  crop: LocalizedText;
  priceRange: LocalizedText;
  trend: 'up' | 'down' | 'flat';
}

export interface IndustrialPlant {
  id: string;
  name: LocalizedText;
  sector: LocalizedText;
  status: LocalizedText;
  hrContact: string;
  location: LocalizedText;
}

export interface Notice {
  id: string;
  title: LocalizedText;
  content: LocalizedText;
  date: string;
  type: 'alert' | 'info' | 'general';
}

export interface TractorRental {
  id: string;
  ownerName: LocalizedText;
  phone: string;
  tractorModel: LocalizedText;
  rate: LocalizedText;
  location: LocalizedText;
  available: boolean;
}

export interface CropAdvisory {
  id: string;
  title: LocalizedText;
  content: LocalizedText;
  category: 'pest' | 'fertilizer' | 'soil' | 'general';
  date: string;
}

export interface WaterLevel {
  id: string;
  reservoirName: LocalizedText;
  levelInfo: LocalizedText;
  capacityInfo: LocalizedText;
  status: LocalizedText;
}

export interface Hotel {
  id: string;
  name: LocalizedText;
  stars: number;
  price: LocalizedText;
  phone: string;
  location: LocalizedText;
  amenities: LocalizedText;
  image: string;
}

export interface BanquetHall {
  id: string;
  name: LocalizedText;
  capacity: number;
  price: LocalizedText;
  phone: string;
  location: LocalizedText;
  details: LocalizedText;
  image: string;
}

export interface WorshipPlace {
  id: string;
  name: LocalizedText;
  type: 'temple' | 'mosque' | 'church';
  location: LocalizedText;
  details: LocalizedText;
}

export interface Attraction {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  distance: LocalizedText;
  timing: LocalizedText;
  image: string;
}

export interface RentalCar {
  id: string;
  provider: LocalizedText;
  vehicle: LocalizedText;
  rate: LocalizedText;
  phone: string;
  available: boolean;
}

export interface PowerSchedule {
  id: string;
  feederName: LocalizedText;
  dayTimings: LocalizedText;
  nightTimings: LocalizedText;
  status: LocalizedText;
}

export interface RepairMechanic {
  id: string;
  name: LocalizedText;
  specialty: 'motor' | 'tractor' | 'borewell' | 'general';
  rating: number;
  phone: string;
  location: LocalizedText;
  available: boolean;
}

export interface AgriContact {
  id: string;
  name: LocalizedText;
  designation: LocalizedText;
  phone: string;
  location: LocalizedText;
}

export interface VegMandiRate {
  id: string;
  item: LocalizedText;
  priceRange: LocalizedText;
  trend: 'up' | 'down' | 'flat';
}

export interface CommercialShop {
  id: string;
  category: 'restaurant' | 'hotel' | 'rentals' | 'banquet' | 'tuitions' | 'boutique' | 'clothing' | 'wholesaler' | 'hardware' | 'stationery' | 'event-rental' | 'car-rental' | 'driving-school' | 'medical' | 'dairy' | 'water-supplier' | 'laundry' | 'pesticide' | 'courier' | 'auto' | 'drivers';
  name: LocalizedText;
  owner: LocalizedText;
  phone: string;
  timing: LocalizedText;
  location: LocalizedText;
  details?: LocalizedText;
  stars?: number;
  capacity?: number;
  priceRate?: LocalizedText;
  image?: string;
}

export interface MspRate {
  id: string;
  crop: LocalizedText;
  mspPrice: LocalizedText;
  season: LocalizedText;
}

export interface CropHolidayInfo {
  id: string;
  zone: LocalizedText;
  advisory: LocalizedText;
  waterStatus: LocalizedText;
  recommendation: LocalizedText;
}

export interface PostalService {
  id: string;
  name: LocalizedText;
  schemes?: FinancialScheme[];
  postmaster: LocalizedText;
  phone: string;
  pincode: string;
  location: LocalizedText;
  timing: LocalizedText;
  services: LocalizedText[];
}

export interface BankAndAtm {
  id: string;
  name: LocalizedText;
  schemes?: FinancialScheme[];
  branch: LocalizedText;
  ifsc: string;
  phone: string;
  location: LocalizedText;
  hasAtm: boolean;
  atmStatus: LocalizedText;
  timing: LocalizedText;
}

export interface Committee {
  id: string;
  name: LocalizedText;
  president: LocalizedText;
  membersCount: number;
  phone: string;
  purpose: LocalizedText;
  meetings: LocalizedText;
}

export interface CommercialCrop {
  id: string;
  name: LocalizedText;
  soilType: LocalizedText;
  waterRequirement: LocalizedText;
  duration: LocalizedText;
  yield: LocalizedText;
  demand: LocalizedText;
  marketPrice: LocalizedText;
}

export interface FertilizerRecommendation {
  id: string;
  crop: LocalizedText;
  fertilizer: LocalizedText;
  dosage: LocalizedText;
  stage: LocalizedText;
}
