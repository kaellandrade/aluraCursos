// :TODO Ajustar esse código passagem por REFERÊNCIA;
function TestaOrdenacaoAoIntercalar(array, inicio, miolo, final) {
  /**
   * array, inicio do arra default=0, miolo, final.
   * Dado um array dividido e ordenado em ambos os lados
   * retorna um array ordenado.
   */
  const rank = Array(final - inicio);
  let atual = 0;
  let atual1 = inicio;
  let atual2 = miolo;

  while (atual1 < miolo && atual2 < final) {
    if (array[atual1].getNota < array[atual2].getNota) {
      rank[atual] = array[atual1];
      atual1++;
      atual++;
    } else {
      rank[atual] = array[atual2];
      atual2++;
      atual++;
    }
  }
  // Copia o restante que sobrou do atual 1
  while (atual1 < miolo) {
    rank[atual] = array[atual1++]
    atual++;
  }
  // Copia o restante que sobrou do atual 2
  while (atual2 < final) {
    rank[atual] = array[atual2++]
    atual++;
  }
  for (let cont = 0; cont < atual; cont++) {
    array[inicio + cont] = rank[cont]
  }
  return array;
}

module.exports = TestaOrdenacaoAoIntercalar;
