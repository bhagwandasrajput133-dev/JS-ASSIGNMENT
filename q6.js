let correct = Number(prompt("Enter correct (a):"));
let partial = Number(prompt("Enter partial (b):"));
let wrong = Number(prompt("Enter wrong (c):"));

let finalScore = (3 * correct) + partial - (2 * wrong);

if (finalScore < 0) {
    finalScore = 0;
}

if (correct + partial + wrong > 50) {
    finalScore = finalScore - 10;
}

let resultStatus = "FAIL";
if (finalScore >= 60) {
    resultStatus = "PASS";
}

alert(finalScore + ", " + resultStatus);