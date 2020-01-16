//var userAge = parseInt(prompt("How old are you?"));

$(document).ready(function() {
  // if (userAge >= 18) {
  //   $("#ofVotingAge").show();
  // } else {
  //   $("#minors").show();
  // }

  $("form").submit(function(event) {
    var politicians = parseInt($("input:radio[name=politicians]:checked").val());
    var abortion = parseInt($("input:radio[name=abortion]:checked").val());
    var newsSource = parseInt($("input:radio[name=newsSource]:checked").val());
    var healthcare = parseInt($("input:radio[name=healthcare]:checked").val());

    $("div.politicians").removeClass("has-error");
    $("div.abortion").removeClass("has-error");
    $("div.newsSource").removeClass("has-error");
    $("div.healthcare").removeClass("has-error");
    $(".errorMessage").remove();


    if (politicians && abortion && newsSource && healthcare) {

      $("div.politicians").removeClass("has-success");
      $("div.abortion").removeClass("has-success");
      $("div.newsSource").removeClass("has-success");
      $("div.healthcare").removeClass("has-success");

      var userResult = ((politicians + abortion + newsSource + healthcare)/4 - 1) * 50;
      console.log(userResult);
      $(".result").append(`<p>${userResult}</p>`);

    } else {
      if (politicians) {
        $("div.politicians").addClass("has-success");
      } else {
        $("div.politicians").addClass("has-error");
        $("div.politicians").append('<label class="radio errorMessage">Please select an option</label>');
      }
      if (abortion) {
        $("div.abortion").addClass("has-success");
      } else {
        $("div.abortion").addClass("has-error");
        $("div.abortion").append('<label class="radio errorMessage">Please select an option</label>');
      }
      if (newsSource) {
        $("div.newsSource").addClass("has-success");
      } else {
        $("div.newsSource").addClass("has-error");
        $("div.newsSource").append('<label class="radio errorMessage">Please select an option</label>');
      }
      if (healthcare) {
        $("div.healthcare").addClass("has-success");
      } else {
        $("div.healthcare").addClass("has-error");
        $("div.healthcare").append('<label class="radio errorMessage">Please select an option</label>');
      }
    }

    event.preventDefault();
  });

});