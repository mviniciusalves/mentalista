var numeroSecreto = parseInt(Math.random() * 11)

function Chutar() {
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value)

    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Acertou!"
        } 

        else if (chute > 10 || chute < 0) {
            elementoResultado.innerHTML = "Você tem que digitar de 0 a 10"
        }
      
            else {
                elementoResultado.innerHTML = "Errou"
            } 
}