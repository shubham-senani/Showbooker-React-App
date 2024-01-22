import "./App.css";
import React from "react";
import Layout from "./Layout";
import ShowDetail from "./components/ShowDetail";
import ShowList from "./pages/ShowList";
import { MovieProvider } from "./ContextPage";
import { Routes, Route } from "react-router-dom";
import Ticket from "./components/BookTicket";

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShowList />} />
          <Route path="detail/:id" element={<ShowDetail />} />
          <Route path="ticket/:id" element={<Ticket />} />
        </Route>
      </Routes>
    </MovieProvider>
  );
}

export default App;
