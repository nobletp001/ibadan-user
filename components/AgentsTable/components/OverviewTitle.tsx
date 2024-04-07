import React from "react";
import CustomAddButton from "@/components/common/customAddButton/customAddButton";
import DownloadButton from "@/components/common/customDownLoadButton/customDownloadButton";

interface OverviewTitleType {
  title: string;
  isShowButton?: boolean;
  discription?: string;
  type: string;
  handleOpen?:()=>void
}

function OverviewTitle({
  title,
  discription,
  isShowButton,
  type,
  handleOpen
}: OverviewTitleType) {
  return (
    <>
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {type === "overview" && (
            <div className="mb-4 md:mb-0 md:mr-4">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-gray-400 text-sm md:text-base">
                {discription}
              </p>
            </div>
          )}
          {type !== "overview" && (
            <div className="mb-4 md:mb-0 md:mr-4 flex items-center gap-2">
              <h2 className="text-2xl font-bold">{title} -</h2>
              <p className="text-gray-400 text-sm md:text-base">
                {discription}
              </p>
            </div>
          )}

          {isShowButton && (
            <div className="flex gap-2 md:gap-4">
              <CustomAddButton text="Add" onClick={handleOpen} w={"auto"} h={'auto'} />

              <DownloadButton
                text="Download PDF Report"
                onClick={() => {
                  /* handle click */
                }}
                w="auto"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default OverviewTitle;
