// Write your Recipe CRUD App code here!

// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

// importing our Node modules
import express from "express"; // the framework we use to build a web server
import fs from "fs/promises"; // the File System module that lets us read files

// Creating an instance of the express module so that we can use all of its superpowers, including its functions, properties, etc.
const app = express();

// Define which port our server should listen to receive requests
const port = 3000;

// say that we're using JSON data type
// Our server will receive data as JSON, and respond with JSON
app.use(express.json());

// run the function that turns on the server to listen for requests on the port
app.listen(port, () => {
  console.log(`My server is listening on port ${port}!`);
});

app.get("/", (req, res) => {
    res.send("Hello World, from Bakari!");
  });
  

  
  // we will call the callback function to handle the incoming GET request
  
  // Handle a GET request to the API endpoint "/" which is the default endpoint, kind of like the home page

// ---------------------------------
// Helper Functions
// ---------------------------------

// When I declare a variable called books inside this function, it is scoped to that function, meaning I can only access it within that function

// helper function that will get the books data from data.json file
async function getAllRecipes() {
  // reading the data from the data.json file
  // readFile takes in 3 parameters:
  // 1. the file path to the file with our data
  // 2. the encoding
  // 3. the callback function that you run once you've read the data

  //this syntax uses call back function
  const recipeData = await fs.readFile("../data.json", "utf8", (err, data) => {
    return data;
  });
  return JSON.parse(recipeData);

}

async function getOneRecipe(recipeIndex) {
    const recipeData = await getAllRecipes();
    const recipe = recipeData[recipeIndex]
    console.log(recipe, "recipe")
    return recipe
}
  
// ---------------------------------
// API Endpoints
// ---------------------------------


// TODO: API Endpoint for handling GET requests to /get-all-recipes
app.get("/get-all-recipes", async (req, res) => {
  const recipes = await getAllRecipes();

  // send the books data as JSON in the response
  res.json(recipes);
});

// TODO: API Endpoint for handling GET requests to /get-one-recipe/:index
app.get("/get-one-recipe/:index", async (req, res) => {
  // we got the user's info
  const recipeIndex = req.params.index;

  // we need to get the book from the data.json
  const recipe = await getOneRecipe(recipeIndex);

  // then send the book back in the response
  res.send(JSON.stringify(recipe));

  console.log(`The user is trying to get the recipe at index ${recipeIndex}`);
});

console.log(fs.readFile("../data.json", "utf8"))


//handle GET requests for getting all the books from data.json
// app.get("/get-all-recipes", async (req, res) => {
//   const recipes = await getAllRecipes();


// TODO: API Endpoint for handling GET requests to /delete-one-recipe/:index

// TODO: API Endpoint for handling GET requests to /update-one-recipe-name/:index/:newName
