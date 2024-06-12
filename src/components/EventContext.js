import React, { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const useEventContext = () => {
  return useContext(EventContext);
};

export const EventProvider = ({ children }) => {
  // Predefined events
  const [events] = useState([
    { id: 1, date: new Date(2024, 5, 5), title: "OI BBQ Lunch" },
    { id: 2, date: new Date(2024, 5, 6), title: "Tour of Basset House" },
    { id: 3, date: new Date(2024, 5, 13), title: "Skaha Games" },
    { id: 4, date: new Date(2024, 5, 16), title: "Father's Day" },
    { id: 5, date: new Date(2024, 5, 19), title: "PDSCL Dance" },
    { id: 6, date: new Date(2024, 5, 20), title: "Beach Day" },
    { id: 7, date: new Date(2024, 5, 26), title: "Gotta Goat Farm" },
    { id: 8, date: new Date(2024, 5, 27), title: "Linden Garden" },

  ]);

  return (
    <EventContext.Provider value={{ events }}>
      {children}
    </EventContext.Provider>
  );
};
