import React from "react";
import ProjectCards from '../ProjectCards/ProjectCards';
import RecentProjects from '../RecentProjects/RecentProjects';
import Charts from '../Charts/Charts';

class AppMain extends React.Component {
    render() {
        return (
            <div className="app-content__main">
                <ProjectCards />
                <RecentProjects />
                <Charts title="Project Overview" />
            </div>
        );
    }
}

export default AppMain;