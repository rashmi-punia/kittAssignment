import React from "react";
import { IoArrowBack } from "react-icons/io5";

const TicketDetail = ({
  setShowDetails,
}: {
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="absolute right-0 h-full bg-white z-10 w-[500px] border-l   p-4 ">
        
      <IoArrowBack onClick={() => setShowDetails(false)} />
      <p>Flight Details</p>
    </div>
  );
};

export default TicketDetail;
