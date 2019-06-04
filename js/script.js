$(document).ready(function() {
  $("#ej").click(function(){
    $("ul.masterej").prepend("<li>emerson atacc!</li>");
    $("ul.masterej").children("li").first().css("background-color","blue");
    $("ul.masterej").children("li").first().click(function() {
  $(this).remove();
      });
  });

  $("#sp").click(function(){

    $("ul.mastersp").prepend("<li>sasha attac! (not very effective)</li>");
    $("ul.mastersp").children("li").first().css("background-color","pink");
    $("ul.mastersp").children("li").first().click(function() {
  $(this).remove();
      });
    });


    $("#dog").click(function(){
      $("ul.masterdog").append("<li>Bow Bow ...</li>");
      $("ul.masterdog").prepend('<img src="./img/dog.jpeg">');
      $("ul.masterdog").children("li").first().css("background-color","lightblue");
      $("ul.masterdog").children("li").first().click(function() {
    $(this).remove();
        });
        $("ul.masterdog").children("img").first().click(function() {
      $(this).remove();
          });
    });

    $("#cat").click(function(){
      $("ul.mastercat").prepend('<img src="./img/cat.jpeg">');
      $("ul.mastercat").prepend("<li>meow meow meow ...</li>");
      $("ul.mastercat").children("li").first().css("background-color","red");
      $("ul.mastercat").children("li").first().click(function() {
    $(this).remove();
        });
        $("ul.mastercat").children("img").first().click(function() {
      $(this).remove();
          });
      });





});
