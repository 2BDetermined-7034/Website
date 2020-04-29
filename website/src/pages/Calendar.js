import React, { Component, Fragment } from 'react';


class Calendar extends Component {
    render() {
        return(
            <Fragment>
                <div className="container" style={{zIndex: 2}}>
                    <div className="jumbotron text-center bg-white">
                        <h1 className="display-4 font-weight-bold">Meeting Schedule</h1>
                        <p className="lead">
                            Mondays and Fridays at 3:30 PM on Zoom
                        </p>
                        <hr className="my-4" />
                        <iframe title="calendar" className="mb-2" src="https://calendar.google.com/calendar/embed?src=wlhsfrc%40gmail.com&ctz=America%2FLos_Angeles" width="100%" height="700" frameborder="0" scrolling="no"/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Calendar;