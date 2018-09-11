




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


    $('.btn-quick').on("click",function(){
        //console.log($(this).parent().children('img').attr('src'))
        const watchImg = $(this).parent().children('img').attr('src');
        const  watch = watchImg.split(".")[0].split("/");
        const watchLink = watch[watch.length-2].split("")

        const img = watchLink[watchLink.length-1]
        console.log(img)
        const watchCollar = $(this).parents('div.made__items-box').children('div.made__label').children("a").children('div');
        const collarColor =[];
        for (let item of watchCollar){
            var watchClass = item.classList[1].split("_");
            collarColor.push(watchClass[watchClass.length-1])
        }


        $("#watch").append('<div class="watch__sale-box watch__wrapper"></div>');
    $(".watch__sale-box").html(`
    <div class="watch__sale-img">
        <img src="img/watch/watch${img}/watch${img}.png" alt="" class="watch-img">
        </div>
        <div class="watch__sale-text">
        <h1 class="watch__sale-name">GR - Bleu Océan</h1>
    <p class="watch__sale-price">€215.00</p>
    <p class="watch__sale-info">La GR - Grande Randonnée - est notre première montre à l'épreuve du temps et...</p>
    <h1 class="watch__sale-header">Click for complete description of the product</h1>
    <div class="watch__sale-color">
        <h2>Color of the collar</h2>
    <div class="watch__sale-color-box">
        

        </div>
        </div>
        <button class="btn btn-blue watch__sale__button">Order Now</button>
    </div>
    <button class="button-close" "><i class="fas fa-times" id="close"></i></button>
    `);
        for(let item of collarColor) {
            $(".watch__sale-color-box").append(`<img src="img/colors/${item}.png" alt="image for watch ${item}" class="watch__collar-colors">`)
        }
            $("#watch").css("display","flex");

});
    $(document).on('click', '#close', function() {
        $(".watch__sale").empty();
        $("#watch").css("display","none");
    });
    if($(".watch-img")){

    }

    $(document).on('click', '.watch__collar-colors', function() {
        const watchClassColor = $(this).attr('src').split(".");
        const changeCollarColor = watchClassColor[0].split("/");
        console.log(changeCollarColor)
        const imageCollar = changeCollarColor[changeCollarColor.length-1];
        //console.log(changeCollarColor)
        const folder =  $(".watch-img").attr("src").split(".")
        console.log(folder)
        const link = folder[0].split("/")
        const linkTwo = link[0]+"/"+link[1]+"/"+link[2]+"/"
        $(".watch-img").attr("src", `${linkTwo}/${imageCollar}.png`);
        //console.log(mother)
        //console.log(imageCollar)
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
            if(index < 5) {
                $(".tbl_navGroupHover .wrapper-img").attr("src", `img/watch/watch${index + 1}/${prefix}.png`)
            }else if(index < 10) {
                $(".tbl_navGroupHover .wrapper-img").attr("src", `img/watch/watch${(index + 1)-5}/${prefix}.png`)
            }else if(index < 15) {
                $(".tbl_navGroupHover .wrapper-img").attr("src", `img/watch/watch${(index + 1)-10}/${prefix}.png`)
            }
            else if(index < 20) {
                $(".tbl_navGroupHover .wrapper-img").attr("src", `img/watch/watch${(index + 1)-15}/${prefix}.png`)
            }
            else if(index < 25) {
                $(".tbl_navGroupHover .wrapper-img").attr("src", `img/watch/watch${(index + 1)-20}/${prefix}.png`)
            }
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

