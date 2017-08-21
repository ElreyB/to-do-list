// business logic

function Item(item) {
  this.items = item.split(",");
}

// user interface logic
$(document).ready(function() {
  $("#toDoForm").submit(function(event) {
    event.preventDefault();
    var itemInput = $("input#task").val();

    var newItems = new Item(itemInput);
    newItems.items.forEach(function(item){
    $("#toDoList").append("<li><span class='item'>" + item + "</span></li>");
    });
    $("input#task").val("");
    $("span.item").click(function(){
      $(this).addClass("strike");
    });
  });
});
