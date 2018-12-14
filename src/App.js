import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <SayFullName name="Alex" surname="Elkin" link="vk.com" />
            <SayFullName name="Katya" surname="Elkina" link="fb.com" />
            <SayFullName name="Big" surname="El" link="twitt.com" />
        </div>
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
      </div>*/
    );
  }
}


function SayFullName(props){
    return (
        <div>
            <h1>My name is {props.name}, surname - {props.surname} </h1>
            <a href={props.link}>My profile </a>
        </div>
    )
}


export default App;
