import React, { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const useEventContext = () => {
  return useContext(EventContext);
};

export const EventProvider = ({ children }) => {
  // Predefined events
  const [events] = useState([
    // January
    { id: 0, date: new Date(2025, 0, 1), title: "New Year's Day" },
    { id: 1, date: new Date(2025, 0, 4), title: "World Braille Day" },
    { id: 2, date: new Date(2025, 0, 14), title: "Mahayana New Year" },
    // February
    { id: 3, date: new Date(2025, 1, 0), title: "Black History Month", isWholeMonthEvent: true },
    { id: 4, date:  new Date(2025, 1, 14), title: "Valentine's Day" },
    { id: 5, date:  new Date(2025, 1, 17), title: "Random Acts of Kindness Day" },
    { id: 6, date:  new Date(2025, 1, 17), title: "Family Day"},
    { id: 7, date:  new Date(2025, 1, 26), title: "Pink Shirt Day" },
    { id: 8, date:  new Date(2025, 1, 26), title: "Maha Shivaratri" },
    // March
    { id: 9, date: new Date(2025, 2, 0), title: "Cerebral Palsy Awareness Month", isWholeMonthEvent: true },
    { id: 10, date: new Date(2025, 2, 0), title: "Ramadan", isWholeMonthEvent: true },
    { id: 11, date: new Date(2025, 2, 8), title: "International Women's Day" },
    { id: 12, date: new Date(2025, 2, 9), title: "Daylight Savings" },
    { id: 13, date: new Date(2025, 2, 10), title: "Holi" },
    { id: 14, date: new Date(2025, 2, 11), title: "Hola Mohalla" },
    { id: 15, date: new Date(2025, 2, 17), title: "St. Patrick's Day" },
    { id: 16, date: new Date(2025, 2, 21), title: "World Down Syndrome Day" },
    { id: 17, date: new Date(2025, 2, 26), title: "Purple Day for Epilepsy" },
    { id: 18, date: new Date(2025, 2, 31), title: "International Transgender Day of Visibility" },
    // April
    { id: 19, date: new Date(2025, 3, 0), title: "Autism Acceptance Month", isWholeMonthEvent: true },
    { id: 20, date: new Date(2025, 3, 2), title: "World Autism Day" },
    { id: 21, date: new Date(2025, 3, 14), title: "Vaisakhi" },
    { id: 22, date: new Date(2025, 3, 18), title: "Good Friday" },
    { id: 23, date: new Date(2025, 3, 20), title: "Easter Sunday" },
    { id: 24, date: new Date(2025, 3, 21), title: "Easter Monday" },
    // May
    { id: 25, date: new Date(2025, 4, 0), title: "Mental Health Awareness Month", isWholeMonthEvent: true },
    { id: 26, date: new Date(2025, 4, 17), title: "International Day Against Homophobia, Transphobia, and Biphobia" },
    { id: 27, date: new Date(2025, 4, 11), title: "Mother's Day" },
    { id: 28, date: new Date(2025, 4, 15), title: "Global Accessibility Awareness Day" },
    { id: 29, date: new Date(2025, 4, 19), title: "Victoria Day" },
    { id: 30, date: new Date(2025, 4, 25), title: "National AccessAbility Week" },
    { id: 31, date: new Date(2025, 4, 26), title: "National AccessAbility Week" },
    { id: 32, date: new Date(2025, 4, 27), title: "National AccessAbility Week" },
    { id: 33, date: new Date(2025, 4, 28), title: "National AccessAbility Week" },
    { id: 34, date: new Date(2025, 4, 28), title: "Red Shirt Day" },
    { id: 35, date: new Date(2025, 4, 29), title: "National AccessAbility Week" },
    { id: 36, date: new Date(2025, 4, 30), title: "National AccessAbility Week" },
    { id: 37, date: new Date(2025, 4, 31), title: "National AccessAbility Week" },
    
    // June
    { id: 38, date: new Date(2025, 5, 0), title: "Pride Month", isWholeMonthEvent: true },
    { id: 39, date: new Date(2025, 5, 21), title: "National Indigenous Peoples Day" },
    // July
    { id: 40, date: new Date(2025, 6, 0), title: "Disability Pride Month", isWholeMonthEvent: true },
    { id: 41, date: new Date(2025, 6, 1), title: "Canada Day" },
    { id: 42, date: new Date(2025, 6, 14), title: "International Non-Binary People's Day"},
    // August
    { id: 43, date: new Date("2025, 7, 0"), title: "Intersectionality Awareness Month", isWholeMonthEvent: false },
    { id: 44, date: new Date("2025, 7, 27"), title: "Ganesh Chaturthi", isWholeMonthEvent: false },
    // September
    { id: 45, date: new Date("2025, 8, 0"), title: "Hispanic Heritage Month", isWholeMonthEvent: true},
    { id: 46, date: new Date(2025, 8, 2), title: "Labour Day" },
    { id: 47, date: new Date(2025, 8, 9), title: "FASD Day" },
    { id: 48, date: new Date(2025, 8, 10), title: "World Suicide Prevention Day" },
    { id: 49, date: new Date(2025, 8, 21), title: "A Day to Remember (CHARGE)" },
    { id: 50, date: new Date(2025, 8, 23), title: "International Day of Sign Languages" },
    { id: 51, date: new Date(2025, 8, 30), title: "National Day for Truth and Reconciliation" },
    // October
    { id: 52, date: new Date(2025, 9, 1), title: "Community Inclusion Month", isWholeMonthEvent: true },
    { id: 53, date: new Date(2025, 9, 10), title: "World Inclusion Day" },
    { id: 54, date: new Date(2025, 9, 14), title: "International Pronouns Day" },
    { id: 55, date: new Date(2025, 9, 20), title: "Diwali" },
    { id: 56, date: new Date(2025, 9, 31), title: "Halloween" },

    // November
    { id: 57, date: new Date(2025, 10, 0), title: "Hindu Heritage Month", isWholeMonthEvent: true},
    { id: 58, date: new Date(2025, 10, 11), title: "Remembrance Day" },
    { id: 59, date: new Date(2025, 10, 20), title: "Transgender Day of Remembrance" },
    // December
    { id: 60, date: new Date(2025, 11, 0), title: "Universal Human Rights Month", isWholeMonthEvent: true},
    { id: 61, date: new Date(2025, 11, 3), title: "International Day of Persons with Disabilities" },
    { id: 62, date: new Date(2025, 11, 10), title: "International Human Rights Day" },
    { id: 63, date: new Date(2025, 11, 18), title: "Hanukkah Begins" },
    { id: 63, date: new Date(2025, 11, 24), title: "Christmas Eve" },
    { id: 64, date: new Date(2025, 11, 25), title: "Christmas Day" },
    { id: 65, date: new Date(2025, 11, 26), title: "Boxing Day" },
    { id: 66, date: new Date(2025, 11, 26), title: "Hanukkah Ends" },
    { id: 67, date: new Date(2025, 11, 26), title: "Kwanzaa Begins" },

    // January 2026
    { id: 68, date: new Date(2026, 0, 1), title: "Last Day of Kwanzaa" },



  ]);

  return (
    <EventContext.Provider value={{ events }}>
      {children}
    </EventContext.Provider>
  );
};
