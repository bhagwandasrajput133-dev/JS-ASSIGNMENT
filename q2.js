let number = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));
let current = number;

for (let i = 1; i <= 3; i = i + 1) {
    if (current % 2 == 0) {
        current = (current / 2) + seed;
    } else {
        current = (current * 3) + seed;
    }
}

if (current >= 100 && current <= 999) {
    let temp = current;
    let lastDigit = temp % 10;
    temp = (temp - lastDigit) / 10;
    let middleDigit = temp % 10;

    if (middleDigit == seed) {
        alert("YES, " + current);
    } else {
        alert("NO, " + current);
    }
} else {
    alert("NO, " + current);
}