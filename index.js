import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke";

app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render("interface.ejs", {Joke: "Click the button below to generate a hilarious Programmer joke!"});
});

app.post('/get-jokes', async (req, res) => {
    try {
    const result = await axios.get(API_URL + "/Programming");
    res.render("interface.ejs", { Joke: result.data.joke || `${result.data.setup} ${result.data.delivery}` });
  } catch (error) {
    res.render("interface.ejs", { Joke: "Oops! Couldn't fetch a joke. Try again." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});