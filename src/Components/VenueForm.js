import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const VenueForm = () => {

    const [venue, setVenue] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [capacity, setCapacity] = useState('');
    let navigate = useNavigate();

function handleVenueChange(e) {
    setVenue(e.target.value)
}
        
function handleAddressChange(e) {
    setAddress(e.target.value)
 }
        
function handlePhoneChange(e) {
    setPhone(e.target.value)
}
            
function handleCapacityChange(e) {
    setCapacity(e.target.value)
 }
        
function handleSubmit(e) {
    e.preventDefault();
        
    const newVenueObj = {
        venue_name: venue,
        address: address,
        phone: phone,
        capacity: capacity
        }

        
        fetch("http://localhost:9292/add-venue",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newVenueObj)
          })
          .then(response => response.json())
          .then((data) => console.log(data))  
          .then(navigate("/create-event", { replace: true }))
       
      } 


  return (
    <div>
      
    </div>
  )
}

export default VenueForm
