import React from "react";
import './Schedule.scss';

class ScheduleList extends React.Component {
    render() {
        let schedule = [
            {
                img: 'meeting',
                time: '9.20-10.20 am',
                event: 'Meeting With Team X',
                place: 'Meeting Room',
            },
            {
                img: 'presentation',
                time: '12.30-1.30 am',
                event: 'Presentation Demo On Target Project',
                place: 'Conference Room 2',
            },
            {
                img: 'meeting',
                time: '12.30-1.30 pm',
                event: 'Meeting With CEO',
                place: 'CEO’s Room',
            },
            {
                img: 'standup',
                time: '4.30-5.00 pm',
                event: 'Daily Standup Meet',
                place: 'Conference Room 1',
            },
        ];
        return (
            <ul className="schedule__list">
                {
                    schedule.map((item, i) =>
                        <li className="schedule__item" key={`schedule-${i}`}>
                            <div className="schedule__item-img"><img src={`img/icons/schedule/${item.img}.png`} alt="icon" /></div>
                            <div className="schedule__item-content">
                                <div className="schedule__item-time">{item.time}</div>
                                <div className="schedule__item-title">{item.event}</div>
                                <div className="schedule__item-place">at {item.place}</div>
                            </div>
                        </li>
                    )
                }
            </ul>
        );
    }
}

export default ScheduleList;