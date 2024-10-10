import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Button } from "./ui/button";
import { dummyTickets, Ticket } from "@/constants/json";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";


const TicketDetail = ({
  setShowDetails,ticket
}: {
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>, ticket: Ticket
}) => {
  return (
    <div className="absolute right-0 top-0 h-full bg-white z-10 w-[550px] border-l pt-16   p-6 ">
      <Button
        onClick={() => setShowDetails(false)}
        variant={"secondary"}
        className="rounded-full p-2.5"
      >
        <IoArrowBack className="size-5" />
      </Button>
      <p className="py-6 font-medium border-b w-full text-xl">Flight Details</p>
      <div className="flex justify-between my-10  gap-4">
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <p className="text-zinc-500 text-sm ">{ticket.depature.timing}</p>
            <ul className="list-disc flex gap-1 list-inside ">
              {ticket.depature.number}
              <li>{ticket.depature.City}</li>
            </ul>
          </div>
          <div>
            <p className="text-zinc-500 text-sm ">{ticket.return.timing}</p>
            <ul className="list-disc flex gap-1 list-inside ">
              {ticket.return.number}
              <li>{ticket.return.City}</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-3 items-start *:text-sm *:text-zinc-500">
          <Image
            src={ticket.depature.image}
            width={50}
            height={10}
            alt="img"
            className="border rounded"
          />
          <div>
            <ul className="list-disc flex gap-1 list-inside ">
              {ticket.return.City}
              <li>{ticket.return.flightCode}</li>
            </ul>
            <ul className="list-disc flex gap-1 list-inside ">
              {ticket.return.stops}
              <li>{ticket.return.number}</li>
            </ul>
            <p>Flight Time {ticket.depature.duration}</p>
          </div>
        </div>
      </div>
      <div className="text-zinc-500 flex gap-2 justify-center items-center">
        <CiClock2 />
        <p>{ticket.return.duration}</p>
      </div>
      <div className="flex justify-between my-10  gap-4">
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <p className="text-zinc-500 text-sm ">{ticket.depature.timing}</p>
            <ul className="list-disc flex gap-1 list-inside ">
              {ticket.depature.number}
              <li>{ticket.depature.City}</li>
            </ul>
          </div>
          <div>
            <p className="text-zinc-500 text-sm ">{ticket.return.timing}</p>
            <ul className="list-disc flex gap-1 list-inside ">
              {ticket.return.number}
              <li>{ticket.return.City}</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-3 items-start *:text-sm *:text-zinc-500">
          <Image
            src={ticket.depature.image}
            width={50}
            height={10}
            alt="img"
            className="border rounded"
          />
          <div>
            <ul className="list-disc flex gap-1 list-inside ">
              {ticket.return.City}
              <li>{ticket.return.flightCode}</li>
            </ul>
            <ul className="list-disc flex gap-1 list-inside ">
              {ticket.return.stops}
              <li>{ticket.return.number}</li>
            </ul>
            <p>Flight Time {ticket.depature.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
