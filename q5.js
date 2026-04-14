let targetN = Number(prompt("Enter N:"));
let studentSeed = Number(prompt("Enter seed:"));

let currentSum = 0;
let mValue = 0;
let skipRule = studentSeed + 2;

while (currentSum < targetN) {
    mValue = mValue + 1;
    if (mValue % skipRule != 0) {
        currentSum = currentSum + mValue;
    }
}

alert("m: " + mValue + "\nsum: " + currentSum);