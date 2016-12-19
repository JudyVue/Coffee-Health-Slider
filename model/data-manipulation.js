(function(){
'use strict';

  var highChartData = drinks.map(function(element){
    return {
      x: element.rating,
      y: element.calories,
      z: element.calories,
      name: element.name,
    };
  });
  console.log('highchartdata', highChartData);
})();
