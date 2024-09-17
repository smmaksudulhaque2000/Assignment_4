function calculateTax(income, expense) {
  if (0 <= income && 0 <= expense && income >= expense) {
    let tax = (income - expense) * 0.2;
    return tax;
  } else {
    return "Invalid Input";
  }
}

function sendNotification(email) {
  if (email.includes("@") === true) {
    let nameAndDomain = email.split("@");
    return nameAndDomain[0] + " sent you an email from " + nameAndDomain[1];
  } else {
    return "Invalid Email";
  }
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  if (
    name.includes(1) ||
    name.includes(2) ||
    name.includes(3) ||
    name.includes(4) ||
    name.includes(5) ||
    name.includes(6) ||
    name.includes(7) ||
    name.includes(8) ||
    name.includes(9)
  ) {
    return true;
  } else {
    return false;
  }
}

function calculateFinalScore(obj) {
  if (
    obj.testScore < 0 ||
    obj.testScore > 50 ||
    obj.schoolGrade < 0 ||
    obj.schoolGrade > 30 ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }
  finalScore = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily === true) {
    finalScore = finalScore + 20;
  }
  if (finalScore < 80) {
    return false;
  } else {
    return true;
  }
}
console.log(calculateFinalScore("demo"));


function waitingTime(waitingTimes, serialNumber) {
  let sum = 0;
  if (Array.isArray(waitingTimes) && typeof serialNumber === "number") {
    for (let number of waitingTimes) {
      sum = sum + number;
    }
    let average = Math.round(sum / waitingTimes.length);
    let dueSerial = serialNumber - (waitingTimes.length + 1);
    let time = dueSerial * average;
    return time;
  } else {
    return "Invalid Input";
  }
}
// Task Completed