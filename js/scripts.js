





$(document).ready(function() {
  $("#toDoForm").submit(function(event) {
  event.preventDefault();
  var itemInput = $("input#task").val();
  $("#toDoList").append("<li><span class='item'>" + itemInput + "</span></li>");
  });
});
