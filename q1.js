let start = Number(prompt("Enter L:"));
let end = Number(prompt("Enter R:"));
let divisor = Number(prompt("Enter K:"));
let count = 0;

for (let x = start; x < end; x = x + 1) {
    if (x % divisor == 0) {
        let temp = x;
        let foundZero = false;
        let digitSum = 0;

        while (temp > 0) {
            let lastDigit = temp % 10;
            if (lastDigit == 0) {
                foundZero = true;
            }
            digitSum = digitSum + lastDigit;
            temp = (temp - lastDigit) / 10; 
        }

        if (foundZero == false) {
            let isPrime = true;
            if (digitSum <= 1) {
                isPrime = false;
            }
            
            for (let i = 2; i < digitSum; i = i + 1) {
                if (digitSum % i == 0) {
                    isPrime = false;
                }
            }

            if (isPrime == true) {
                count = count + 1;
            }
        }
    }
}

alert(count);