import React, { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const useEventContext = () => {
  return useContext(EventContext);
};

export const EventProvider = ({ children }) => {
  // Predefined events
  const [events] = useState([
    // // January
    // { id: 0, startDate: new Date("2025, 0, 1"), endDate: new Date("2025, 0, 1"), title: "New Year's Day" },
    // // February
    // { id: 1, startDate: new Date("2025, 1, 1"), endDate: new Date("2025, 1, 1"), title: "Black History Month", isWholeMonthEvent: true },
    // { id: 2, startDate: new Date("2025, 1, 14"), endDate: new Date("2025, 1, 14"), title: "Valentine's Day" },
    // { id: 3, startDate: new Date("2025, 1, 17"), endDate: new Date("2025, 1, 17"), title: "Random Acts of Kindness Day" },
    // { id: 4, startDate: new Date("2025, 1, 17"), endDate: new Date("2025, 1, 17"), title: "Family Day"},
    // { id: 5, startDate: new Date("2025, 1, 26"), endDate: new Date("2025, 1, 26"), title: "Pink Shirt Day" },
    // // March
    // { id: 5, startDate: new Date("2025, 2, 1"), endDate: new Date("2025, 2, 1"), title: "Cerebral Palsy Awareness Month", isWholeMonthEvent: true },
    // { id: 6, startDate: new Date("2025, 2, 8"), endDate: new Date("2025, 2, 8"), title: "International Women's Day" },
    // { id: 7, startDate: new Date("2025, 2, 9"), endDate: new Date("2025, 2, 9"), title: "Daylight Savings" },
    // { id: 8, startDate: new Date("2025, 2, 17"), endDate: new Date("2025, 2, 17"), title: "St. Patrick's Day" },
    // { id: 9, startDate: new Date("2025, 2, 21"), endDate: new Date("2025, 2, 21"), title: "World Down Syndrome Day" },
    // { id: 10, startDate: new Date("2025, 2, 26"), endDate: new Date("2025, 2, 26"), title: "Purple Day for Epilepsy" },
    // { id: 11, startDate: new Date("2025, 2, 31"), endDate: new Date("2025, 2, 31"), title: "International Transgender Day of Visibility" },
    // // April
    // { id: 12, date: new Date(2025, 3, 1), title: "Autism Acceptance Month", isWholeMonthEvent: true },
    // { id: 13, date: new Date(2025, 3, 2), title: "World Autism Day" },
    // { id: 14, date: new Date(2025, 3, 18), title: "Good Friday" },
    // { id: 15, date: new Date(2025, 3, 20), title: "Easter Sunday" },
    // { id: 16, date: new Date(2025, 3, 21), title: "Easter Monday" },
    // // May
    // { id: 17, date: new Date(2025, 4, 17), title: "International Day Against Homophobia, Transphobia, and Biphobia" },
    // { id: 18, date: new Date(2025, 4, 11), title: "Mother's Day" },
    // { id: 19, date: new Date(2025, 4, 19), title: "Victoria Day" },
    // { id: 20, date: new Date(2025, 5, 1), title: "Red Shirt Day" },
    // { id: 21, date: new Date(2025, 4, 28), title: "Red Shirt Day" },
    // // June
    // { id: 14, date: new Date(2025, 5, 1), title: "Pride Month", isWholeMonthEvent: true },
    
    // { id: 16, date: new Date(2025, 5, 21), title: "National Indigenous Peoples Day" },
    // // July

    // { id: 17, date: new Date(2025, 6, 1), title: "Canada Day" },
    // // September
    // { id: 18, date: new Date(2025, 8, 2), title: "Labour Day" },
    // { id: 19, date: new Date(2025, 8, 9), title: "FASD Day" },
    // { id: 20, date: new Date(2025, 8, 21), title: "A Day to Remember (CHARGE)" },
    // { id: 21, date: new Date(2025, 8, 30), title: "National Day for Truth and Reconciliation" },
    // // October
    // { id: 22, date: new Date(2025, 9, 1), title: "Community Inclusion Month", isWholeMonthEvent: true },
    // { id: 23, date: new Date(2025, 9, 31), title: "Halloween" },

    // // November
    // { id: 24, date: new Date(2025, 10, 11), title: "Remembrance Day" },
    // { id: 25, date: new Date(2025, 10, 20), title: "Transgender Day of Remembrance" },
    // // December
    // { id: 26, date: new Date(2025, 11, 3), title: "International Day of Persons with Disabilities" },



    
    // { id: 26, date: new Date(2025, 8, 3), title: "Summerland Fairy Garden" },
    // { id: 27, date: new Date(2025, 8, 5), title: "OK Inclusion End of Summer BBQ" },
    // { id: 28, date: new Date(2025, 8, 12), title: "Vaseaux Lake Boardwalk" },
    // { id: 29, date: new Date(2025, 8, 19), title: "Sncewips Heritage Museum" },
    // { id: 30, date: new Date(2025, 8, 25), title: "Nk'Mp Desert Cultural Centre" },
    // { id: 31, date: new Date(2025, 8, 26), title: "Talking Circle" },
    // { id: 32, date: new Date(2025, 8, 27), title: "Orange Shirt Day at OI" },
    // { id: 100, date: new Date(2025, 0, 1), title: "New Year's Day" },



  ]);

  return (
    <EventContext.Provider value={{ events }}>
      {children}
    </EventContext.Provider>
  );
};
