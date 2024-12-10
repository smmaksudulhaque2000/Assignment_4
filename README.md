# Project Name Assignment_4

This project contains various utility functions for tasks such as tax calculation, email notification generation, checking for digits in a name, calculating final scores, and waiting time based on user input.

## Features

- **Tax Calculation:** Calculates tax based on income and expenses.
- **Email Notification:** Generates a message based on the sender's email.
- **Digit Check in Name:** Checks if a name contains any digits.
- **Final Score Calculation:** Calculates a final score based on test score, school grade, and whether the user is part of the "FFamily."
- **Waiting Time:** Calculates the waiting time based on an array of waiting times and a serial number.

## Installation

To use the functions in this project, clone the repository to your local machine:

- git clone https://github.com/smmaksudulhaque2000/Assignment_4.git

## Usage

- Each function can be used individually by calling them with appropriate arguments.

## Example Usage:

1. calculateTax(income, expense)
   let tax = calculateTax(5000, 3000);
   console.log(tax); // Outputs: 400

2. sendNotification(email)
   let message = sendNotification('example@example.com');
   console.log(message); // Outputs: "example sent you an email from example.com"

3. checkDigitsInName(name)
   let containsDigits = checkDigitsInName('John123');
   console.log(containsDigits); // Outputs: true

4. calculateFinalScore(obj)
   let score = calculateFinalScore({
   testScore: 40,
   schoolGrade: 25,
   isFFamily: true
   });
   console.log(score); // Outputs: true

5. waitingTime(waitingTimes, serialNumber)
   let time = waitingTime([10, 15, 20], 5);
   console.log(time); // Outputs: time calculation result

## Contributing

- Feel free to fork the repository, make changes, and create pull requests to improve the project.
