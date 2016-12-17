$(function() {
  Highcharts.chart('coffee-drinks', {
    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
      zoomType: 'xy',
    },

    legend: {
      enabled: false,
    },

    title: {
      text: 'Coffee Drinks by Mood and Calories',
    },

    xAxis: {
      gridLineDashStyle: 'ShortDash',
      gridLineWidth: 3,
      title: {
        text: 'Your Mood On a Scale of 1-10 According to How Much Sugar You Need <br></br><i>The less sugar you need, the lower your mood rating</i>',
      },

    },

    yAxis: {
      title: {
        text: 'Amount of Calories in Drink',
      },
      labels: {
        format: '{value} calories',
      },
      min: 0,
    },

    series: [{
      data: [
        {
          x: 1,
          y: 15,
          z: 15,
          name: 'Americano',
          color: '#916953',
        },
        {
          x: 2,
          y: 250,
          z: 250,
          name: 'Caramel Machiatto',
          color: '#00701D',
        },
        {
          x: 4,
          y: 190,
          z: 190,
          name: 'Latte',
          color: '#17BFB5',
        },
        {
          x: 5,
          y: 380,
          z: 380,
          name: 'Pumpkin Spice Latte',
          color: '#FF6600',
        },
        {
          x: 6,
          y: 360,
          z: 360,
          name: 'Mocha',
          color: '#FFE4C4',
        },
        {
          x: 6,
          y: 360,
          z: 360,
          name: 'Hot Chocolate',
          color: '#8C046A',
        },
        {
          x: 10,
          y: 430,
          z: 430,
          name: 'Frappuccino',
          color: '#FFD014',
        },
        {
          x: 1,
          y: 9,
          z: 9,
          name: 'Espresso',
          color: '#C10000',
        },
        {
          x: 10,
          y: 450,
          z: 450,
          name: 'Frappuccino Pokemon Go',
          color: '#FF2ECC',
        },

      ],
    }],
    tooltip: {
      useHTML: true,
      headerFormat: '<h3>{point.key}</h3>',
      pointFormat: '<strong>Mood</strong>: {point.x}<br></br><strong>Calories</strong>: {point.y}',
    },
  });
});
