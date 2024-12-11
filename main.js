const express = require("express");

let app = express();

const foods = { 1: "banana", 2: "Apple", 3: "Orange", 4: "Mandarin" };

//GET localhost:8080/greeting
app.get("/greeting", (req, res) => {
  res.json({ greeting: "Heyy man" });
});

app.get("/foods", (req, res) => {
  res.json({ foods: foods });
});

app.get("/foods/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    food: foods[parseInt(id)],
  });
});

app.listen(8080, () => console.log("listning"));
