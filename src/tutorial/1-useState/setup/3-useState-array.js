import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
const [people, setPeople] = useState(data);

const removeItem = (id) => {
  const deletePerson = people.filter(person => person.id !== id);
  setPeople(deletePerson)
}

  return<>
    {people.map(person => {
      const {id, name} = person;
        return(
          <div className="item" key={id}>
              <h4>{ name }</h4>
              <button onClick={() => removeItem(id)}>Delete</button>
          </div>
        )
      })
    }
    <button className="btn" onClick={() => removeItem()}> Remove Items</button>
  </>
};

export default UseStateArray;
