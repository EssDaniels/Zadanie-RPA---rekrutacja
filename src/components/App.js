import './../scss/App.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Navigation from './../layouts/Navigations';
import Page from './../layouts/Page';


const App = () =>{
  
    return(
      <BrowserRouter>
        <header>
          <Navigation/>
        </header>
        <section>
         <Page />
        </section>
      </BrowserRouter>
    )
  
}

export default App;
