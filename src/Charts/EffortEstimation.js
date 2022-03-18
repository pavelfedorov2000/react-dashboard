import React from "react";
import Chart from 'chart.js/auto';

class EffortEstimation extends React.Component {
  chartRef = React.createRef();
  componentDidMount() {
    const ztx = this.chartRef.current.getContext('2d');
    new Chart(ztx, {
      type: 'doughnut',
      data: {
        labels: ['Research & Planning', 'Design', 'Development', 'Testing'],
        datasets: [
          {
            data: [35, 30, 20, 15],
            backgroundColor: [
              '#155EB0',
              '#7195BD',
              '#2E81DF',
              '#B3D2F5'
            ],
            borderWidth: 0,
            cutout: 90,
          }
        ]
      },
      options: {
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
            maxWidth: 250,
            //maxHeight: 45,
            labels: {
              boxWidth: 37,
              boxHeight: 18,
              borderRadius: 12.446,
              font: {
                size: 8,
                lineHeight: 1.25,
                weight: 500,
                color: '#C8D3F1',
                family: 'Montserrat, sans-serif',
              }
            }
          },
          title: {
            display: false,
            text: 'Feature Effort Estimation',
          }
        },
      }
    });
  }
  render() {
    return (
      <div class="chart">
        <div className="chart__top">
          <div className="chart__title">Feature Effort Estimation</div>
        </div>
        <canvas id="effortEstimation" ref={this.chartRef}></canvas>
      </div>
    );
  }
}

export default EffortEstimation;