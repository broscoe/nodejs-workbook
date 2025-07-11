// Animals API

// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

// importing our Node modules
import express from "express"; // the framework that lets us build a web server

const app = express(); // creating an instance of the express module

app.use(express.json()); // This server will receive and respond in JSON format

const port = 3000; // Setting which port to listen to to receive requests

//defining our port, then turning on our server to listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------

// ---------------------------------
// API Endpoints
// ---------------------------------

// GET /get-all-animals

// GET /get-one-animal/:name

// GET /delete-one-animal/:name

// POST /add-one-animal

// POST /update-one-animal
