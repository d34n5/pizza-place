function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

// Pizza.prototype.pizzaSale = function() {
//   return this.sized + "-sized Pizza, topped with: " + this.toppings ;
// }

function resetFields() {
  $(".sizes").val("");
  $("input.pizzaToppings").val("");
}



$(document).ready(function() {
  $("form").submit(function(event) {

    var inputtedSize = parseInt($(".sizes").val());
    var inputtedToppings = parseInt($("input:checkbox:checked").val());

    var newPizza = (inputtedSize + inputtedToppings + "$");
    var pizzaOrdered = new Pizza (Pizza.sized, Pizza.toppings);

    $("#costDisplay").show();
    $("#costDisplay").text(newPizza);

    // $("#orderDetails").show();
    // $("#orderDetails").text(pizzaOrdered);


    event.preventDefault();
  });
});
