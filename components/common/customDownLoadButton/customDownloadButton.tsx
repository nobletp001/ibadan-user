// Importing necessary dependencies - Next.js Image component, and React
import Image from 'next/image';
import React from 'react';

// Importing the DownloadIcon from the public directory
import DownloadIcon from "../../../public/download.svg";

// Defining prop types for the DownloadButton component
interface DownloadButtonProps {
  text: string; // Text displayed on the button
  onClick?: () => void; // Optional click handler function
  w?: (React.CSSProperties['width'] | React.CSSProperties['width']); // Optional width for the button
}

// DownloadButton component that takes in props for customization
function DownloadButton({ text, onClick, w }: DownloadButtonProps) {
  return (
    // Render a button element with dynamic styles and properties
    <button
      className={`border-gray-400 border-[1px] w-${w} px-2 md:px-4 h-[38px] flex gap-1 items-center rounded-sm text-sm md:text-base`}
      style={{ width: w }} // Apply optional width if provided
      onClick={onClick} // Attach optional click handler function
    >
      {/* Display the DownloadIcon using the Next.js Image component */}
      <Image src={DownloadIcon} alt="download" className="w-4 h-4 md:w-5 md:h-5" />
      <span>{text}</span> {/* Display the text next to the icon */}
    </button>
  );
}

// Export the DownloadButton component for use in other parts of the application
export default DownloadButton;
