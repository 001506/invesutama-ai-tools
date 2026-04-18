import { generateCopy } from "./generator.js";

const product = document.getElementById("product").value;
const target = document.getElementById("target").value;
const goal = document.getElementById("goal").value;
const tone = document.getElementById("tone").value;
const mode = document.getElementById("mode").value;

const data = {
  product,
  target,
  goal,
  tone,
  mode
};


