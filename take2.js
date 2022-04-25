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
    let house = new Lotto("House",[],0,[])
    let player= new Lotto("Player",[],0,[])
    let computer= new Lotto("Computer",[],0,[])

    
 // Variables to keep track of # matches per game per player
 let playerMatchSum = 0
 let computerMatchSum = 0

 let compWinnings= document.getElementById("compWinnings").textContent = computer.bankValue;
 let playersWinnings= document.getElementById("playerWinnings").textContent =  player.bankValue;  
 

 let betSum= 0; // is there a purpose to declaring it here?
 let msg = "" // for display announcement..? 


 function play(){
    player.newNums()
    computer.newNums()
    house.newNums()
    let totalMatches = 0
for (let i =0; i <house.lottoNums.length; i++){

 document.getElementById("playerDisplay").textContent = player.lottoNums 
 document.getElementById("houseDisplay").textContent = house.lottoNums 
 document.getElementById("computerDisplay").textContent = computer.lottoNums
 //document.getElementById("message").textContent = msg;
 //document.getElementById("playerWinnings").textContent =  player.bankValue; 
 

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
document.getElementById("compWinnings").textContent = computer.bankValue;
document.getElementById("playerWinnings").textContent =  player.bankValue; 
 document.getElementById("message").textContent = msg;
}

         function bet(){  // function works and holds true to condition but alert box for else if does not pop up- figure out why. 
            player.newNums()
            house.newNums()
            document.getElementById("playerDisplay").textContent = player.powerPlayNums;
            document.getElementById("houseDisplay").textContent = house.powerPlayNums;
            document.getElementById("compWinnings").textContent = computer.bankValue;
            document.getElementById("playerWinnings").textContent =  player.bankValue; 
            

            betSum= document.getElementById("betSum").value;
            
        
            if (betSum <= player.bankValue && betSum >= 1){
           
                confirm(`You are about to place a bet of: $${betSum}. Please click "OK" to proceed.`);}
                
            else{
                alert(`There is a $1.00 minimum to play and your bet cannot exceed your current bank value of: $${player.bankValue}`)
            }

     for (let i =0; i < house.powerPlayNums.length; i++){
         
         if (player.powerPlayNums[i] === house.powerPlayNums[i]){ 
            player.bankValue+= (betSum * 10)   
            msg = ` Congratulations! you just increased your bet sum of $${betSum} tenfold. You're walking away with  $${player.bankValue} `
         }    
         else {

             player.bankValue -= (betSum-.01) 
             computer.bankValue += (betSum/4)*10;
             msg=` Don't forget to declare this cash donation on your taxes! You now have $${player.bankValue} in the bank and Ernest has ${computer.bankValue}. `
            
         }
         
        
         }
         document.getElementById("compWinnings").textContent = computer.bankValue;
         document.getElementById("playerWinnings").textContent =  player.bankValue; 
         document.getElementById("message").textContent = msg;
     }
           
        
         
  
function endGame(){
    confirm(`Great game! Final Bank Values: Player: $ ${player.bankValue} Ernest: $${computer.bankValue}. To end the game, please click "OK" or "Enter" to continue.`);
//Need to add a way for reload() to only take place if player clicks ok/continue- at this time it refreshes page regardless. 

    window.location.reload()
}
