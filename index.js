var readlineSync=require("readline-sync")
var chalk = require('chalk');
var Score = 0;//global variable 
var units = "pts";//global variable units for score units
// input
var Username = readlineSync.question("May I know your name?  ",);
// output from here

console.log  ("");
console.log  (chalk.hex('#c6ffa2')("Hi "+Username))
console.log  (chalk.hex('#c6ffa2')("Welcome to Adobe Suit's Training QUIZ "));
console.log  ("");

console.log  ("This is a small quiz for the Beginners who have some basic knowledge of Graphic Designing and have used the softwares of Adobe suit like XD,photoshop,illustrator etc. ");

console.log ("---------------------------------------------");
console.log (chalk.hex('#ccdeff').inverse("Levels to qualify "));
console.log ("---------------------------------------------");

console.log  ("Here in this quiz we will have 3 different levels:");
console.log  ("");
console.log  (chalk.hex('#ffc100')("Level 1: Will have a single software (Adobe XD) question's with no negative marking. "));
console.log  ("");
console.log  (chalk.hex('#ff6624')("Level 2: Will have a some medium level quesitons from 3 basic softwares that are Photoshop,XD, illustrator with -3 negative marking." ));
console.log  ("");
console.log  (chalk.hex('#b61919')("Level 3: Will have a some Hard level quesitons from 3 basic softwares that are Photoshop,XD, Illustrator with -6 negative marking."));console.log  ("");
console.log  ("All the best!");

console.log ("---------------------------------------------");
console.log (chalk.hex('#ccdeff').inverse("Instructions "));
console.log ("---------------------------------------------");
console.log  ("");
console.log  (chalk.hex('#ccdeff')("6 questions in each round."))
console.log  (chalk.hex('#ccdeff')("Each correct answer will get 10 points and participant will require 50(out of 60) to qualify the level"))
console.log  (chalk.hex('#ccdeff').underline("User should just answer option number/alphabet"))
console.log  ("");
var anykey = readlineSync.question("Press any key to start the quiz or e to exit")
if(anykey === "e"){
  process.exit()
}


console.log  (chalk.hex('#ffc100')("---------------------------------------------"));
console.log  (chalk.hex('#ffc100').inverse("LEVEL I."))
console.log  (chalk.hex('#ffc100')("---------------------------------------------"));

// console.log(chalk.hex('#3360ff')("a. Adobe XD"));
// console.log(chalk.hex('#5c79ff')("b. Adobe Photoshop"));
// console.log(chalk.hex('#9ec9ff')("c. Adobe Illustrator"));
// console.log ("");




// prrocessing starts
// ------------------------------------------------------------level 1 processing------------------------------------------
function play1(question,a,b,c,correctAnswer)
{
  console.log(question)
  console.log(a)
  console.log(b)
  console.log(c)
  var useranswer = readlineSync.question("","")
  if (
    useranswer === correctAnswer
  ){
    console.log  ("");
    console.log("Thats Correct!");
    Score = Score + 10 ;
    console.log( "Score:",Score,units)
    console.log  ("");
    console.log (chalk.hex('#ffc100') ("---------------------"));
  }
  else{
    console.log  ("");
    console.log("Opps! That's not Correct.");
    Score = Score + 0;
    console.log  ("Its",correctAnswer);
    console.log( "Score:",Score,units);
    
    console.log  ("");
    console.log  (chalk.hex('#ffc100')("---------------------"));
  }
}
// ------------------------------------------------------------level 2 processing------------------------------------------
 function play2(question,a,b,c,correctAnswer)
{
  console.log(question)
  console.log(a)
  console.log(b)
  console.log(c)
  var useranswer = readlineSync.question("","")
  if (
    useranswer === correctAnswer
  ){
    console.log  ("");
    console.log("Thats Correct!");
    Score = Score + 10 ;
    console.log( "Score:",Score,units)
    console.log  ("");
    console.log (chalk.hex('#ffc100') ("---------------------"));
  }
  else{
    console.log  ("");
    console.log("Opps! That's not Correct.");
    Score = Score - 3;
    console.log  ("Its",correctAnswer);
    console.log( "Score:",Score,units);
    
    console.log  ("");
    console.log  (chalk.hex('#ffc100')("---------------------"));
  }
}
 // ------------------------------------------------------------level 3 processing------------------------------------------
