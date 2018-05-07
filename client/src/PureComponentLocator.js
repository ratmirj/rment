import React, { PureComponent } from 'react';
import './App.scss';

class PureComponentLocator extends PureComponent {
    constructor(props){
        super(props);
        this.state = props;
    }
    render(){
        return(
            <div><p>Your location is {this.state.location}</p></div>
        )
    }
}

export default PureComponentLocator;