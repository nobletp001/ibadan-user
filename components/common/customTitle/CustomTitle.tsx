// Importing React library for building React components
import React from "react";

// Importing CustomAddButton and DownloadButton components from specific paths
import CustomAddButton from "@/components/common/customAddButton/customAddButton";
import DownloadButton from "@/components/common/customDownLoadButton/customDownloadButton";

// Defining prop types for the CustomTitle component
interface CustomTitleType {
  title: string; // Main title text
  discription?: string; // Optional description text
}

// CustomTitle component that takes in props for customization
function CustomTitle({ title, discription }: CustomTitleType) {
  return (
    <>
      {/* Main container for the custom title */}
      <div className="">
        {/* Container for flex layout with title and description */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Container for the title and description */}
          <div className="mb-4 md:mb-0 md:mr-4">
            <h2 className="text-2xl font-bold">{title}</h2>{" "}
            {/* Displaying the main title */}
            <p className="text-gray-400 text-sm md:text-base">
              {discription}
            </p>{" "}
            {/* Displaying the optional description */}
          </div>

          {/* Container for buttons, such as CustomAddButton and DownloadButton */}
          <div className="flex gap-2 md:gap-4">
            {/* Adding a button for custom addition */}
            <CustomAddButton
              text="Add"
              onClick={() => {}}
              w={"auto"}
              h={"auto"}
            />

            {/* Adding a button for downloading a PDF report */}
            <DownloadButton
              text="Download PDF Report"
              onClick={() => {
                /* handle click */
              }}
              w="auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Export the CustomTitle component for use in other parts of the application
export default CustomTitle;
