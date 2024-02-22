
function chooseSound(key){
    switch(key){
        case("w"):
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;

        case("a"):
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;

        case("s"):
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;

        case("d"):
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;

        case("j"):
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;

        case("k"):
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;

        case("l"):
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;

        default: console.log(this)
    }
}

function buttonPressAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.toggle("pressed");
}

function buttonLiftAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.toggle("pressed");
}



var drumLength = document.querySelectorAll(".drum").length
var drumSounds = ["kick-bass","snare","crash","tom-1","tom-2","tom-3","tom-4"]

//Detecting button presses.
for(var i = 0; i < drumLength ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var btnInnerHTML = this.innerHTML
        chooseSound(btnInnerHTML)
        buttonPressAnimation(btnInnerHTML)
    })
}

//Detection keyboard presses.
document.addEventListener("keydown", function(event) {
    var keyPressed = event.key
    chooseSound(keyPressed)
    buttonPressAnimation(keyPressed)
})
document.addEventListener("keyup", function(event) {
    var keyLifted = event.key
    buttonLiftAnimation(keyLifted)
})
