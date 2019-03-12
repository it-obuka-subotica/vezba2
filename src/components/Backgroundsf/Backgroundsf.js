import React, { Component } from 'react';

import './Backgroundsf.css';

class Backgroundsf extends Component {
    state={
        style: {backgroundColor:'red', height:'100px', textAlign:'center'},
        buttonTitle:'Change to blue'
    }

    changeColorHandler = () => {
        if (this.state.buttonTitle==='Change to blue') {
          this.setState({style: {backgroundColor: 'blue', height:'100px', textAlign:'center'}})
          this.setState({buttonTitle: 'Change to red'})
        };
        if (this.state.buttonTitle==='Change to red') {
          this.setState({style: {backgroundColor: 'red', height:'100px', textAlign:'center'}})
          this.setState({buttonTitle: 'Change to blue'})
        };
        
      }

      render() {
          return(
              <div style={this.state.style} >
                <h1>Statefull Component</h1>
                <button onClick={this.changeColorHandler}>
                    {this.state.buttonTitle}
                </button>
              </div>
          )
      }
}

export default Backgroundsf;