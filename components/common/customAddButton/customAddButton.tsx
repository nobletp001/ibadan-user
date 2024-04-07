// Importing React library for building React components
import React from "react";

// Define the expected prop types for the CustomAddButton component
interface CustomAddButtonType {
  text: string; // Text displayed on the button
  onClick?: () => void; // Optional click handler function
  w?: React.CSSProperties["width"] | React.CSSProperties["width"]; // Optional width for the button
  h: React.CSSProperties["width"] | React.CSSProperties["width"]; // Required height for the button
}

// CustomAddButton component that takes in props for customization
function CustomAddButton({ text, onClick, w, h }: CustomAddButtonType) {
  return (
    // Render a button element with dynamic styles and properties
    <button
      className={`bg-[#52ADA2] h-[38px] text-white px-2 md:px-4 rounded-sm text-sm md:text-base`}
      onClick={onClick}
      style={{
        width: w, // Apply optional width if provided
        height: h, // Apply required height
      }}
    >
      + {text} {/* Display the text with a plus sign */}
    </button>
  );
}

// Export the CustomAddButton component for use in other parts of the application
export default CustomAddButton;
