# JS-Assignment 4
**Course:** CSE 106 - Fundamentals of Web Design  
[cite_start]**Name:** Prateek Yadav [cite: 1]

This repository contains the solutions for my fourth assignment in web design. [cite_start]I have written each solution in plain JavaScript, sticking to basic concepts like loops and if-statements as discussed in class[cite: 7, 8]. [cite_start]I used Number() for inputs and alert() for all outputs[cite: 8].

To keep things simple, I didn't use any high-level string methods or the parseInt function. [cite_start]Instead, I relied on math and basic logic to handle the data[cite: 7].

### q1.js (Digit Gatekeeper)
[cite_start]For this problem, I used a for loop to check every number between L and R[cite: 14, 15]. [cite_start]To see if a number had any zeros or what its digit sum was, I used a while loop to peel off each digit mathematically using the modulo operator (%)[cite: 17, 18]. After calculating the sum, I used another loop to check if it was a prime number.
* **Time Complexity:** O(R - L) 
* **Space Complexity:** O(1)

### q2.js (Roll-Seed Lock)
[cite_start]I used a loop that runs exactly 3 times to transform the number N based on whether the current value is even or odd[cite: 28, 29, 30]. Once the loop finished, I checked if the result was a 3-digit number. [cite_start]I pulled out the middle digit using math (chopping off the last digit first) to see if it matched the seed value[cite: 32, 35].
* **Time Complexity:** O(1)
* **Space Complexity:** O(1)

### q3.js (Mirror Corridor)
[cite_start]I set up a loop to test values of X from 0 to 10000[cite: 50]. [cite_start]For every value, I calculated N + X and checked if it was a palindrome by mathematically rebuilding the number in reverse[cite: 47, 48]. [cite_start]If the reversed version matched the original and was divisible by K, I found my answer[cite: 49].
* **Time Complexity:** O(1) (capped at 10,000 iterations)
* **Space Complexity:** O(1)

### q4.js (Fare Calculator)
[cite_start]This script calculates a ride fare based on distance and lateness[cite: 57, 58]. [cite_start]I used standard if-statements to add extra charges or apply the seed rule[cite: 60, 61, 62, 63]. [cite_start]Since I didn't use the Math library, I used the remainder operator to manually round the final fare up to the nearest multiple of 5[cite: 64].
* **Time Complexity:** O(1)
* **Space Complexity:** O(1)

### q5.js (Skipping Numbers)
[cite_start]I used a while loop that keeps track of a running sum until it reaches at least N[cite: 78]. [cite_start]Inside the loop, I incremented m and used the modulo operator to skip any values of m that were divisible by (seed + 2)[cite: 78].
* **Time Complexity:** O(N)
* **Space Complexity:** O(1)

### q6.js (Contest Score Judge)
[cite_start]This one calculates a score using the formula 3a + b - 2c[cite: 93, 95]. [cite_start]I applied the rules to make sure the score doesn't stay negative and added the penalty if the student answered more than 50 questions[cite: 97, 101]. [cite_start]A final if-statement checks if the score is 60 or higher to determine the PASS/FAIL status[cite: 103, 104].
* **Time Complexity:** O(1)
* **Space Complexity:** O(1)