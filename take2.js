class Lotto {
    constructor (playerName, lottoNums, bankValue, powerPlayNums){
    this.playerName = playerName;
    this.lottoNums = [Math.floor(Math.random()*(20-1)+1),Math.floor(Math.random()*(20-1)+1),Math.floor(Math.random()*(20-1)+1),Math.floor(Math.random()*(20-1)+1),Math.floor(Math.random()*(20-1)+1)]
    this.bankValue = bankValue; 
    this.powerPlayNums = [Math.floor(Math.random()*(5-1)+1)]
    //options: 1. add methods to class 2. Declare functions outside of class. funcs needed: play()- placeBet(ensure bet sum <= bankvalue)- playPowerPlay(), Lotto + pplayPrize() -end game/declareWinner()- once game is functional, trim some fat off.
    }
newNums(){
    this.lottoNums = [Math.floor(Math.random()*(20-1)+1),Math.floor(Math.random()*(20-1)+1),Math.floor(Math.random()*(20-1)+1),Math.floor(Math.random()*(20-1)+1),Math.floor(Math.random()*(20-1)+1)]
    this.powerPlayNums = [Math.floor(Math.random()*(5-1)+1)]
}
}


    // create 3 objects for "players"
    let house = new Lotto("House",[],0,[]);
    let player= new Lotto("Player",[],0,[]);
    let computer= new Lotto("Computer",[],0,[]);

    
 // Variables to keep track of # matches per index per player
 let playerMatchSum = 0;
 let computerMatchSum = 0;

 
// betSum variable initialized to zero for later use in bet() 
 let betSum= 0; 

 // msg variable initialized to an empty string for later DOM use
 let msg = ""  


 function play(){
     // methods to refresh lottery arrays w/ random numbers
         player.newNums()
         computer.newNums()
         house.newNums()
  
         let totalMatches = 0;

    // For loop to test each index of all 3 arrays for a match- playerMatchSum is used at each index to increase bank value
    // totalMatches is used to count total number of matches in entire array to later be utilize.
for (let i =0; i <house.lottoNums.length; i++){

     document.getElementById("playerDisplay").textContent = player.lottoNums 
       document.getElementById("houseDisplay").textContent = house.lottoNums 
          document.getElementById("computerDisplay").textContent = computer.lottoNums
 

if (player.lottoNums[i] === house.lottoNums[i]){ 
      playerMatchSum=1;
          totalMatches+=1
              player.bankValue += (playerMatchSum* 10) 

}  


if (computer.lottoNums[i]===house.lottoNums[i]){
      computerMatchSum=1 
           computer.bankValue += (computerMatchSum* 10) 
 }

 if (totalMatches >= 1) {
         msg=`  Matched ${totalMatches}! Your bank value is now: $${player.bankValue}!  `
} 

else if (totalMatches <1) {   
        msg=`  Zero matches, zero gains!  ` 
}


}
     document.getElementById("compWinnings").textContent = computer.bankValue.toLocaleString("en-US", {style:"currency", currency:"USD"});
         document.getElementById("playerWinnings").textContent =  player.bankValue.toLocaleString("en-US", {style:"currency", currency:"USD"}); 
             document.getElementById("message").textContent = msg;
}

// Takes bet input from user- if value is >= bank value, player may proceed w/ powerplay, if not- they will receive an alert that min bank value must be $1 to play.
         function bet(){  
             
            player.newNums()
            house.newNums()
             document.getElementById("playerDisplay").textContent = player.powerPlayNums;
                 document.getElementById("houseDisplay").textContent = house.powerPlayNums;
                    document.getElementById("compWinnings").textContent = computer.bankValue.toLocaleString("en-US", {style:"currency", currency:"USD"});
                         document.getElementById("playerWinnings").textContent =  player.bankValue.toLocaleString("en-US", {style:"currency", currency:"USD"}); 
            

            betSum= document.getElementById("betSum").value;

// Conditional statements for bet alerts

            if (betSum <= player.bankValue && betSum >= 1){
           
                confirm(`You are about to place a bet of: $${betSum}. Please click "OK" to proceed.`);
         }
            else{
                
                alert(`There is a $1.00 minimum to play and your bet cannot exceed your current bank value of: $${player.bankValue.toLocaleString("en-US", {style:"currency", currency:"USD"})}`)
            }

// For-loop to check house vs player powerplay numbers for a match - if yes, value is added to bank. If no, betSum is taken from bank and 1/4 is given to computer (player3)

     for (let i =0; i < house.powerPlayNums.length; i++){
         
         if (player.powerPlayNums[i] === house.powerPlayNums[i]){ 
              player.bankValue+= (betSum * 10)   
                  msg = ` Congratulations! you just increased your bank by ${((betSum*10)-1).toLocaleString("en-US", {style:"currency", currency:"USD"})}. `
         }   
         
         else if (player.bankValue<=0){
              betSum=0
         }
         else {

             player.bankValue -= (betSum-.01) 
                computer.bankValue += (betSum/4)*10;
                    msg=` No match. Don't forget to declare this cash donation on your taxes! `
            
         }
         
        
         }
         document.getElementById("compWinnings").textContent = computer.bankValue.toLocaleString("en-US", {style:"currency", currency:"USD"});
         document.getElementById("playerWinnings").textContent =  player.bankValue.toLocaleString("en-US", {style:"currency", currency:"USD"}); 
         document.getElementById("message").textContent = msg;
     }
           
        
         
  //Button End Game triggers this endGame() - announcement pops up and page is refreshed. - future enhancement will allow users to cancel "end game"

function endGame(){
    confirm(`Great game! Final Bank Values: Player: $ ${player.bankValue} Ernest: $${computer.bankValue}. To end the game, please click "OK" or "Enter" to continue.`);

    window.location.reload()
}
