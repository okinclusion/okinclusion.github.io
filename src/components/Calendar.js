import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { useEventContext } from "./EventContext";

const App = () => {
  const { events } = useEventContext();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getEventsForDate = (date) => {
    return events.filter(
      (event) => event.date instanceof Date && event.date.toDateString() === date.toDateString()
    );
  };

  return (
    <div className="app">
      <h1>Events at OI</h1>
      <div className="container">
        <div className="calendar-container">
          <Calendar
            value={selectedDate}
            onClickDay={handleDateClick}
            calendarType="US" // Set the calendar type to start weeks on Sunday
            tileClassName={({ date }) =>
              selectedDate && date.toDateString() === selectedDate.toDateString()
                ? "selected"
                : events.some(
                    (event) => event.date instanceof Date && event.date.toDateString() === date.toDateString()
                  )
                ? "event-marked"
                : ""
            }
          />
        </div>
        <div className="event">
          {selectedDate && (
            <div>
              <h2>Events on {selectedDate.toDateString()}</h2>
              <ul>
                {getEventsForDate(selectedDate).map((event) => (
                  <li className="event-info" key={event.id}>{event.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
