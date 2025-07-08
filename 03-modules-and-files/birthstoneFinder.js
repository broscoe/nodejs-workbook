/* 
YOUR TASK: 
Create a program that determines the birthstone for a month inputted by the user. 
Your app should read birthstone data from the data.json file.

REQUIREMENTS:
- Your program should accept 1 user input: a year (such as "January")
- Your program should output a console.log() message that says the month's birthstone, such as...
    - "The birthstone for January is Garnet."
    - "The birthstone for July is Ruby." 
*/

// allow the file to access the file system Node module
//the fs module is built into Node

// this is common js syntax
// const fs = require("fs");
import { readFile } from fs

//console.log(fs);

//get user input
//we want the user to input a month
const month = process.argv[2]
console.log(month)

function getBirthStone() {
    //we're gonna use the readFile method to read from the data.json file
    //this method takes in 3 parameters:
    //1. the file we want to read
    //2. the way the file is encoded
    //3. the function we run once we've read the file

    readFile("./data.json", "utf8", (err, data) => {
       // console.log(data)
       const birthStoneData = JSON.parse(data);

       // tell user their birthstone
   if (birthStoneData[month]) {
    console.log(`The birhtstone for ${month} is ${birthStoneData[month]}`)
   } else {
    console.log("Invalid month, please enter a valid month!")
   }
    });

   
} 
//run my function
    getBirthStone()