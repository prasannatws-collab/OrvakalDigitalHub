// Segregated Data Imports
import { translations } from './translations';
import {
  govtOffices,
  govtOfficers,
  emergencies,
  schools,
  postalServices,
  banksAndAtms,
  govtSchemes
} from './govtData';
import {
  flights,
  buses,
  trains
} from './transitData';
import {
  mandiRates,
  industries,
  powerSchedules,
  repairMechanics,
  agriContacts,
  vegMandiRates,
  govtMspRates,
  cropHolidays,
  tractorRentals,
  advisories,
  waterReservoirs,
  commercialCrops,
  fertilizerRecommendations
} from './agriData';
import { commercialShops } from './commercialShops';
import {
  jobs,
  labourRegistry,
  rentals
} from './jobData';
import {
  worshipPlaces,
  attractions,
  rentalCars,
  notices,
  newsItems,
  committees
} from './communityData';

// Types
import type {
  LocalizedText,
  Language,
  FinancialScheme,
  GovtOffice,
  GovtOfficer,
  EmergencyContact,
  SchoolTeacher,
  GovtScheme,
  NewsItem,
  ServiceWorker,
  Store,
  Vendor,
  RentalProperty,
  JobPost,
  Labour,
  FlightInfo,
  BusInfo,
  TrainInfo,
  MandiRate,
  IndustrialPlant,
  Notice,
  TractorRental,
  CropAdvisory,
  WaterLevel,
  Hotel,
  BanquetHall,
  WorshipPlace,
  Attraction,
  RentalCar,
  PowerSchedule,
  RepairMechanic,
  AgriContact,
  VegMandiRate,
  CommercialShop
} from '../types';

export type {
  LocalizedText,
  Language,
  FinancialScheme,
  GovtOffice,
  GovtOfficer,
  EmergencyContact,
  SchoolTeacher,
  GovtScheme,
  NewsItem,
  ServiceWorker,
  Store,
  Vendor,
  RentalProperty,
  JobPost,
  Labour,
  FlightInfo,
  BusInfo,
  TrainInfo,
  MandiRate,
  IndustrialPlant,
  Notice,
  TractorRental,
  CropAdvisory,
  WaterLevel,
  Hotel,
  BanquetHall,
  WorshipPlace,
  Attraction,
  RentalCar,
  PowerSchedule,
  RepairMechanic,
  AgriContact,
  VegMandiRate,
  CommercialShop
};

// Re-exports
export {
  translations,
  govtOffices,
  govtOfficers,
  emergencies,
  schools,
  flights,
  buses,
  trains,
  mandiRates,
  industries,
  notices,
  worshipPlaces,
  attractions,
  rentalCars,
  powerSchedules,
  repairMechanics,
  agriContacts,
  vegMandiRates,
  govtMspRates,
  cropHolidays,
  tractorRentals,
  advisories,
  waterReservoirs,
  commercialShops,
  jobs,
  labourRegistry,
  rentals,
  postalServices,
  banksAndAtms,
  govtSchemes,
  newsItems,
  committees,
  commercialCrops,
  fertilizerRecommendations
};
