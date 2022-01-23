import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

class Event extends Component {

    state= {
    event: {},
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {

    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="start-date">
          {event.start.dateTime} ({event.start.timeZone})
        </p>
        <p className="location">
          @{event.summary} | {event.location}
        </p>

        <Button variant="primary"
          className={`${collapsed ? "show" : "hide"}-details`}
          onClick={this.handleClick}
        >
          {collapsed ? "Show Details" : "Hide Details"}
        </Button>

        {!collapsed &&
              <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
                <h3>Find out more about the event</h3>
                <a href={event.htmlLink} rel="noreferrer" target="_blank">
                  See details on Google Calendar
                </a>
                <p className="event-description">{event.description}</p>
              </div>
             }
          </div>
         );
        }
      }
        
        
export default Event;