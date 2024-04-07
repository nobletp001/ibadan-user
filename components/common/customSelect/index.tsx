import React, { ChangeEvent, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Import the ArrowDropDown icon from Material-UI
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'; // Import the ArrowDropUp icon from Material-UI

interface CustomSelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
  onChange: (name: string, value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  options,
  placeholder = 'Select an option',
  error,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelectedValue(value);
    onChange(name, value);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 relative">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <div className="relative">
        <div
          className={`appearance-none border ${
            error ? 'border-red-500' : 'border-[#B3E5C3]'
          } rounded-[20px] w-full py-2 px-3 h-[50px] flex items-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer`}
          onClick={handleDropdownToggle}
        >
          <span className="flex-grow">{selectedValue || placeholder}</span>
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div>
        {isOpen && (
          <div className="absolute mt-1 w-full bg-white border border-gray-300 shadow-md rounded-md z-10">
            {options.map((option) => (
              <div
                key={option.value}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedValue(option.value);
                  onChange(name, option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs italic mt-1">{error}</p>
      )}
    </div>
  );
};

export default CustomSelect;