function play3(question,a,b,c,correctAnswer)
{
  console.log(question)
  console.log(a)
  console.log(b)
  console.log(c)
  var useranswer = readlineSync.question("","")
  if (
    useranswer === correctAnswer
  ){
    console.log  ("");
    console.log("Thats Correct!");
    Score = Score + 10 ;
    console.log( "Score:",Score,units)
    console.log  ("");
    console.log (chalk.hex('#ffc100') ("---------------------"));
  }
  else{
    console.log  ("");
    console.log("Opps! That's not Correct.");
    Score = Score - 6;
    console.log  ("Its",correctAnswer);
    console.log( "Score:",Score,units);
    
    console.log  ("");
    console.log  (chalk.hex('#ffc100')("---------------------"));
  }
}

//arrayy
// ------------------------------------------------------------level 1------------------------------------------------------
var XDQuesbank = [
	{
		question: "How to enable 3D transforms in Adobe XD ?",
		a: 'a: Go to Transform and click 3D Cube',
		b: 'b: Go to Layers and click 3D',
		c: 'c: Go to property and select 3D',
		correctAnswer: 'a'
	},
	{
		question: "How are components useful In Adobe XD ?",
		a: 'a: It helps us to create once and reuse again and again',
		b: 'b: One component helps us to use in multiple states',
		c: 'c: Both A and B',
		correctAnswer: 'c'
	},
  {
		question: "Auto Animate features in Adobe Xd helps us to do what ?",
		a: 'a: Micro interaction',
		b: 'b: Run parallax effects',
		c: 'c: All of the above',
		correctAnswer: 'c'
	},
  {
		question: "In Adobe XD we can repeat objects in any direction with the help of which command ?",
		a: 'a: Duplicate items',
		b: 'b: Paste in Place',
		c: 'c: Repeat Grid',
		correctAnswer: 'c'
	},
  {
		question: "In Adobe XD we can open which software file ?",
		a: 'a: Adobe Photoshop',
		b: 'b: Adobe Sketch',
		c: 'c: All of the above',
		correctAnswer: 'c'
	},{
		question: "In Adobe XD assets panels can save which of the things?",
		a: 'a: Colors',
		b: 'b: Character Styles',
		c: 'c: All of the Above',
		correctAnswer: 'c'
	},
]

for (var i=0;i< XDQuesbank.length; i++)
{
  var presentQuestion =  XDQuesbank[i];
play1(presentQuestion.question,
presentQuestion.a,
presentQuestion.b,
presentQuestion.c,
presentQuestion.correctAnswer)
 }
// ------------------------------------------------------------level 2------------------------------------------------------
var Lv2Quesbank = [
	{
		question: "Shortcut For the rectangle tool in illustrator?",
		a: 'a: E',
		b: 'b: M',
		c: 'c: l',
		correctAnswer: 'b'
	},
	{
		question: "In Photoshop which tool is used to make selections with the help of Brush ?",
		a: 'a: Polygon lasso tool',
		b: 'b: Brush Tool',
		c: 'c: Quick Mask tool',
		correctAnswer: 'c'
	},
  {
		question: "Auto Animate features in Adobe Xd helps us to do what ?",
		a: 'a: Micro interaction',
		b: 'b: Run parallax effects',
		c: 'c: All of the above',
		correctAnswer: 'c'
	},
  {
		question: "shortcut for the ellipse tool in illustrator?",
		a: 'a: L',
		b: 'b: m',
		c: 'c: j',
		correctAnswer: 'a'
	},
  {
		question: "In Adobe XD we can open which software file ?",
		a: 'a: Adobe Photoshop',
		b: 'b: Adobe Sketch',
		c: 'c: All of the above',
		correctAnswer: 'c'
	},{
		question: "shortcut for the add anchor point in illustrator?",
		a: 'a: -',
		b: 'b: ]',
		c: 'c: :',
		correctAnswer: 'a'
	},
]


