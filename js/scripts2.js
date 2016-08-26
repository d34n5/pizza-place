function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

//Pizza.prototype.pizzaSale = function() {
  // return this.sized + "-sized Pizza, topped with: " + this.toppings ;
//}

 


// function resetFields() {
//   $(".sizes").val("");
//   $("input.pizzaToppings").val("");
// }



$(document).ready(function() {
  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    // var sizeOrdered = $(".sizes").??
    // var toppingsOrdered = $(".toppings").??

    var sizeCost = parseInt($(".sizes").val());
    var toppingsCost = parseInt($("input:checkbox:checked").val());

    var pizzaCost = (sizeCost + toppingsCost + "$");
    var pizzaOrdered = new Pizza (Pizza.sized, Pizza.toppings);

    $("#costDisplay").show();
    $("#costDisplay").text(pizzaCost);

    // $("#orderDetails").show();
    // $("#orderDetails").text(pizzaOrdered);

    // $("#orderDetails").text(newPizza.pizzaSale());



  });
});
