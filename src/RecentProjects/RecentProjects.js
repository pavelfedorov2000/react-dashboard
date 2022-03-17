import React from "react";
import TableHead from './TableHead';
import TableBody from './TableBody';
import './RecentProjects.scss';

class RecentProjects extends React.Component {
    render() {
        return (
            <section className="recent-projects">
                <div className="recent-projects-table">
                    <TableHead />
                    <TableBody />
                </div>
            </section>
        );
    }
}

export default RecentProjects;