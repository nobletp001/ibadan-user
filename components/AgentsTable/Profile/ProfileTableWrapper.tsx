"use client";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CustomInputFilter from "@/components/common/custonInpuFilter/customInputFilter";
import CustomTitle from "@/components/common/customTitle/CustomTitle";
import ProfileTable from "./ProfileTable";
const ProfileTableWrapper = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="w-full ">
      <div className="flex justify-between items-center my-1 ">
        {/* First Div */}
        <p className="text-lg  text-center font-bold text-[#252C32]">
        History
            </p>
        {/* Second Div with Material-UI Select */}
        <div>
          <div className="relative inline-block text-left">
            {/* Styled select dropdown */}
            <select
              className="appearance-none w-48 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 max-w-32 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={selectedValue}
              onChange={handleSelectChange}
              onClick={toggleDropdown}
              onBlur={() => setDropdownOpen(false)}
              onFocus={() => setDropdownOpen(true)}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            {/* Drop-down icon */}
            <div className="absolute right-0 top-2 flex items-center px-2 pointer-events-none">
              {isDropdownOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </div>
            {/* Up icon */}
          </div>
        </div>
      </div>
      <CustomInputFilter
        onChange={(value) => console.log("Input value:", value)}
        value=""
        w="100%" // Set the width as per your requirement
        placeholder={"Search by name or location"}
      />
      <div>
    <div>
      <ProfileTable/>
    </div>
      </div>
    </div>
  );
};

export default ProfileTableWrapper;
