const celdas = [];
const RETICULA = 5;

const azulejos = 5;
const NA = 30;
const reglas = [
  {
    //tile 0
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 1
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 2
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 1,
  },
  {
    //tile 3
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {
    //tile 4
    UP: 2,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 5
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 6
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 1,
  },
  {
    //tile 7
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {
    //tile 8
    UP: 2,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 9
    UP: 0,
    RIGHT: 0,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 10
    UP: 2,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 11
    UP: 2,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 12
    UP: 0,
    RIGHT: 0,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 13
    UP: 0,
    RIGHT: 0,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 14
    UP: 2,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {
    //tile 15
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 16
    UP: 2,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 17
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {
    //tile 18
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 19
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 20
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 21
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 22
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 23
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 24
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 25
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 26
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 27
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 28
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile 29
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
];

function preload() {
  for (let i = 0; i < NA; i++){
    azulejos[i] = loadImage(`azulejos/tile${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);
  let opcionesI = []
  for (let i = o; i < azulejos.length; i++) {
    opcionesI.push(i);
  }

  for (let i = o; i < RETICULA * RETICULA; i++){
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
  celdas[8].colapsada = true;
  celdas[3].colapsada = true;
}

function draw() {
  const celdasDisponibles = celdas.filter((celda) => celda.colapsada == false);
  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a,b) =>{ a.opciones.length - b.opciones.length})
  }
  noLoop();
}