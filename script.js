// TODO PDF ONE (Conditional Statement)

//? Question 1
// document.write("<h1>Check the A&Z / a&z / 0or1.</h1>");

// variable = prompt("Check the A&Z / a&z / 0or1.");

// function checkingVariable() {
//     if (variable === 'A' || variable === 'Z'){
//         document.write("This is Upper-case alphabet.");
//     }
//     else if (variable === 'a' || variable === 'z'){
//         document.write("This is Lower-case alphabet.");
//     }
//     else if (variable === '0' || variable === '1'){
//         document.write("This is an Integer literal.");
//     }
//     else {
//         document.write("Please! select the note letter or numbers.");
//     }
// }

// checkingVariable();

//? Question 2
// document.write("<h1>Integers Comparison</h1>");

// num1 = parseInt(prompt("Enter the First number."));
// num2 = parseInt(prompt("Enter the Second number."));

// function checkingComparison() {
//     if (num1 < num2){
//         document.write("The " + num1 + " is Smaller than " + num2);
//     }
//     else if (num1 > num2){
//         document.write("The " + num1 + " is Greater than " + num2);
//     }
//     else if (num1 === num2){
//         document.write("Both " + num1 + " & " + num2 + " are equal");
//     }
//     else {
//         document.write("Please! Enter the Numbers.");
//     }
// }

// checkingComparison();

//? Question 4

// document.write("<h1>Check If letter is Vowel or Not.</h1>");
// var yourLetter = prompt("Enter the single letter.");
// yourLetter.toLowerCase();

// if (yourLetter === 'a' || yourLetter === 'e' || yourLetter === 'i' || yourLetter === 'o' || yourLetter === 'u') {
//     document.write("Letter " + yourLetter + " is vowel letter." );
// }
// else {
//     document.write("This Letter is not vowel letter.");
// }

//? Question 5

// document.write("<h1>Password Checker</h1>");
// var savePassword = "computer12345";
// var userPassword = prompt("Enter the password.");

// if (savePassword === userPassword) {
//     document.write("Correct Password!");
// }
// else if (savePassword !== userPassword) {
//     document.write("Wrong Password!");
// }

//? Question 6

// var greeting;
// var hour = 13;
// if (hour<18) {
//     greeting = "Good Day"; 
// }
// else {
//     greeting = "Good Evening";
// }
// document.write(greeting);

//? Question 7

// document.write("<h1>Last Question</h1>");
// var userInput = parseInt(prompt("Enter the Time. E.g 1900 means 7pm"));

// if(userInput >= 0 && userInput < 1200) {
//     document.write("Good Morning");
// }
// else if(userInput >= 1200  && userInput < 1700) {
//     document.write("Good Afternoon");
// }
// else if(userInput >= 1700  && userInput < 2100) {
//     document.write("Good Evening");
// }
// else if(userInput >= 2100  && userInput <= 2359) {
//     document.write("Good Night");
// }
// else {
//     document.write("Wrong Format!");
// }

// TODO PDF TWO (Array)

//? Question 1
// let studentName = [];

//? Question 2
// let myArray = new Array();

//? Question 3
// let stringArray = ["Henry", "Ron", "Tony", "Steve"];

//? Question 4
// let numberArray = [2, 10, 23, 9, 13];

//? Question 5
// let booleanArray = [true, false];

//? Question 6
// let mixArray = [true, "Ron", 23, "Steve"];

//? Question 7
// let qualificationsInPakistan = [
//     "SSC",
//     "HSC",
//     "BCS",
//     "BS",
//     "BCOM",
//     "MS",
//     "M. Phil.",
//     "PhD"
//   ];

// console.log(qualificationsInPakistan);

//? Question 8
// let studentNames = ["Tony", "Steve", "Ron"];

// let studentScores = [420, 480, 350];

// const totalMarks = 500;

// function calculatePercentage(score, totalMarks) {
//     return (score / totalMarks) * 100;
//   }

