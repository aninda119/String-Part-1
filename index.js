//How are strings stored in JavaScript
/*
let str1 = "Aninda";
let str2 = "Aninda";
let str3 = "Dey";
console.log(str1 === str2);//true
console.log(str1 === str3);//false
*/
//Sort a string in JavaScript
//sorting the given string by the use of the sort() function.
/*
let sortingString = (Stringg) => {
  return Stringg.split("").sort().join("");
};
console.log("sorted string:");
console.log(sortingString("AnindaSEY"));
*/
//sorting the given string by the use of the sort(), localCompare(), and join() functions.
/*
let sortString = (str) => {
  return [...str].sort((a, b) => a.localeCompare(b)).join("");
};
console.log("sorted string:");
console.log(sortString("AnindaDey"));
*/
//How to convert string into float in JavaScript?
//By using Number() constructor
/*
let stringNumber = "3.14";
let floatNumber = Number(stringNumber);
console.log(floatNumber);
*/
//Write a JavaScript function to split a string and convert it into an array of words.
/*
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
*/
/*
stringToArray = function (str) {
  return str.trim().split("");
};
console.log(stringToArray("Aninda Dey"));
*/
//Write a JavaScript function to split a string and convert it into an array of words.
/*
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
*/
/*
// Define a function called protect_email, which takes a user_email string as input
protect_email = function (user_email) {
  // Declare variables avg, splitted, part1, and part2
  let avg, splitted, part1, part2;
  // Split the user_email string into two parts using "@" as the delimiter and store them in the splitted array
  splitted = user_email.split("@");
  // Store the first part of the email in the part1 variable
  part1 = splitted[0];
  // Calculate the average length of the first part of the email
  avg = part1.length / 2;
  // Extract the substring of part1 from index 0 to (part1.length - avg) and store it back in part1
  part1 = part1.substring(0, part1.length - avg);
  // Store the second part of the email in the part2 variable
  part2 = splitted[1];

  // Return a protected version of the email by concatenating part1, "...@", and part2
  return part1 + "...@" + part2;
};
// Call the protect_email function with the input "robin_singh@example.com" and log the result to the console
console.log(protect_email("deyaninda@gmail.com"));
*/
// Call the protect_email function with the input "robin_singh@example.com" and log the result to the console
//1. Using String Concatenation
/*
const stringMultipleSpace =
  "My" + " " + "name" + " " + "is" + " " + "aninda" + " " + "Dey";
console.log(stringMultipleSpace);
*/
//2.Using Template Literals with Backticks
/*
const name = "Aninda";
const greeting = `Hello  ${name}!`;
console.log(greeting);
let multiLinestring = `This is a string
                         with multiple spaces and
                         lines.`;
console.log(multiLinestring);
*/
//Convert string into date using JavaScript
//Creating date object using date string: The date() constructor creates a date in human-understandable date form.
/*
let date = new Date("26 June 2024, 12:00:00 pm");
console.log(date);
*/
// Using JavaScript toDateString() method
/*
let date = new Date(2024, 6, 26);
console.log(date.toDateString());
*/
// Using Date.parse() method
// Input string
let d = "June 26, 2024 ";

// Using Date.parse method
let parse = Date.parse(d);

// Converting to date object
let date = new Date(parse);

// Display output
console.log(date);
