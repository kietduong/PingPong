//Back-end
var reply = [];

var convert = function(input) {

  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      reply.push("pingpong");
    } else if (i % 5 === 0) {
      reply.push("pong");
    } else if (i % 3 === 0) {
      reply.push("ping");
    } else {
      reply.push(i);
    }
  }
     return reply;
};

//front-end
$(document).ready(function() {
  $("form#pingpong").submit(function(event){
    var inputNumber = parseInt($("#numberinput").val());
    convert(inputNumber);
    if (!inputNumber) {
      alert ("Please enter a number you intelligent beast, you ;)");
    } else {
      for(var i = 0; i < reply.length ; i ++)
      {
        $(".result").append("<li>" + reply[i] + "</li>");
      }
    event.preventDefault();
    }
  });
});
