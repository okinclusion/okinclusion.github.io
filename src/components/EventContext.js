import React, { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const useEventContext = () => {
  return useContext(EventContext);
};

export const EventProvider = ({ children }) => {
  // Predefined events
  const [events] = useState([
    // January
    { id: 0, date: new Date(2024, 0, 1), title: "New Year's Day" },
    // February
    { id: 1, date: new Date(2024, 1, 1), title: "Black History Month" },
    { id: 2, date: new Date(2024, 1, 14), title: "Valentine's Day" },
    { id: 3, date: new Date(2024, 1, 17), title: "Random Acts of Kindness Day" },
    { id: 4, date: new Date(2024, 1, 28), title: "Pink Shirt Day" },
    // March
    { id: 5, date: new Date(2024, 2, 1), title: "Cerebral Palsy Awareness Month" },
    { id: 6, date: new Date(2024, 2, 8), title: "International Women's Day" },
    { id: 7, date: new Date(2024, 2, 21), title: "World Down Syndrome Day" },
    { id: 8, date: new Date(2024, 2, 26), title: "Purple Day for Epilepsy" },

    { id: 9, date: new Date(2024, 2, 31), title: "International Transgender Day of Visibility" },
    // April
    { id: 10, date: new Date(2024, 3, 1), title: "Autism Acceptance Month" },
    { id: 11, date: new Date(2024, 3, 2), title: "World Autism Day" },
    // May
    { id: 12, date: new Date(2024, 4, 17), title: "International Day Against Homophobia, Transphobia, and Biphobia" },
    { id: 13, date: new Date(2024, 4, 24), title: "Victoria Day" },
    // June
    { id: 14, date: new Date(2024, 5, 1), title: "Pride Month" },
    { id: 15, date: new Date(2024, 5, 1), title: "Red Shirt Day" },
    { id: 16, date: new Date(2024, 5, 21), title: "National Indigenous Peoples Day" },
    // September
    { id: 17, date: new Date(2024, 8, 9), title: "FASD Day" },
    { id: 18, date: new Date(2024, 8, 21), title: "A Day to Remember (CHARGE)" },
    { id: 19, date: new Date(2024, 8, 30), title: "National Day for Truth and Reconciliation" },
    // November
    { id: 20, date: new Date(2024, 10, 11), title: "Remembrance Day" },
    { id: 21, date: new Date(2024, 10, 20), title: "Transgender Day of Remembrance" },
    // December
    { id: 22, date: new Date(2024, 11, 3), title: "International Day of Persons with Disabilities" },



    { id: 23, date: new Date(2024, 5, 5), title: "OI BBQ Lunch" },
    { id: 24, date: new Date(2024, 5, 6), title: "Tour of Basset House" },
    { id: 25, date: new Date(2024, 5, 13), title: "Skaha Games" },
    { id: 26, date: new Date(2024, 5, 16), title: "Father's Day" },
    { id: 27, date: new Date(2024, 5, 19), title: "PDSCL Dance" },
    { id: 28, date: new Date(2024, 5, 20), title: "Beach Day" },
    { id: 29, date: new Date(2024, 5, 26), title: "Gotta Goat Farm" },
    { id: 30, date: new Date(2024, 5, 27), title: "Linden Garden" },
    { id: 31, date: new Date(2024, 6, 1), title: "Canada Day" },
    { id: 32, date: new Date(2024, 0, ), title: "" },
    { id: 100, date: new Date(2025, 0, 1), title: "New Year's Day" },



  ]);

  return (
    <EventContext.Provider value={{ events }}>
      {children}
    </EventContext.Provider>
  );
};
