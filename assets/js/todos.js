// check off specific todo by clicking

$(document).ready(function(){ //this makes sure no jQuery runs before the document loads fully

    $("ul").on("click", "li", function(){
        if($(this).css("color") === "rgb(128, 128, 128)"){
            $(this).removeClass("completed");

        }else{
            $(this).addClass("completed");
        }
        
    });

    $("ul").on("click", "span", function(event){
        event.stopPropagation(); //this stops event bubbling - into parent elements
        //meaning when i click on the span it doens't get crossed out and grey
        $(this).parent().fadeOut(function(){
            $(this).remove();
        });
    });

    $("input[type='text']").keypress(function(event){ //input on its own works but we can be more specific as shown
        if(event.which === 13){
            var newToDo = $(this).val();
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newToDo + "</li>");
            $(this).val("");
        }
        
    });

   $("#toggle-form").click(function(){
       $("input[type='text']").fadeToggle("slow");
   });

    
});