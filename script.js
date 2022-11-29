const Mesg = document.getElementById("mesg");
const Cards = document.getElementById("cards");
const Sum = document.getElementById("sum");
const Getname = document.getElementById("Getname");
const Id1 = document.getElementById("1");
const Id2 = document.getElementById("2");
const Id3 = document.getElementById("3");
const wins = document.getElementById("win");
const over = document.getElementById("over");
const zoop = document.getElementById("zoop");
let win = false; //defines if you win or loss
let played = false; //defines if you've played or not 
let entered = false; //defines if you've entered your name or note 
let sum = 0;
let array = [];
let click = 0 
let getName; // gets your name
let money;

// adds a functionality to the buttons
function runner(a) {
    a.classList.add("mystyle");
    setTimeout(() =>{//after sometime removes the styling 
      a.classList.remove("mystyle");
    }, 200);
  }

// Starts the Game
function Start() {
  runner(Id1); // btn style changes on click 
	click++;
  if(entered == true){// If you entered the name then only the following code will be executed
  Getname.innerHTML = `<p> ${getName}: $${money} </p>` ;
  if (click === 1){
    // Drawing two cards at the start of the game
	for(let i = 0; i<2; i++){
		let getvalue = Math.floor(Math.random()*13) + 1;
    if(getvalue === 1){
    array.push(11);
    }else if(getvalue > 10){
    array.push(10);
    }else{
    array.push(getvalue);
    }
  }
  
  for(let j=0; j< array.length; j++){
  Cards.innerHTML += " " + array[j];
   sum += array[j];
  Sum.innerHTML = " " + sum;
  }
  
  // If the number at the start of the game was less than 21 we draw cards
  if(sum === 21){
  Mesg.innerHTML = "Hurray, BLACKJACK You Won &#129297!!"
  wins.play();
  win = true; 
  played = true; 
  }else if (sum > 21){ 
  Mesg.innerHTML = "Sorry, You Lost &#128557" 
  over.play();
  win = false;
  }else{
  Mesg.innerHTML = "Okay, you've still got this"
  }
}
}else{ //If you haven't entered your name following message will pop
Mesg.innerHTML = "Oh, you have't entered your name";
}
}

// Draws the Cards 
function Draw() {
  runner(Id2);// btn style changes on click
  if(click >=1&&entered === true){
	if(sum<21){
  
  Mesg.innerHTML = "Oh, you are close!!!"
	let getvalue = Math.floor(Math.random()*13) + 1;
  if(getvalue === 1){
  array.push(11);
  }else if(getvalue > 10){
  array.push(10);
  }else{
  array.push(getvalue);
  }
  Cards.innerHTML += " " + array[array.length-1];
  sum += array[array.length-1];
  Sum.innerHTML = " " + sum;
  
  if(sum >21){
  Mesg.innerHTML = "Sorry, You Lost &#128557"
  over.play();
  played = true; 
  min = false;
  }else if(sum === 21){
   Mesg.innerHTML = "Hurray, BLACKJACK You Won &#129297!!"
   wins.play();
   win = true;
   played = true; 
  }
}
}
}

// Takes the Name of the Player
function outputName() { 
  runner(Id3);// btn style changes on click

	money = 145;// Initially set money to 145
	getName = document.getElementById("inputName").value;
  if(getName === '') {getName = "Undefined"};
  
  Getname.innerHTML = `<p>Hi,&nbsp${getName} you get $${money} at the start of the game. Press &#128640 to reset. </p>
  `;
  entered = true;
  click = 0;
}

// Rocket Restarts the game
function reStart() {
  //reassign all variables other than money and Name
   zoop.play();
	 entered = true;
   sum = 0;
   array = [];
   click = 0 ;
   Mesg.innerHTML = "Lets Start the game";
   Cards.innerHTML = '';
   Sum.innerHTML = '';

   if (played == true){
   if(win == true){
   money += 5;
   Getname.innerHTML = `<p> ${getName}: $${money} </p>`;
   }else if(win == false) {
   money -= 5;
   Getname.innerHTML = `<p> ${getName}: $${money} </p>`;
   }
  }
  win=false;
  played= false;
}

