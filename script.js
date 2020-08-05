var startBtn = document.querySelector("#start-button");

var Timer = document.querySelector("#Timeleft");
var timeexit = ("Time remaining 0");

var i = 0;
var x = 1;
var ans1wrong = 0;
var ans2wrong = 0;
var ans3wrong = 0;
var ans4wrong = 0;


//questions:
var questionsection = document.querySelector(".questions");
var question1 = "1.  Why so JavaScript and Java have similar name?";
var question2 = "2.  When a user views a page containing a JavaScript program, which machine actually executes the script?";
var question3 = "3.  ______ JavaScript is also called client-side JavaScript.";
var question4 = "4.  ______ JavaScript is also called server-side JavaScript.";
var question5 = "5.  What are variables used for in JavaScript Programs?";

var nomorequestions = ("Quiz Over!");

//section ids for each set of answers:
var answerContainer = document.querySelector("#answers");
var Q1Answers = document.querySelector("#q1answers");
var Q2Answers = document.querySelector("#q2answers");
var Q3Answers = document.querySelector("#q3answers");
var Q4Answers = document.querySelector("#q4answers");
var Q5Answers = document.querySelector("#q5answers");

//answer arrays:
var answer1 = ["A. JavaScript is a stripped-down version of Java", "B. JavaScript's syntax is loosely based on Java's", "C. They both originated on the island of Java", "D.  None of the above"];
var answer2 = ["A. The User's machine running a Web browser", "B. The Web server", "C. A central machine deep within Netscape's corporate offices", "D. None of the above"];
var answer3 = ["A. Microsoft", "B. Navigator", "C. LiveWire", "D. Native"];
var answer4 = ["A. Microsoft", "B. Navigator", "C. LiveWire", "D. Native"];
var answer5 = ["A. Storing numbers, dates, or other values", "B. Varying randomly", "C. Causing high-school algebra flashbacks", "D. None of the above"];

//buttons for each answer:
var A11btn = document.querySelector("#A11");
var A12btn = document.querySelector("#A12");
var A13btn = document.querySelector("#A13");
var A14btn = document.querySelector("#A14");

var A21btn = document.querySelector("#A21");
var A22btn = document.querySelector("#A22");
var A23btn = document.querySelector("#A23");
var A24btn = document.querySelector("#A24");

var A31btn = document.querySelector("#A31");
var A32btn = document.querySelector("#A32");
var A33btn = document.querySelector("#A33");
var A34btn = document.querySelector("#A34");

var A41btn = document.querySelector("#A41");
var A42btn = document.querySelector("#A42");
var A43btn = document.querySelector("#A43");
var A44btn = document.querySelector("#A44");

var A51btn = document.querySelector("#A51");
var A52btn = document.querySelector("#A52");
var A53btn = document.querySelector("#A53");
var A54btn = document.querySelector("#A54");
var AllDone = document.querySelector("#Done");
var lastContainer = document.querySelector(".container3");




//timer running on top: after Start button is clicked----------
startBtn.addEventListener("click", function () {
    var secondsleft = 120;
    function prepareRead() {

        var timeInterval = setInterval(function () {
            Timer.textContent = secondsleft + " seconds remaining";
            secondsleft--;


            if (secondsleft === 0 || x === 0) {
                Timer.textContent = "";
                clearInterval(timeInterval);
            }


        }, 1080);
    }
    prepareRead();

})

//answer buttons for question 1:
startBtn.addEventListener("click", function () {
    function speedRead() {
        questionsection.textContent = question1;

        Q1Answers.setAttribute("style", "display: block");


    } speedRead();
}, 1080);

//Event listener for answer-1 buttons:
Q1Answers.addEventListener("click", function () {

    function startRead() {
        if (A12btn = answer1[1]) {
            alert("Correct Answer!");
            questionsection.textContent = question2;
            Q2Answers.setAttribute("style", "display: block");
            Q1Answers.setAttribute("style", "display: none");
            secondsleft = secondsleft - ans1wrong;

        } else {
            alert("Wrong Answer!");
            questionsection.textContent = question2;
            Q2Answers.setAttribute("style", "display: block");
            Q1Answers.setAttribute("style", "display: none");

        }

    } startRead();

});

//Event listener for answer-2 buttons:
Q2Answers.addEventListener("click", function () {
    function readNow() {

        if (A21btn = answer2[0]) {
            alert("Correct Answer!");
            questionsection.textContent = question3;
            Q3Answers.setAttribute("style", "display: block");
            Q2Answers.setAttribute("style", "display: none");

        } else {
            alert("Wrong Answer!");
            questionsection.textContent = question3;
            Q3Answers.setAttribute("style", "display: block");
            Q2Answers.setAttribute("style", "display: none");
        }

    } readNow();
})

//Event listener for answer-3 buttons:
Q3Answers.addEventListener("click", function () {
    function readMe() {

        if (A32btn = answer3[1]) {
            alert("Correct Answer!");
            questionsection.textContent = question4;
            Q4Answers.setAttribute("style", "display: block");
            Q3Answers.setAttribute("style", "display: none");

        } else {
            alert("Wrong Answer!");
            questionsection.textContent = question4;
            Q4Answers.setAttribute("style", "display: block");
            Q3Answers.setAttribute("style", "display: none");
        }

    } readMe();
})

//Event listener for answer-4 buttons:
Q4Answers.addEventListener("click", function () {
    function readingNow() {

        if (A43btn = answer4[2]) {
            alert("Correct Answer!");
            questionsection.textContent = question5;
            Q5Answers.setAttribute("style", "display: block");
            Q4Answers.setAttribute("style", "display: none");

        } else {
            alert("Wrong Answer!");
            questionsection.textContent = question5;
            Q5Answers.setAttribute("style", "display: block");
            Q4Answers.setAttribute("style", "display: none");
        }

    } readingNow();
})

//Event listener for answer-5 buttons:
Q5Answers.addEventListener("click", function () {
    function readingFunc() {

        if (A51btn = answer5[0]) {
            alert("Correct Answer!");

            Q5Answers.setAttribute("style", "display: block");
            Q4Answers.setAttribute("style", "display: none");
            Q5Answers.setAttribute("style", "display: none");
            questionsection.textContent = nomorequestions;
            x = 0;
            lastContainer.setAttribute("style", "display: block");



        } else {
            alert("Wrong Answer!");

            Q5Answers.setAttribute("style", "display: block");
            Q4Answers.setAttribute("style", "display: none");
            Q5Answers.setAttribute("style", "display: none");
            questionsection.textContent = nomorequestions;
            x = 0;
            lastContainer.setAttribute("style", "display: block");

        }

    } readingFunc();
    return x;
})





