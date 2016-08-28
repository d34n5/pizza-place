function Pizza (size, toppingList, toppingCount) {
  this.size = size;
  this.toppingList = toppingList;
  this.toppingCost = toppingCost;
  this.price = 0;
}

Pizza.prototype.pizzaCost = function(size, toppings) {
  this.price += (size + (toppings*2));
}

var newPizza;
var toppingsChosen = [];


//---------logic split -----------//

$(document).ready(function() {
  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var sizeOrdered = $('#pizzaSize').find('option:selected').text();
    var numberOfToppings = $("[type='checkbox']:checked").length;
    var toppingsArray = [];
    var toppingsPush = $("input:checkbox[name=topping]:checked").each(function(){
      toppingsArray.push($(this).val());
    });
    newPizza = new Pizza(sizeOrdered, numberOfToppings, toppingsArray);
    newPizza.pizzaCost(sizeOrdered, numberOfToppings)
    $("#orderDetails").text("Your order is in!  A " + newPizza.size + "-sized Pizza topped with: " + newPizza.toppingList + " will cost: $" + newPizza.pizzaCost);
  });
});
