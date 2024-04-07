"use client";
import React, { useState } from "react";
import OverviewTable from "./OverviewTable";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import OverviewTitle from "./components/OverviewTitle";
import CustomInputFilter from "../common/custonInpuFilter/customInputFilter";
import CustomAddButton from "../common/customAddButton/customAddButton";
import LocationTable from "./LocationTable";
import Profile from "./Profile/Profile";
import AgentRequestModal from "../Modal/AgentRequestModal";
import CustomModal from "../Modal/customModal";
import RejectRequestModal from "../Modal/RejectRequestModal";
import AssignRequestModal from "../Modal/AssignRequest";

const TableFragement = () => {
  const renderedTable = [
    { text: "overview", path: "/agents" },
    { text: "location", path: "/agents" },
    { text: "profile", path: "/agents" },
  ];
  const [open, setopen] = useState<boolean>(false);
  const handleOpen = () => setopen(true);
  const handleClose = () => setopen(false);
  const searchParams = useSearchParams();
  const selectedTable = searchParams.get("table") || "overview";

  const handleTableDisplayed = (selectedTable: string) => {
    let componentToRender;
    switch (selectedTable) {
      case "overview":
        componentToRender = <OverviewTable />;
        break;
      case "location":
        componentToRender = <LocationTable />;
        break;
      case "profile":
        componentToRender = <Profile />;
        break;
      default:
        componentToRender = <OverviewTable />;
    }
    return <div>{componentToRender}</div>;
  };

  return (
    <>
      <div className="w-full py-[3.4rem] px-[2.1rem] bg-white">
        {/* Table Title */}
        <div className="">
          {selectedTable === "overview" ? (
            <OverviewTitle
              title="Agents"
              discription="Manage all Agents"
              isShowButton={true}
              type="overview"
              handleOpen={handleOpen}
            />
          ) : selectedTable === "location" ? (
            <OverviewTitle
              title="Hey Hakeem "
              discription="here’s what’s happening with your account today"
              isShowButton={false}
              type="location"
            />
          ) : selectedTable === "profile" ? (
            <OverviewTitle
              title="Hey Hakeem "
              discription="here’s what’s happening with your account today"
              isShowButton={false}
              type="profile"
            />
          ) : (
            <OverviewTitle
              title="Agents"
              discription="Manage all Agents"
              isShowButton={true}
              type="overview"
            />
          )}

          <div
            className={`border-b-[1px] border-b-gray-300 w-full  mt-[2.12rem]`}
          >
            <div className="flex gap-2 text-[13.6px] text-[#191D23]">
              {renderedTable.map((table, index) => (
                <Link
                  key={index}
                  href={`?table=${table.text}`}
                  className={`capitalize w-[91.4px] text-center ${selectedTable === table.text ? "border-b-[#52ADA2] border-b-[2px] font-bold" : ""}`}
                >
                  {table.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {selectedTable === "overview" && (
          <CustomInputFilter
            onChange={(value) => console.log("Input value:", value)}
            value=""
            w="100%" // Set the width as per your requirement
            placeholder={"Search by name or location"}
          />
        )}

        {selectedTable === "location" && (
          <div className="flex w-full gap-3  items-center justify-between">
            <CustomInputFilter
              onChange={(value) => console.log("Input value:", value)}
              value=""
              w="85%" // Set the width as per your requirement
              placeholder={"Search by name or location"}
            />
            <CustomAddButton
              text="Add"
              onClick={() => {}}
              h="3rem"
              w="111.26px"
            />
          </div>
        )}
        <div>{handleTableDisplayed(selectedTable)}</div>
      </div>
      {/* <AgentRequestModal
    open={open}
    handleClose={handleClose}
    handleOpen={handleOpen}
    /> */}
      {/* <CustomModal
     open={open}
     handleClose={handleClose}
     handleOpen={handleOpen}
    /> */}
      {/* <RejectRequestModal 
     open={open}
     handleClose={handleClose}
     handleOpen={handleOpen}
    /> */}
      <AssignRequestModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
};

export default TableFragement;
