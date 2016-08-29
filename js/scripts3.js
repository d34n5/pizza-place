function Pizza (size) {
  this.pieSize = size;
  this.toppings = [];
  this.cost = 0;
}

Pizza.prototype.price = function(size, toppings) {
  var cost = Math.round(this.pieSize + (this.toppings.length * 2));
  return cost
}

//---------logic split -----------//

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".toppings").empty();
    var sizeOrdered = $('#pizza-size').val();
    var newPizza = new Pizza(sizeOrdered);
    $.each($("input[name='topping']:checked"), function()
      newPizza.toppings.push($(this).val());
  });
  $("#costDisplay").text("Your total is $" + newPizza.price());
  newPizza.toppings.forEach(function(topping){
    $("#orderDetails").append("<li> + topping + </li>")
    });
    $("input:checkbox").prop("checked", false);
  });
});
