import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, email)
    if(firstName && email){
      const person = {firstName, email};
      // console.log(person);
      setPeople((people) => {
        return [...people, person];
      })
      setFirstName('');
      setEmail('');
    }
    else{
      console.log('empty values');
    }
  };

  return(
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName"> Name: </label>
            <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ outline: "none" }} />
          </div>
          <div className="form-control">
            <label htmlFor="email"> Email: </label>
            <input type="text" name="email" id="firstName" value={email} style={{ outline: "none" }} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type='submit'>Add Person</button>
        </form>
        {people.map((person) => {
          const {firstName, email} = person;
          return(
            <div className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          ) 
        })

        }
      </article>
    </>
  )
};

export default ControlledInputs;
