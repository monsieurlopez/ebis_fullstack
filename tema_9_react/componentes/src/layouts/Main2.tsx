import React, { useState } from 'react';
import { CreateTable, CardCompany } from '../components/indexComponets';
import { data } from '../data/data';

type CompanyProps = {
  img?: string;
  firm_cik: number;
  firm_name: string;
  firm_ticker: string;
};

type SelectCompanyProps = {
  companies: CompanyProps[];
  onSelect: (company: CompanyProps) => void;
};

export const SelectCompany: React.FC<SelectCompanyProps> = ({
  companies,
  onSelect,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCik = Number(e.target.value);
    const selectedCompany = companies.find((c) => c.firm_cik === selectedCik);
    if (selectedCompany) {
      onSelect(selectedCompany);
    }
  };

  return (
    <select
      className="p-2 border rounded text-center"
      name="companies"
      onChange={handleChange}
    >
      {companies.map((company) => (
        <option key={company.firm_cik} value={company.firm_cik}>
          {company.firm_name} - {company.firm_ticker}
        </option>
      ))}
    </select>
  );
};

const Main2: React.FC = () => {
  const uniqueCompanies = Array.from(
    new Map(
      data.map((item) => [
        item.firm_cik,
        {
          firm_cik: item.firm_cik,
          firm_name: item.firm_name,
          firm_ticker: item.firm_ticker,
        },
      ])
    ).values()
  );

  const [selectedCompany, setSelectedCompany] = useState(uniqueCompanies[0]);
  const logo = `https://logo.clearbit.com/${selectedCompany.firm_ticker}.com`;

  return (
    <main className="flex-grow w-full bg-white mt-3 text-center mb-3 px-2 sm:px-4">
      <SelectCompany
        companies={uniqueCompanies}
        onSelect={setSelectedCompany}
      />
      <div className="max-w flex flex-col max-auto gap-2 justify-center mt-6">
        <CardCompany
          img={logo}
          name={selectedCompany.firm_name}
          symbol={selectedCompany.firm_ticker}
          cik={selectedCompany.firm_cik}
        />
        <CreateTable items={data} pageSize={20} />
      </div>
    </main>
  );
};

export default Main2;
