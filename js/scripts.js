$(document).ready(function() {

  $("#survey form").submit(function(event) {
  var wallSelect = parseInt($("#wall").val());
  var climateSelect = parseInt($("#climate").val());
  var healthSelect = parseInt($("#health").val());
  var gunSelect = parseInt($("#gun").val());
  var marriageSelect = parseInt($("#marriage").val());

  var surveyValue = (wallSelect + climateSelect + healthSelect + gunSelect + marriageSelect);

  alert(surveyValue);

  if (surveyValue <= 7) {
    $("#very-liberal").show();
    alert("Very liberal");
  } else if (surveyValue <= 10) {
    // $("#liberal").show();
    alert("liberal");
  } else if (surveyValue <= 13) {
    // $("#non-partisan").show();
    alert("non-partisan");
  } else if (surveyValue <= 20) {
    // $("#conservative").show();
    alert("conservative");
  } else {
    // $("#very-conservative").show();
    alert("Very conservative");
  }

  event.preventDefault();
  });
});
