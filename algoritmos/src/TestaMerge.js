const Nota = require('./Nota')

function imprimeName(rank) {
  rank.forEach(element => {
    console.log(`${element.getName} => ${element.getNota}`);
  });
}

function merge(notas1, notas2) {
  const rank = [];

  const lenN1 = notas1.length;
  const lenN2 = notas2.length;

  let pointerNotas1 = 0;
  let pointerNotas2 = 0;

  for (let i = 0; i < lenN1 + lenN2; i++) {
    // Existe elementos nos dois Arrays
    if (lenN1 !== pointerNotas1 && lenN2 !== pointerNotas2) {
      if (notas1[pointerNotas1].getNota <= notas2[pointerNotas2].getNota) {
        rank.push(notas1[pointerNotas1]);
        pointerNotas1++;
      } else {
        rank.push(notas2[pointerNotas2]);
        pointerNotas2++;
      }
    }
  }
  if (lenN1 !== pointerNotas1) {
    rank.push(...notas1.slice(pointerNotas1))
  }
  if (lenN2 !== pointerNotas2) {
    rank.push(...notas2.slice(pointerNotas2))
  }
  return rank;

}

const notasDoMauricio = [
  new Nota('andre', 4),
  new Nota('mariana', 5),
  new Nota('carlos', 8.5),
  new Nota('paulo', 9),
]

const notasDoAlberto = [
  new Nota('jonas', 3),
  new Nota('juliana', 6.5),
  new Nota('guilerme', 7),
  new Nota('lucia', 9.3),
  new Nota('ana', 10),
]

const rank = merge(notasDoMauricio, notasDoAlberto);

imprimeName(rank);
