import React, { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const useEventContext = () => {
  return useContext(EventContext);
};

export const EventProvider = ({ children }) => {
  // Predefined events
  const [events] = useState([
    // January
    { id: 0, date: new Date(2026, 0, 1), title: "New Year's Day" },
    { id: 1, date: new Date(2026, 0, 4), title: "World Braille Day" },
    { id: 2, date: new Date(2026, 0, 3), title: "Mahayana New Year" },
    // February
    { id: 3, date: new Date(2026, 1, 0), title: "Black History Month", isWholeMonthEvent: true },
    { id: 4, date: new Date(2026, 1, 14), title: "Valentine's Day", color: "#FF1493" },
    { id: 5, date: new Date(2026, 1, 17), title: "Random Acts of Kindness Day" },
    { id: 6, date: new Date(2026, 1, 17), title: "Chinese New Year", color: "#FF0000" },
    { id: 7, date: new Date(2026, 1, 16), title: "Family Day" },
    { id: 8, date: new Date(2026, 1, 25), title: "Pink Shirt Day", color: "#FF69B4" },
    { id: 9, date: new Date(2026, 1, 15), title: "Maha Shivaratri" },
    // March
    { id: 10, date: new Date(2026, 2, 1), title: "Cerebral Palsy Awareness Month", isWholeMonthEvent: true },
    { id: 11, date: new Date(2026, 2, 2), title: "Group Office Clean" },
    { id: 12, date: new Date(2026, 2, 2), title: "Gym/Swim" },
    { id: 13, date: new Date(2026, 2, 3), title: "Friend in Motion" },
    { id: 14, date: new Date(2026, 2, 3), title: "SOEC Walk" },
    { id: 15, date: new Date(2026, 2, 4), title: "Holi" },
    { id: 16, date: new Date(2026, 2, 4), title: "Hola Mohalla" },
    { id: 17, date: new Date(2026, 2, 4), title: "Craft" },
    { id: 18, date: new Date(2026, 2, 4), title: "Art Gallery Tour" },
    { id: 19, date: new Date(2026, 2, 5), title: "H20" },
    { id: 20, date: new Date(2026, 2, 5), title: "Cubby Clean" },
    { id: 21, date: new Date(2026, 2, 6), title: "Friends in Music" },
    { id: 22, date: new Date(2026, 2, 6), title: "Bowling" },
    { id: 23, date: new Date(2026, 2, 8), title: "International Women's Day" },
    { id: 24, date: new Date(2026, 2, 8), title: "Daylight Savings" },
    { id: 25, date: new Date(2026, 2, 9), title: "Group Office Clean" },
    { id: 26, date: new Date(2026, 2, 9), title: "Gym/Swim" },
    { id: 27, date: new Date(2026, 2, 10), title: "Friends in Motion" },
    { id: 28, date: new Date(2026, 2, 10), title: "SOEC Walk" },
    { id: 29, date: new Date(2026, 2, 11), title: "Library Craft" },
    { id: 30, date: new Date(2026, 2, 11), title: "Cubby Clean" },
    { id: 31, date: new Date(2026, 2, 12), title: "Skating" },
    { id: 32, date: new Date(2026, 2, 12), title: "Client Meeting" },
    { id: 33, date: new Date(2026, 2, 13), title: "Friends in Music" },
    { id: 34, date: new Date(2026, 2, 13), title: "Bowling" },
    { id: 35, date: new Date(2026, 2, 16), title: "Group Office Clean" },
    { id: 36, date: new Date(2026, 2, 16), title: "Gym/Swim" },
    { id: 37, date: new Date(2026, 2, 17), title: "St. Patrick's Day", color: "#008000" },
    { id: 38, date: new Date(2026, 2, 17), title: "Craft" },
    { id: 39, date: new Date(2026, 2, 18), title: "Apex Tubing" },
    { id: 40, date: new Date(2026, 2, 19), title: "Skating" },
    { id: 41, date: new Date(2026, 2, 19), title: "Cubby Clean" },
    { id: 42, date: new Date(2026, 2, 19), title: "Goal Review" },
    { id: 43, date: new Date(2026, 2, 20), title: "Crazy Sock Day" },
    { id: 44, date: new Date(2026, 2, 20), title: "Bowling" },
    { id: 45, date: new Date(2026, 2, 21), title: "World Down Syndrome Day", color: "#00BFFF" },
    { id: 46, date: new Date(2026, 2, 23), title: "Group Office Clean" },
    { id: 47, date: new Date(2026, 2, 23), title: "Gym/Swim" },
    { id: 48, date: new Date(2026, 2, 24), title: "SOEC Walk" },
    { id: 49, date: new Date(2026, 2, 25), title: "Craft" },
    { id: 50, date: new Date(2026, 2, 25), title: "Calendars" },
    { id: 51, date: new Date(2026, 2, 25), title: "Soup Day" },
    { id: 52, date: new Date(2026, 2, 26), title: "Purple Day for Epilepsy", color: "#A020F0" },
    { id: 53, date: new Date(2026, 2, 26), title: "Skating" },
    { id: 54, date: new Date(2026, 2, 26), title: "Cubby Clean" },
    { id: 55, date: new Date(2026, 2, 26), title: "Scavenger Hunt" },
    { id: 56, date: new Date(2026, 2, 27), title: "Craft" },
    { id: 57, date: new Date(2026, 2, 27), title: "Bowling" },
    { id: 58, date: new Date(2026, 2, 30), title: "Nature Walk" },   
    { id: 59, date: new Date(2026, 2, 31), title: "International Transgender Day of Visibility" },
    { id: 60, date: new Date(2026, 2, 31), title: "Friends in Motion" },
    { id: 61, date: new Date(2026, 2, 31), title: "SOEC Walk" },
    // April
    { id: 62, date: new Date(2026, 3, 0), title: "Autism Acceptance Month", isWholeMonthEvent: true },
    { id: 63, date: new Date(2026, 3, 2), title: "World Autism Day" },
    { id: 64, date: new Date(2026, 3, 14), title: "Vaisakhi" },
    { id: 65, date: new Date(2026, 3, 3), title: "Good Friday" },
    { id: 66, date: new Date(2026, 3, 29), title: "Easter Sunday" },
    { id: 67, date: new Date(2026, 3, 28), title: "Easter Monday" },
    // May
    { id: 68, date: new Date(2026, 4, 0), title: "Mental Health Awareness Month", isWholeMonthEvent: true },
    { id: 69, date: new Date(2026, 4, 17), title: "International Day Against Homophobia, Transphobia, and Biphobia" },
    { id: 70, date: new Date(2026, 4, 10), title: "Mother's Day" },
    { id: 71, date: new Date(2026, 4, 15), title: "Global Accessibility Awareness Day" },
    { id: 72, date: new Date(2026, 4, 18), title: "Victoria Day" },
    { id: 73, date: new Date(2026, 4, 25), title: "National AccessAbility Week" },
    { id: 74, date: new Date(2026, 4, 26), title: "National AccessAbility Week" },
    { id: 75, date: new Date(2026, 4, 27), title: "National AccessAbility Week" },
    { id: 76, date: new Date(2026, 4, 28), title: "National AccessAbility Week" },
    { id: 77, date: new Date(2026, 4, 29), title: "National AccessAbility Week" },
    { id: 78, date: new Date(2026, 4, 30), title: "National AccessAbility Week" },
    { id: 79, date: new Date(2026, 4, 31), title: "National AccessAbility Week" },
    
    // June
    { id: 80, date: new Date(2026, 5, 3), title: "Red Shirt Day" },
    { id: 81, date: new Date(2026, 5, 0), title: "Pride Month", isWholeMonthEvent: true },
    { id: 82, date: new Date(2026, 5, 21), title: "National Indigenous Peoples Day" },
    // July
    { id: 83, date: new Date(2026, 6, 0), title: "Disability Pride Month", isWholeMonthEvent: true },
    { id: 84, date: new Date(2026, 6, 1), title: "Canada Day" },
    { id: 85, date: new Date(2026, 6, 14), title: "International Non-Binary People's Day"},
    // August
    { id: 86, date: new Date("2026, 7, 0"), title: "Intersectionality Awareness Month", isWholeMonthEvent: false },
    { id: 87, date: new Date("2026, 8, 13"), title: "Ganesh Chaturthi", isWholeMonthEvent: false },
    { id: 88, date: new Date("2026, 8, 14"), title: "Ganesh Chaturthi", isWholeMonthEvent: false },

    // September
    { id: 89, date: new Date("2026, 8, 0"), title: "Hispanic Heritage Month", isWholeMonthEvent: true},
    { id: 90, date: new Date(2026, 8, 7), title: "Labour Day" },
    { id: 91, date: new Date(2026, 8, 9), title: "FASD Day" },
    { id: 92, date: new Date(2026, 8, 10), title: "World Suicide Prevention Day" },
    { id: 93, date: new Date(2026, 8, 21), title: "A Day to Remember (CHARGE)" },
    { id: 94, date: new Date(2026, 8, 23), title: "International Day of Sign Languages" },
    { id: 95, date: new Date(2026, 8, 30), title: "National Day for Truth and Reconciliation" },
    // October
    { id: 96, date: new Date(2026, 9, 1), title: "Community Inclusion Month", isWholeMonthEvent: true },
    { id: 97, date: new Date(2026, 9, 10), title: "World Inclusion Day" },
    { id: 98, date: new Date(2026, 9, 14), title: "International Pronouns Day" },
    { id: 99, date: new Date(2026, 10, 8), title: "Diwali" },
    { id: 100, date: new Date(2026, 9, 31), title: "Halloween" },

    // November
    { id: 101, date: new Date(2026, 10, 0), title: "Hindu Heritage Month", isWholeMonthEvent: true},
    { id: 102, date: new Date(2026, 10, 11), title: "Remembrance Day" },
    { id: 103, date: new Date(2026, 10, 20), title: "Transgender Day of Remembrance" },
    // December
    { id: 104, date: new Date(2026, 11, 0), title: "Universal Human Rights Month", isWholeMonthEvent: true},
    { id: 105, date: new Date(2026, 11, 3), title: "International Day of Persons with Disabilities" },
    { id: 106, date: new Date(2026, 11, 10), title: "International Human Rights Day" },
    { id: 107, date: new Date(2026, 11, 4), title: "Hanukkah Begins" },
    { id: 108, date: new Date(2026, 11, 24), title: "Christmas Eve" },
    { id: 109, date: new Date(2026, 11, 25), title: "Christmas Day" },
    { id: 110, date: new Date(2026, 11, 26), title: "Boxing Day" },
    { id: 111, date: new Date(2026, 11, 12), title: "Hanukkah Ends" },
    { id: 112, date: new Date(2026, 11, 26), title: "Kwanzaa Begins" },

    // January 2026
    { id: 113, date: new Date(2027, 0, 1), title: "Last Day of Kwanzaa" },



  ]);

  return (
    <EventContext.Provider value={{ events }}>
      {children}
    </EventContext.Provider>
  );
};
