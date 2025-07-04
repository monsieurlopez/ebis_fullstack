export type InsiderTrade = {
  date: string | Date;
  stock: string;
  name: string;
  title: string;
  transaction: string;
  amount: string;
  price: string | null;
  document: string;
};

export const data: InsiderTrade[] = [
  {
    date: '2025-06-02',
    name: 'Pilz Torsten',
    title: 'Group President',
    stock: 'Restricted Stock Units',
    transaction: 'A',
    amount: '3416',
    price: null,
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225016400\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-06-02',
    name: 'Pilz Torsten',
    title: 'Group President',
    stock: 'Restricted Stock Units',
    transaction: 'A',
    amount: '10725',
    price: null,
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225016400\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-23',
    name: 'Banovetz John Patrick',
    title: 'Executive Vice President',
    stock: 'Common Stock',
    transaction: 'M',
    amount: '7759',
    price: '130.14',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-23',
    name: 'Banovetz John Patrick',
    title: 'Executive Vice President',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '6080',
    price: '148.37',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-23',
    name: 'Banovetz John Patrick',
    title: 'Executive Vice President',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '900',
    price: '148.38',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-23',
    name: 'Banovetz John Patrick',
    title: 'Executive Vice President',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '300',
    price: '148.39',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-23',
    name: 'Banovetz John Patrick',
    title: 'Executive Vice President',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '379',
    price: '148.41',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-23',
    name: 'Banovetz John Patrick',
    title: 'Executive Vice President',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '100',
    price: '148.41',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-23',
    name: 'Banovetz John Patrick',
    title: 'Executive Vice President',
    stock: 'Non-qualified Stock Option (Right to Buy)',
    transaction: 'M',
    amount: '7759',
    price: '0',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-20',
    name: 'Rhodes Kevin H',
    title: 'EVP, Chief Legal Off & Secret',
    stock: 'Common Stock',
    transaction: 'M',
    amount: '7976',
    price: '130.14',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015159\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-20',
    name: 'Rhodes Kevin H',
    title: 'EVP, Chief Legal Off & Secret',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '7976',
    price: '154.02',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015159\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-20',
    name: 'Rhodes Kevin H',
    title: 'EVP, Chief Legal Off & Secret',
    stock: 'Non-qualified Stock Option (Right to Buy)',
    transaction: 'M',
    amount: '7976',
    price: '0',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015159\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '2074',
    price: '148.93',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '159',
    price: '148.931',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '340',
    price: '148.94',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '14',
    price: '148.95',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '300',
    price: '148.955',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '735',
    price: '148.96',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '250',
    price: '148.96',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '5',
    price: '148.961',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '46',
    price: '148.97',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'M',
    amount: '3992',
    price: '130.14',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '600',
    price: '149.06',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '1932',
    price: '149.08',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    date: '2025-05-15',
    name: 'Dickson Zoe L',
    title: 'EVP & Chief HR Officer',
    stock: 'Common Stock',
    transaction: 'S',
    amount: '1460',
    price: '149.12',
    document:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
];
