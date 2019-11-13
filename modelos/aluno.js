var App = require ('../config/app')

var Aluno = function(){

    this.nome = "";
    this.matricula = "";


    this.salvar = function(callback, Matricula){
      var query = "";
      if(Matricula == undefined){
        query = "insert into turma.alunos(matricula, nome)values('" + this.matricula + "', '" + this.nome + "') ";
      }
      
      console.log(query);
      
      App.db.cnn.exec(query, function(dadosRetornadosDaTabela, erro) {
        if(erro){
          console.log("Erro ao executar a query (" + query + ")");
          callback.call();
        }
        else{
          callback.call();
        }
      });
    }

    this.excluir = function(callback){
      var query = "delete from turma.alunos where matricula='" + this.matricula + "' ";  
      console.log(query);
      
      App.db.cnn.exec(query, function(dadosRetornadosDaTabela, erro) {
        if(erro){
          console.log("Erro ao executar a query (" + query + ")");
          callback.call();
        }
        else{
          callback.call();
        }
      });
    }

}


Aluno.todos = function(callback){
  var query = "SELECT * FROM turma.alunos";
  App.db.cnn.exec(query, function(dadosRetornadosDaTabela, erro) {
    if(erro){
      console.log("Erro ao executar a query (" + query + ")");
      callback.call(null, []);
    }
    else{
      callback.call(null, dadosRetornadosDaTabela);
    }
  }); 
}

module.exports = Aluno;