import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
const EventCard = ({ data }) => {
  const [isPastEvent, setIsPastEvent] = useState(false);

  useEffect(() => {
    const checkIfPastEvent = () => {
      const today = new Date();
      const endDate = new Date(data.endDate);
      if (endDate < today && endDate.toDateString() !== today.toDateString()) {
        setIsPastEvent(true);
      }
    };
    checkIfPastEvent();
  }, [data.endDate]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";
    return `${day}${suffix} ${month}, ${year}`;
  };

  const typeColors = {
    hackathon: "bg-blue-100 text-blue-500",
    meetup: "bg-yellow-100 text-yellow-500",
    workshop: "bg-green-100 text-green-500",
  };

  return (
    <li>
      <div
        className={`flex gap-3 group relative flex-col justify-between bg-white text-black text-left rounded-lg min-h-[300px] min-w-[350px] -ml-[50px] border-2 border-black `}
      >
        <div className="p-4">
          <div
            className={`w-fit h-8 rounded-md py-1 px-3 mb-6 capitalize ${
              typeColors[data.type]
            }`}
          >
            {data.type}
          </div>
          <h3 className="text-2xl font-medium mb-3">{data.name}</h3>
          <p
            className={`flex items-center gap-2 font-openSans ${
              isPastEvent ? "text-gray-500" : "text-black"
            }`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path>
              </svg>
            </span>
            <span>{formatDate(data.startDate)}</span>
            {data.endDate !== data.startDate && (
              <span>- &nbsp; {formatDate(data.endDate)}</span>
            )}
          </p>
        </div>
        <div
          className={`flex items-center ${
            isPastEvent ? "justify-between" : "justify-end"
          } gap-2 h-[60px] w-full bg-black text-white p-4`}
        >
          {isPastEvent && (
            <div className="flex items-center gap-2 font-medium cursor-pointer hover:underline">
              <a href={data.photosUrl} target="_blank" rel="noreferrer">
                See Photos
              </a>
            </div>
          )}
          <a
            href={isPastEvent ? data.blogLink : data.registerLink}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1 font-medium cursor-pointer hover:underline"
          >
            <p>{isPastEvent ? "Read More" : "Register"}</p>
            <span>
              <svg
                className="group-hover:translate-x-1 group-hover:-translate-y-1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </li>
  );
};

export default EventCard;
