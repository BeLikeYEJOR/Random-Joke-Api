const express = require("express");
const { joke } = require("../jokes.js");

let app = express();

const foods = { 1: "banana", 2: "Apple", 3: "Orange", 4: "Mandarin" };

app.get("/random-joke", (req, res) => {
  let newjoke = joke[Math.floor(Math.random() * joke.length)];
  res.json({ joke: newjoke });
});

app.get("/jokes", (req, res) => {
  res.json({ jokes: joke });
});

//GET localhost:8080/greeting
app.get("/greeting", (req, res) => {
  res.json({ greeting: "Heyy man" });
});

app.get("/foods", (req, res) => {
  res.json({ foods: foods });
});

app.get("/foods/:id", (req, res) => {
  const id = req.params.id;
  if (id > 0 || id >= foods.length) {
    res.json({
      food: foods[parseInt(id)],
    });
  } else {
    res.json({
      error: "745 error, food id not found",
    });
  }
});

app.listen(8080, () => console.log("listning"));

module.exports = app;
