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
 // May assign the same for bankValues once game is up and running. ->
  //follow-up: Created to test- fix for computers bank - it worked, not sure why. in play() using comp.bankValue- sum kept coming up 20,000 over
 let compBank = computer.bankValue  
  
 //test to fix computers bank - it worked, not sure why. in play() using comp.bankValue- sum was 20,000 over
  // works when included in play function did not serve its purpose outside of function. - Strange. -> let compBank= computer.bankValue


//lottoPrize function - determines prize and updates bank value + console.log - param = quantMatched which = numMatches/case selectors.
 
 function lottoPrize(quantMatched){
    let numMatches = quantMatched
   switch(numMatches){
       
        case 1: 
            player.bankValue = 20000 + player.bankValue;
                console.log(`Hey playa! You matched 1! Way to go, you're 20k richer. You now have $${player.bankValue} in the bank.`);
                  break;
        case 2: 
            player.bankValue = 40000 + player.bankValue;
                  console.log(`Hey playa-Matched 2! Way to go, you're 40k richer. You now have $${player.bankValue} in the bank.`);
                    break;
           
       case 3: 
             player.bankValue = 60000 + player.bankValue;
                console.log(`Hey playa! You matched 3! Way to go, you're 60k richer. You now have $${player.bankValue} in the bank.`);
                     break;
       case 4: 
            player.bankValue = 80000 + player.bankValue;
               console.log(`Hey playa! You matched 4! Way to go, you're 80k richer. You now have $${player.bankValue} in the bank.`);
                     break;
        case 5: 
            player.bankValue = 100000 + player.bankValue;
                console.log(`Hey playa! You matched 5! Way to go, you're 100k richer. You now have $${player.bankValue} in the bank.`);
                     break;
        default: 
            player.bankValue = 0 + player.bankValue;
                 console.log(`Hey playa! Zero matches, zero gains! Better luck next time! You have $${player.bankValue} in the bank.`);
                      break;
                                           
   }
}





 // play() -triggered by play button- compares both player [i]'s w/ house lotto numbers and adds num matches to match sum variables
 function play(){
    /* let playerDisplay1= document.getElementById("playerDisplay").innerHTML = playerLottoNums
     let compDisplay1= document.getElementById("computerDisplay").innerHTML = computer.lottoNums
     let houseDisplay1=document.getElementById("houseDisplay").innerHTML = house.lottoNums */
         console.log(`P Bank Before Draw: ${player.bankValue}`)
        console.log(`C Bank Before Draw: ${computer.bankValue}`)
        

    
     for (let i =0; i <houseLottoNums.length; i++){
     
     if (playerLottoNums[i] === houseLottoNums[i]){
          playerMatchSum++;
           // not displaying default case selector- find out why. 
     }  
      
    
       if (computerLottoNums[i]===houseLottoNums[i]){
           computerMatchSum++ 
            compBank = (computerMatchSum * 20000) + 2 /* + 2 because when I do compBank += .. - it removes the starting bank value - when I did plain old compBank += - the sum when comp had 2 matches- kept appearing 20k over value- math ain't mathing. */
       }
       
   
     }
     /* Lotto # + Sum displays - will need to infuse w/ DOM at some point. i.e document.getElementById("playerDisplay").innerHTML = player.lottoNums*/
      console.log (`House Lotto #'s:          ${houseLottoNums}`)
      console.log (`Player Lotto #'s:         ${playerLottoNums}`)
      console.log  (`Computer Lotto #'s:       ${computerLottoNums}`)
      console.log (`Player Matched Total:     ${playerMatchSum}`)
      console.log  (`Computer Matched Total:   ${computerMatchSum}`)
      console.log("------------------------------------------")
      lottoPrize(playerMatchSum);
      console.log(`Hey Ernest! You matched: ${computerMatchSum} Your bank value is : $${compBank}`);
       console.log("------------------------------------------")
       console.log(`P Bank after Draw: ${player.bankValue}`)
       console.log(`C Bank after Draw: ${compBank}`)
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
                console.log(`Hey playa- One match, not bad. Don't worry, the regret of not betting more $$ will go away someday. You now have $${player.bankValue} in the bank.`);
                  break;
        case 2: 
            player.bankValue =  (betSum * 1000) + player.bankValue;
                  console.log(`Hey playa! You matched 2! Way to go. You now have $${player.bankValue} in the bank.`);
                    break;
           
       case 3: 
             player.bankValue =  (betSum * 1000) + player.bankValue;
                console.log(`Hey playa! You matched 3! What are the odds of that! You now have $${player.bankValue} in the bank.`);
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

play()

// lottoPrize() test -> successful -> lottoPrize(5)
// powerPlayPrize() test - successful-> powerPlayPrize( 3, 500)

/*4.20 16:20 - items to do: 
1. Figure out how to input bet (w/condition bet cannot be > bank.value)- > Create bet function- what does it do? Where will it go? - I'm thinking it will be the mother function for entire powerplay.
 i.e click bet -> triggers playPowerPlay- trigers prize
 2. PlayPowerPlay() - same rules as lotto but house only has 1 digit array while player could have 1-3 #'s ( figure out how that bit works)
 3. Consider creating a "Draw again" button - that triggers play() again. 
 4. Create endGame() that will display winner, shoot confetti & clear bank values. 

 Notes: 
 1. Ensure bank value is updating with every round of lotto and powerplay
 2. After finalizing game w/ original plan- see what functions can be blended / repurposed- i.e play() w/ the right parameters and tweaks can be used for both lotto and powerplay. Same w/ lottoPrize() and powerplayprize()
 3. Get your DOM in check- buttons need to be functioning and items need to be displayed in the correct places. 
 4. Complete basic CSS finishing touches - then if you have time, add animated/ delayed reveal of lotto numbers , confetti at end of game, funky borders for player + computer displays. 
 5. Once all is up and running- go through and see where you can trim some fat for cleaner code / not to violate DRY 
 6. Go live 
 7. Draft documentation of bugs encountered along the way for presentation. 
 8. Pat yourself on the back, you did ittt! 
*/ 


/*play function + bet function + endGame function*/
/* Play() 
X 1.  When play button is clicked
X 2. call play()=>
X 3. Draw 5 for display board
X 4. Draw 5 for computer 
X -RANDOM for this cycle5. Draw 5 - either via user input or random #'s
X 6. check player #'s and computer #'s against the houses #'s 
X add counter variables- in order and keep count of how many exact matches there were per player. 
X 7. total match value is then sent to lottoPrize function to determine and announce winnings. -- might not be necessary due to simplicity of adding prizes to play()

Repeat similar pseudocode for powerPlay 

4.20.22 - Discovered I might not need lottoPrize() and powerPlayPrize() - if I incorporate outcomes in play() & playPowerPlay() - sad but true :'(  

Main Lotto Game Process: Player clicks play-> triggers play() which triggers-> lottoPrize()- then 3 options- play again, end game, or powerplay.
PowerPlay Process: Player places bet/ assigns bet value- clicks play powerPlay - triggers playPowerPlay which triggers- powerPrize- then 3 options- play again, end game, or lotto play.

- Line 149 discovery eliminates the need for this feature- but it would be useful to find out how its done. Read up on objectkey/value/element - to potentially "arrayalize" lottoPrize function outcomes- aka if its computers prize- it conforms- allowing us to kill 2 birds w/ one function.- alt, think of alternative solution. - 
*/
