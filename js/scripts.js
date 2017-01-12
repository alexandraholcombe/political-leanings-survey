$(document).ready(function() {

  $("#survey form").submit(function(event) {
  var wallSelect = parseInt($("#wall").val());
  var climateSelect = parseInt($("#climate").val());
  var healthSelect = parseInt($("#health").val());
  var gunSelect = parseInt($("#gun").val());
  var marriageSelect = parseInt($("#marriage").val());

  var surveyValue = (wallSelect + climateSelect + healthSelect + gunSelect + marriageSelect);

  if (surveyValue <= 7) {
    $("#very-liberal").show();
    alert("Very liberal");
  } else if (8 <= surveyValue <= 10) {
    $("#liberal").show();
    alert("liberal");
  } else if (11 <= surveyValue <= 13) {
    $("#non-partisan").show();
  } else if (14 <= surveyValue <= 20) {
    $("#conservative").show();
  } else {
    $("#very-conservative").show();
    alert("Very conservative");
  };

  event.preventDefault();
  });
});
