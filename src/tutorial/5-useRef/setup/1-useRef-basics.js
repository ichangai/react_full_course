import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refName = useRef(null);
  const refEmail = useRef(null);
  const refAge = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refName.current.value);
    console.log(refEmail.current.value);
    console.log(refAge.current.value);
  }

  return (
  <>
  <form className="form-control" onSubmit={handleSubmit}>
    <div className="div">
          <label htmlFor="">Name</label>
          <input type="text" ref={refName} />
          <label htmlFor="">Email</label>
          <input type="email" ref={refEmail} />
          <label htmlFor="">Age</label>
          <input type="text" ref={refAge} />
      <button type='submit'>Submit</button>
      </div>
  </form>
  </>
  )
};

export default UseRefBasics;
