

// This will import the function from area.js
const calculateRectangleArea = require('./area');

// This will use the function
const length = 5;
const width = 10;
const area = calculateRectangleArea(length, width);

console.log(`The area of the rectangle is: ${area}`);
