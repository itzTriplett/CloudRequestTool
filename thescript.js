window.onload = function(){

  document.getElementById('submit').onclick = function(e){

    var str3 = document.getElementById("subject").value;
    var str4 = document.getElementById("body").value;
    var str5 = document.getElementById("response").value;
     alert(str3 + " " + str4 + " " + str5);

  };


};

var theJoke;
var joke;

      $(document).ready(function(){

        $('#submit').click(function(){
           theJoke = $('#subject').val();

           $.ajax ({
              type: "GET",
              url: "icanhazdadjoke.com",
              success: function jokeCallback(jokeData){
                  joke = jokeData.name;
                $('.jokeResponse').append("The joke of the day is " + zip )
            }
            });

      });
