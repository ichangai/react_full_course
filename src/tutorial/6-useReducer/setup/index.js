import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM'){
    const newPeople = [...state.people, action.payload]
    return {...state, people:data, isModalOpen:true, modalContent: 'item added'}
  }
  if (action.type === 'NO_VALUE'){
    return {...state, isModalOpen: true, modalContent: 'Please enter value'}
  }
  if(action.type === 'CLOSE_MODAL'){
    return {...state, isModalOpen: false}
  }
 throw new Error ('no matching action type')
};

const defaultState = {
  people: [],
  isModalOpen:false,
  modalContent: '',
}
const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState) 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){ 
      const newItem = {id:new Date().getTime().toString(), name}
      dispatch({type:'ADD_ITEM', payload: newItem});
      setName('')
    }else{
      dispatch({type: 'NO_VALUE'})
    }
  }
  const closeModal = () => {

  }
  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {state.people.map(person => {
        const {id, name} = person;
        return (
          <div key={id}>
              <h4>{name}</h4>
          </div>
        )
      })

      }
    </>
  )
};

export default Index;