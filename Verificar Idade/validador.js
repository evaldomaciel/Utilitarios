function validarIdadeCliente() {
    // Tratamento da data recebida via formulários
    dataNascimento = document.getElementById("dataNascimento");
    var dataN = $(dataNascimento);
//    alert(dataN.val());
    
    //Calculo  - //6570 -> dias até 18 anos. 
    date1 = new Date();
    date2 = new Date(dataN.val());
    var diferenca = Math.abs(date1 - date2); //diferença em milésimos e positivo
    var dia = 1000 * 60 * 60 * 24; // milésimos de segundo correspondente a um dia
    var total = Math.round(diferenca / dia); //valor total de dias arredondado 
    var total2 = Math.round(total / 365);

    if (total < 6570) {
        dataNascimento.setCustomValidity("Cliente menor de idade \nLocação não pode ser realizada");
        document.getElementById("ToBeChanged").innerHTML = "<div class=\"alert alert-danger\">Cliente tem: " + total2 + " anos.</div>" + total;
        return false;
    } else {
        dataNascimento.setCustomValidity('Cliente tem mais de 18 anos =)');
    }
}