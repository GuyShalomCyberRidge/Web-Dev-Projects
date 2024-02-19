
//Hover effect
$("button").on("mouseover", function(event){
    $(this).addClass("hover");
})
$("button").on("mouseleave", function(event){
    $(this).removeClass("hover");
})

//Click effect
function clickAnimation(element){
    $(element).addClass("clicked");
    setTimeout(function(){$(element).removeClass("clicked")}, 150);
}
$("button").on("click", function(event){
    clickAnimation(this);
})

function randomColor(arr){//between 1-4
    return arr[Math.floor(Math.random()*4)]
}



//main listener
$(document).on("keydown", function(event){
    if(event.keyCode === 32){
        $("h2").text("asdasdasdasd");

    }
})