// Let's make a CRUD (Create, Read, Update, Delete) app that runs on the CLI (Command Line Interface)!
// We'll start with the "Read" part — reading the books data from the data.json file.

//import readFile from fs (file system) built-in module
import { readFile } from "fs";


//--------------------------------------------------------------------------------
//                    Get all books function
//--------------------------------------------------------------------------------

// Get all books and print them to the console
function getAllBooks() {
  // TODO: Read the file, parse the JSON, and log each book's title and text
  // reading the data.json file to get the books data
  readFile("./data.json", "utf8", (err, data) => {
    //console.log(data)
    
    // parse the JSON and turn it into JS
    const parsedBooks = JSON.parse(data);
    //console.log(parsedBooks)
    
    // loop through all the books and print them to the console
    parsedBooks.forEach((book) => {
      console.log("title: ", book.title)
      console.log("description: ", book.text)
      console.log("\n")
    });
  });
};

/*--------------------------------------------------------------------------------
                     Get one book function
--------------------------------------------------------------------------------*/

// Get one book by index and print it to the console
function getOneBook(index) {
  // TODO: Read the file, parse the JSON, and log only the book at the given index
  // reading the data.json file to get the books data
 readFile("./data.json", "utf8", (err, data) => {
  //console.log(data)
  

if (err) {
  console.log(err)
}

  // parse the JSON and turn it into JS
  const parsedBooks = JSON.parse(data);
  //console.log(parsedBooks)
  
  if (index === undefined || index > parsedBooks.length -1 || index < 0) {
    console.log("please enter a valid index")
  }
  else {
  console.log("title: ", parsedBooks[index].title)
  console.log("description: ", parsedBooks[index].text)
  };
});
};



//--------------------------------------------------------------------------------
//                    Handle user input and run correct function
//--------------------------------------------------------------------------------

// Read user input from the command line
const action = process.argv[2]; // e.g. "getAllBooks"
const bookIndex = process.argv[3]; // e.g. "3"

// Run the correct function based on the user's input
if (action === "getAllBooks") {
  getAllBooks();
} else if (action === "getOneBook") {
  getOneBook(bookIndex);
} else {
  console.log("Invalid action. Try one of these:");
  console.log("  node index.js getAllBooks");
  console.log("  node index.js getOneBook <index>");
}
