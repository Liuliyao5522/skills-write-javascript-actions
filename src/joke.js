import request from "request-promise";
import getJoke from "./joke.js";
import * as core from "@actions/core";

async function run() {
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke", joke);
}

run();
const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
  },
  json: true,
};

async function getJoke() {
  const res = await request(options);
  return res.joke;
}

export default getJoke;