// for (let i = 0; i < studentNames.length; i++) {
//     const studentName = studentNames[i];
//     const studentScore = studentScores[i];
//     const percentage = calculatePercentage(studentScore, totalMarks);
  
//     console.log(`${studentName}'s score: ${studentScore}`);
//     console.log(`${studentName}'s percentage: ${percentage.toFixed(2)}%`);
// }

//? Question 9
// const colorArray = ["red", "blue", "green"];
// document.write("Original array: " + colorArray.join(", ") + "<br>");

// const colorToAddAtBeginning = prompt("Enter a color to add at the beginning:");
// colorArray.unshift(colorToAddAtBeginning);
// document.write("After adding color at the beginning: " + colorArray.join(", ") + "<br>");

// const colorToAddAtEnd = prompt("Enter a color to add at the end:");
// colorArray.push(colorToAddAtEnd);
// document.write("After adding color at the end: " + colorArray.join(", ") + "<br>");

// colorArray.unshift("purple", "orange");
// document.write("After adding two more colors at the beginning: " + colorArray.join(", ") + "<br>");

// colorArray.shift();
// document.write("After deleting the first color: " + colorArray.join(", ") + "<br>");

// colorArray.pop();
// document.write("After deleting the last color: " + colorArray.join(", ") + "<br>");

// const indexToAdd = parseInt(prompt("Enter the index to add a color:"));
// const colorToAddAtIndex = prompt("Enter the color to add at that index:");
// colorArray.splice(indexToAdd, 0, colorToAddAtIndex);
// document.write("After adding a color at index " + indexToAdd + ": " + colorArray.join(", ") + "<br>");

// const indexToDelete = parseInt(prompt("Enter the index to delete color(s) from:"));
// const numColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colorArray.splice(indexToDelete, numColorsToDelete);
// document.write("After deleting " + numColorsToDelete + " color(s) from index " + indexToDelete + ": " + colorArray.join(", ") + "<br>");

//? Question 10
// let studentScores = [320, 230, 480, 120];
// console.log("Scores of Students: " + studentScores);

// studentScores.sort((a, b) => a - b);

// console.log("Order Scores of Students: ", studentScores);

//? Question 11
// let cities = ["Karachi", "Multan", "Lahore", "Islamabad", "Hyderabad"];
// let selectedCities = [];
// selectedCities.push(cities[0], cities[1], cities[2]);

// console.log("Selected Cities:", selectedCities);

//? Question 12
// var arr = ["This", "is", "my", "cat"];
// console.log(arr);
// var singleString = arr.join(" ");

// console.log(singleString);

//? Question 13
// let fifoArray = [];

// fifoArray.push("Value 1");
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");

// let firstValue = fifoArray.shift();
// let secondValue = fifoArray.shift();
// let thirdValue = fifoArray.shift();

// console.log("First In First Out (FIFO) Order:");
// console.log("First Value:", firstValue);
// console.log("Second Value:", secondValue);
// console.log("Third Value:", thirdValue);

//? Question 14
// let lifoArray = [];

// lifoArray.push("Value 1");
// lifoArray.push("Value 2");
// lifoArray.push("Value 3");

// let lastValue = lifoArray.pop();
// let secondToLastValue = lifoArray.pop();
// let thirdToLastValue = lifoArray.pop();

// console.log("Last In First Out (LIFO) Order:");
// console.log("Last Value:", lastValue);
// console.log("Second to Last Value:", secondToLastValue);
// console.log("Third to Last Value:", thirdToLastValue);

//? Question 15
// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<label for='manufacturer'>Select a Phone Manufacturer:</label>");
// document.write("<select id='manufacturer'>");

// for (let i = 0; i < manufacturers.length; i++) {
//   document.write(`<option value='${manufacturers[i]}'>${manufacturers[i]}</option>`);
// }

// document.write("</select>");