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
      $("ul.masterdog").children("li").first().css("background-color","lightblue");
      $("ul.masterdog").children("li").first().click(function() {
    $(this).remove();
        });
    });

    $("#cat").click(function(){

      $("ul.mastercat").after("<img src="../img/cat.jpeg">");
      // $("ul.mastercat").after(document.getElementById("img"));
      $("ul.mastercat").children("li").first().css("background-color","red");
      $("ul.mastercat").children("li").first().click(function() {
    $(this).remove();
        });
      });





});
