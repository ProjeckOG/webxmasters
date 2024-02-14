// components/FilterChip.tsx

import React from 'react';

interface FiltersProps {
  label: string;
  onClose: () => void;
}

const Filters: React.FC<FiltersProps> = ({ label, onClose }) => {
  return (
    <div className="flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-1">
      <span className="text-blue-700">{label}</span>
      <button  className="text-blue-700 hover:text-blue-900">
        ×
      </button>
    </div>
  );
};

export default Filters;
