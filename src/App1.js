import React, { Component } from 'react';

import './App.css';


class App extends Component {
  state = {
    backgroundColor: {backgroundColor: 'red'},
    buttonName: 'Change to blue'
  }

  changeColorHandler = () => {
    if (this.state.buttonName==='Change to blue') {
      this.setState({backgroundColor: {backgroundColor: 'blue'}})
      this.setState({buttonName: 'Change to red'})
    };
    if (this.state.buttonName==='Change to red') {
      this.setState({backgroundColor: {backgroundColor: 'red'}})
      this.setState({buttonName: 'Change to blue'})
    };
    
  }

  

  render() {
    return (
      <div style={this.state.backgroundColor} className="First">
        
        <button className="myButton" onClick={this.changeColorHandler}>
          {this.state.buttonName}
        </button>
       
      </div>
    );
  }
}

export default App;
