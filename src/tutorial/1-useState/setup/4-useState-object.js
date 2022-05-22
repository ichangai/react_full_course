import React, { useState } from 'react';
import{ collection } from '../../../collection'

const UseStateObject = () => {
  const [person, setPerson] = useState(collection);

  const changeMessage = () => {
      setPerson({...person, message: "Glorious Purpose"})
  }
  return(
  <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.company}</h3>
      <h3>{person.role}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={() => changeMessage()}>Change Message</button>
  </React.Fragment>
  )
};

export default UseStateObject;
