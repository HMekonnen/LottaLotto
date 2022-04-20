// Webpage background video
let video = document.getElementById("myVideo");

/* Create a class for future objects* lottoNum + powerPlayNums = arrays*/
class Lotto {
    constructor (playerName, lottoNums, bankValue, powerPlayNums){
    this.playerName = playerName;
    this.lottoNums = [Math.floor(Math.random()*(69-1)+1),Math.floor(Math.random()*(69-1)+1),Math.floor(Math.random()*(69-1)+1),Math.floor(Math.random()*(69-1)+1),Math.floor(Math.random()*(69-1)+1)]
    this.bankValue = bankValue;
    this.powerPlayNums = [Math.floor(Math.random()*(5-1)+1)]
    //options: 1. add methods to class 2. Declare functions outside of class. funcs needed: play()- placeBet(ensure bet sum <= bankvalue)- playPowerPlay(), Lotto + pplayPrize() -end game/declareWinner()- once game is functional, trim some fat off.
    }}

    // create 3 objects for "players"
    let house = new Lotto("House",[], 0,[])
    let player= new Lotto("Player",[],2,[])
    let computer= new Lotto("Computer",[],2,[])


   /* let bet + button = betSum // Sum value/ function needed here*/
   
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


 /* let powerPlayPrize = (x*1000 )-> sent to player bankValue - if #'s don't match ((x/4) * 100)is added to computers bank value
 betSum = amount bet by player */
 /* Need a condition to guarantee player cannot bet more than their bank value*/
 
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
                    console.log(`Don't forget to declare this cash donation on your taxes. 1/4 of your bet x $1000 and deposited into your opponents bank. You now have $${player.bankValue} in the bank and your opponent has ${computer.bankValue}.`);
                         break;
                                               
       }
    }

// powerPlayPrize() test - successful-> powerPlayPrize( 3, 500)
