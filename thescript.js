/*
window.onload = function(){

  document.getElementById('submit').onclick = function(e){

    var str3 = document.getElementById("subject").value;
    var str4 = document.getElementById("body").value;
    var str5 = document.getElementById("response").value;
     alert(str3 + " " + str4 + " " + str5);

  };


};
*/

function getInputValue() {
  var inputedValue = document.getElementById('textbar').value;
  console.log(inputedValue);
}

var theUrl;
//var theJoke;
//var joke;

      $(document).ready(function(){

        $('#submit').click(function(){
          theUrl = $('#textbox').val();



           $.ajax ({
              type: "GET",
              url: "icanhazdadjoke.com",
              id: "M7wPC5wPKBd",
              joke: "Did you hear the one about the guy with the broken hearing aid? Neither did he."
              success: function jokeCallback(jokeData){
                  console.log(response);
                  $('.subject').val(response);
                $('.jokeResponse').append("The joke of the day is " + joke )
            }
            });

      });
 };
