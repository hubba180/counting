//business logic

//UI logic
$(document).ready(function () {
  $("#input").submit(function() {
    const countTo = parseInt($("#countTo").val());
    const countBy = parseInt($("#countBy").val());
    event.preventDefault();
    for (i = 0; i <= countTo; i += countBy) {
      $("#output").append(i + " ");
    }
    
  });
});