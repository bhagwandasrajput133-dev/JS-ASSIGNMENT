let baseFare = Number(prompt("Enter base:"));
let distance = Number(prompt("Enter distance:"));
let minutes = Number(prompt("Enter minutesLate:"));
let seedVal = Number(prompt("Enter seed:"));

let total = baseFare + (7 * distance);

if (minutes > 15) {
    total = total + 20;
}

if (distance > 10) {
    total = total + (0.10 * total);
}

if (seedVal % 2 != 0) {
    total = total - seedVal;
} else {
    total = total + seedVal;
}

let extra = total % 5;
if (extra > 0) {
    total = total - extra + 5; 
}

alert(total);