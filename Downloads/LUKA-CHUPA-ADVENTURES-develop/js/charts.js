import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js';
import { appendNodeWithClass, getObjValues } from './util.js';

export const showChartHistory = (history) => {
  const worldwideChart = document.querySelector('.myChart-worldwide');
  const ctx = worldwideChart.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Object.keys(history.cases),
      datasets: [
        {
          label: 'Cases Worldwide',
          backgroundColor: '#FF6384',
          borderColor: '#FF6384',
          data: Object.values(history.cases),
          fill: false,
        },
        {
          label: 'Deaths Worldwide',
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB',
          data: Object.values(history.deaths),
          fill: false,
        },
        {
          label: 'Recoveries Worldwide',
          backgroundColor: '#4BC0C0',
          borderColor: '#4BC0C0',
          data: Object.values(history.recovered),
          fill: false,
        },
      ],
    },

    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: false,
      height: 400
    },
  });
};

export const showChartHistoryByCountry = (data) => {
  const chartContainerCountry = document.getElementById(
    'chart-container-country'
  );
  const dates = Object.keys(data.timeline.cases);
  const cases = getObjValues(data.timeline.cases);
  const deaths = Object.values(data.timeline.deaths);
  const recovered = Object.values(data.timeline.recovered);

  appendNodeWithClass('canvas', 'myChart-country', chartContainerCountry);
  const chartCanvas = document.querySelector('.myChart-country');

  const ctx = chartCanvas.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: `Cases - ${data.country} `,
          backgroundColor: '#FF6384',
          borderColor: '#FF6384',
          data: cases,

          fill: false,
        },
        {
          label: `Deaths - ${data.country} `,
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB',
          data: deaths,
          fill: false,
        },
        {
          label: `Recovered - ${data.country} `,
          backgroundColor: '#4BC0C0',
          borderColor: '#4BC0C0',
          data: recovered,
          fill: false,
        },
      ],
    },

    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  toggleChartAndMap(data);
};

const toggleButtonOnClick = () => {
  const map = document.querySelector('.map');
  const toggleButton = document.getElementById('toggle-map');
  const countryChart = document.getElementById('chart-container-country');

  toggleButton.addEventListener('click', () => {
    countryChart.classList.toggle('d-none');
    map.classList.toggle('d-none');
    countryChart.classList.contains('active-chart')
      ? (toggleButton.textContent = 'Chart')
      : (toggleButton.textContent = 'Map');
  });
};

const toggleChartAndMap = () => {
  toggleButtonOnClick();
};

export const showWorldWidePie = (chartData,chartSelector) => {
  const worldwideChart = document.querySelector(chartSelector);
  const ctx = worldwideChart.getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["cases","recovered","active","deaths"],
      datasets: [{
        data:[chartData.cases,chartData.recovered,chartData.active,chartData.deaths],
        backgroundColor:[
          '#FF6384','#84FF63','#36A2EB','#4BC0C0'
        ]
      }],
    },

    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: false,
      height: 300
    },
  });
};
