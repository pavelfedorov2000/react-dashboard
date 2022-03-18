import React from 'react';
import ReactDOM from 'react-dom';

class ChartTabs extends React.Component {
  render() {
    const tabs = ['Monthly', 'Weekly'];
    return (
      <div className="chart__tabs">
        {
          tabs.map((tab, i) => <button key={`tab-${i}`} className="chart__tab" data-chart={tab} type="button">{tab}</button>)
        }
      </div>
    );
  }
}

export default ChartTabs;