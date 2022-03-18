import React from "react";
import BarChart from '../BarChart/BarChart';
import ProjectViews from './ProjectViews';
import EffortEstimation from './EffortEstimation';
import './Charts.scss';

class Charts extends React.Component {
  render() {
    return (
      <section className="charts">
        <h2 className="charts__title">{this.props.title}</h2>
        <div className="charts__inner">
          <BarChart />
          <ProjectViews />
          <EffortEstimation />
        </div>
      </section>
    );
  }
}

export default Charts;