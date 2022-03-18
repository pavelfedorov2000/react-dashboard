import React from "react";

class TableHead extends React.Component {
  render() {
    let tableHead = ['Recent Projects', 'Created', 'Team Leader', 'Due', 'Status'];
    return (
      <div className="recent-projects-table__head">
        {
          tableHead.map(title => <div className="recent-projects-table__title">{title}</div>)
        }
      </div>
    );
  }
}

export default TableHead;