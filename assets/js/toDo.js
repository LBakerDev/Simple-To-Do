//Check off specific to-dos by Clicking
$("ul").on("click", "li", function() {
    //if li is grey
   $(this).toggleClass("completed");
});

//Click on 'X' to delete toDo w/ fadeOut and delete li from DOM
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(1000,function() {
    //Delete from DOM
    $(this).remove();
    //Prevent bubbling to parent element
    event.stopPropagation();
    });
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
    //grabbing new todo text from input
    var toDoText = ($(this).val());
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class ='fa fa-trash'></i></span> " + toDoText + "</li>");
    }
});

$(".fa-ellipsis-h").click(function(){
    $("input[type='text']").fadeToggle(500);
});
