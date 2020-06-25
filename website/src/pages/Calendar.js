import React, { Component } from 'react';


class Calendar extends Component {
    render() {
        return(
            <div className="container">
                <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Meeting Schedule</h1>
                    <p className="lead">
                        Team Meetings: Mondays and Thursdays at 3:30 PM on Zoom
                    </p>
                    <hr className="my-4" />
                    <iframe title="calendar" className="mb-2" src="https://calendar.google.com/calendar/embed?src=wlhsfrc%40gmail.com&ctz=America%2FLos_Angeles" frameBorder="0" width="100%" height="700" scrolling="no"/>
                </div>
            </div>
        );
    }
}

export default Calendar;