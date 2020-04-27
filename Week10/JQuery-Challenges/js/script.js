
$(document).ready(function(){

    //Challenge 1
    $("#hideMe").click(function(){ //hide element when this id is clicked
      $(this).hide();
    });

    //Challenge 2
    $("#inputArea").keyup(function(){
      $("#outputArea").html($("#inputArea").val()); //write input to screen
    });

    //Challenge 3
    $("#boxChanger").click(function(){
      $(".box").height("200px"); //change box size
      $(".box").width("200px");
    });

    //Challenge 4
    $("#toggleImage").click(function(){
      $(".img").fadeOut(); //fade out box
    });

    //Challenge 5
    var count = 0;
    var element = '<p id="count"></p>'; //create a paragraph element
    $(element).insertAfter('#clickCounter'); //place the element in the html doc

    $("#clickCounter").click(function() {
        count = count + 1;
        var element = '<p id="count">' + count +'</p>'; //update html value
        $("#count").html(element);

        if(count == 5) 
          $("#count").html("I've been clicked 5 times.");

    });


});

