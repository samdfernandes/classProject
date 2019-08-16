import React, {Component} from 'react';
import axios from 'axios';

let baseURL = "http://localhost:3003"

console.log('current base URL', baseURL)


class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name: "",
      link: "",
      description: ""
    }
  }

  render() {
    return (
    <div>
      <NewForm />
      <Show />
    </div>
    )
  }
}

export default App;
