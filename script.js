var calcular = document.getElementById('calcular');


function somaPA(){
    var a1 = document.getElementById('primeiro').value;
    var an = document.getElementById('último').value;
    var qnt = document.getElementById('quantidade').value;
    var resultado = document.getElementById('resultado');

    if (a1 !== '' && an !== '' && qnt != ''){
        
        var somaTermos =  ((a1 + an) * qnt) / 2


        resultado.textContent = somaTermos

    }else{
        resultado.textContent = 'Preencha todos os campos!!!'
    }

}


calcular.addEventListener('click', somaPA );