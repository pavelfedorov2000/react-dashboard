import React from "react";
import Chart from 'chart.js/auto';

class ProjectViews extends React.Component {
    chartRef = React.createRef();
    componentDidMount() {
        const ctx = this.chartRef.current.getContext("2d");
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
                datasets: [{
                    label: 'Price',
                    data: [100, 200, 270, 300, 250, 240, 300, 350, 520, 580],
                    fill: '#CEDBDC',
                    pointRadius: 5,
                    borderColor: '#0E64CB',
                    backgroundColor: '#CEDBDC',
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: "#CEDBDC",
                            stacked: true,
                        },
                        grid: {
                            display: false
                        },
                    },
                    y: {
                        ticks: {
                            color: "#CEDBDC",
                            stacked: true,
                            maxTicksLimit: 5,
                        },
                        grid: {
                            color: '#4D96BE'
                        },
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
            }
        });
    }
    render() {
        return (
            <div className="chart">
                <div className="chart__top">
                    <div className="chart__info">
                        <div className="chart__title">Monthly Project Views</div>
                        <span className="chart__num">17221</span>
                    </div>
                </div>
                <div className="chart__inner">
                    <canvas id="projectViews" ref={this.chartRef} />
                </div>
            </div>
        );
    }
}

export default ProjectViews;