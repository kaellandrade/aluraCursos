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

let notas = [
  new Nota("paulo", 9),
  new Nota("mariana", 5),
  new Nota("juliana", 6.7),
  new Nota("ana", 10),
  new Nota("lucia", 9.3),
  new Nota("jonas", 3),
  new Nota("andre", 4),
  new Nota("carlos", 8.5),
  new Nota("guilherme", 7)
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
// const rank3 = merge3(names, 0, 5, names.length);

notas = TestaOrdenacaoAoIntercalar(notas, 0, 1, 2);
notas = TestaOrdenacaoAoIntercalar(notas, 2, 3, 4);
notas = TestaOrdenacaoAoIntercalar(notas, 0, 2, 4);

notas = TestaOrdenacaoAoIntercalar(notas, 4, 5, 6);
notas = TestaOrdenacaoAoIntercalar(notas, 6, 7, 8);
notas = TestaOrdenacaoAoIntercalar(notas, 4, 6, 8);

notas = TestaOrdenacaoAoIntercalar(notas, 0, 4, 8);

notas = TestaOrdenacaoAoIntercalar(notas, 0, 8, notas.length);

imprimeName(notas);
