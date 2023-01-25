import React, { Component } from 'react';
import FormAddRaport from './../components/FormAddRaport';


const API = 'http://127.0.0.1:8000/api/reports';

class ListRaport extends Component{
 
  state = {
    raports: null,
    bodyRaport : null 
  }


  addRaport = (date, city, temperature, unit) => {
    const raport = {
      temperature,
      unit,
      city,
      date
    }
    this.setState({
      bodyRaport : raport
    }, this.sendRaportToApi)
  }

  
  sendRaportToApi = () => {
    if(this.state.bodyRaport){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.bodyRaport)
    }
    fetch(API, requestOptions)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error(response.status)
    })
    .then(response => console.log(response))
    .catch(error =>  console.log(error))
   }else{
     console.log('bodyRaport is null')
   }
  
  }


  render(){
    return(
        <>
           <FormAddRaport add={this.addRaport} />
        </>
    )
  }
}


export default ListRaport;