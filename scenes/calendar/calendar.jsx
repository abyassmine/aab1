import React, { useState, useEffect } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import Header from "../../componentss/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [fullCalendarEvents, setFullCalendarEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };

      // Update state
      setCurrentEvents((prevEvents) => [...prevEvents, newEvent]);

      // Save events to local storage
      saveEventsToLocalStorage([...currentEvents, newEvent]);

      // Update FullCalendar events
      updateFullCalendarEvents([...currentEvents, newEvent]);
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();

      // Update state
      setCurrentEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== selected.event.id)
      );

      // Save events to local storage
      saveEventsToLocalStorage(
        currentEvents.filter((event) => event.id !== selected.event.id)
      );

      // Update FullCalendar events
      updateFullCalendarEvents(
        currentEvents.filter((event) => event.id !== selected.event.id)
      );
    }
  };

  const updateFullCalendarEvents = (events) => {
    const formattedEvents = events.map((event) => ({
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      allDay: event.allDay,
    }));

    setFullCalendarEvents(formattedEvents);
  };

  const saveEventsToLocalStorage = (events) => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  };

  useEffect(() => {
    // Retrieve events from local storage when the component mounts
    const storedEvents = JSON.parse(localStorage.getItem("calendarEvents")) || [];
    setCurrentEvents(storedEvents);
  }, []);

  // Update FullCalendar events when the component mounts or when currentEvents changes
  useEffect(() => {
    updateFullCalendarEvents(currentEvents);
  }, [currentEvents]);

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            events={fullCalendarEvents}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
