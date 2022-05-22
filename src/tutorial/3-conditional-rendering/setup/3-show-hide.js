import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show,setShow] = useState(false)

  return (
    <React.Fragment>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </React.Fragment>
  )
  
};

const Item = () => {

  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)

  })

  return(
    <React.Fragment>
      <div className="" style={{ marginTop:'2rem' }}>
        <h2>Window</h2>
        <h3>size: </h3>
      </div>
    </React.Fragment>
  )

}

export default ShowHide;
