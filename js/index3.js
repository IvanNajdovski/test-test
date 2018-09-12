
var x =document.querySelectorAll("watch__collar-colors")
console.log(x)
x.forEach(function(item){
    item.addEventListener("click", function(){
        const watchClassColor = $(this).attr('src').split(".");
    const changeCollarColor = watchClassColor[0].split("/");

    const imageCollar = changeCollarColor[changeCollarColor.length - 1];

    const folder = $(".watch-img").attr("src").split(".")

    const link = folder[0].split("/")
    const linkTwo = link[0] + "/" + link[1] + "/" + link[2] + "/"
    $(".watch-img").attr("src", `${linkTwo}/${imageCollar}.png`);
    })
})
// x.addEventListener("click", function(event){
//     // $(document).on('click', '.watch__collar-colors', function () {
//
//     const watchClassColor = $(this).attr('src').split(".");
//     const changeCollarColor = watchClassColor[0].split("/");
//
//     const imageCollar = changeCollarColor[changeCollarColor.length - 1];
//
//     const folder = $(".watch-img").attr("src").split(".")
//
//     const link = folder[0].split("/")
//     const linkTwo = link[0] + "/" + link[1] + "/" + link[2] + "/"
//     $(".watch-img").attr("src", `${linkTwo}/${imageCollar}.png`);
//
// });