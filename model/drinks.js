var drinks = [];

function Drink (opts) {
  this.name = opts.name;
  this.rating = opts.rating;
  this.mood = opts.mood;
  this.calories = opts.calories;
  this.caffeine = opts.caffeine;
}


Drink.prototype.toHtml = function() {
  var $source = $('#drink-template').html();
  var template = Handlebars.compile($source);
  return template(this);
};

ourLocalData.forEach(function(e){
  drinks.push(new Drink(e));
});

ourLocalData.forEach(function(a){
  $('#coffeeDrinks').append(a.toHtml());
});
