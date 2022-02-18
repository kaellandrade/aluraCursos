class Nota{
  constructor(nome, nota){
    this.nome = nome;
    this.nota = nota;
  }
  get getName(){
    return this.nome;
  }
  get getNota(){
    return this.nota;
  }
}
module.exports=Nota