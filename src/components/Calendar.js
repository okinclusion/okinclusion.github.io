import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { useEventContext } from "./EventContext";

const App = () => {
  const { events, addEvent, deleteEvent } = useEventContext();
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventName, setEventName] = useState("");

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
        date: selectedDate,
        title: eventName,
      };
      addEvent(newEvent);
      setEventName("");
    }
  };

  const getEventsForDate = (date) => {
    return events.filter(
		(event) => event.date instanceof Date && event.date.toDateString() === date.toDateString()    );
  };

  const handleDeleteEvent = (eventId) => {
    deleteEvent(eventId);
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
