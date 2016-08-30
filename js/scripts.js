function Pizza (size, toppingList) {
  this.size = size;
  this.toppingList = toppingList;
  this.price = 0;
  this.toppingCost = 0;
}

Pizza.prototype.pizzaCost = function() {
    this.toppingCost = this.toppingList.reduce( (prev, curr) => prev + curr );
    this.price = (this.size + this.toppingCost);
}

//---------logic split -----------//

$(document).ready(function() {
  $("form#orderPizza").submit(function(event) {
    event.preventDefault();
    var toppingsArray = [];

    var size = parseInt($('option:selected').val());

console.log($('option:selected').val());

    $("input:checkbox[name=topping]:checked").each(function(){
      toppingsArray.push(parseInt($(this).val()));
    });

    var newPizza = new Pizza(size, toppingsArray);

    newPizza.pizzaCost();
    $("#orderDetails").text("Your order is in!  A " + newPizza.size + "-inch Pizza topped with: " + newPizza.toppingCost + " toppings will cost: $" + newPizza.price);
  });
});
