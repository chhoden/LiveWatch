import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './Button.js';
import { DropdownButton, MenuItem} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
  }

  increment() {
    this.setState({
      num: this.state.num + 1
    });
  }

  decrement() {
    this.setState({
      num: this.state.num - 1
    });
  }

  render() {
    var title= "Danger";
    var i = 0;

    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      <div className="buttons">
      <Button title="Increment" onClick={() => {this.increment()}}/>
      <Button title="Decrement" onClick={() => {this.decrement()}}/>
      <p>{this.state.num}</p>
      </div>
      </header>

      <DropdownButton
      bsStyle={title.toLowerCase()}
      title={title}
      key={i}
      id={`dropdown-basic-${i}`}
      >
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>
      Active Item
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
      </div>
      );
  }
}

export default App;
