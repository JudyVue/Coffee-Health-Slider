// (function(){
//   'use strict';
//
//   let chart= {};
//
//
//   // chart.ctx = document.getElementsByTagName('canvas');
//   chart.ctx = $('canvas');
//
//
//   console.log(chart.ctx);
//
//   chart.bubbleChart = new Chart(chart.ctx, {
//     type: 'bubble',
//     data: chart.data,
//     options: chart.options,
//     scales: chart.scales,
//   });
//
//
//   chart.data = {
//     datasets: [
//       {
//         label: 'First Dataset',
//         data: [
//           {
//             x: 20,
//             y: 30,
//             r: 15,
//           },
//           {
//             x: 40,
//             y: 10,
//             r: 10,
//           }
//         ],
//         backgroundColor:'#FF6384',
//         hoverBackgroundColor: '#FF6384',
//       }]
//     }
//
//
//
//     chart.options = {
//       responsive: true,
//     };
//
//     chart.scales = {
//       yAxes: [{
//         ticks: {
//           max: 500,
//           min: 0,
//           stepSize: 100,
//         },
//       }],
//     };
//
//
//
// }) ();
