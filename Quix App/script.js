"use strict";

const questionBank = [
    {
        question: "Which animal lays eggs?",
        answers: ["Dog", "Cat", "Duck", "Sheep"],
        correct: "Duck",
    },
    {
        question: "A male cow is called?",
        answers: ["Ox", "Dog", "Sheep", "Monkey"],
        correct: "Ox",
    },
    {
        question: "All animals need food, air, and ____ to survive.",
        answers: ["House", "Water", "Chocolate", "Fruits"],
        correct: "Water",
    },
    {
        question: "Which one is a fur-bearing animal?",
        answers: ["Hen", "Cat", "Duck", "Horse"],
        correct: "Cat",
    },
    {
        question: "What is Earth’s only natural satellite?",
        answers: ["Sun", "Mars", "Venus", "Moon"],
        correct: "Moon",
    },
    {
        question: "What part of the body helps you move?",
        answers: ["Eyes", "Lungs", "Pancreas", "Muscles"],
        correct: "Muscles",
    },
    {
        question: "What is the young one of a cow called?",
        answers: ["Puppy", "Kitten", "Baby", "Calf"],
        correct: "Calf",
    },
    {
        question: "Which shape is a round?",
        answers: ["Rectangle", "Circle", "Square", "Traingle"],
        correct: "Circle",
    },
    {
        question: "Legs have feet and arms have ___.",
        answers: ["Eyes", "Finger", "Hands", "Muscles"],
        correct: "Hands",
    },
    {
        question: "What star shines in the day and provides light?",
        answers: ["Moon", "Venus", "Sun", "Mars"],
        correct: "Sun",
    },
];

/* --------------- Selector -------------- */
const quix = document.querySelector(".quixBox");
const result = document.querySelector(".resultBox");
const score = document.querySelector(".score");
const summary = document.querySelector(".summary");
const question = document.querySelector(".question");
const timer = document.querySelector(".timer");
const answer_A = document.querySelector(".answer-A");
const answer_B = document.querySelector(".answer-B");
const answer_C = document.querySelector(".answer-C");
const answer_D = document.querySelector(".answer-D");
const btn = document.querySelector(".btn");

/* --------------- Variables -------------- */
let time = 5;
let currentQuestion = 0;
let totalCorrectAnswer = 0;
let curTimer;
let prevOption;
let userAnswer = "x";
let correctAnswer = "y";

/* --------------- Functions -------------- */
const runTimer = function () {
    timer.textContent = time;
    time--;
    if (time < 0) {
        time = 5;
        displayNextQuestion();
    }
};

const displayQuestion = function (currentQuestion) {
    // Run Timer
    time = 5;
    curTimer = setInterval(runTimer, 1000);

    // Display question and answer
    question.textContent = questionBank[currentQuestion].question;
    answer_A.textContent = questionBank[currentQuestion].answers[0];
    answer_B.textContent = questionBank[currentQuestion].answers[1];
    answer_C.textContent = questionBank[currentQuestion].answers[2];
    answer_D.textContent = questionBank[currentQuestion].answers[3];
};

const displayNextQuestion = function () {
    // ------------ Check Answer-------------//
    if (userAnswer === correctAnswer) totalCorrectAnswer++;
    if (prevOption) prevOption.classList.remove("optionBox_selected");

    // ------------ Display Next Question-------------//
    currentQuestion++;

    // ------------ Display Result-------------//
    if (currentQuestion >= questionBank.length) {
        result.classList.remove("hide");
        quix.classList.add("hide");
        score.textContent = `Your score is : ${totalCorrectAnswer}`;
        let summaryText = "a";
        if (totalCorrectAnswer >= 8) {
            summaryText = "Excellent";
        } else if (totalCorrectAnswer >= 5) {
            summaryText = "Very Good";
        } else if (totalCorrectAnswer >= 3) {
            summaryText = "Good";
        } else {
            summaryText = "Work hard!";
        }
        summary.textContent = `${summaryText}`;
        return;
    }
    clearInterval(curTimer);
    displayQuestion(currentQuestion);
};

/* --------------- Event Listner --------------------- */

displayQuestion(currentQuestion);

document.querySelectorAll(".optionBox").forEach((key) =>
    key.addEventListener("click", function () {
        userAnswer = questionBank[currentQuestion].answers[Number(key.id)];
        correctAnswer = questionBank[currentQuestion].correct;
        if (prevOption) {
            prevOption.classList.remove("optionBox_selected");
        }
        prevOption = key;
        key.classList.add("optionBox_selected");
    })
);

btn.addEventListener("click", displayNextQuestion);

document.querySelector(".Re-Start").addEventListener("click", function () {
    currentQuestion = 0;
    totalCorrectAnswer = 0;
    displayQuestion(currentQuestion);
    result.classList.add("hide");
    quix.classList.remove("hide");
    userAnswer = "";
    prevOption.classList.remove("optionBox_selected");
});