if(
    Score>=50
  ){
    console.log  (chalk.hex('#c6ffa2')("Congrats "+Username))
    console.log  (chalk.hex('#c6ffa2')("You score you gave 5 correct answers"))
    console.log  (chalk.hex('#c6ffa2')("You are now Qualified for second round"))
    console.log  (chalk.hex('#ff6624')("---------------------------------------------"));
    console.log  (chalk.hex('#ff6624').inverse("LEVEL II."),("   Negative Marking= -3"))
    console.log  (chalk.hex('#ff6624')("---------------------------------------------"));
    for (var i=0;i< Lv2Quesbank.length; i++)
     {
      var presentQuestion =  Lv2Quesbank[i];
      play2(presentQuestion.question,
      presentQuestion.a,
      presentQuestion.b,
      presentQuestion.c,
      presentQuestion.correctAnswer)
     }

  }else{
    console.log (chalk.hex('#ffc100') ("---------------------"));
        console.log( "Score:",Score,units);
    console.log(chalk.hex('#ffc100')("Opps! You cant qualify as your dont have enough score."));
    console.log(chalk.hex('#ffc100')("Score above 50 to qualify to next round"));
       
    console.log  ("");
    
}

// ------------------------------------------------------------level 3------------------------------------------------------

var Lv3Quesbank = [
	{
		question: "What does contiguous option mean in Magic Wand Tool. What will happen if we check mark this option",
		a: 'a: Jumps the selection with same color range',
		b: 'b: Dont Jumps the selection with same color range',
		c: 'c: Make same color selections in different layers',
		correctAnswer: 'b'
	},
	{
		question: " Creating text as a graphic in Illustrator gives you all the following advantages except.",
		a: 'a: you can turn it into a brush',
		b: 'b: you can fit it to radical curves more easily',
		c: 'c: you can easily correct the spelling',
		correctAnswer: 'c'
	},
  {
		question: "Which of the following is NOT a basic tool shape provided in Adobe Illustrator?",
		a: 'a: Triangle',
		b: 'b: Ellipse',
		c: 'c: Polygon',
		correctAnswer: 'a'
	},
  {
		question: "How Adobe XD will help developers when you share prototypes with them ?",
		a: 'a: For viewing Measurements',
		b: 'b: Knowing Character Styles',
		c: 'c: Both A and B',
		correctAnswer: 'a'
	},
  {
		question: " We can connect premeier pro and Adobe XD ?",
		a: 'a: true',
		b: 'b: false',
		c: 'c: nor true nor false ',
		correctAnswer: 'b'
	},{
		question: "The process to record all set of commands and run again quickly can be done with the help of which Panel?",
		a: 'a: Variables Data',
		b: 'b: History Panel',
		c: 'c: Actions Panel',
		correctAnswer: 'c'
	},
]

if(
    Score>=100
  ){
    console.log  (chalk.hex('#c6ffa2')("Congrats again! "+Username))
    console.log  (chalk.hex('#c6ffa2')("You score you gave 5 correct answers"))
    console.log  (chalk.hex('#c6ffa2')("You are now Qualified for Third round"))
    console.log  (chalk.hex('#b61919')("---------------------------------------------"));
    console.log  (chalk.hex('#b61919').inverse("LEVEL III."),("   Negative Marking= -6"))
    console.log  (chalk.hex('#b61919')("---------------------------------------------"));
    for (var i=0;i< Lv2Quesbank.length; i++)
     {
      var presentQuestion =  Lv3Quesbank[i];
      play3(presentQuestion.question,
      presentQuestion.a,
      presentQuestion.b,
      presentQuestion.c,
      presentQuestion.correctAnswer)
     }

  }else{
    console.log (chalk.hex('#ffc100') ("---------------------"));
        console.log( "Score:",Score,units);
    console.log(chalk.hex('#ffc100')("Opps! You cant qualify as your dont have enough score."));
    console.log(chalk.hex('#ffc100')("Score above 100 to qualify to next round"));
       
    console.log  ("");
    
}


// ending part with score
if(
    Score>=150
  ){
    console.log  (chalk.hex('#c6ffa2')("Congratulations  "+Username))
    console.log  (chalk.hex('#c6ffa2')("You scored",score))
    console.log  (chalk.hex('#c6ffa2')("Never Stop Learning"))
    console.log  (chalk.hex('#c6ffa2')("Thankyou!"))
    console.log  (chalk.hex('#b61919')("---------------------------------------------"));
    console.log  (chalk.hex('#b61919')("---------------------------------------------"));
    }else{
    console.log (chalk.hex('#ffc100') ("---------------------"));
        console.log( "Score:",Score,units);
    console.log(chalk.hex('#ffc100')("Nupe! you haven't agained enough"));
    console.log(chalk.hex('#ffc100')("Score above 150 to win the quiz"));
       
    console.log  ("");
    
}