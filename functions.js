function Data(){
    var getDia = new Date()
    var dia = getDia.getDate()
    var getMes = new Date()
    var mes = getMes.getMonth()
    var getAno = new Date()
    var ano = getAno.getUTCFullYear()

    var data = window.document.getElementById('data')

    switch (mes){
        case 0:
            mes = 'Janeiro'
            break
        case 1:
            mes = 'Fevereiro'
            break
        case 2:
            mes = 'Março'
            break
        case 3:
            mes = 'Abril'
            break
        case 4:
            mes = 'Maio'
            break
        case 5:
            mes = 'Junho'
            break
        case 6:
            mes = 'Julho'
            break
        case 7:
            mes = 'Agosto'
            break
        case 8:
            mes = 'Setembro'
            break
        case 9:
            mes = 'Outubro'
            break
        case 10:
            mes = 'Novembro'
            break
        case 11:
            mes = 'Dezembro'
            break
        default:
            mes = "inexistente"            

    }    

    data.innerHTML = `${dia} de ${mes} de ${ano}`
    
}

Data()

function Calcular(){
    //Define as variaveis
    var nome = window.document.getElementById('txtNome').value
    var metro = window.document.getElementById('txtMetro').value
    var cent = window.document.getElementById('txtCent').value
    var altura = `${metro}.${cent}`
    var peso = window.document.getElementById('txtPeso').value
    
    //Define o sexo para o calculo do peso ideal
    var sexo = document.querySelector('input[name="sexo"]:checked').value

    //calcula o imc
    var calculoImc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))

    //define o calculo do peso ideal
    var calculoPI = ''

    if (sexo == 'masc'){
        calculoPI = ((parseFloat(altura) - 100) * 0.85) * (-1)
    }
    else if(sexo == 'fem'){
        calculoPI = ((parseFloat(altura) - 100) * 0.70) * (-1)
    }
       
    //define as repostas de acordo com o IMC
    if (calculoImc <= 18.5){
        
        window.document.getElementById('resposta').innerHTML = ` <p id="respNome">Olá ${nome}, segue seu resultado:</p>
                     <p id="respImc">O seu Indice de Massa Corporal é <strong>${calculoImc.toFixed(2)}</strong></p>
                     <p id="respClassificacao"><strong>Sua classificação é:</strong><p style="color:yellow;"><strong>Peso Baixo</strong></p></p>
                     <br>
                     <p id="pesoIdeal">Dica de Peso Ideal: <strong>${calculoPI.toFixed(2)}</strong> Kg</p>
                     <p>Procure um profissional para uma avaliação adequada!</p>`
        
    }
    else if(calculoImc > 18.5 && calculoImc <= 24.9){
        window.document.getElementById('resposta').innerHTML  = ` <p id="respNome">Olá ${nome}, segue seu resultado:</p>
                     <p id="respImc">O seu Indice de Massa Corporal é <strong>${calculoImc.toFixed(2)}</strong></p>
                     <p id="respClassificacao"><strong>Sua classificação é:</strong><p style="color:green;"><strong>Peso Normal</strong></p></p>`        
        
    }
    else if(calculoImc > 24.9 && calculoImc <= 29.9){
        window.document.getElementById('resposta').innerHTML  = ` <p id="respNome">Olá ${nome}, segue seu resultado:</p>
                     <p id="respImc">O seu Indice de Massa Corporal é <strong>${calculoImc.toFixed(2)}</strong></p>
                     <p id="respClassificacao"><strong>Sua classificação é:</strong><p style="color:orange;"><strong>Sobrepeso</strong></p>
                     <br>
                     <p id="pesoIdeal">Dica de Peso Ideal: <strong>${calculoPI.toFixed(2)}</strong> Kg</p>
                     <p>Procure um profissional para uma avaliação adequada!</p>`
    }
    else if(calculoImc > 29.9 && calculoImc <= 34.9){
        window.document.getElementById('resposta').innerHTML  = ` <p id="respNome">Olá ${nome}, segue seu resultado:</p>
                     <p id="respImc">O seu Indice de Massa Corporal é <strong>${calculoImc.toFixed(2)}</strong></p>
                     <p id="respClassificacao"><strong>Sua classificação é:</strong><p style="color:rgb(255,155,9);"><strong>Obesidade (Grau I)</strong></p>
                     <br>
                     <p id="pesoIdeal">Dica de Peso Ideal: <strong>${calculoPI.toFixed}</strong> Kg</p>
                     <p>Procure um profissional para uma avaliação adequada!</p>`
    }
    else if(calculoImc > 39.9 && calculoImc <= 39.9){
        window.document.getElementById('resposta').innerHTML  = ` <p id="respNome">Olá ${nome}, segue seu resultado:</p>
                     <p id="respImc">O seu Indice de Massa Corporal é <strong>${calculoImc.toFixed(2)}</strong></p>
                     <p id="respClassificacao"><strong>Sua classificação é:</strong><p style="color:rgb(255,55,55);"><strong>Obesidade Severa (Grau II)</strong></p>
                     <br>
                     <p id="pesoIdeal">Dica de Peso Ideal: <strong>${calculoPI.toFixed(2)}</strong> Kg</p>
                     <p>Procure um profissional para uma avaliação adequada!</p>`
    }
    else if(calculoImc > 39.9){
        window.document.getElementById('resposta').innerHTML  = ` <p id="respNome">Olá ${nome}, segue seu resultado:</p>
                     <p id="respImc">O seu Indice de Massa Corporal é <strong>${calculoImc.toFixed(2)}</strong></p>
                     <p id="respClassificacao"><strong>Sua classificação é:</strong><p style="color:red;"><strong>Obesidade Mórbida (Grau III)</strong></p>
                     <br>
                     <p id="pesoIdeal">Dica de Peso Ideal: <strong>${calculoPI.toFixed(2)}</strong> Kg</p>
                     <p>Procure um profissional para uma avaliação adequada!</p>`
    }   

}

Calcular()

function Limpar(){
    document.location.reload(true)
}

Limpar()