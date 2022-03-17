import React from "react";
import ScheduleList from './ScheduleList';
import './Schedule.scss';

class Schedule extends React.Component {
    render() {
        return (
            <section className="schedule">
                <h2 className="title app-content__aside-title">{this.props.title}</h2>
                <ScheduleList />
            </section>
        );
    }
}

export default Schedule;