import React from "react";
import NewProject from '../NewProject/NewProject';
//import progressbar from 'progressbar.js';
import './ProjectCards.scss';

class ProjectCards extends React.Component {
    progressbarRef = React.createRef();
    //progressbarRef2 = React.createRef();
    componentDidMount() {
        const ProgressBar = require('progressbar.js');
        new ProgressBar.Circle(this.progressbarRef.current, {
            strokeWidth: 10,
            easing: 'easeInOut',
            duration: 1400,
            color: '#65A8FC',
            trailColor: '#2C2F33',
            trailWidth: 10,
            svgStyle: {
                strokeLinecap: 'round'
            }
        });
        /* new ProgressBar.Circle(this.progressbarRef2.current, {
            strokeWidth: 10,
            easing: 'easeInOut',
            duration: 1400,
            color: '#65A8FC',
            trailColor: '#2C2F33',
            trailWidth: 10,
            svgStyle: {
                strokeLinecap: 'round'
            }
        }); */
    }
    render() {
        const projects = [
            {
                name: "Autodesk",
                logo: "autodesk",
                teamMembers: [
                    {
                        name: "Raima Hasan",
                        position: "Team Leader",
                    },
                    {
                        name: "Nisha Anjum",
                        position: "SQA Engineer",
                    },
                    {
                        name: "Sami Ahmed",
                        position: "Developer",
                    },
                    {
                        name: "Raima Hasan",
                        position: "Network Support",
                    },
                ],
                progress: 70,
            },
            {
                name: "Target",
                logo: "target",
                teamMembers: [
                    {
                        name: "Leo Resim",
                        position: "Team Leader",
                    },
                    {
                        name: "Tasfik Hamid",
                        position: "UI/UX Designer",
                    },
                    {
                        name: "Alizah Binte",
                        position: "Developer",
                    },
                    {
                        name: "Mehrin Sabnam",
                        position: "QA Engineer",
                    },
                ],
                progress: 52,
            }
        ];

        return (
            <div class="projects-cards">
                {
                    projects.map((project, i) =>
                        <div className="project-card">
                            <div className="project-card__item">
                                <div className="project-card__item-title">Project:</div>
                                <div className="project-card__logo">
                                    <img src={`img/logo/${project.logo}.png`} alt={`${project.logo} logo`} />
                                </div>
                            </div>
                            <div className="project-card__item">
                                <div className="project-card__item-title">Team Members:</div>
                                <ul className="project-card__team-members">
                                    {
                                        project.teamMembers.map((member, j) =>
                                            <li class="team-member">
                                                <img className="team-member__avatar" src={`img/team-members/project-${i + 1}/0${j + 1}.png`} alt="" />
                                                <div className="team-member__name">{member.name}</div>
                                                <div className="team-member__position">{member.position}</div>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="project-card__item">
                                <div className="project-card__item-title">Project Progress:</div>
                                <div className="project-card__progress">
                                    <div id={`progress_${i + 1}`} className="progress" ref={this.progressbarRef}>
                                        <div className="progress__percent">{project.progress}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <NewProject />
            </div>
        );
    }
}

export default ProjectCards;