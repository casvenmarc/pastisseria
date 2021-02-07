import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import { OpenContextProvider } from "./Components/header/hooks";
import { HashRouter } from 'react-router-dom';

//import Routes from "./Routes";


ReactDOM.render(
  
  
  <React.StrictMode >
    <Router>
    <HashRouter>
      <div >
        <OpenContextProvider>
          <App  />
        </OpenContextProvider>
      </div>
    </HashRouter>
    </Router>
    
  </React.StrictMode>,
  document.getElementById("root")

);


