import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const BookTicket = () => {
  const [username, setUsername] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [totalTickets, setTotalTickets] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ticketData")) || {};
    setUsername(storedData.username || "");
    setUserNumber(storedData.userNumber || "");
    setSelectedDate(storedData.selectedDate || "");
    setTotalTickets(storedData.totalTickets || "");
  }, []);

  useEffect(() => {
    const ticketData = { username, userNumber, selectedDate, totalTickets };
    localStorage.setItem("ticketData", JSON.stringify(ticketData));
  }, [username, userNumber, selectedDate, totalTickets]);

  const handleSave = () => {
    alert("Data saved!");
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <label className="m-4 fs-4 fw-bold">Pick tickets for {id}</label>
      <div className="">
        <div className="input m-4">
          <label htmlFor="name" className="m-2">
            Username:{" "}
          </label>
          <input
            type="text"
            value={username}
            id="name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="input m-4">
          <label htmlFor="number" className="m-2">
            Mobile Number:{" "}
          </label>
          <input
            type="text"
            value={userNumber}
            id="number"
            onChange={(e) => {
              setUserNumber(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="">
        <div className="input m-4">
          <label htmlFor="chooseDate" className="m-2">
            Choose a Date:
          </label>
          <input
            type="date"
            id="chooseDate"
            value={selectedDate}
            name="chooseDate"
            onChange={(e) => {
              setSelectedDate(e.target.value);
            }}
          />
        </div>
        <div className="input m-4">
          <label htmlFor="totalTickets" className="m-2">
            No. of Tickets:
          </label>
          <input
            type="number"
            id="totalTickets"
            value={totalTickets}
            name="totalTickets"
            onChange={(e) => {
              setTotalTickets(e.target.value);
            }}
          />
        </div>
      </div>

      <button onClick={handleSave} className="btn bg-primary">
        Confirm
      </button>
    </div>
  );
};

export default BookTicket;
