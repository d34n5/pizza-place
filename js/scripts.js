function Pizza (size, toppingList) {
  this.size = size;
  this.toppingList = toppingList;
  this.price = 0;
}

Pizza.prototype.pizzaCost = function() {
  this.price = (this.size + (this.toppingList.length*2));
}

//---------logic split -----------//

$(document).ready(function() {
  $("form#orderPizza").submit(function(event) {
    event.preventDefault();
    var toppingsArray = [];

    var size = $('#pizzaSize').find('option:selected').val();

    $("input:checkbox[name=topping]:checked").each(function(){
      toppingsArray.push($(this).val());
    });

    var newPizza = new Pizza(size, toppingsArray);

    newPizza.pizzaCost();
    $("#orderDetails").text("Your order is in!  A " + newPizza.size + "-sized Pizza topped with: " + newPizza.toppingList + " will cost: $" + newPizza.price);
  });
});
