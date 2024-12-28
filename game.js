import { HEIGHT, WIDTH } from "./constant.js";
import Duck from "./duck.js";

console.log("test");
let gameContainer = document.getElementById("game-container");
gameContainer.style.backgroundColor = "rgb(60,188,253)";
gameContainer.style.width = `${WIDTH}px`;
gameContainer.style.height = `${HEIGHT}px`;
gameContainer.style.position = "relative";
addTree(gameContainer);
addGround(gameContainer);
addGrass(gameContainer);
let duck = new Duck(gameContainer);
duck.addDuck();

function addGround(container) {
  let ground = document.createElement("div");
  ground.style.backgroundColor = "rgb(136,112,0)";
  ground.style.width = "100%";
  ground.style.height = "30%";
  ground.style.position = "absolute";
  ground.style.bottom = "0px";
  container.appendChild(ground);
}

function addGrass(container) {
  let grass = document.createElement("div");
  grass.style.backgroundColor = "#80d011";
  grass.style.width = "100%";
  grass.style.height = "17%";
  grass.style.position = "absolute";
  grass.style.bottom = "30%";
  container.appendChild(grass);
}

function addTree(container) {
  let tree = document.createElement("div");
  tree.style.backgroundColor = "#7c0900";
  tree.style.width = "10%";
  tree.style.height = "40%";
  tree.style.position = "absolute";
  tree.style.bottom = "36%";
  tree.style.left = "10%";
  container.appendChild(tree);
}

function update() {
  duck.update();
  duck.render();
  requestAnimationFrame(update);
}

update();
