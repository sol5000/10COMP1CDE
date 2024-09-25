const prompt = require('prompt-sync')();

let score = 0;
const quiz = [
    { question: "Where am i from", answer: "hong kong" },
    { question: "Where did I go during summer?", answer: "switzerland" },
    { question: "Where did I go during summer 2?", answer: "germany" },
    { question: "True or False: I have traveled to more than 5 countries.", answer: "true" },
    { question: "What language am i learning", answer: "german" },
    { question: "Is Michael bernard bear", answer: "true" },
    { question: "What street did i see in london", answer: "Hollen" },
    { question: "How many places did i go to over the summer", answer: "15" },
    { question: "hello", answer: "hello" },    
];

quiz.forEach(({ question, answer }, index) => {
    const userAnswer = prompt(`${index + 1}. ${question}\nYour answer: `);
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log("Correct!\n");
        score++;
    } else {
        console.log(`Incorrect! The correct answer is: ${answer}\n`);
    }
});

console.log(`Your total score is: ${score} out of ${quiz.length}`);
