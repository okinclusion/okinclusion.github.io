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

  const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  const getMonthlyEvents = (month, year) => {
    return events.filter(
      (event) =>
        event.date instanceof Date &&
        event.date.getMonth() === month &&
        event.date.getFullYear() === year &&
        !event.isWholeMonthEvent
    );
  };

  const selectedMonth = selectedDate ? selectedDate.getMonth() : new Date().getMonth();
  const selectedYear = selectedDate ? selectedDate.getFullYear() : new Date().getFullYear();

  const monthlyEvents = getMonthlyEvents(selectedMonth, selectedYear);

  return (
    <div className="app">
      <h1>Events at OI</h1>
      <div className="container">
        <div className="event-list">
          <h2>Monthly Events</h2>
          <ul>
            {/* Filter and display only events that span the entire month */}
            {events
              .filter(
                (event) =>
                  event.isWholeMonthEvent && // Only events that span the whole month
                  event.date.getMonth() === selectedMonth && // Filter by selected month
                  event.date.getFullYear() === selectedYear // Filter by selected year
              )
              .map((event) => (
                <li key={event.id} className="event-info">
                  {event.title}
                </li>
              ))}
          </ul>
        </div>
        <div className="calendar-container">
        <Calendar
            value={selectedDate}
            onClickDay={handleDateClick}
            calendarType="US" // Set the calendar type to start weeks on Sunday
            tileClassName={({ date }) => {
              // Check if there's an event on this day
              const isEventDay = events.some(
                (event) =>
                  event.date instanceof Date &&
                  event.date.toDateString() === date.toDateString() &&
                  !event.isWholeMonthEvent // Exclude month-long events from tile coloring
              );
              return isEventDay ? "event-marked" : "";
            }}
          />
        </div>
        
        <div className="event">
          {selectedDate && (
            <div>
              <h2>Events on {selectedDate.toDateString()}</h2>
              {selectedEvents.length > 0 ? (
              <ul>
                {getEventsForDate(selectedDate).map((event) => (
                  <li className="event-info" key={event.id}>{event.title}</li>
                ))}
              </ul>
              ) : (
                <p className="event-info">No Events Today!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
