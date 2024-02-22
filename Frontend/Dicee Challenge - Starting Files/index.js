var dice1 = Math.floor((Math.random()*6)+1)
var dice2 = Math.floor((Math.random()*6)+1)
document.querySelectorAll(".dices img")[0].setAttribute("src","./images/dice" + dice1 + ".png") //Dice 1
document.querySelectorAll(".dices img")[0].setAttribute("alt", dice1)//Dice 1 alt text
document.querySelectorAll(".dices img")[1].setAttribute("src","./images/dice" + dice2 + ".png") //Dice 2
document.querySelectorAll(".dices img")[1].setAttribute("alt", dice2)//Dice 1 alt text
//document.querySelector("#dice-1").textContent = dice1
//document.querySelector("#dice-2").textContent = dice2

if(dice1 > dice2){
    document.querySelector(".results>h2").textContent = "Player 1 won!"
} else if(dice2 > dice1){
    document.querySelector(".results>h2").textContent = "Player 2 won!"
} else{
    document.querySelector(".results>h2").textContent = "It's a tie!"
}