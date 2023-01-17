import React from "react";
import AppHeader from "../../comonents/Header";
import Calendar from "../../comonents/calendar";

const index = () => {
  return (
    <div>
      <AppHeader />
      <div
        style={{
          margin: "50px 300px",
          textAlign: "center",
        }}
      >
        <h1>Event Page</h1>
        <div style={{ maxWidth: "1500px", maxHeight: "400px" }}>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default index;
