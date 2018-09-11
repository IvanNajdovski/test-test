

    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var modelIndex = url.searchParams.get("modelIndex");
    var modelColors = url.searchParams.get("modelColors").split(",");
    
    $(".watch-img").attr("src",`img/watch/watch${modelIndex}/watch${modelIndex}.png`)
    for (let item of modelColors) {
        $(".watch__sale-color-box").append(`<img src="img/colors/${item}.png" alt="image for watch ${item}" class="watch__collar-colors">`)
    }