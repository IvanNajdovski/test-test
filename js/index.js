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

    $(".shopping").css("background-color","#fff");
    $("#shoping").css("z-index", "50");
    $("#forhim").css("z-index", "1");
    $("#forher").css("z-index", "-1");
    $("#forbras").css("z-index", "-1");

});
    $(".delete-header").mouseover( () =>{
        $("#forhim").css("display", "none");
    $("#forher").css("display", "none");
    $("#forbras").css("display", "none");

    $(".shopping").css("background-color","transparent");
    $("#shoping").css("z-index", "0");


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

    $(".shopping").css("background-color","#fff");
    $("#shoping").css("z-index", "50");
    $("#forhim").css("z-index", "-1");
    $("#forher").css("z-index", "1");
    $("#forbras").css("z-index", "-1");

});
    $("#for-bras").mouseover( () =>{
        $("#forbras").css("display", "flex");

    $(".shopping").css("background-color","#fff");
    $("#shoping").css("z-index", "50");
    $("#forbras").css("z-index", "1");
    $("#forhim").css("display", "none");
    $("#forher").css("display", "none");

});
    ///BTN MOVE FUNCTIONS
    $(".wrapper-img").hover( () =>{
        $("#btn-quick").css("opacity","100");
        $("#btn-quick").css("transform","translateY(-50px)");
        $("#btn-quick").css("transition","all .2s");
        $("#btn-quick").css("z-index","25");
        $("#btn-quick").css("visibility","visible");
    });
    $(".wrapper-img2").hover( () =>{
        $("#btn-quick2").css("opacity","100");
        $("#btn-quick2").css("transform","translateY(-50px)");
        $("#btn-quick2").css("transition","all .2s");
        $("#btn-quick2").css("z-index","25");
        $("#btn-quick2").css("visibility","visible");
    });
    $(".wrapper-img3").hover( () =>{

        $("#btn-quick3").css("opacity","100");
        $("#btn-quick3").css("transform","translateY(-50px)");
        $("#btn-quick3").css("transition","all .2s");
        $("#btn-quick3").css("z-index","25");
        $("#btn-quick3").css("visibility","visible");
    });
    $(".wrapper-img4").hover( () =>{
        $("#btn-quick4").css("transform","translateY(-50px)");
        $("#btn-quick4").css("opacity","100");
        $("#btn-quick4").css("transition","all .2s");
        $("#btn-quick4").css("z-index","25");
        $("#btn-quick4").css("visibility","visible");
    });
    $(".wrapper-img5").hover( () =>{

        $("#btn-quick5").css("opacity","100");
        $("#btn-quick5").css("transform","translateY(-50px)");
        $("#btn-quick5").css("transition","all .2s");
        $("#btn-quick5").css("z-index","25");
        $("#btn-quick5").css("visibility","visible");
    });


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
    $(".made__items-box-1 .made__label-item").mouseover((e)=>{
        var item =e.target.className;
        var arr = item.split("_")
        var prefix = arr[arr.length-1]
        $(".made__items-box-1 .wrapper-img").attr("src", `img/item-1/${prefix}.png`)


    })
    $(".wrapper-img2").mouseover(()=>{

    $(".wrapper-img").attr("src", `img/item-3/${prefix}.png`)


})
    $(".made__items-box-3 .made__label-item").mouseover((e)=>{
        var item =e.target.className;
    var arr = item.split("_")
    var prefix = arr[arr.length-1]
    $(".made__items-box-3 .wrapper-img3").attr("src", `img/item-3/${prefix}.png`)


    })
    $(".made__items-box-4 .made__label-item").mouseover((e)=>{
        var item =e.target.className;
    var arr = item.split("_")
    var prefix = arr[arr.length-1]
    $(".made__items-box-4 .wrapper-img4").attr("src", `img/item-4/${prefix}.png`)


})
    $(".made__items-box-5 .made__label-item").mouseover((e)=>{
        var item =e.target.className;
    var arr = item.split("_")
    var prefix = arr[arr.length-1]
    $(".made__items-box-5 .wrapper-img5").attr("src", `img/item-5/${prefix}.png`)


})


});