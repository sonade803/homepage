$(".dark-btn").click(function(){
  $(".box").toggleClass("dark");
  $(".container").toggleClass("dark");
});

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
        //$(".chair").css("display", "block");
        $(".chair").show();
        $(".reveal-btn").hide();
    }
);

$(".chair").draggable();
$(".box").draggable();