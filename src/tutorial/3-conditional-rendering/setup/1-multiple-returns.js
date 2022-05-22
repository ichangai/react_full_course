import React, { useState, useEffect } from 'react';
import loader from './../../../assets/loader.gif'

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState('Default User');

  useEffect(() => {
    fetch(url)
    .then(resp => {
      if(resp.status >= 200 && resp.status <= 299){
        return resp.json()
      }else{
        setLoading(false)
        setError(true);
        throw new Error (resp.statusText)
      }
    })
    .then((user) => {
      const { login } = user;
      setUser(login);
      setLoading(false);
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <React.Fragment>
      {isLoading && <img src={loader}/>}
      {isError && <h2>Error...</h2>}
      {user && <h2>{user}</h2>}
    </React.Fragment>
  )
};

export default MultipleReturns;
