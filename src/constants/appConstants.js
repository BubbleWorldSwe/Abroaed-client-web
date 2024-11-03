export const BASE_API_PATH =
  process.env.NODE_ENV == 'production' ? 'https://vastrika.net/api/' : 'http://localhost:2001/';

export const ERROR_MESSAGES = {
  ACCOUNT_NOT_ACTIVATED: 'Your account is not activated yet, please check your email.'
};

export const PAYMENT_MODES = {
  CASH: 'CASH',
  CHEQUE: 'CHEQUE',
  UPI: 'UPI',
  RTGS: 'RTGS'
};

export const TRANSACTION_TYPES = {
  SALE: 'Sale',
  PURCHASE: 'Purchase',
  PART_PAYMENT: 'Part Payment',
  DUE_CLEARANCE: 'Due Clearance',
  FABRIC_RETURN: 'Fabric Return',
  SALE_RETURN: 'Sale Return',
  TRADING_STOCK_RETURN: 'Stock Return',
  OPENING_BALANCE: 'Opening Balance',
  MANUAL_ADJUSTMENT: 'Manual Adjustment',
  DEDUCTION: 'Deduction',
  LABOUR_CHARGES: 'Labour Charges',
  RAW_MATERIAL_RETURN: 'Raw Material Return'
};

export const PARTY_TYPES = {
  SUPPLIER: 'Supplier',
  BUYER: 'Buyer',
  LABOUR: 'Labour'
};

export const SIZE_ROMAN = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'IVXL', 'VXL'];

export const SIZE_NUMERIC = Array.from({ length: 30 }, (_, i) => String(i * 2));

export const SIZE_WEIGHTAGE = {
  XS: 1,
  S: 2,
  M: 3,
  L: 4,
  XL: 5,
  XXL: 6,
  XXXL: 7,
  IVXL: 8,
  VXL: 9,
  0: 100,
  2: 200,
  4: 400,
  6: 600,
  8: 800,
  10: 1000,
  12: 1200,
  14: 1400,
  16: 1600,
  18: 1800,
  20: 2000,
  22: 2200,
  24: 2400,
  26: 2600,
  28: 2800,
  30: 3000,
  32: 3200,
  34: 3400,
  36: 3600,
  38: 3800,
  40: 4000,
  42: 4200,
  44: 4400,
  46: 4600,
  48: 4800,
  50: 5000,
  52: 5200,
  54: 5400,
  56: 5600
};

export const APP_MODULES = [
  'Dashboard',
  'Master Data',
  'Suppliers',
  'Transactions',
  'Issuance',
  'Buyers',
  'Purchase',
  'Purchase Return',
  'Labours',
  'Inventory',
  'Sales',
  'User Management',
  'Factory Management'
];
