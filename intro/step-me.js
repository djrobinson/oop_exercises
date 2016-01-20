
var CoffeeMug = function(coffee){
  var color = 'clear';
  this.volume = 12;
  this.coffee = coffee;
  this.fill = function(){
    this.coffee = 12;
  };
  this.drink = function(){
    if ( this.coffee === 0){
      console.log("All out")
    } else {
      this.coffee -= 1;
    }
  };
};

var Human = function(first, last){
  this.first = first;
  this.last = last;
  this.consumed = 0;
  this.drink = function(coffee) {
    coffee.drink();
    this.consumed += 1;
  };
};

var HumanTwo = function(first, last) {
  this.first = first;
  this.last = last;
  this.power = 'sleeping';
  this.energy = 10;
  this.sitInClass = function(hrs){
    this.energy -= hrs;
    if ( this.energy < 0 ){
      console.log('Go to Sleep!');
    }
  }
}

function Duck() {}

Duck.prototype.quack = function() {alert('Quaaaaaack!');};
Duck.prototype.feathers = function() {alert('The duck has white and gray feathers.');};

function Person() {}

Person.prototype.quack = function() {alert('The person imitates a duck.');};
Person.prototype.feathers = function() {alert('The person takes a feather from the ground and shows it.');};
Person.prototype.name = function() {alert('John Smith');};

function inTheForest(object) {
  object.quack();
  object.feathers();
}

function game() {
  var donald = new Duck();
  var john = new Person();
  inTheForest(donald);
  inTheForest(john);
}

game();