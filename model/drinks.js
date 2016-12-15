// var drinks = [];
//
// function Drink (opts) {
//   this.name = opts.name;
//   this.rating = opts.rating;
//   this.mood = opts.mood;
//   this.calories = opts.calories;
//   this.caffeine = opts.caffeine;
// }
//
//
// Drink.prototype.toHtml = function() {
//   var $source = $('#drink-template').html();
//   console.log($source);
//   var template = Handlebars.compile($source);
//   console.log(template);
//   console.log(this);
//   return template(this);
// };
//
// ourLocalData.forEach(function(e){
//   drinks.push(new Drink(e));
// });
//
// drinks.forEach(function(a){
//   $('#coffeeDrinks').append(a.toHtml());
// });
//
// // drinks.forEach(function(){
// //   $('.drink-flip').flip({
// //     trigger: 'click',
// //   });
// // });
