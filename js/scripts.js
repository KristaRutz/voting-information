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

    if (politicians && abortion && newsSource && healthcare) {
      var userResult = ((politicians + abortion + newsSource + healthcare)/4 - 1) * 50;
      console.log(userResult);
      $(".result").append(`<p>${userResult}</p>`);

    }

    event.preventDefault();
  });

});