import React, { useState } from "react"
import { Calendar } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { format, parse, startOfWeek, getDay } from "date-fns"
import { dateFnsLocalizer } from "react-big-calendar"
import enUS from "date-fns/locale/en-US" // ES6 import for date-fns locale

// Setup the date localization
const locales = {
  "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

// Initial events to display
const events = [
  {
    title: "Meeting",
    allDay: false,
    start: new Date(2024, 8, 18, 10, 0), // September 18, 2024, at 10:00 AM
    end: new Date(2024, 8, 18, 12, 0), // September 18, 2024, at 12:00 PM
  },
]

const MyCalendar = () => {
  const [myEvents, setMyEvents] = useState(events)

  // Function to handle adding new events
  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Enter event title")
    if (title) {
      setMyEvents([...myEvents, { start, end, title }])
    }
  }

  // Function to handle selecting an existing event
  const handleSelectEvent = (event) => {
    window.alert(`Event: ${event.title}`)
  }

  return (
    <div className="calendar-container mx-5 my-5 p-5 bg-blue-50 rounded-lg shadow-lg">
      <h2 className="text-2xl text-gray-800 font-semibold text-center mb-4">
        My Scheduling Calendar
      </h2>
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }} // You can still keep inline style for height
        views={["month", "week", "day", "agenda"]} // Various views
        defaultView="month" // Default to month view
      />
    </div>
  )
}

export default MyCalendar
