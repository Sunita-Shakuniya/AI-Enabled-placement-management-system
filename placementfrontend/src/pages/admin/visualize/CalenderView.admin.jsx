import React, { useState } from 'react'; // Import useState
import { Calendar, dateFnsLocalizer} from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarView = ({ placementDrives }) => {
  
  const [date, setDate] = useState(new Date()); // Add date state
  const events = placementDrives
    .map((drive) => {
      if (!drive.drive_date || typeof drive.drive_date !== 'string') {
        console.warn('Invalid drive_date:', drive.drive_date);
        return null;
      }

      const startDate = new Date(drive.drive_date);
      if (isNaN(startDate.getTime())) {
        console.warn('Invalid date format:', drive.drive_date);
        return null;
      }
      
      return {
        title: `Drive for Company ID: ${drive.company_id}`,
        start: startDate,
        end: startDate,
        allDay: true,
        status: drive.status,
      };
    })
    .filter((event) => event !== null);

  // Event style getter
  const eventStyleGetter = (event) => {
    let backgroundColor;
    switch (event.status) {
      case "Completed":
        backgroundColor = "#4CAF50"; // Green
        break;
      case "Upcoming":
        backgroundColor = "#2196F3"; // Blue
        break;
      case "Cancelled":
        backgroundColor = "#F44336"; // Red
        break;
      default:
        backgroundColor = "#FFC107"; // Default Yellow
    }

    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        opacity: 0.8,
        color: "white",
        border: "none",
        padding: "5px",
        textAlign: "center",
      },
    };
  };


  const handleNavigate = (newDate) => { // Add onNavigate handler
    setDate(newDate);
  };
  const handleViewChange = (newView) => {
    setView(newView);
  };
  return (
    <div className="mb-8 py-5 px-10">
      
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400 }}
        eventPropGetter={eventStyleGetter}
        date={date} // Add date prop
        onNavigate={handleNavigate} // Add onNavigate prop
      />
    </div>
  );
};

export default CalendarView;