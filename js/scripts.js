// business logic

function Item(item) {
  this.items = item.split(",");
}
// user interface logic
$(document).ready(function() {
  $("#toDoForm").submit(function(event) {
    event.preventDefault();
    $("#page1").hide();
    $("#page2").show();
    var itemInput = $("input#task").val();

    var newItems = new Item(itemInput);
    newItems.items.forEach(function(item){
    $("#toDoList").append("<li class='item'>" + item + "</li>");
    });
    $("input#task").val("");
    $("li.item").click(function(){
      $(this).addClass("strike");
    });
    $("#clear").click(function() {
      $(".strike").remove();
    });

    $("#return").click(function(){
      $("#page2").hide();
      $("#page1").show();
    });
  });
});
