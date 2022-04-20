// Webpage background video
//let video = document.getElementById("myVideo");

/* Create a class for future objects* lottoNum + powerPlayNums = arrays*/
//lottoPrize function - determines prize and updates bank value + console.log - param = quantMatched which = numMatches/case selectors.
 
class Lotto {
    constructor (playerName, lottoNums, bankValue, powerPlayNums){
    this.playerName = playerName;
    this.lottoNums = [Math.floor(Math.random()*(10-1)+1),Math.floor(Math.random()*(10-1)+1),Math.floor(Math.random()*(10-1)+1),Math.floor(Math.random()*(10-1)+1),Math.floor(Math.random()*(10-1)+1)]
    this.bankValue = bankValue;
    this.powerPlayNums = [Math.floor(Math.random()*(5-1)+1)]
    //options: 1. add methods to class 2. Declare functions outside of class. funcs needed: play()- placeBet(ensure bet sum <= bankvalue)- playPowerPlay(), Lotto + pplayPrize() -end game/declareWinner()- once game is functional, trim some fat off.
    }
}

    // create 3 objects for "players"
 let house = new Lotto("House",[], 0,[])
 let player= new Lotto("Player",[],2,[])
 let computer= new Lotto("Computer",[],2,[])

 // Variables to keep track of # matches per game per player
 let playerMatchSum = 0
 let computerMatchSum = 0

 // Attempt at simplifying my life -assigned variables to hold indiv .lottoNums
 let houseLottoNums = house.lottoNums
 let playerLottoNums = player.lottoNums
 let computerLottoNums = computer.lottoNums 
 // May assign the same for bankValues once game is up and running. ->let computerBank = computer.bankValue  
 
 // play() -triggered by play button- compares both player [i]'s w/ house lotto numbers and adds num matches to match sum variables
 function play(){
    document.getElementById("playerDisplay").innerHTML = player.lottoNums
    document.getElementById("computerDisplay").innerHTML = computer.lottoNums
    document.getElementById("houseDisplay").innerHTML = house.lottoNums

   for (let i =0; i <houseLottoNums.length; i++){
    
   if (playerLottoNums[i] === houseLottoNums[i]){
        playerMatchSum++
   }  
    
  
     if (computerLottoNums[i]===houseLottoNums[i]){
         computerMatchSum++ 
     }
   
 
   }
   /* Lotto # + Sum displays - will need to infuse w/ DOM at some point. i.e document.getElementById("playerDisplay").innerHTML = player.lottoNums*/
    console.log (`House Lotto #'s:          ${houseLottoNums}`)
    console.log (`Player Lotto #'s:         ${playerLottoNums}`)
    console.log  (`Computer Lotto #'s:      ${computerLottoNums}`)
    console.log (`Player Matched Total:     ${playerMatchSum}`)
    console.log  (`Computer Matched Total:  ${computerMatchSum}`)
   }
  
   

   //lottoPrize function - determines prize and updates bank value + console.log - param = quantMatched which = numMatches/case selectors.
   function lottoPrize(quantMatched){
    let numMatches = quantMatched
   switch(numMatches){
       
        case 1: 
            player.bankValue = 20000 + player.bankValue;
                console.log(`Matched 1! Way to go, you're 20k richer. You now have $${player.bankValue} in the bank.`);
                  break;
        case 2: 
            player.bankValue = 40000 + player.bankValue;
                  console.log(`Matched 2! Way to go, you're 40k richer. You now have $${player.bankValue} in the bank.`);
                    break;
           
       case 3: 
             player.bankValue = 60000 + player.bankValue;
                console.log(`Matched 3! Way to go, you're 60k richer. You now have $${player.bankValue} in the bank.`);
                     break;
       case 4: 
            player.bankValue = 80000 + player.bankValue;
               console.log(`Matched 4! Way to go, you're 80k richer. You now have $${player.bankValue} in the bank.`);
                     break;
        case 5: 
            player.bankValue = 100000 + player.bankValue;
                console.log(`Matched 5! Way to go, you're 100k richer. You now have $${player.bankValue} in the bank.`);
                     break;
        default: 
            player.bankValue = 0 + player.bankValue;
                 console.log(`Zero matches, zero gains! Better luck next time!`);
                      break;
                                           
   }
}
/* let bet + button = betSum // Sum value/ function needed here - bet() must have a condition to ensure player doesn't bet more $ than they have in the bank*/
/* playPowerPlay () here - similar to play() but potential variables = 1,2, or 3 guesses are possible*/


  
 /* let powerPlayPrize = (x*1000 )-> sent to player bankValue - if #'s don't match ((x/4) * 100)is added to computers bank value
 betSum = amount bet by player */
 /* Need to incorporate a condition to guarantee player cannot bet more than their bank value - to be added to bet()*/
 
 function powerPlayPrize(quantMatched, betSum){
    let numMatches = quantMatched
    
   switch(numMatches){
       
        case 1: 
            player.bankValue = (betSum * 1000) + player.bankValue;
                console.log(`One match, not bad. Don't worry, the regret of not betting more $$ will go away someday. You now have $${player.bankValue} in the bank.`);
                  break;
        case 2: 
            player.bankValue =  (betSum * 1000) + player.bankValue;
                  console.log(`Matched 2! Way to go. You now have $${player.bankValue} in the bank.`);
                    break;
           
       case 3: 
             player.bankValue =  (betSum * 1000) + player.bankValue;
                console.log(`Matched 3! What are the odds of that! You now have $${player.bankValue} in the bank.`);
                     break;
      
        default: 
            player.bankValue = (player.bankValue-betSum);
            computer.bankValue =  ((betSum/4) * 1000) + computer.bankValue;
                console.log(`Don't forget to declare this cash donation on your taxes.
                1/4 of your bet x $1000 was deposited into your opponents bank. 
                You now have $${player.bankValue} in the bank and your opponent has ${computer.bankValue}.`);
                     break;
                                           
   }
}
// lottoPrize() test -> successful -> lottoPrize(5)
// powerPlayPrize() test - successful-> powerPlayPrize( 3, 500)

/*play function + bet function + endGame function*/
/* Play() 
1.  When play button is clicked
2. call play()=>
3. Draw 5 for display board
4. Draw 5 for computer 
5. Draw 5 - either via user input or random #'s
6. check player #'s and computer #'s against the houses #'s 
- in order and keep count of how many exact matches there were per player. 
AKA a playertotalMatch & compTotalMatch might be necessary. 
7. total match value is then sent to lottoPrize function to determine and announce winnings. 

Repeat similar pseudocode for powerPlay 

4.20.22 - Discovered I might not need lottoPrize() and powerPlayPrize() - if I incorporate outcomes in play() & playPowerPlay() - sad but true :'(  

Main Lotto Game Process: Player clicks play-> triggers play() which triggers-> lottoPrize()- then 3 options- play again, end game, or powerplay.
PowerPlay Process: Player places bet/ assigns bet value- clicks play powerPlay - triggers playPowerPlay which triggers- powerPrize- then 3 options- play again, end game, or lotto play.

- Line 149 discovery eliminates the need for this feature- but it would be useful to find out how its done. Read up on objectkey/value/element - to potentially "arrayalize" lottoPrize function outcomes- aka if its computers prize- it conforms- allowing us to kill 2 birds w/ one function.- alt, think of alternative solution. - 
*/
