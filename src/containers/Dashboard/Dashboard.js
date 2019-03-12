import React, { Component } from 'react';

import Backgroundsf from '../../components/Backgroundsf/Backgroundsf';
import Backgroundsl from '../../components/Backgroundsl/Backgroundsl';
import Cars from '../../components/Cars/Cars'
import Numbers from '../../components/Numbers/Numbers'
import './Dashboard.css';

class Dashboard extends Component {
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

    render () {
        return (
            <div className="Dashboard">
                <Numbers />
			  <hr/>
                <Cars />
			  <hr/>
                <Backgroundsf />
                <Backgroundsl clicked={this.changeColorHandler} style={this.state.style} buttonTitle={this.state.buttonTitle} />
            </div>
        )
    }
}

export default Dashboard;
