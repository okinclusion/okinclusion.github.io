import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventName, setEventName] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load events from localStorage on component mount
    const storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  useEffect(() => {
    // Save events to localStorage whenever events state changes
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleCreateEvent = () => {
    if (selectedDate && eventName) {
      const newEvent = {
        id: new Date().getTime(),
        date: selectedDate, // Ensure selectedDate is a Date object
        title: eventName,
      };
      setEvents([...events, newEvent]);
      setEventName("");
    }
  };

  const getEventsForDate = (date) => {
    return events.filter(
      (event) => event.date instanceof Date && event.date.toDateString() === date.toDateString()
    );
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  return (
    <div className="app">
      <h1>Events at OI</h1>
      <div className="container">
        <div className="calendar-container">
          <Calendar
            value={selectedDate}
            onClickDay={handleDateClick}
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
                  <li key={event.id}>
                    {event.title}
                    <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                  </li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="Event Name"
                value={eventName}
                onChange={handleEventNameChange}
              />
              <button onClick={handleCreateEvent}>Add Event</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
