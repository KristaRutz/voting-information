var userAge = parseInt(prompt("How old are you?"));

$(document).ready(function() {
  if (userAge >= 18) {
    $("#ofVotingAge").show();
  } else {
    $("#minors").show();
  }

});