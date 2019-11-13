var express = require('express');
var router = express.Router();
var Aluno = require('../modelos/aluno');

/* GET home page. */
router.get('/', function (request, response, next) {
  Aluno.todos(function(alunos){
    response.render('index',  { 
      title: 'Node.js',
      alunos: alunos
    });
  });

});

router.get('/excluir', function (request, response, next) {
  var aluno = new Aluno();
  aluno.matricula =  request.query.matricula;
  aluno.excluir(function(){
    response.redirect("/"); 
  })

});

router.post('/cadastrar-aluno', function (request, response, next) {
  var aluno = new Aluno();

  aluno.matricula =  request.body.matricula;
  aluno.nome =  request.body.nome;


  aluno.salvar(function(){
    response.redirect("/"); 
  });
});

module.exports = router;