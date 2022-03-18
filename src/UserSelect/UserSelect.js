import React from "react";
import './UserSelect.scss';

class UserSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onSelectChange(e.target.selectedIndex);
  }
  render() {
    const options = ['Tanjimul Alam', 'Sarah Rahman', 'Anika Tabassum', 'Raiyan Khan', 'Salma Hayek'];
    const user = this.props.user;
    return (
      <select onChange={this.handleChange} className="user-select header__user-select" style={{ backgroundImage: 'url(img/icons/drop.svg)' }}>
        {
          options.map((option, i) => <option key={`option-${i}`} value={option}>{option}</option>)
        }
      </select>
    );
  }
}

export default UserSelect;