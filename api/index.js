const express = require("express");
const joke = require("./data/jokes.json");
const cors = require("cors");

let app = express();

const foods = { 1: "banana", 2: "Apple", 3: "Orange", 4: "Mandarin" };

app.use(cors());
// app.use(express.json()); // Add middleware to parse JSON bodies

app.get("/random-joke", (req, res) => {
  let newjoke = joke[Math.floor(Math.random() * joke.length)];
  res.json({ joke: newjoke });
});

// Change this route to handle POST requests
app.post("/global-jokes", (req, res) => {
  const requestData = req.body;
  console.log("received data: ", requestData);
  res
    .status(201)
    .json({ message: "Data received successfully", data: requestData });
});

app.get("/jokes", (req, res) => {
  res.json({ jokes: joke });
});

//GET localhost:8080/greeting
app.get("/greeting", (req, res) => {
  res.json({ greeting: "Heyy man" });
});

app.post("/foods", (req, res) => {
  res.json({ foods: foods });
});

app.get("/foods/:id", (req, res) => {
  const id = req.params.id;
  if (id > 0 || id >= Object.keys(foods).length) {
    res.json({
      food: foods[parseInt(id)],
    });
  } else {
    res.json({
      error: "745 error, food id not found",
    });
  }
});

app.listen(8080, () => console.log("listening"));

module.exports = app;
