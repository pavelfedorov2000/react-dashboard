import React from "react";
import './ProjectActivities.scss';

class ProjectActivities extends React.Component {
    render() {
        let projectActivities = [
            {
                name: "Tanjimul Alam",
                activity: "Completed Task: Update of Project Alfa",
                ago: "11 min ago",
            },
            {
                name: "Sarah Rahman",
                activity: "Request for HR Support: Update of Project X",
                ago: "53 min ago",
            },
            {
                name: "Anika Tabassum",
                activity: "Completed Task: Update of Project Remax",
                ago: "1 hours ago",
            },
            {
                name: "Raiyan Khan",
                activity: "QA Part Done: Update of Project Sonic",
                ago: "2 min ago",
            },
            {
                name: "Salma Hayek",
                activity: "Request for system Support: Update of Project Alfa",
                ago: "11 min ago",
            },
        ];
        return (
            <section className="project-activities">
                <h2 className="title app-content__aside-title">{this.props.title}</h2>
                <ul className="project-activities__items">
                    {
                        projectActivities.map((activity, i) =>
                            <li className="project-activities__item project-activity" key={`activity-${i}`}>
                                <div className="project-activity__img">
                                    <img src={`img/project-activities/0${i + 1}.png`} alt="" />
                                </div>
                                <div className="project-activity__content">
                                    <div className="project-activity__name">{activity.name}</div>
                                    <div>
                                        <div className="project-activity__descr">{activity.activity}</div>
                                        <div className="project-activity__ago">{activity.ago}</div>
                                    </div>
                                </div>
                                <a href="#" className="project-activity__link" style={{ backgroundImage: 'url(img/icons/arrow-right.svg)' }}></a>
                            </li>
                        )
                    }
                </ul>
                <div className="see-more">
                    <a href="#" className="see-more__link">See More</a>
                </div>
            </section>
        );
    }
}

export default ProjectActivities;