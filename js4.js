// 1. 
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const year = parseInt(prompt("Enter a year:"));
console.log(`${year} is ${isLeapYear(year) ? 'a leap year' : 'not a leap year'}.`);

// 2. 
console.log("Using for loop:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Using while loop:");
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

// 3.
function reverseString(str) {
    return str.split('').reverse().join('');
}

const inputString = prompt("Enter a string:");
console.log("Reversed string:", reverseString(inputString));

// 4.
function findLargestAndSmallest(arr) {
    const largest = Math.max(...arr);
    const smallest = Math.min(...arr);
    return { largest, smallest };
}

const numbersArray = [10, 20, 5, 8, 15];
const { largest, smallest } = findLargestAndSmallest(numbersArray);
console.log(`Largest: ${largest}, Smallest: ${smallest}`);

// 5.
const student = {
    name: "John Doe",
    age: 20,
    marks: [],
    addMarks(mark) {
        this.marks.push(mark);
    },
    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    },
    determineGrade() {
        const average = this.calculateAverage();
        if (average >= 90) return "A";
        else if (average >= 75) return "B";
        else if (average >= 50) return "C";
        else return "F";
    }
};

student.addMarks(85);
student.addMarks(90);
console.log(`Average: ${student.calculateAverage()}`);
console.log(`Grade: ${student.determineGrade()}`);

// 6.
function countVowels(sentence) {
    const vowels = 'aeiouAEIOU';
    return [...sentence].filter(char => vowels.includes(char)).length;
}

const inputSentence = prompt("Enter a sentence:");
console.log("Number of vowels:", countVowels(inputSentence));

// 7. 
function processNumbers(num1, num2, callback) {
    return callback(num1, num2);
}

const add = (a, b) => a + b;
console.log("Addition:", processNumbers(5, 3, add));

// 8. 
function convertTemperature(value, unit) {
    if (unit === 'C') {
        return (value * 9/5) + 32 + " °F";
    } else if (unit === 'F') {
        return (value - 32) * 5/9 + " °C";
    } else {
        return "Invalid unit.";
    }
}

const tempValue = parseFloat(prompt("Enter temperature value:"));
const tempUnit = prompt("Enter unit (C for Celsius, F for Fahrenheit):");
console.log("Converted temperature:", convertTemperature(tempValue, tempUnit));

// 9. 
let evenSum = 0;
for (let i = 2; i <= 100; i += 2) {
    evenSum += i;
}
console.log("Sum of even numbers between 1 and 100:", evenSum);

// 10.
function countWordOccurrences(sentence, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = sentence.match(regex);
    return matches ? matches.length : 0;
}

const wordToCount = prompt("Enter a word to count:");
console.log(`The word "${wordToCount}" appears ${countWordOccurrences(inputSentence, wordToCount)} times.`);
