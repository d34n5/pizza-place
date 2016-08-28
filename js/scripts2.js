function Pizza (size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.pizzaSale = function() {
  return this.size + "-sized Pizza, topped with: " + this.toppings ;
}

//---------logic split -----------//

$(document).ready(function() {
  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var sizeOrdered = $("#selectId option:selected").attr("id")
    var toppingsOrdered = $(":checkbox").map(function() {
      return this.id;
    })
    .get()
    .join();

    var sizeCost = parseInt($(".sizes").val());
    var toppingsCost = parseInt($("input:checkbox:checked").val());

    var pizzaCost = (sizeCost + toppingsCost + "$" );
    var pizzaOrdered = (sizeOrdered + "-sized Pizza - Topped with: " + toppingsOrdered)

    $("#costDisplay").show();
    $("#costDisplay").text(pizzaCost);

    $("#orderDetails").show();
    $("#orderDetails").text(pizzaOrdered);

    $("#orderDetails").text(newPizza.pizzaSale());
  });
});
