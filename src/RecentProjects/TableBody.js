import React from "react";

class TableBody extends React.Component {
  render() {
    let recentProjects = [
      {
        logo: "autodesk",
        created: "25 May, 2020",
        teamLeader: "Raima Hasan",
        due: "10 July, 2020",
        status: "In Process",
      },
      {
        logo: "target",
        created: "12 May, 2020",
        teamLeader: "Leo Resim",
        due: "28 June, 2020",
        status: "In Process",
      },
      {
        logo: "remax",
        created: "21 April, 2020",
        teamLeader: "Tamim Iqbal",
        due: "11 June, 2020",
        status: "Open",
      },
    ];
    return (
      <ul className="recent-projects-table__rows">
        {
          recentProjects.map((project, index) =>
            <li className="recent-projects-table__row" key={`project-${index}`}>
              <img src={`img/logo/${project.logo}.png`} alt={`${project.logo} logo`} />
              <p>{project.created}</p>
              <p>{project.teamLeader}</p>
              <p>{project.due}</p>
              <p>{project.status}</p>
            </li>
          )
        }
      </ul>
    );
  }
}

export default TableBody;