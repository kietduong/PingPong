//Back-end
var convert = function(number) {
  var answer = "";
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      answer += "pingpong";
    } else if (i % 5 === 0) {
      answer += "pong";
    } else if (i % 3 === 0) {
      answer += "ping";
    } else {
      answer += i;
    }
  }
     return answer;
};
//
  //$("#results").append(inputNumber.toString());?

//front-end
$(document).ready(function() {
  $("form#pingpong").submit(function(event){
    var inputNumber = parseInt($("#numberinput").val());
    var result = convert(inputNumber);

    $(".result").append(result.toString());
    $("#results").show();



    event.preventDefault();
  });
});
