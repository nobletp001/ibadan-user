import React, { ChangeEvent } from 'react';

interface CustomTextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  onChange: (name: string, value: string) => void;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  label,
  name,
  placeholder = '',
  error,
  onChange,
}) => {
  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className={`appearance-none border ${
          error ? 'border-red-500' : 'border-[#B3E5C3]'
        } rounded-[20px] w-full py-2 px-3 h-[100px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        onChange={handleTextareaChange}
      />
      {error && (
        <p className="text-red-500 text-xs italic mt-1">{error}</p>
      )}
    </div>
  );
};

export default CustomTextarea;
