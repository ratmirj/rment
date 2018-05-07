import React, { Component, PureComponent, createElement } from 'react';
import './App.scss';
import Greeter from './Greeter';
import PureComponentLocator from './PureComponentLocator'

class App extends Component {
    constructor(props){
        super(props);
        this.state = props;
    }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Simple React component
        </p>
          <Greeter name={this.state.name}/>
          <PureComponentLocator location={this.state.location}/>
      </div>
    );
  }
}

export default App;
