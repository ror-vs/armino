import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef, useState } from "react";
import CustomModal from "./Modal";
import { Button, Modal, Input } from "antd";

const Calendar = () => {
  const calendarRef = useRef(null);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState("");
  const [editEvent, setEditEvent] = useState("");

  const [selectinfo, setSelectInfo] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [title, setTitle] = useState("");

  const handleDateSelect = (selectInfo) => {
    setSelectInfo(selectInfo);
    setIsModalOpen(true);
  };

  const handleEventClick = (clickInfo) => {
    if (clickInfo) {
      setCurrentEvent(clickInfo);
      setShowEdit(true);
      setEditEvent(clickInfo.event.title);
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
      currentEvent.event.remove();
      setShowEdit(false);
    }
  }

  const handleAddEvent = () => {
    let selectInfo = selectinfo;
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: Date.now(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
      setTitle("");
      setIsModalOpen(!isModalOpen);
    }
  };
  const handleUpdate = () => {
    let selectInfo = selectinfo;
    const calendarApi = selectInfo.view.calendar;
    const currentEventApi = calendarApi.getEventById(currentEvent.event.id);

    if (currentEventApi) {
      currentEventApi.setProp("title", editEvent);
      setShowEdit(!showEdit);
    }
  };

  return (
    <>
      <CustomModal
        title={editEvent}
        setTitle={setEditEvent}
        isModalOpen={showEdit}
        setIsModalOpen={setShowEdit}
        handleDeleteEvent={handleDeleteEvent}
        handleUpdate={handleUpdate}
      />

      <Modal
        title="Event Modal"
        open={isModalOpen}
        onOk={handleAddEvent}
        onCancel={() => setIsModalOpen(false)}
      >
        <Input
          value={title}
          style={{ marginBottom: "10px", maxWidth: "400px" }}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        />
      </Modal>

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
        events={currentEvents}
        initialEvents={currentEvents} // alternatively, use the `events` setting to fetch from a feed// alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventsSet={handleEvents}
      />
    </>
  );
};

export default Calendar;
