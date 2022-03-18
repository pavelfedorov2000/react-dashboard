import React from "react";
import './Avatar.scss';

class Avatar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const user = this.props.user;
    return (
      <div className="avatar header__avatar">
        <img className="avatar__img" src={`img/project-activities/0${user + 1}.png`} alt="avatar" />
      </div>
    );
  }
}

export default Avatar;