// 1) Function to calculate the difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}

// 2) Function to check if a number is odd
function isOdd(number) {
    return number % 2 !== 0;
}

// 3) Function to find the minimum number in an array
function findMin(numbers) {
    return Math.min(...numbers);
}

// 4) Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// 5) Function to sort an array in descending order
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}

// 6) Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7) Function to calculate the average of numbers in an array
function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// 8) Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
