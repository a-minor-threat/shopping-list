 $(document).ready(function() {

     addItem();
     deleteAction();
     doneAction();
 });

 function addItem() {

     $("button").click(function() {
     var value = $(".input-form").val();       
         $("ul").append('<li> <span class=\"item-name\">'+value+'</span><span class=\"done\"> done</span><span class=\"delete\"> delete</span></li>');
         $(".input-form").val('');
     });
 }

 function deleteAction() {
     $(".ul-list").on("click", ".delete", function() {
      //   alert("Delete event fired.");
         $(this).closest("li").remove();
     });
 }

 function doneAction() {
     $(".ul-list").on("click", ".done", function() {
      //   alert("Done event fired.")
         $(this).closest("li").toggleClass("strike");
     });
 }