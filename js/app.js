//Step 1 - define global variables

var questionsArray = [
    //question 1
    {
        questionText: 'How many US presidents were born in the state of Ohio?',
        questionChoices: [5, 6, 7],
        questionCorrectChoice: 2,
        correctDetails: 'The seven presidents are: Ulysses S. Grant, Rutherford B Hayes, James A Garfield, Benjamin Harrison, William McKinley, William H. Taft, and Warren G Harding.'
    },
    //question 2
    {
        questionText: 'What is the official state fruit?',
        questionChoices: ['Apple', 'Tomato', 'Buckeye'],
        questionCorrectChoice: 1,
        questionDetails: 'The tomato is the official state fruit!'
    },
    //question 3
    {
        questionText: 'What is the official state rock and roll song?',
        questionChoices: ['Go Buckeyes!', 'Hang on Sloopy', 'Beautiful Ohio'],
        questionCorrectChoice: 1,
        questionDetails: 'Hang on Sloopy is the official rock and roll song!'
},
    //question 4
    {
        questionText: 'True or false, Thomas Edison was born in the state of Ohio?',
        questionChoices: ['true', 'false'],
        questionCorrectChoice: 0,
        correctDetails: 'Thomas Edison was born in Milan, Ohio, which is in between Cleveland and Toledo.  He later moved to Michigan where he was raised.',
    },
    //question 5
    {
        questionText: 'The first professional baseball team was founded in which Ohio city?',
        questionChoices: ['Cleveland', 'Columbus', 'Cincinatti'],
        questionCorrectChoice: 2,
        correctDetails: 'In 1869, the Cincinatti Red Stockings were founded!'
    },
    //question 6
    {
        questionText: 'Which city is the capital of Ohio?',
        questionChoices: ['Cleveland', 'Columbus', 'Cincinatti'],
        questionCorrectChoice: 1,
        correctDetails: 'The first capital of Ohio was the city of Chillicothe.  In 1810 the capital was moved to Zanesville. In 1812 it returned to Chillicothe. In 1816 the newly formed city of Columbus bacame the capital!'
    },
    //question 7
    {
        questionText: 'Which Ohio city is considered the birthplace of aviation?',
        questionChoices: ['Cleveland', 'Akron', 'Dayton'],
        questionCorrectChoice: 2,
        correctDetails: 'Dayton, Ohio is where the Wright brothers developed their aircraft designs before testing in North Carolina.'
    },
    //question 8
    {
        questionText: 'Which Ohio city was formally known as the "rubber capital of the world"?',
        questionChoices: ['Cleveland', 'Akron', 'Dayton'],
        questionCorrectChoice: 1,
        correctDetails: 'During the 1900s the tire industry was centered in Akron, Ohio. At one time, the headquarters for General Tire, B.F. Goodrich, Firestone, and Goodyear were all located in Akron.'
    },
    //question 9
    {
        questionText: 'In Which Ohio city was the first mechanical cash register invented?',
        questionChoices: ['Cleveland', 'Akron', 'Dayton'],
        questionCorrectChoice: 2,
        correctDetails: 'James Ritty, a saloon owner from Dayton, Ohio is credited with inventing the cash register or till.'
    },
    //question 10
    {
        questionText: 'True or false, the Superman comic book hero was created in Cleveland, Ohio?',
        questionChoices: ['true', 'false'],
        questionCorrectChoice: 0,
        correctDetails: 'Two cleveland high school students, Jerry Siegel, and Joe Shuster, created the character in 1933.'
    }

];

var currentQuestionNumber = 0;
var totalNumberOfQuestions = questionsArray.length;
var correctTotal = 0;

//Step 2 - define functions

function questionDisplay() {

    //1 - display the current question / update text of each question
    $('.myQuestions').text(questionsArray[currentQuestionNumber].questionText);

    //2 - display what the choices are for current question
    //2.1 - first delete all the existing choices before populating it with new choices
    $('#choices').empty();

    //2.2 -get the total number of choices for the current question
    var choiceTotal = questionsArray[currentQuestionNumber].questionChoices.length;

    //2.3 - loop thru all the choices and append them to the choices container
    for (var i = 0; i < choiceTotal; i++) {
        //2.3.1 - loop thru the answer choices and create an dynamically generated row for each of them
        $('#choices').append("<input type='radio' class='myAnswers' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>");
    }

    //display the number of the current question
    $('.questionNumberDisplay').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestions);
}

//use functions
$(document).ready(function () {

    /*--- Hide quiz and result section on load ---*/
    $('#quizSection').hide();
    $('#results').hide();

    //On start quiz
    $('#startQuizButton').click(function () { //start the quiz and show the first question
        $('#results').hide();
        $('#startQuiz').hide();
        $('#quizSection').show();
        //empty the result details container
        questionDisplay();
    });

    //Show quiz questions
    $('#submitButton').click(function () { //start the quiz and show the first question

        var answer = $("input[class='myAnswers']:checked").val();
        var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
        if (answer == correctAnswer) {
            //if correct answer was selected
            correctTotal++;
            //console.log(correctTotal);
        }
        //quiz is finished, show result-section
        if ((currentQuestionNumber + 1) == totalNumberOfQuestions) {

            $('#finalScore').text(correctTotal + "/" + totalNumberOfQuestions);


            //hide other "screens"
            $('#quizSection').hide();
            $('#startQuiz').hide();
            $('#results').show();
        } else {
            //continue to next question
            currentQuestionNumber++;
            questionDisplay();
        }

    });
    $('#tryAgain').click(function () { //start the quiz and show the first question
        console.log(currentQuestionNumber);
        $('#quizSection').hide();
        $('#results').hide();
        $('#startQuiz').show();
        currentQuestionNumber = 0;
        correctTotal = 0;
    });
});
