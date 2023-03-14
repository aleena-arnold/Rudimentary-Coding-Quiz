var timerLeft = 75;
var startButtonEl = document.querySelector("#startButton");
var answerButtonEl = document.querySelector("#answerButton");
var timerEl = document.querySelector("#screenTime");
var starterEl = document.querySelector("#starter");
var promptEl = document.querySelector("prompt");
var firstQ = document.querySelector("#question1");
var secondQ = document.querySelector("#question2");

function quizCountdown() {

    var timerInterval = setInterval(function() {
        timerLeft--;

        if (timerLeft > 1) {
            timerEl.textContent = "Timer: " + timerLeft;
        };
    
        if(timerLeft === 0) {
            timerEl.textContent = '';
            clearInterval(timerInterval);
        };

    }, 1000);
};

function hideStarter() {
    var x = starterEl;
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
};

function hideQuestion() {
    var first = firstQ;
        if (first.style.display === "none") {
            first.style.display = "flex";
        } else {
            first.style.display = "none";
        }
};

function firstQuestion() {
            var first = firstQ;
            firstQ.setAttribute("style", "display: none");
            if (first.style.display === "none") {
                first.style.display = "flex";
            } else {
                first.style.display = "none";
            }
        }
function secondQuestion() {
            var second = secondQ;
            secondQ.setAttribute("style", "display: none");
            if (second.style.display === "none") {
                second.style.display = "flex";
            } else {
                second.style.display = "none";
            }
        }

startButtonEl.addEventListener("click", function() {
    quizCountdown();
    hideStarter();
    firstQuestion();
    //hide #starterButton
});

answerButtonEl.addEventListener("click", function() {
    hideQuestion();
    secondQuestion();
});