import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import EventContainer from './Components/EventContainer';
import Header from './Components/Header';
import EventForm from './Components/EventForm';
import VenueForm from './Components/VenueForm';
import Stats from './Components/Stats';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
      fetch('http://localhost:9292/')
      .then(r => r.json())
      .then(data => setData(data))
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
    <>
    <div className="app">
    <Header/>
      <Routes>
            <Route exact path='/my-events' element={
            <EventContainer 
            data={data} 
            handleDeleteEvent={handleDeleteEvent} 
            handleUpdateEvent={handleUpdateEvent}
            />} />
            <Route exact path='/create-event' element={<EventForm />} />
            <Route exact path='/create-venue' element={<VenueForm />} />
            <Route exact path='/stats' element={<Stats/>} />
      </Routes>  
    </div>
    </>
  );
}


export default App;
