import React from "react";
import Header from "./Header"; // Ensure you have a Header component

// Image URLs for events
const Mappictures = {
  MARATHON:
    "https://th.bing.com/th/id/R.0efd588d998aa3ced9bd6d6b57ca9433?rik=L9YRJYhW5XPxGw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fe%2f9%2f6%2f400814.jpg&ehk=DCI%2bq3iDdTfFea831ymDNFHFywQQ4nz7c36HfI56vAA%3d&risl=&pid=ImgRaw&r=0",
  "WEB DEVELOPMENT":
    "https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?t=st=1716139008~exp=1716142608~hmac=aa4df07d4082c3d36cd0885a00ff95c52a5d0b363709d091c0b0ac7d2779b9f1&w=1380",
  "UI/UX":
    "https://img.freepik.com/free-photo/view-smartphones-with-abstract-wallpaper-coming-out-screen_23-2151033627.jpg",
  "APP DEVELOPMENT":
    "https://img.freepik.com/free-photo/smartphone-trend-social-media-platform_1409-5016.jpg?t=st=1716143839~exp=1716147439~hmac=1bdee680c999a20e491108ae669e78ec0721d0525a8b80247acfd53a35b860dc&w=1380",
  // Additional events...
};

// Sample event data
const events = [
  {
    id: 1,
    eventName: "MARATHON",
    eventTime: "10:00 AM",
    venue: "City Park",
    link: "#",
  },
  {
    id: 2,
    eventName: "WEB DEVELOPMENT",
    eventTime: "11:00 AM",
    venue: "Tech Hub",
    link: "#",
  },
  {
    id: 3,
    eventName: "UI/UX",
    eventTime: "12:00 PM",
    venue: "Design Lab",
    link: "#",
  },
  {
    id: 4,
    eventName: "APP DEVELOPMENT",
    eventTime: "1:00 PM",
    venue: "Innovation Center",
    link: "#",
  },
];

const Devs = () => {
  return (
    <div className="text-white">
      <div className="text-center my-10">
        <h1 className="text-6xl font-bold">EVENTS</h1>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[70%] mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative bg-gray-300 p-5 rounded-2xl backdrop-blur-sm bg-opacity-10 border border-gray-100 flex flex-col items-center text-center"
          >
            {/* Event Image */}
            <img
              src={Mappictures[event.eventName]}
              alt={event.eventName}
              className="w-full h-[140px] object-cover rounded-lg mb-4"
            />

            {/* Event Details */}
            <h2 className="text-xl font-bold">{event.eventName}</h2>
            <p className="font-semibold">Timing: {event.eventTime}</p>
            <p className="font-semibold">Venue: {event.venue}</p>

            {/* Register Button */}
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 bg-transparent hover:bg-gray-300 hover:text-black border border-white hover:border-transparent rounded-md py-1 px-4 uppercase">
                Register
              </button>
            </a>

            {/* Decorative Dot */}
            <div className="absolute bottom-4 right-4 w-5 h-5 bg-gradient-to-r from-amber-300 to-red-600 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Background Bubble Image */}
      <div className="fixed bottom-0 right-0 -z-50">
        <img
          className="w-[700px] h-[200px]"
          src="/Images/bubble.png"
          alt="Decorative Bubble"
        />
      </div>
    </div>
  );
};

export default Devs;
