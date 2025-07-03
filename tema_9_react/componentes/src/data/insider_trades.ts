export type InsiderTrade = {
  insider_name: string;
  insider_title: string;
  transaction_date: string | Date;
  security_type: string;
  transaction_type: string;
  amount: string;
  price: string | null;
  document_url: string;
};

export const data: InsiderTrade[] = [
  {
    insider_name: 'Pilz Torsten',
    insider_title: 'Group President',
    transaction_date: '2025-06-02',
    security_type: 'Restricted Stock Units',
    transaction_type: 'A',
    amount: '3416',
    price: null,
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225016400\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Pilz Torsten',
    insider_title: 'Group President',
    transaction_date: '2025-06-02',
    security_type: 'Restricted Stock Units',
    transaction_type: 'A',
    amount: '10725',
    price: null,
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225016400\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Banovetz John Patrick',
    insider_title: 'Executive Vice President',
    transaction_date: '2025-05-23',
    security_type: 'Common Stock',
    transaction_type: 'M',
    amount: '7759',
    price: '130.14',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Banovetz John Patrick',
    insider_title: 'Executive Vice President',
    transaction_date: '2025-05-23',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '6080',
    price: '148.37',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Banovetz John Patrick',
    insider_title: 'Executive Vice President',
    transaction_date: '2025-05-23',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '900',
    price: '148.38',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Banovetz John Patrick',
    insider_title: 'Executive Vice President',
    transaction_date: '2025-05-23',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '300',
    price: '148.39',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Banovetz John Patrick',
    insider_title: 'Executive Vice President',
    transaction_date: '2025-05-23',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '379',
    price: '148.41',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Banovetz John Patrick',
    insider_title: 'Executive Vice President',
    transaction_date: '2025-05-23',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '100',
    price: '148.41',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Banovetz John Patrick',
    insider_title: 'Executive Vice President',
    transaction_date: '2025-05-23',
    security_type: 'Non-qualified Stock Option (Right to Buy)',
    transaction_type: 'M',
    amount: '7759',
    price: '0',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015583\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Rhodes Kevin H',
    insider_title: 'EVP, Chief Legal Off & Secret',
    transaction_date: '2025-05-20',
    security_type: 'Common Stock',
    transaction_type: 'M',
    amount: '7976',
    price: '130.14',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015159\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Rhodes Kevin H',
    insider_title: 'EVP, Chief Legal Off & Secret',
    transaction_date: '2025-05-20',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '7976',
    price: '154.02',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015159\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Rhodes Kevin H',
    insider_title: 'EVP, Chief Legal Off & Secret',
    transaction_date: '2025-05-20',
    security_type: 'Non-qualified Stock Option (Right to Buy)',
    transaction_type: 'M',
    amount: '7976',
    price: '0',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225015159\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '2074',
    price: '148.93',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '159',
    price: '148.931',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '340',
    price: '148.94',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '14',
    price: '148.95',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '300',
    price: '148.955',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '735',
    price: '148.96',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '250',
    price: '148.96',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '5',
    price: '148.961',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '46',
    price: '148.97',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'M',
    amount: '3992',
    price: '130.14',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '600',
    price: '149.06',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '1932',
    price: '149.08',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
  {
    insider_name: 'Dickson Zoe L',
    insider_title: 'EVP & Chief HR Officer',
    transaction_date: '2025-05-15',
    security_type: 'Common Stock',
    transaction_type: 'S',
    amount: '1460',
    price: '149.12',
    document_url:
      'https:\/\/www.sec.gov\/Archives\/edgar\/data\/0000066740\/000112760225014808\/xslF345X05\/form4.xml',
  },
];
