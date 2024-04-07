import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProfileTableWrapper from "./ProfileTableWrapper";
import Image from "next/image";
import CallIcon from "../../../public/call.png";
import SmsIcon from "../../../public/sms-tracking.png";

function Profile() {
  return (
    <Box sx={{ flexGrow: 1 }} className="py-[2.4rem] px-[.5rem] bg-white">
      <Grid container spacing={1}>
        <Grid item xs={12} lg={3}>
          <div className=" mb-16">
            <h2 className="text-2xl text-[#191D23] font-bold ">
              Hakeem Okunola
            </h2>
            <div className="flex flex-col  my-3 ">
              <div className="flex items- gap-2">
                <Image src={SmsIcon} alt="sms" className="object-contain" />
                <p className="text-gray-400 text-sm md:text-base">
                  jennywison@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex gap-2">
                <Image src={CallIcon} alt="call" className="object-contain" />
                <p className="text-gray-400 text-sm md:text-base">
                  +234 808 8269 876
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex">
            <div className="flex flex-col w-[95%] rounded-sm p-4 border-gray-300 border ">
              <div className=" border-gray-300 border-b my-3">
                <h2 className="text-sm font-normal text-[#232323]">Assigned</h2>
                <p className="text-lg mt-2  font-bold my-2 text-[#252C32]">
                  1,800
                </p>
              </div>
              <div className=" border-gray-300 border-b my-3 ">
                <h2 className="text-sm font-normal text-[#232323]">
                  Fulfilled
                </h2>
                <p className="text-lg mt-2 font-bold my-2 text-[#252C32]">
                  620
                </p>
              </div>
              <div className=" my-3">
                <h2 className="text-sm font-normal text-[#232323]">Location</h2>
                <p className="text-lg mt-2  font-bold text-[#252C32]">40+</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={9}>
          <ProfileTableWrapper />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
