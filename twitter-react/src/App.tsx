import React from 'react';
import logo from './logo.svg';
import './App.css';

import SocketContext from "./socket-context";

import socketIOClient, { Socket } from 'socket.io-client';
import { HomeComponent } from './components/Home';

let socket:typeof Socket = socketIOClient("http://localhost:8080/");

function App() {
  // initiateSocket();
  return (
    <SocketContext.Provider value={{socket}}>
      <HomeComponent />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
