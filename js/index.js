

$(document).ready(function() {

    //// NAV FUNCTION TO CHANGE ON SCROLL
    jQuery(function($) {

        var $shop = $('#shopping'),
            $win = $(window),
            winH = $win.height();    // Get the window height.

        $win.on("scroll", function () {
            $shop.toggleClass("doch", $(this).scrollTop() > winH );
        }).on("resize", function(){ // If the user resizes the window
            winH = $(this).height(); // you'll need the new height value
        });

    });



    $("#for-him").mouseover( () =>{
        $("#forhim").css("display", "flex");

    $(".shopping").css("background-color","#F6F6F6");
    $("#forhim").css("z-index", "1");
    $("#forher").css("z-index", "-1");
    $("#forbras").css("z-index", "-1");

});
    $(".delete-header").mouseover( () =>{
        $("#forhim").css("display", "none");
    $("#forher").css("display", "none");
    $("#forbras").css("display", "none");

    $(".shopping").css("background-color","transparent");


});
    $(".simple-slider").mouseover( () =>{
        $("#forhim").css("display", "none");
    $("#forher").css("display", "none");
    $("#forbras").css("display", "none");

    $(".shopping").css("background-color","transparent");
    $("#shoping").css("z-index", "0");


});

    $("#for-her").mouseover( () =>{
        $("#forher").css("display", "flex");

    $(".shopping").css("background-color","#F6F6F6");
    $("#shoping").css("z-index", "50");
    $("#forhim").css("z-index", "-1");
    $("#forher").css("z-index", "1");
    $("#forbras").css("z-index", "-1");

});
    $("#for-bras").mouseover( () =>{
        $("#forbras").css("display", "flex");

    $(".shopping").css("background-color","#F6F6F6");
    $("#shoping").css("z-index", "50");
    $("#forbras").css("z-index", "1");
    $("#forhim").css("display", "none");
    $("#forher").css("display", "none");

});
    ///BTN MOVE FUNCTIONS
    $(".btn-move").mouseleave( () =>{
        $(".btn-quick").css("transform","translateY(0)");
    $(".btn-quick").css("transition","all .4s");
    $(".btn-quick").css("opacity","0");
    $(".btn-quick").css("z-index","25");
    $(".btn-quick").css("visibility","hidden");
});
    $(".btn-out").mouseleave( () =>{
        $(".btn-quick").css("transform","translateY(0)");
    $(".btn-quick").css("transition","all .4s");
    $(".btn-quick").css("opacity","0");
    $(".btn-quick").css("z-index","25");
    $(".btn-quick").css("visibility","hidden");
});
    $("#btn-quick").mouseover( ()=>{
        $(".made__items-wraper-1:after").css("z-index","1");
});


    ////FUNCTIONALYTY OF HOVER
    $('.made__items-box').hover(
        function() {
            $(this).addClass('tbl_navGroupHover');
        });
    $('.made__items-box').mouseleave(
        function() {
            $(this).removeClass('tbl_navGroupHover');
        });
    $(".wrapper-img").hover( function() {

        $(".tbl_navGroupHover .btn-quick").css("opacity","100");
        $(".tbl_navGroupHover .btn-quick").css("transform","translateY(-50px)");
        $(".tbl_navGroupHover .btn-quick").css("transition","all .2s");
        $(".tbl_navGroupHover .btn-quick").css("z-index","25");
        $(".tbl_navGroupHover .btn-quick").css("visibility","visible");
    });

    var navigators = $('.made__items ');
    navigators.find('.made__items-box').hover(
        function () {
            var elem = $(this);
            var index = elem.index();
            console.log(index);
            $(".made__label-item").mouseover((e)=>{
                var item =e.target.className;
            var arr = item.split("_")
            var prefix = arr[arr.length-1]
            $(".tbl_navGroupHover .wrapper-img").attr("src", `img/item-${index+1}/${prefix}.png`)
        })
        }, function () {
        }
    );

    $("#btn-video").click( function(){
        $(".video-img").css("visibility","hidden");
        $(".video-text").css("visibility","hidden");
        $("#video iframe").attr('src', "https://www.youtube.com/embed/6FDAm2ZG7bY?modestbranding=1&autohide=1&showinfo=0&controls=0&rel=0&showsearch=0" + '&autoplay=1');
    });

});