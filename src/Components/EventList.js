import React, { useState } from 'react';
import EventCard from './EventCard';
import Search from './Search';


const EventList = ({data, handleDeleteEvent, handleUpdateEvent}) => {
    const [dataIndex, setDataIndex] = useState(0)
    const [searchTerm, setSearchTerm] = useState("")

    const eventList = [...data]
    .filter((data) => { 
      return data.user.username.toLowerCase().includes(searchTerm.toLowerCase());
    })
      .slice(dataIndex, dataIndex + 8)
  
      .map((data) => 
      <EventCard
          key={data.id}
          data={data}
          handleDeleteEvent={handleDeleteEvent}
          handleUpdateEvent={handleUpdateEvent}
      />)
  
      function handleClickMore() {
        setDataIndex((dataIndex) => (dataIndex + 8) % data.length);
      }
  
    return (
      <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="event-list">
      {eventList}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="next-container">
          <button className="next-button" onClick={handleClickMore}>Next</button>
      </div>
      </>    
    )
  }
  

export default EventList
