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
});
