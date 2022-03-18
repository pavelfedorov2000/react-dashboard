import React from "react";

class NewProject extends React.Component {
  render() {
    return (
      <div className="project-card project-card--new">
        <div className="project-card__title">Add Project</div>
        <div className="project-card__text">
          Create new project and customize it with
          your priority base UI kit element.
        </div>
        <button className="project-card__btn" type="button">
          <span className="project-card__btn-plus" style={{ backgroundImage: 'url(img/icons/plus.svg)' }}></span>
          Create New Project
        </button>
      </div>
    );
  }
}

export default NewProject;