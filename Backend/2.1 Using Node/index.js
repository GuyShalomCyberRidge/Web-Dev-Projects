var dice1 = Math.floor((Math.random()*6)+1)
var dice2 = Math.floor((Math.random()*6)+1)
console.log("Dice 1 - " + dice1)
console.log("Dice 2 - " + dice2)

if(dice1 > dice2){
    console.log("Player 1 Won")
} else if(dice2 > dice1){
    console.log("Player 2 Won")
} else{
    console.log("Its a tie")
}