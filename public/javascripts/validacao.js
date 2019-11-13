var validacao = function() {
	var nome = $("#nome").val();
	var matricula = $("#matricula").val();


	if (nome == "") {
		alert("Por favor digite o nome")
		$("nome").focus();
		return false;
	}

	if (matricula == "") {
		alert("Por favor digite a matricula")
		$("matricula").focus();
		return false;
	}

	return true;
}

var excluirDados = function(matricula){
	if(confirm("Deseja Realmente Excluir?")){
		window.location.href = "/excluir?matricula=" + matricula;
	}
}