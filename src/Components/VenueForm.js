import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const VenueForm = () => {

    const [venue, setVenue] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [capacity, setCapacity] = useState('');
    let navigate = useNavigate();




  return (
    <div>
      
    </div>
  )
}

export default VenueForm
