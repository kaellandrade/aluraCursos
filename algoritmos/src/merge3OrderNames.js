function merge3(array, inicio, miolo, final) {
  /**
   * array, inicio do arra default=0, miolo, final.
   * Dado um array dividido e ordenado em ambos os lados
   * retorna um array ordenado.
   */
  const rank = [];
  let atual = 0;
  let atual1 = inicio;
  let atual2 = miolo;

  while (atual1 < miolo && atual2 < final) {
    if (array[atual1].getName < array[atual2].getName) {
      rank.push(array[atual1]);
      atual1++;
      atual++;
    } else {
      rank.push(array[atual2]);
      atual2++;
      atual++;
    }
  }
  // Copia o restante que sobrou do atual 1
  while (atual1 < miolo) {
    rank.push(array[atual1++])
    atual++;
  }
  // Copia o restante que sobrou do atual 2
  while (atual2 < final) {
    rank.push(array[atual2++])
    atual++;
  }

  return rank;
}

module.exports = merge3;
