import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CustomSelect from "../common/customSelect";
import CustomButton from "../common/customButton";
import Image from "next/image";
import CallIcon from "../../public/call.png";
import SmsIcon from "../../public/sms-tracking.png";
type AssignRequestModalProps = {
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
    md: "53%",
    xs: "90%",
  },
  bgcolor: "background.paper",
  border: "0px solid #fff",
  boxShadow: 24,
  p: 4,
  height: "auto",
  borderRadius: "1rem",
};
const AssignRequestModal: React.FC<AssignRequestModalProps> = ({
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
        <div className={`my-5 `}>
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
            <div className="bg-[#E3F2F1] h-auto p-7 rounded-[24px] my-3">
              <div className=" mb-3">
                <h2 className="text-2xl text-[#191D23] font-bold ">
                  Hakeem Okunola
                </h2>
                <div className="flex  gap-3  my-3 ">
                  <div className="flex items-center gap-2">
                    <Image src={SmsIcon} alt="sms" className="object-contain" />
                    <p className="text-gray-400 text-xs ">
                      jennywison@gmail.com
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Image
                      src={CallIcon}
                      alt="call"
                      className="object-contain"
                    />
                    <p className="text-gray-400 text-xs ">+234 808 8269 876</p>
                  </div>
                </div>
              </div>

              <div className="w-full flex  bg-[#FFFFFF]  p-4 rounded-md">
                <div className="flex justify-between items-center   w-[75%]  ">
                  <div className=" ">
                    <h2 className="text-sm font-normal text-[#232323]">
                      Assigned
                    </h2>
                    <p className="text-lg mt-2  font-bold my-2 text-[#252C32]">
                      1,800
                    </p>
                  </div>
                  <div className="  ">
                    <h2 className="text-sm font-normal text-[#232323]">
                      Fulfilled
                    </h2>
                    <p className="text-lg mt-2 font-bold my-2 text-[#252C32]">
                      620
                    </p>
                  </div>
                  <div className="">
                    <h2 className="text-sm font-normal text-[#232323]">
                      Location
                    </h2>
                    <p className="text-lg mt-2  font-bold text-[#252C32]">
                      40+
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <CustomButton
                text="Assign to request"
                backgroundColor="#52ADA2"
                textColor="white"
                onClick={() => {}}
              />
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default AssignRequestModal;
