import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

 class NumberOfEvents extends Component {
    
    render() {
        return(
        <div className="NumberOfEvents">
            <ErrorAlert text={this.props.errorText}/>
            <label className='number-label'> Number of Events </label>
            <input type="number" className="number"
            min="1" max="32"
            value={this.props.numberOfEvents} 
            onChange={(e) => this.props.updateNumberOfEvents(e)}/>
        </div>

        )
    }};


export default NumberOfEvents;