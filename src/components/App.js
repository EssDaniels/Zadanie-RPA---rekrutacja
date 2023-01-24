import './../scss/App.scss';
import React, { Component } from 'react';
import GetRaportFetch from './GetRaportsFetch';
import RaportsList from './RaportsList';
import FormAddRaport from './FormAddRaport';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'; 

const API = 'http://127.0.0.1:8000/api/reports';


class App extends Component{
 
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
    const raports = this.state.raports;

    return(
      <Router>
        <header>
          <nav>
            <ul>
              <li><NavLink to="/" exact>Raporty</NavLink></li>
              <li><NavLink to="/add">Dodaj raport</NavLink></li>
            </ul>
          </nav>
        </header>
        <section>
          <FormAddRaport add={this.addRaport} />
          <GetRaportFetch click={this.handleDataFetch}/>
          { raports ? <RaportsList raports={raports} /> : raports }
        </section>
      </Router>
    )
  }
}

export default App;
