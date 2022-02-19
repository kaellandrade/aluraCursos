function merge(notas1, notas2) {
    /**
     * Dado duas notas ordenadas 
     * será retornado um único array ordenado.
     */
    const rank = [];
  
    const lenN1 = notas1.length;
    const lenN2 = notas2.length;
  
    let pointerNotas1 = 0;
    let pointerNotas2 = 0;
    let atual = 0;
  
    while (pointerNotas1 < lenN1 && pointerNotas2 < lenN2) {
      // Existe elementos nos dois Arrays
      if (notas1[pointerNotas1].getNota <= notas2[pointerNotas2].getNota) {
        rank.push(notas1[pointerNotas1]);
        pointerNotas1++;
      } else {
        rank.push(notas2[pointerNotas2]);
        pointerNotas2++;
      }
      atual++;
    }
  
    rank.push(...notas1.slice(pointerNotas1));
    rank.push(...notas2.slice(pointerNotas2));
  
    return rank;
  }

module.exports = merge;