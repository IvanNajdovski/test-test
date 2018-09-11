




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
        $(".btn-quick").css("bottom","10%");
    $(".btn-quick").css("transition","all .4s");
    $(".btn-quick").css("opacity","0");
    $(".btn-quick").css("z-index","25");
    $(".btn-quick").css("visibility","hidden");
});
    $(".btn-out").mouseleave( () =>{
        $(".btn-quick").css("bottom","10%");
    $(".btn-quick").css("transition","all .4s");
    $(".btn-quick").css("opacity","0");
    $(".btn-quick").css("z-index","25");
    $(".btn-quick").css("visibility","hidden");
});
    $("#btn-quick").mouseover( ()=>{
        $(".made__items-wraper-1:after").css("z-index","1");
});
//// CLICK FUCNTION ON BUTTON
//     $(".btn-quick").on( 'click', ()=>{
//         $("body").append('<div class="watch__sale" id="watch"></div>');
//         $(".watch__sale").html(`<div class="watch__sale-box watch__wrapper">
//     <div class="watch__sale-img">
//         <img src="img/watch/watch1.png" alt="" class="watch-img">
//         </div>
//         <div class="watch__sale-text">
//         <h1 class="watch__sale-name">GR - Bleu Océan</h1>
//     <p class="watch__sale-price">€215.00</p>
//     <p class="watch__sale-info">La GR - Grande Randonnée - est notre première montre à l'épreuve du temps et...</p>
//     <h1 class="watch__sale-header">Click for complete description of the product</h1>
//     <div class="watch__sale-color">
//         <h2>Color of the collar</h2>
//     <div class="watch__sale-color-box">
//         <img src="img/colors/1-1.png" alt="" class="watch__sale-color-box-item">
//         <img src="img/colors/1-4.png" alt="">
//         <img src="img/colors/1-2.png" alt="">
//         <img src="img/colors/1-3.png" alt="">
//
//         </div>
//         </div>
//         <button class="btn btn-blue watch__sale__button">Order Now</button>
//     </div>
//     <button class="button-close" "><i class="fas fa-times" id="close"></i></button>
//     </div>`)
//
// });

//         $(".btn-quick").on( 'click', ()=>{
//         $("body").append('<div class="watch__sale-box watch__wrapper"></div>');
//         $(".watch__sale-box").html(`
//     <div class="watch__sale-img">
//         <img src="img/watch/watch1.png" alt="" class="watch-img">
//         </div>
//         <div class="watch__sale-text">
//         <h1 class="watch__sale-name">GR - Bleu Océan</h1>
//     <p class="watch__sale-price">€215.00</p>
//     <p class="watch__sale-info">La GR - Grande Randonnée - est notre première montre à l'épreuve du temps et...</p>
//     <h1 class="watch__sale-header">Click for complete description of the product</h1>
//     <div class="watch__sale-color">
//         <h2>Color of the collar</h2>
//     <div class="watch__sale-color-box">
//         <img src="img/colors/1-1.png" alt="" class="watch__sale-color-box-item">
//         <img src="img/colors/1-4.png" alt="">
//         <img src="img/colors/1-2.png" alt="">
//         <img src="img/colors/1-3.png" alt="">
//
//         </div>
//         </div>
//         <button class="btn btn-blue watch__sale__button">Order Now</button>
//     </div>
//     <button class="button-close" "><i class="fas fa-times" id="close"></i></button>
//    `)
//
// });

    $('.btn-quick').on("click",function(){
        //console.log($(this).parent().children('img').attr('src'))
        var watchImg = $(this).parent().children('img').attr('src');
        var  watch = watchImg.split(".")[0].split("");
        var img = watch[watch.length-1]

        $("#watch").append('<div class="watch__sale-box watch__wrapper"></div>');
    $(".watch__sale-box").html(`
    <div class="watch__sale-img">
        <img src="img/watch/watch${img}.png" alt="" class="watch-img">
        </div>
        <div class="watch__sale-text">
        <h1 class="watch__sale-name">GR - Bleu Océan</h1>
    <p class="watch__sale-price">€215.00</p>
    <p class="watch__sale-info">La GR - Grande Randonnée - est notre première montre à l'épreuve du temps et...</p>
    <h1 class="watch__sale-header">Click for complete description of the product</h1>
    <div class="watch__sale-color">
        <h2>Color of the collar</h2>
    <div class="watch__sale-color-box">
        <img src="img/colors/1-1.png" alt="" class="watch__sale-color-box-item">
        <img src="img/colors/1-4.png" alt="">
        <img src="img/colors/1-2.png" alt="">
        <img src="img/colors/1-3.png" alt="">

        </div>
        </div>
        <button class="btn btn-blue watch__sale__button">Order Now</button>
    </div>
    <button class="button-close" "><i class="fas fa-times" id="close"></i></button>
    `);
        $("#watch").css("display","flex");

});
    $(document).on('click', '#close', function() {
        $(".watch__sale").empty();
        $("#watch").css("display","none");
    });

    // $('#close').click(function() {
    //     $("#watch").empty();
    // });

    $(".button-close").click( ()=> {
        $("#watch").empty()
    $("#watch").css("display","none");
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
        $(".tbl_navGroupHover .btn-quick").css("bottom","40%");
        $(".tbl_navGroupHover .btn-quick").css("transition","all .2s");
        $(".tbl_navGroupHover .btn-quick").css("z-index","25");
        $(".tbl_navGroupHover .btn-quick").css("visibility","visible");
    });
    $(".wrapper-img").click( function() {

        $(".tbl_navGroupHover .btn-quick").css("opacity","100");
        $(".tbl_navGroupHover .btn-quick").css("bottom","40%");
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

