

$(".box-1").draggable();
$(".box-2").draggable();
$(".box-3").draggable();


$('.box-1').draggable({
    revert: 'invalid',
    helper: 'clone',
    drag: function (event, ui) {}
})

$('.box-2').draggable({
    revert: 'invalid',
    helper: 'clone',
    drag: function (event, ui) {}
})

$('.box-3').draggable({
    revert: 'invalid',
    helper: 'clone',
    drag: function (event, ui) {}
})

$('.escape-jail').droppable({
    accept: '.box-1',
    drop: function (event, ui) {
         $(this).append(ui.helper.clone());
    }

})

$('.escape-jail').droppable({
    accept: '.box-2',
    drop: function (event, ui) {
         $(this).append(ui.helper.clone());
    }

})

$('.escape-jail').droppable({
    accept: '.box-3',
    drop: function (event, ui) {
         $(this).append(ui.helper.clone());
    }

})