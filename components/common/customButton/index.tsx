import React from "react";

interface CustomButtonProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  backgroundColor,
  textColor,
  onClick,
}) => {
  return (
    <button
      className={`h-[2.813rem] w-full rounded-[2.75rem]   transition duration-300`}
      style={{ backgroundColor: backgroundColor, color: textColor, }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
