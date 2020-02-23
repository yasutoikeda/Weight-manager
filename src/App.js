import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Nav,Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Hello World!!!
        </p> */}

        <h1>
          Weight-manager
        </h1>

        <div>
          
        


        <Card>
          <Card.Header>
          <Nav justify variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/home">入力画面</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">グラフ</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">設定画面</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        </div>

        

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
         

      </header>
    </div>
  );
}

export default App;


