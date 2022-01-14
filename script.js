

const instrucoes = document.getElementsByClassName('instrucoes')[0]
const jogador = document.getElementsByClassName('gravarJogador')[0]
const scoreFinal = document.querySelector('#scoreFinal')
const somDestruicao = document.getElementsByClassName('somDestruicao')[0]
const botao = document.querySelector('#botao')
const conteiner = document.getElementsByClassName('conteiner')[0]
const vida = document.getElementsByClassName('vida')[0]
const life1 = document.getElementsByClassName('vida1')[0]
const life2 = document.getElementsByClassName('vida2')[0]
const life3 = document.getElementsByClassName('vida3')[0]
const controles = document.getElementsByClassName('comandos')[0]
const vitoriaJanela = document.getElementsByClassName('vitoria')[0]
const derrotaJanela = document.getElementsByClassName('derrota')[0]
const janelaMensagem = document.getElementsByClassName('respostaInimigo')[0]
const resultadoDaBatalhaGanha = document.getElementsByClassName('resultadoDaBatalhaGanha')[0]
const resultadoDaBatalhaPerde = document.getElementsByClassName('resultadoDaBatalhaPerde')[0]
const pontuacao = document.getElementsByClassName('score')[0]
const bumWing1 = document.getElementsByClassName('explosaoWing1')[0]
const bumWing2 = document.getElementsByClassName('explosaoWing2')[0]
const bumWing3 = document.getElementsByClassName('explosaoWing3')[0]
const bumDeath1 = document.getElementsByClassName('explosaoDeath1')[0]
const bumDeath2 = document.getElementsByClassName('explosaoDeath2')[0]
const bumDeath3 = document.getElementsByClassName('explosaoDeath3')[0]
const adeusWing = document.getElementsByClassName('destuindo-wing')[0]
const adeusDeath = document.getElementsByClassName('destuindo-death')[0]
const death = document.getElementsByClassName('death')[0]
const tie = document.getElementsByClassName('tie')[0]
const xwing = document.getElementsByClassName('x-Wing')[0]
let quantidadeDeVida = 3
let atingido = false
let continua = false
let pontos = 0
let resposta = ""
let venceu = false
let derrota = false
let explosaoWing = 1
let explosaoDeath = 1
let musicaSim = true

const player = {
    nome:"",
    score:0

}


botao.addEventListener("click", function(){ 
    
    controles.style.display = "flex" 

    comecarJogo()});


function comecarJogo(){
    
        instrucoes.style.display = "none"
        

        conteiner.style.display = "flex"                  // APARECE O JOGO
        vida.style.display = "flex"                       // CONFIG DAS JANELAS
        pontuacao.style.display = "flex"


        resposta = respostaInimigo()
        janelaMensagem.style.display = "flex"           
        janelaMensagem.innerHTML = resposta 

        if(quantidadeDeVida === 2)
        life3.style.display = "none"                // ACERTA BARRA DE VIDA
        if (quantidadeDeVida === 1)
            life2.style.display = "none"
        if (quantidadeDeVida === 0){
            life1.style.display = "none"
            derrota = true
            derrotaFinal()
         }
  
}

function acao(acao){
    resultadoDaBatalhaGanha.style.display = "none"    
        resultadoDaBatalhaPerde.style.display = "none"
    resultado(acao, resposta)
    /////
 
        pontuacao.innerHTML = pontos
        controles.style.display = "none"
        janelaMensagem.style.display = "flex"
      

        if(venceu){
            adeusDeath.style.display = "flex"
            janelaMensagem.style.display = "none"           // DESABILITA JANELAS DESNECESSARIAS
            resultadoDaBatalhaGanha.style.display = "none"
            resultadoDaBatalhaPerde.style.display = "none"
            vitoriaJanela.style.display = "flex"
            death.style.display = "none"
            tie.style.display = "none"
            

        }
        if(derrota){
            adeusWing.style.display = "flex"
            janelaMensagem.style.display = "none"           // DESABILITA JANELAS DESNECESSARIAS
            resultadoDaBatalhaGanha.style.display = "none"
            resultadoDaBatalhaPerde.style.display = "none"
            derrotaJanela.style.display = "flex"
            xwing.style.display = "none"

            
        }
 
        comecarJogo()

}

function resultado(acao, resposta){
    if ((resposta === "Tie-Fighter atacando" && acao === "desviar") || (resposta === "Canhão de Plasma atacando" && acao === "atirar") || (resposta === "Corredor Livre" && acao === "acelerar" )){
         controles.style.display = "none"  
        resultadoDaBatalhaGanha.style.display = "flex"
        
        if(explosaoDeath === 1){
            bumDeath1.style.display = "flex"
            explosaoDeath++
        } else if (explosaoDeath === 2){
            bumDeath2.style.display = "flex"
            explosaoDeath++
        } else {
            bumDeath3.style.display = "flex"
            explosaoDeath = 1
        }

        pontos += 100
        atingido = false

    } else if (resposta === "Ponto fraco à frente" && acao === "atirar") {
        venceu = true
        atingido = false
        pontos+=1000
    }else{
        controles.style.display = "none"  
     
        resultadoDaBatalhaPerde.style.display = "flex"
        
         
        if(explosaoWing === 1){
            bumWing1.style.display = "flex"
            explosaoWing++
        } else if(explosaoWing === 2){
            bumWing2.style.display = "flex"
            explosaoWing++
        } else {
            bumWing3.style.display = "flex"
            explosaoWing = 1
        }
        quantidadeDeVida--
        atingido = true
    }
}

function respostaInimigo(){
    const resposta = Math.random()
    if (resposta <=0.25)
      return "Tie-Fighter atacando"
   else if (resposta >0.25 && resposta <=0.5)
       return "Canhão de Plasma atacando"
   else if(resposta >0.5 && resposta<=0.75)
       return "Corredor Livre"
   else 
       return "Ponto fraco à frente"
}       

function derrotaFinal(){
    adeusWing.style.display = "flex"
    janelaMensagem.style.display = "none"           // DESABILITA JANELAS DESNECESSARIAS
    resultadoDaBatalhaGanha.style.display = "none"
    resultadoDaBatalhaPerde.style.display = "none"
    derrotaJanela.style.display = "flex"
    xwing.style.display = "none"

}

function ativaControle(){
    resultadoDaBatalhaGanha.style.display = "none"
    resultadoDaBatalhaPerde.style.display = "none"
    janelaMensagem.style.display = "none"   
    controles.style.display = "flex"
    comecarJogo()
}


function musica(){
    
    const musica = document.getElementsByClassName('musica')[0]
    const boxMusica = document.getElementsByClassName('box-musica')[0]
    if(musicaSim){
        musica.play()
        boxMusica.innerHTML = "<button class='botaoMusica' onclick='musica()'>Música ON</button>"
        musicaSim = false
    } else {
        musica.pause()
        boxMusica.innerHTML = "<button class='botaoMusica' onclick='musica()'>Música OFF</button>"
        musicaSim = true
    }
    
}


function gravaPlayer(){
    jogador.style.display = "flex"
    scoreFinal.value = `${pontos}`
    

}
