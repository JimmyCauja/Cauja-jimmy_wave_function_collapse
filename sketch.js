const celdas = [];
const RETICULA = 5;

const azulejos = 5;
const NA = 17;
const reglas = [
  {
    //tile 0
    UP; 0,
    RIGHT; 0,
    DOWN; 0,
    LEFT; 0,
  },
];

function setup() {
  createCanvas(windowWidth, windowHeigth);
}

function draw() {
  circle(mouseX, mouseY, 20);
}