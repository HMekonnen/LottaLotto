# LottaLotto

Hi there, thank you for stopping by to check out my work! 

**Description:**

Lottery Browser Game
The house displays winninng lotto/powerplay numbers. Computer is the competition
Starting bank value $0.00
Point system: 
Main Lotto: $10.00 per lotto number matched
PowerPlay: $1 minimum to play - player cannot bet more than they have available in their bank 
          **Prize:** $ Bet Sum * 10 
          **Catch:** If powerplay numbers do not match, player will lose entire bet sum, and 1/4 of that bet * 10 will be awarded to computer 
          
**How to Play:**

**Main Lotto Game:**
Winning numbers are displayed top center, player on the left, computer on the right
Start the game by clicking "Click to play lotto"
Continue to draw by clicking "Draw Again" or "Click to play lotto" input two buttons for a better user experience

**Power Play:**
Once player has $1.00+ in bank
Insert bet amount in the centrally located input field 

**To End Game:**
Click "End Game" button on the right
An alert will pop up displaying player and computer values 
Winner has the highest bank value at the end of the game

**Technologies used:**

Class Constructor for Name, Lotto Numbers, Bank Values, and Power Play Numbers
Method: newNums - assists w/ resetting lottery numbers with each draw

**DOM:**

Document.getElementByID- To display lottery numbers, bank values, and announcements 
OnClick()

**Functions:**

**play()** - utilizes class method, conditional statements, for loop, and DOM
Use Case: 
Main lotto game function
Depending on conditions ( i.e. Numbers matching) will increase bank values and announce number of matches per round

**bet()**- utilizes conditional statements, for loop and DOM
Use case:
Accepts a bet >= bank value
Refuses bets < bank value 
Draws powerplay #'s and compares equivalency
If numbers match, bet is multiplied by $10.00
If numbers do not match, bet is subtracted from players bank- 1/4 of that bet is multiplied by 10 and awarded to computer

**endGame()**
Announces final bank values then refreshes the page

**Future features:**

1. Win/Lose dollar amount set- i.e first player to reach $100,000.00 wins
2. Confetti when a player wins
3. Additional CSS styling and CSS effects to be applied to lotto number reveals
4. End Game button will give you an option to cancel the decision to end game
5. To connect with users, we will request they select their own game names and will also have a set name computer opponent- Ernest
6. Enhacement/Feedback survey forum for users to share any ideas or feedback to enhance product
