function Pizza (size, toppings) {
  this.sized = size;
  this.toppings = toppings;
}

Pizza.prototype.sale = function () {
  return this.sized + "-sized Pizza, 111 topped with: " + this.toppings;
}






//--------logic split----------//

$(document).ready(function() {
  $("form").submit(function(event) {

    var inputtedSize = $("input:radio[name=size]:checked").val();
    var inputtedToppings = $("input:checkbox:checked").val();

    var pizzaOrdered = (inputtedSize + "-sized Pizza.  222  Topped with:  " + inputtedToppings);

    var sizeCost = parseInt($(".pizzaSize").val());
    var toppingsCost = parseInt($(".pizzaToppings").val());

    var pizzaCost = (sizeCost + toppingsCost + "$");

    $("#orderDetails").show();
    $("orderDetails").text(newPizza);
    $("input#pizza").val();
    $("input#orderDetails").val();


    event.preventDefault();
  })
})
