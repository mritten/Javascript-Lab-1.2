function startGame () {
const question = prompt("Would you like to play a game?");
  if (question === "yes"||"y"){
    const playerName = prompt(`What is your name?`);
    startCombat (playerName);
  }
}


function getDamage () {
return Math.floor((Math.random() * 5) + 1);
}

function startCombat (playerName) {
let playerHealth=40;
let grant = "Grant the Mighty Chicken";
let grantHealth=10;
let winCount=0;

while (playerHealth >=0 && winCount < 3) {

  const question = prompt (`Would you like to attack or quit?`);
 
  if (question === "quit"){
    console.log('Thank You for Playing')
    return;
  }

  if (question === "attack") {
  playerHealth -= getDamage();
  grantHealth -= getDamage();
  console.log(`${playerName} has ${playerHealth} health left`)
  console.log(`${grant} has ${grantHealth} health left`)
  
  if (grantHealth <= 0) {
  winCount++;
  grantHealth=10;
  console.log(`${playerName} has won.`);
  }
  }
} if (winCount === 3){
  console.log("user wins")
} else {
  console.log(`${grant} has won.`);
  }
  
  }


startGame ();