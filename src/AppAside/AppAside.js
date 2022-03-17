import React from "react";
import ProjectActivities from '../ProjectActivities/ProjectActivities';
import Schedule from '../Schedule/Schedule';

class AppAside extends React.Component {
    render() {
        return (
            <div className="app-content__aside">
                <ProjectActivities title="Project Activities" />
                <Schedule title="Schedule" />
            </div>
        );
    }
}

export default AppAside;