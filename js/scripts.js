$(document).ready(function() {

  $("#survey form").submit(function(event) {
  $(".result-box").hide();
  var wallSelect = parseInt($("#wall").val());
  var climateSelect = parseInt($("#climate").val());
  var healthSelect = parseInt($("#health").val());
  var gunSelect = parseInt($("#gun").val());
  var marriageSelect = parseInt($("#marriage").val());

  var surveyValue = (wallSelect + climateSelect + healthSelect + gunSelect + marriageSelect);


  if (surveyValue > 12 && marriageSelect < 3) {
  $(".result").fadeIn();
  $("#ford").fadeIn();
} else {

  if (surveyValue <= 7) {
    $(".result").fadeIn();
    $("#bernie").fadeIn();
  } else if (surveyValue <= 10) {
    $(".result").fadeIn();
    $("#clinton").fadeIn();
  } else if (surveyValue <= 13) {
    $(".result").fadeIn();
    $("#truman").fadeIn();
    } else if (surveyValue <= 20) {
    $(".result").fadeIn();
    $("#hwbush").fadeIn();
  } else {
    $(".result").fadeIn();
    $("#wbush").fadeIn();
  }
}

  event.preventDefault();
  });
});
