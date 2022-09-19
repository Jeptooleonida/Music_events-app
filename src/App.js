import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import EventContainer from './components/EventContainer';
import Header from './components/Header';
import EventForm from './components/EventForm';
import VenueForm from './components/VenueForm';
import './App.css';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
      fetch('http://localhost:9292/')
      .then(r => r.json())
      .then(data =>{
        setData(data)
      } )
    }, [])


  function handleDeleteEvent(eventToDelete){
    const updatedEvents = data.filter((event) => {
      if (event.id !== eventToDelete.id) {
        return event
      } else {
        return null
      }
    });
    setData(updatedEvents);
  }

  function handleUpdateEvent(updatedEventObj) {
    const editedEvents = data.map((event) => {
      if (event.id === updatedEventObj.id) {
        return updatedEventObj;
      } else {
        return event;
      }
    });
    setData(editedEvents);
  }

   return (
    <Router>
    <div className="app">
    <Header/>
      <Routes>
            <Route exact path="/my-events" element={
            <EventContainer
            data={data}
            handleDeleteEvent={handleDeleteEvent}
            handleUpdateEvent={handleUpdateEvent}
            />} />
            <Route exact path="/create-event" element={<EventForm />} />
            <Route exact path="/create-venue" element={<VenueForm />} />
      </Routes>
    </div>
    </Router>
  );
}
export default App;