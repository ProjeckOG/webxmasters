import React, { FC } from 'react';

interface PaySelectProps {
  selectedPay: string;
  setSelectedPay: (pay: string) => void;
}

const PaySelect: FC<PaySelectProps> = ({ selectedPay, setSelectedPay }) => {
  return (
    <div className="">
      <label htmlFor="pay-select" className="mr-2">Pay Range:</label>
      <select
        id="pay-select"
        value={selectedPay}
        onChange={(e) => setSelectedPay(e.target.value)}
        className="p-2 border rounded bg-primary-foreground"
      >
        <option value="">All</option>
        <option value="0-50000">$0-$50,000</option>
        <option value="50000-100000">$50,000-$100,000</option>
        <option value="100000-150000">$100,000-$150,000</option>
        <option value="150000-9999999">$150,000+</option> {/* Adjusted to use a high number for upper bound */}
      </select>
    </div>
  );
};

export default PaySelect;
