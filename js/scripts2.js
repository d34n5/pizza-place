function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

// Pizza.prototype.pizzaSale = function() {
//   return this.sized + "-sized Pizza, topped with: " + this.toppings ;
// }


// function resetFields() {
//   $(".sizes").val("");
//   $("input.pizzaToppings").val("");
// }



$(document).ready(function() {
  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    // var sizeOrdered = $(".sizes").??
    // var toppingOrdered = $(".toppings").??

    var sizeCost = parseInt($(".sizes").val());
    var toppingsCost = parseInt($("input:checkbox:checked").val());

    var newPizza = (sizeCost + toppingsCost + "$");
    var pizzaOrdered = new Pizza (Pizza.sized, Pizza.toppings);

    $("#costDisplay").show();
    $("#costDisplay").text(newPizza);

    // $("#orderDetails").show();
    // $("#orderDetails").text(pizzaOrdered);



  });
});
