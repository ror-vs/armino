import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef, useState } from "react";
import { createEventId, INITIAL_EVENTS } from "./event-utils";
import CustomModal from "./Modal";
import { Button, Modal, Input } from "antd";

const Calendar = () => {
  const calendarRef = useRef(null);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [deleteEvent, setDeleteEvent] = useState(false);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleDateSelect = (selectInfo) => {
    console.log(selectInfo);
    setStart(selectInfo.startStr);
    setEnd(selectInfo.endStr);
    setShowEdit(true);
    if (title && start && end) {
      setCurrentEvents((currentEvents) => [
        ...currentEvents,
        {
          id: createEventId(),
          title,
          start,
          end,
          allDay: selectInfo.allDay,
        },
      ]);
    }
    console.log("current events", currentEvents);
  };

  const handleEventClick = (clickInfo) => {
    console.log(clickInfo.title, "clickInfo");
    if (clickInfo) {
      setCurrentEvent(clickInfo.event);
      setIsModalOpen(true);
    }
  };

  const handleEvents = (events) => {
    setCurrentEvents({
      currentEvents: events,
    });
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>{" "}
      </div>
    );
  };
  function handleDeleteEvent() {
    if (currentEvent) {
      let newEvents = currentEvents.filter((item) => {
        item.id !== currentEvent.id;
      });
      setCurrentEvents(newEvents);
    }
  }
  return (
    <>
      <CustomModal
        id={currentEvent.id}
        title={currentEvent.title}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleDeleteEvent={handleDeleteEvent}
        handleDateSelect={handleDateSelect}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
      />
      {showEdit && (
        <Modal
          title="Event Modal"
          open={showEdit}
          onOk={() => setShowEdit(false)}
          onCancel={() => setShowEdit(false)}
        >
          <Input
            style={{ marginBottom: "10px", maxWidth: "400px" }}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
          />
          <Button type="primary" onClick={handleDateSelect}>
            Add Event
          </Button>
        </Modal>
      )}
      <FullCalendar
        height={700}
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="timeGridWeek"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={weekendsVisible}
        events={currentEvents} // alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
      eventAdd={function(){}}
      eventChange={function(){}}
      eventRemove={function(){}}
      */
      />
    </>
  );
};

export default Calendar;
