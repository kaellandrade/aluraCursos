const Nota = require("./Nota");
const merge1 = require("./merge1");
const merge2 = require("./merge2");
const merge3 = require("./merge3OrderNames");
const TestaOrdenacaoAoIntercalar = require("./TestaOrdenacaoAoIntercalar");



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

const names = [
  new Nota("Andressa", null),
  new Nota("Camila", null),
  new Nota("Enzo", null),
  new Nota("Fernando", null),
  new Nota("Maria", null),
  new Nota("Alberto", null),
  new Nota("Jonas", null),
  new Nota("Junior", null),
  new Nota("Paloma", null),
  new Nota("Paulo", null)
]

// ----Merge 1----
const rank1 = merge1(notasDoMauricio, notasDoAlberto);

// ------Merge 2------
const arrayUnicoNotas = [...notasDoMauricio, ...notasDoAlberto];
/*
const rank2 = merge2(arrayUnicoNotas, 0, 4, arrayUnicoNotas.length);
imprimeName(rank2);
*/
// -----Merger 3 order by names-----
const rank3 = merge3(names, 0, 5, names.length);
TestaOrdenacaoAoIntercalar(names, 0, 5, names.length);

// imprimeName(rank3);
