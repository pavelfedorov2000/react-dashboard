import React from "react";
import './BarChart.scss';

class BarChart extends React.Component {
    render() {

        const barChart = [50, 65, 85, 80, 65, 80, 70, 55, 40, 25, 45, 65, 70, 60, 50, 55];
        return (
            <div className="chart">
                <div className="chart__top">
                    <div className="chart__info">
                        <div className="chart__title">Monthly Stats</div>
                        <span className="chart__num">85901</span>
                    </div>
                    <div className="chart__tabs">
                        <button className="chart__tab" data-chart="Monthly" type="button">Monthly</button>
                        <button className="chart__tab chart__tab--active" data-chart="Weekly" type="button">Weekly</button>
                    </div>
                </div>
                <div className="bar-chart">
                    {
                        barChart.map((progress, index) =>
                            <div key="index" className="bar-chart__item">
                                <div className="bar-chart__item-bar">
                                    <span style={{ height: `${progress}%`, backgroundColor: ((index >= 5 && index <= 11) ? '#0E64CB' : '#CEDBDC') }}></span>
                                </div>
                                <div className="bar-chart__item-num">{index + 7}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default BarChart;