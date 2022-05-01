/* Our Plan:
Task 1 
Set up each move eg:rock,paper,scissors as variables
Test to see that it works

Variable names:
playerMove
computerMove

All possible Moves:
(Player Wins)
Rock beats Scissors *
Rock beats Lizard *=

Scissors beats Paper *
Scissors beats Lizard *=

Paper beats Rock *
Paper beats Spock *=

Lizard beats Spock *=
Lizard beats Paper *=

Spock beats Scissors *=
Spock beats Rock *=


(Player Loses)
Rock loses to paper=
Rock loses to Spock=
Scissors lose to Spock=
Scissors loses to Rock=
Paper loses to Lizard=
Paper loses to Scissors=
Lizard loses to Scissors=
Lizard loses to Rock=
Spock loses to Lizard=
Spock loses to Paper=


(Draws)
Rock and Rock is a draw
Paper and Paper is a draw
Scissors and Scissors is a draw


Task 2
1 if player1 wins
0 if it is a draw
-1 if player1 loses (player2 wins)

let playerMove = prompt('Type your move').toLowerCase() ;
let winnerNumber=;
function getPlayer (playerMove, computerMove){
    if (playerMove === 'rock' && computerMove==='scissors' || playerMove ==='scissors' && computer==='paper'||playerMove==='paper'&& computerMove='rock'){
        winnerNumber=1;
    }else if (playerMove === 'rock' && computerMove==='paper' || playerMove ==='scissors' && computer==='rock'||playerMove==='paper'&& computerMove='scissors') {
        winnerNumber= -1;
    } else {
                 winnerNumber=0; 
    }
    return winnerNumber;
}
let result = getPlayer(playerMove,computerMove)

Task 3

Prompt for the playerMove

Alert the result 1,0,-1


Task 4

a function for the computerMove to randomly choose an input everytime 

Task 5

Use a while loop and confirm if the player would like to continue playing. 
At the end of each game ask do you want to play again yes/no. 
If yes the game will reset but keep the score. 
If no alert thanks for playing

Task 6

We need to make the result a variable 
update this at the end of each round
alert the result

Task 7

creat a prompt for a username 
username has to be 10 characters or less

let namePlayer = prompt ('Type your name');



