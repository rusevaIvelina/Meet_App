import React, { Component } from 'react';

 class NumberOfEvents extends Component {

    
    render() {
        return(
        <div className="NumberOfEvents">
            <label className='number-label'> number of entries </label>
            <input type="number" className="number"
            min="1" max="100"
            value={this.props.numberOfEvents} 
            onChange={(e) => this.props.updateNumberOfEvents(e)}/>
        </div>
        

        )
    }};


export default NumberOfEvents;