var userChoice;

var correctAnswer = 0;

var incorrectAnswer = 0;

var question = 0;

var imagesUrl;

var count=30;

var questionList = [{
question: "Name the state in the image below",
choices: ["Texas", "New York", "Rhode Island", "Louisiana" ],
imageUrl:  "../images/louisiana.png",
validAnswer: 3
}, {
question:"Name the state in the image below",
choices: ["California", "New Hampshire", "Oregon", "Florida"],
validAnswer: 1

}, {
question:"Name the state in the image below",
choices: ["Alaska", "Hawaii", "Utah", "Idaho"],
validAnswer: 3

}, {
question:"Name the state in the image below",
choices: ["Massachusetts", "Vermont", "Rhode Island", "Maine"],
validAnswer: 1

}, {
question:"Name the state in the image below",
choices: ["Georgia", "Tennessee", "Kentucky", "West Virginia"],
validAnswer: 0

 }, {
question:"Name the country in the image below",
choices: ["Panama", "Costa Rica", "Honduras", "Belize"],
validAnswer: 2

}, {
question:"Name the country in the image below",
choices: ["Thailand", "Laos", "Burma", "South Korea"],
validAnswer: 2

}, {
question:"Name the country in the image below",
choices: ["Poland", "Ukraine", "Germany", "Austria"],
validAnswer: 3

}

];

$("#start_button").click(function(){
$(this).hide();
counter = setInterval(timer, 1000); 
displayTrivia();
}); 


function timer(){
count--;
if (count <= 0) {
 clearInterval(counter);
 return;
}

 $("#timer").html("Time remaining: " + "00:" + count + " secs");
}


function displayTrivia() {
$("#question_div").html(questionList[0].question);
$("#image_div").html(questionList[0].imageUrl);
question++;

  var choicesArr = questionList[0].choices;
  var buttonsArr = [];

  for (let i = 0; i < choicesArr.length; i++) {
    var button = $('<button>');
    button.text(choicesArr[i]);
    button.attr('data-id', i);
    $('#choices_div').append(button);
   }

  } 

 $('#choices_div').on('click', 'button', function(e){
  userChoice = $(this).data("id");
 questionList[0].validAnswer;
 if(userChoice != questionList[0].validAnswer) {

 $('#choices_div').text("Wrong Answer!");
 incorrectAnswer++;

} else if (userChoice === questionList[0].validAnswer) {
$('#choices_div').text("Correct!!!");
correctAnswer++;

}

});