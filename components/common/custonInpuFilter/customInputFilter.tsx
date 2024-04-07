// Importing necessary dependencies - Next.js Image component, and React
import Image from 'next/image';
import React from 'react';

// Importing FilterIcon and SearchIcon from the public directory
import FilterIcon from '../../../public/filter.svg';
import SearchIcon from '../../../public/search.svg';

// Defining prop types for the CustomInputFilter component
interface CustomInputFilterProps {
  onChange: (value: string) => void; // Callback function for input value change
  value: string; // Value of the input field
  w?: (React.CSSProperties['width'] | React.CSSProperties['width']); // Optional width for the input field container
  placeholder?: string; // Optional placeholder text for the input field
}

// CustomInputFilter component that takes in props for customization
const CustomInputFilter: React.FC<CustomInputFilterProps> = ({ onChange, value, w, placeholder }) => {

  return (
    // Main container for the custom input filter
    <div className={`flex justify-between my-[1.7rem] bg-[#F7F8F9]  p-[.64rem] `} style={{
      width: w // Apply optional width if provided
    }} >
      {/* Container for the search input field */}
      <div className="relative h-[2.1rem] lg:w-[22.5rem] w-auto">
        {/* Input field for searching */}
        <input
          type="text"
          className="w-full h-full text-[.8rem] placeholder:text-gray-400 py-[.42rem] px-[2rem] border-[1px] border-gray-100 rounded-sm focus:border-none outline-none focus:ring-[1px] focus:ring-[#52ADA2]"
          placeholder={placeholder || 'Search by name or location'} // Display optional placeholder text
          value={value} // Set the value of the input field
          onChange={(e) => onChange(e.target.value)} // Attach the onChange handler
        />
        {/* SearchIcon displayed to the left of the input field */}
        <Image src={SearchIcon} alt="" width={20} className="absolute top-[50%] translate-y-[-50%] left-3" />
      </div>

      {/* Container for the filter button */}
      <div className="gap-2 flex items-center h-[2.1rem] p-1 rounded-sm bg-white">
        {/* FilterIcon displayed */}
        <Image src={FilterIcon} alt="" />
        <span className="text-gray-400">Filter</span> {/* Displaying filter text */}
      </div>
    </div>
  );
};

// Export the CustomInputFilter component for use in other parts of the application
export default CustomInputFilter;
