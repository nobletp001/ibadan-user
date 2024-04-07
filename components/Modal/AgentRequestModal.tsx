import Image from "next/image";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
type RequestModalProps = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    md: "50%",
  },
  bgcolor: "background.paper",
  border: "0px solid #fff",
  boxShadow: 24,
  p: 4,
  height: "auto",
  maxHeight: "100vh",
  borderRadius: "1rem",
};
const AgentRequestModal: React.FC<RequestModalProps> = ({
  open,
  handleOpen,
  handleClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={``}>
          <div className="border-b-gray-300 border-b-[1px] flex justify-between pb-[1.1rem]">
            <div className="">
              <h2 className="request-style ">Request</h2>
              <p className="mt-5 manage-style">Manage request</p>
            </div>
            <button
              onClick={handleClose}
              className="bg-red-500 h-[3.25rem] w-[3.25rem] rounded-full flex items-center justify-center translate-x-3 cursor-pointer"
            >
              <span className="bg-white h-[1.5rem] w-[1.5rem] rounded-full text-center text-red-500">
                ×
              </span>
            </button>
          </div>
          <div className="mt-[2.87rem] flex flex-col gap-[1.38rem]">
            <div className="flex justify-between">
              <span className="request-body">REQUEST ID</span>
              <span className="request-body2">ddd</span>
            </div>
            <div className="flex justify-between">
              <span className="request-body">REQUEST DATE</span>
              <span className="request-body2">2/19/21</span>
            </div>
            <div className="flex justify-between">
              <span className="request-body">LOCATION</span>
              <span className="request-body2">
                Oke Molete, Oke mopo, Ring road, Iwo road
              </span>
            </div>
            <div className="flex justify-between">
              <span className="request-body">PROPERTY PREFERENCE</span>
              <span className="request-body2">3 BEDROOMS</span>
            </div>
            <div className="flex justify-between">
              <span className="request-body">BUDGET RANGE</span>
              <span className="request-body2">#300,00 - #400,000</span>
            </div>
            <div className="flex justify-between">
              <span className="request-body">NAME</span>
              <span className="request-body2">Jane Cooper</span>
            </div>
            <div className="flex justify-between">
              <span className="request-body">STATUS</span>
              <span
                className={`text-yellow-500 bg-yellow-200  font-manrope text-[0.75rem] rounded-md text-center px-5`}
              >
                In Progress
              </span>
            </div>
            <div className="flex justify-between">
              <span className="request-body">EMAIL</span>
              <span className="request-body2">trungkienspktnd@gmail.com</span>
            </div>
            <div className="flex justify-between">
              <span className="request-body">WHATSAPP</span>
              <span className="request-body2">08071798413</span>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default AgentRequestModal;
