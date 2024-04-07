import React, { ChangeEvent } from 'react';

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  onChange: (name: string, value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  error,
  onChange,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`appearance-none border ${
          error ? 'border-red-500' : 'border-[#B3E5C3]'
        } rounded-[20px] w-full py-2 px-3 h-[50px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        onChange={handleInputChange}
      />
      {error && (
        <p className="text-red-500 text-xs italic mt-1">{error}</p>
      )}
    </div>
  );
};

export default CustomInput;
