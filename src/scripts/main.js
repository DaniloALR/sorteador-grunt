document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sorteio-form').addEventListener('submit', function(event){
        event.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value
        numeroMaximo = parseInt(numeroMaximo)

        let numeroSorteado = Math.random() * numeroMaximo
        numeroSorteado = Math.floor(numeroSorteado) + 1
        
        document.querySelector('.valor-resultado').innerText = numeroSorteado
        document.querySelector('.resultado').style.display = 'block'
    })
})