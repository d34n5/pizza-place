function Pizza (size, toppings) {
  this.sized = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaSale = function() {
  return this.sized + "-sized Pizza, topped with: " + this.toppings ;
}

function resetFields() {
  $(".sizes").val("");
  $("input.pizzaToppings").val("");
}




$(document).ready(function() {
  $("form").submit(function(event) {

    var inputtedSize = parseInt($(".sizes").val());
    var inputtedToppings = parseInt($("input:checkbox:checked").val());

    var newPizza = (inputtedSize + inputtedToppings + "$");

    $("#orderDetails").show();
    $("#orderDetails").text(newPizza);
    //$("div#orderDetails").append(newPizza.pizzaSale);

    event.preventDefault();
  });
});
