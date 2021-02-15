var readLineSync = require("readline-sync");
var score = 0;
// database
// Arrays of question(objects)
var questions = [
  {
    question : "What is the Capital city of India? ",
    answer : "Delhi"
  },
  {
    question : "What is the Capital city of Maharashtra? ",
    answer : "Mumbai"
  },
  {
    question : "What is the Capital city of Tamilnadu? ",
    answer : "Chennai"
  },
  {
    question : "What is the Capital city of Gujarat?  ",
    answer : "Gandhinagar"
  },
  {
    question : "What is the Capital city of Rajasthan? ",
    answer : "Jaipur"
  },
  {
    question : "What is the Capital city of Madhya Pradhesh? ",
    answer : "Bhopal"
  },
  {
    question : "Who was the first president of India? ",
    answer : "Rajendra Prasad"
  },
  {
    question : "Who was called as a Father of Nation? ",
    answer : "Mahatma Gandhi"
  },
  {
    question : "Who is the Protagonist in Bahubali movie? ",
    answer : "Prabhas"
  },
  {
    question : "Who killed Bahubali in Bahubali-The beginning movie? ",
    answer : "Kattapa"
  }
]

// logic-backend
function welcome(){
  console.log("Hello Folks!!! Welcome to the game of Quiz.");
  console.log("------------------");
  var username = readLineSync.question("May i know your name? ");
  console.log("------------------");
  console.log("Welcome " + username + " ,I am pleased to have u here");
  console.log("------------------");
  console.log("Lets Begin the game of quiz!!!!!!!");
  console.log("------------------");
  console.log("------------------");
};


function quiz(question,answer){
  // asking the question
  var userAnswer = readLineSync.question(question);


  // verify the answer
  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log("you are correct");
    score = score + 1;
  }
  else{
    console.log("your answer is incorrect");
  };

  console.log("your score is " + score)
  console.log("------------------------")
  console.log("------------------------")
} 

function play(){
  for(var i=0;i<questions.length;i++){
    var currentQuestion = questions[i];
    quiz(currentQuestion.question,currentQuestion.answer);
  }
};

function winnerCheck(){
  if(score>7){
    console.log("Wallah!!!!!!, You have Scored great. You have won the quiz game")
  }else{
    console.log("Your score is to low , better luck next time-----:)")
  }
}
// Frontend
welcome();
play();
console.log("Your final score is : " + score);
console.log("------------------------")
winnerCheck()

