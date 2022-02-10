/*
let firstCard=getRandomCards()
let secondCard=getRandomCards()
let cards=[firstCard, secondCard]
let sum= firstCard + secondCard 
*/
let cards=[]
let sum = 0
let hasBlackJack=false
let isAlive=false
let message=""

let playerEl= document.getElementById('player-el')
let sumEl= document.getElementById("sum-el")
let cardsEl= document.getElementById("card-el")
let messageEl= document.getElementById("mssg")
//let playerName= "Tamar"
//let playerChips= 145
//put player name and playerChips together as object

let player={
    name: "Tamar",
    chips: 145,
    //sayHello: function(){
        //console.log('heisan')
    //}


}
// create function inside obj
//to invoke function in the obj above
//player.sayHello()



playerEl.textContent= player.name + ": $" + player.chips





//use a card function to generate random card variable


function getRandomCards(){
    //if 1 -> return 11
    //if 11-13 -> 10   
    let randomNumber= Math.floor(Math.random() * 13)+ 1 // return no btn 1-13
    if (randomNumber>10){
        return 10
    } else if (randomNumber===1){
        return 11
    }
    else{
        return randomNumber
    }

   
}

function renderGame(){
    cardsEl.textContent= "Cards: "

    sumEl.textContent="sum: " + sum

    for (let i= 0; i< cards.length; i++){

          cardsEl.textContent += cards[i] + " "
    }
    
    if (sum <= 20){
        message="do you want to draw a new card?"
       
        
        
    }
    else if (sum === 21){

        message="you have got a blakjack!"
        
        hasBlackJack=true
    }
    else{
        message="you are out of the game"
        
        isAlive=false
    }
    messageEl.textContent=message     
}


function newCard(){
    // write a logic operation that allow player to get new card only if isAlive and hasBlackJack
    if(hasBlackJack === false && isAlive === true){
        console.log("drawing a new card from scratch")
        let card=getRandomCards()
        sum += card
        cards.push(card)
        renderGame()

    }
   
    }
function startGame(){
    isAlive=true
    let secondCard=getRandomCards()
    let firstCard =getRandomCards()
    cards=[firstCard, secondCard]
    sum = firstCard+ secondCard
    
    renderGame()
}

