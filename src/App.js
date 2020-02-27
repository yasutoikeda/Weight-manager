import React, { Component } from 'react';
import LOGO from './logo.svg';
import './App.css';
import Menu from "./Menu";
import { Button,Nav,Card,Navbar } from 'react-bootstrap';
import { BrowserRouter  as Router } from "react-router-dom";

class App extends Component {
  render() {
      return (
          <Navbar bg="dark" variant="dark">
            <p>Weight-manager</p>
              <img
                  src={LOGO}
                  width="30"
                  height="30"
                  alt="React Bootstrap logo"
              />
              <Nav className="mr-auto">
                  <Nav.Link href="#home">カレンダー</Nav.Link>
                  <Nav.Link href="#features">グラフ</Nav.Link>
                  <Nav.Link href="#pricing">設定</Nav.Link>
              </Nav>
          </Navbar >
      );
  }
}
export default App;

