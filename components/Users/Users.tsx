// Importing necessary dependencies - "use client" is a custom import and React
"use client";
import React from "react";

// Importing custom components for the Users page
import CustomInputFilter from "../common/custonInpuFilter/customInputFilter";
import UsersTable from "../UsersTable/UsersTable";
import CustomTitle from "../common/customTitle/CustomTitle";

// Users component that represents the Users page
const Users = () => {
  return (
    // Main container for the Users page with padding and background color
    <div className="w-full py-[3.4rem] px-[2.1rem] bg-white">
      {/* Container for the title of the Users page */}
      <div className="">
        {/* Displaying a custom title with the main title and description */}
        <CustomTitle title="Users" discription="Manage all users" />
      </div>

      {/* Container for the input filter component */}
      <CustomInputFilter
        onChange={(value) => console.log("Input value:", value)} // Logging input value change
        value="" // Initial value of the input field
        w="100%" // Set the width as per your requirement
        placeholder={"Search by name or location"} // Display optional placeholder text
      />

      {/* Container for the UsersTable component */}
      <div>
        {/* TABLE BODY */}
        <div>
          {/* Displaying the UsersTable component */}
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

// Export the Users component for use in other parts of the application
export default Users;
