let startNum = Number(prompt("Enter N:"));
let targetK = Number(prompt("Enter K:"));
let resultX = -1;

for (let x = 0; x <= 10000; x = x + 1) {
    let currentTotal = startNum + x;
    let temp = currentTotal;
    let reversed = 0;

    while (temp > 0) {
        let lastDigit = temp % 10;
        reversed = (reversed * 10) + lastDigit;
        temp = (temp - lastDigit) / 10;
    }

    if (currentTotal == reversed) {
        if (currentTotal % targetK == 0) {
            resultX = x;
            break;
        }
    }
}

alert(resultX);