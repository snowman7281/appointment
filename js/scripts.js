$(document).ready(function(){


  // $("#submit").click(function(){
    $("#name").submit(function(e){
      var person = $("#person").val();
      var description = $("#description").val();
      var date = $("#date").val();
      var newDate = new Date(date);
      var time = $("#time").val();
      var $output = $(".output");
      $("#name").hide();
      $output.text("Thank you " + person + " for setting an appointment on " + newDate + " at " + time + ". I will get back to you as soon as possible!");

      e.preventDefault();
    });
  // });
});
