const Nota = require("./Nota");
const merge1 = require("./merge1");
const merge2 = require("./merge2");

function imprimeName(rank) {
  rank.forEach((element) => {
    console.log(`${element.getName} => ${element.getNota}`);
  });
}

// ------Mege 1------
const notasDoMauricio = [
  new Nota("andre", 4),
  new Nota("mariana", 5),
  new Nota("carlos", 8.5),
  new Nota("paulo", 9),
];

const notasDoAlberto = [
  new Nota("daniel", 0),
  new Nota("jonas", 3),
  new Nota("juliana", 6.5),
  new Nota("guilerme", 7),
  new Nota("lucia", 9.3),
  new Nota("ana", 10),
  new Nota("bob", 1000),
];

// ------Mege 1------
const arrayUnicoNotas = [...notasDoMauricio, ...notasDoAlberto];

const rank1 = merge1(notasDoMauricio, notasDoAlberto);
const rank2 = merge2(arrayUnicoNotas, 0, 4, arrayUnicoNotas.length);

imprimeName(rank2);
