//Back-end
var convert = function(input) {
  var reply = "";
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      reply += "pingpong" + "<br>";
    } else if (i % 5 === 0) {
      reply += "pong" + "<br>";
    } else if (i % 3 === 0) {
      reply += "ping" + "<br>";
    } else {
      reply += i + "<br>";
    }
  }
     return reply;
};

//front-end
$(document).ready(function() {
  $("form#pingpong").submit(function(event){
    var inputNumber = parseInt($("#numberinput").val());
    var reply = convert(inputNumber);
    if (!inputNumber) {
      alert ("Please enter a number you intelligent beast, you ;)");
    } else {$(".result").append(reply);
    event.preventDefault();
    }
  });
});
