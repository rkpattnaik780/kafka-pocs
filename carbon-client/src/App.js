import React from 'react';
import './App.css';
import { PageHeader } from "./components/Header";
import { StoryContent } from './components/PageContent';
import { PageSideNav } from './components/PageSideNav';

import socketIOClient from 'socket.io-client';


import SocketContext from "./socket-context";
import { HashRouter as Router , Switch, Route } from "react-router-dom";

import "@carbon/charts/styles.css";
import { LoginPage } from './components/LoginPage';

let socket = socketIOClient("http://localhost:8080/");

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/charts" component={StoryContent} />
    </Switch>
  </Router>
);

function App() {
  return (
    <SocketContext.Provider value={{socket}}>
      <div className="App">
        <PageSideNav />
        <PageHeader />
        <Routes />
      </div>
    </SocketContext.Provider>
  );
}

export default App;
