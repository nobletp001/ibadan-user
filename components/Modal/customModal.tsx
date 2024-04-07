import Image from "next/image";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
type CustomModalProps = {
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
    md: "40%",
  },
  bgcolor: "background.paper",
  border: "0px solid #fff",
  boxShadow: 24,
  p: 4,
  height: "auto",
  borderRadius: "1rem",
};
const CustomModal: React.FC<CustomModalProps> = ({
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
          <div className="flex justify-between pb-[1.1rem]">
            <div className="">
              <h2 className="request-style ">Are you sure ?</h2>
            </div>
            <button
              onClick={handleClose}
              className="flex items-center justify-center translate-x-3 cursor-pointer"
            >
              <span className="text-3xl text-black ">×</span>
            </button>
          </div>
          <p className="mt-2 reason">State reason:</p>
          <div className="w-full flex justify-end items-end gap-2 mt-4">
            <button className="boxAccept">Cancel</button>
            <button className="boxReject">Reject</button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default CustomModal;
