(function(){
  'use strict';


  let canvas = $('canvas');
  let radius = 15;



 //TODO: Refactor so that you just return data array in a function instead of hardcoding it
  let data = {
    datasets: [
      {
        label: 'Coffee Mood and Number of Calories',
        data: [
          {
            x: 1,
            y: 15,
            r: radius
          },
          {
            x: 2,
            y: 250,
            r: radius
          },
          {
            x: 4,
            y: 190,
            r: radius
          },
          {
            x: 5,
            y: 380,
            r: radius
          },
          {
            x: 6,
            y: 360,
            r: radius
          },
          {
            x: 9,
            y: 400,
            r: radius
          },
          {
            x: 10,
            y: 430,
            r: radius
          },
          {
            x: 1,
            y: 9,
            r: radius
          },
          {
            x: 10,
            y: 450,
            r: radius
          },
        ],
        backgroundColor:'#001f3f',
        hoverBackgroundColor: '#001f3f',
      }],
  };

  let options = {
    responsive: true,
  };

  let axisX = {
    title: 'Mood Rating of Drink',
    maximum: 15,
  }

  let axisY = {
    title: 'Number of Calories',
    maximum: 500,
  }

  //instantiating the chart
  let bubbleChart = new Chart(canvas, {
    type: 'bubble',
    data: data,
    options: options,
    axisX: axisX,
    axisY: axisY,
  });












  }) ();
