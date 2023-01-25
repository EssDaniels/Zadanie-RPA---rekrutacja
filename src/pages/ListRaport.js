import React, { Component } from 'react';
import GetRaportFetch from './../components/GetRaportsFetch';
import RaportsList from './../components/RaportsList';


const API = 'http://127.0.0.1:8000/api/reports';

class ListRaport extends Component{
 
  state = {
    raports: null,
    bodyRaport : null 
  }

  handleDataFetch = () => {
    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error(response.status)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
         raports: data
      })
    })
    .catch(error =>  console.log(error))
  }

  render(){
    const raports = this.state.raports;

    return(
        <>
          <GetRaportFetch click={this.handleDataFetch}/>
          { raports ? <RaportsList raports={raports} /> : raports }
        </>
    )
  }
}


export default ListRaport;