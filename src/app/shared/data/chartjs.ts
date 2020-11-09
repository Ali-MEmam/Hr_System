//line chart

export var lineChartData: Array<any> = [

  { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' },
  { data: [45, 25, 16, 36, 67, 18, 76], label: 'My Third dataset - No bezier' }

];
export var lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export var lineChartOptions: any = {
  animation: {
    duration: 1000, // general animation time
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
    mode: 'label'
  },
  responsiveAnimationDuration: 1000, // animation duration after a resize
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: 'bottom',
  },
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#f3f3f3",
        drawTicks: false,
      },
      scaleLabel: {
        display: true,
        labelString: 'Month'
      }
    }],
    yAxes: [{
      display: true,
      gridLines: {
        color: "#f3f3f3",
        drawTicks: false,
      },
      scaleLabel: {
        display: true,
        labelString: 'Value'
      }
    }]
  },
  title: {
    display: true,
    text: 'Chart.js Line Chart - Legend'
  }
};
export var lineChartColors: Array<any> = [

  {

    fill: false,
    borderDash: [5, 5],
    borderColor: "#9C27B0",
    pointBorderColor: "#9C27B0",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
  },
  {

    fill: false,
    borderDash: [5, 5],
    borderColor: "#00A5A8",
    pointBorderColor: "#00A5A8",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#FF7D4D",
    pointBorderColor: "#FF7D4D",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
  },

];
export var lineChartLegend = true;
export var lineChartType = 'line';
// barChart
export var statisticOfMatchingbarChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true,
  maintainAspectRatio: false

};
export var statisticOfMatchingbarChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
export var statisticOfMatchingbarChartType = 'bar';
export var statisticOfMatchingbarChartLegend = true;

export var statisticOfMatchingbarChartData: any[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];

export var statisticOfMatchingbarChartColors: Array<any> = [


  {

    backgroundColor: '#f77e17',
    borderColor: '#f55252',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: '#f55252',
    borderColor: '#f77e17',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },

];


// barChart
export var barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true,
  maintainAspectRatio: false

};
export var barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
export var barChartType = 'bar';
export var barChartLegend = true;

export var barChartData: any[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];

export var barChartColors: Array<any> = [


  {

    backgroundColor: '#044F8E',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: '#75C938',
    borderColor: '#f55252',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },

];

// Doughnut
export var doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
export var doughnutChartData: number[] = [350, 450, 100];
export var doughnutChartColors: any[] = [{ backgroundColor: [ "#FE6702","#9E3CB5", "#044F8E"] }];
export var doughnutChartType = 'doughnut';
export var doughnutChartOptions: any = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false
};
// Radar
export var radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

export var radarChartData: any = [
  { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
];
export var radarChartType = 'radar';
export var radarChartColors: any[] = [
  {
    backgroundColor: ["rgba(255, 141, 96, 0.8)"]
  },
  {
    backgroundColor: ["rgba(0, 157, 160, 0.8)"]
  }
];
export var radarChartOptions: any = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false
};

