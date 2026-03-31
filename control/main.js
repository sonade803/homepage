let playerCount = 0;
 console.log(playerCount);

$('.plush').draggable({
    revert: 'invalid',
    helper: 'clone',
    drag: function (event, ui) {}
})


$('.escape-jail').droppable({
    accept: '.plush',
    drop: function (event, ui) {
         $(this).append(ui.helper.clone());
        ++playerCount;
        console.log(playerCount);


        if(playerCount == 11){
          $(".pop-up").show();
          
        }
        
    }


})

$( function() {
    $( ".resizable" ).resizable();
  } );


$(".reveal-btn").click(
    function(){
        //$(".chair").css("display", "block");
        $(".pop-up").hide();
    }
);


