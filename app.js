// Webpage background video
let video = document.getElementById("myVideo");

/* Create a class for future objects* lotto Num + powerPlayNums = arrays*/
class Lotto {
    constructor (playerName, lottoNums, bankValue, powerPlayNums){
    this.playerName = playerName;
    this.lottoNums = [Math.floor(Math.random()*(69-1)+1),Math.floor(Math.random()*(69-1)+1),Math.floor(Math.random()*(69-1)+1),Math.floor(Math.random()*(69-1)+1),Math.floor(Math.random()*(69-1)+1)]
    this.bankValue = bankValue;
    this.powerPlayNums = [Math.floor(Math.random()*(5-1)+1)]
    //add methods later - play, place bet, play power play, end game, declare winner
    }}

    // create 3 objects for "players"
    let house = new Lotto("House",[], 0,[])
    let player= new Lotto("Player",[],2,[])
    let computer= new Lotto("Computer",[],2,[])

    
    
    