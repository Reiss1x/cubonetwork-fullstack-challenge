import React from 'react'

export default function Formulario( { onSubmit}) {
    const [participation, setParticipation] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    
    const handleSubmit = (event) => {
    event.preventDefault();
    const participant = {firstName, lastName, participation}
    
    fetch("http://localhost:8080/participant/submit",{
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(participant)
    }).then(() => {
      console.log("New participant added.");
      onSubmit()
    
    })
    
    setFirstName("")
    setParticipation("")
    setLastName("")

  }

  const handleReset = async () => {
    try {
      const response = await fetch('http://localhost:8080/participant/resetAll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        console.log("Participants data reseted.");
        onSubmit();
      });    
    } catch (error) {
      console.error('Error reseting data:', error);
    }
  };

  return (
    <div className='container'>
        <form onSubmit={handleSubmit} className='formulario'>
        <input 
          placeholder="First Name"
          name="firstName"
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required/>
          <input 
          placeholder="Last Name"
          name="lastName"
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required/>
          <input 
          className='number-input'
          placeholder="Participation"
          name="participation"
          type="number"
          value={participation}
          onChange={e => setParticipation(e.target.value)}
          required/>

          <button className='submit-button' type='submit'>SEND</button>
        </form>
        <button className='reset-button' onClick={handleReset}>RESET</button>
      </div>
  )
}
