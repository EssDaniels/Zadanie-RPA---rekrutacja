import React from 'react'
import ListRaport from '../pages/ListRaport'


const DeleteRaport = (props) => {

  const handleClick = () =>{
    const API = 'http://127.0.0.1:8000/api/reports/' + props.click;
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
  }
  fetch(API, requestOptions)
  .then(response => {
    if(response.ok){
      return response
    }
    throw Error(response.status)
  })
  .then(data => data)
  .catch(error =>  console.log(error))

  }

  return( <button onClick={handleClick}>Usuń</button>)
 
}


export default DeleteRaport;