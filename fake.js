function generateFake() {
    const subjects = ["Donald Trump", "Darth Vader", "Elon Musk", "The Queen"];
    const actions = ["gets captured by aliens", "steps on a frog", "jumps into a ravine", "discovers a black hole"];
    const objects = ["in the White House", "on Coruscant", "near the titanic", "during prime time"];

    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];

    return `${randomSubject} ${randomAction} ${randomObject}`;
}

console.log(generateFake());