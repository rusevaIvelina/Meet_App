import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 13,
        message: '',
    };

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value <= 0 || value > 13) {
            this.setState({
                numberOfEvents: '',
                message: 'Enter number between 1 and 13',
            });
        } else {
            this.setState({
                numberOfEvents: value,
                message: '',
            });
        }
        this.props.updateNumbeOfEvents(event.target.value);
    };
    render() {
        return (
            <div className='NumberOfEvents'>
                <input
                  type='number'
                  className='newValue'
                  value={this.props.numberOfEvents}
                  onChange={(e) => this.handleInputChanged(e)}
                />
            </div>
        );
    }
}

export default NumberOfEvents; 