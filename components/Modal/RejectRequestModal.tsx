import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CustomTextarea from "../common/customTextArea";
import CustomSelect from "../common/customSelect";
import CustomButton from "../common/customButton";
type RejectRequestModalProps = {
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
    md: "500px",
    xs: "90%",
  },
  bgcolor: "background.paper",
  border: "0px solid #fff",
  boxShadow: 24,
  p: 4,
  height: "auto",
  maxHeight: "100vh",
  borderRadius: "1rem",
};
const RejectRequestModal: React.FC<RejectRequestModalProps> = ({
  open,
  handleOpen,
  handleClose,
}) => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

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
          <form className="w-full">
            <div className="my-6">
              <CustomSelect
                label="Select an option"
                name="customSelect"
                options={options}
                placeholder="Choose an option"
                error=""
                onChange={() => {}}
              />
            </div>
            <div className="my-6">
              <CustomTextarea
                label="Username"
                name="username"
                placeholder="Enter your username"
                error=""
                onChange={() => {}}
              />
            </div>
            <div className="mt-6">
              <CustomButton
                text="Reject request"
                backgroundColor="#F0502F"
                textColor="white"
                onClick={() => {}}
              />
            </div>
            <div className="my-4">
              <CustomButton
                text="Cancel"
                backgroundColor="#fccdc7"
                textColor="#F0502F"
                onClick={() => {}}
              />
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default RejectRequestModal;
