let tentativas = 6;
let listaDinamica = [];
let palavraSecretaSorteada;
let palavras = [
    palavra001 = {
        nome: "ESTER",
    },
    palavra002 = {
        nome: "CETONA",
    },
    palavra003 = {
        nome: "ALCOOL",
    },
    palavra004 = {
        nome: "ETER",
    },
    palavra005 = {
        nome: "HIDROCARBONETO",
    },
    palavra006 = {
        nome: "CARBONO",
    },
    palavra007 = {
        nome: "ACETILENO",
    },
    palavra008 = {
        nome: "HIDROGENIO",
    },
    palavra009 = {
        nome: "FENOL",
    },
    palavra010 = {
        nome: "CARBOXILA",
    },
    palavra011 = {
        nome: "ANIDRIDO",
    },
    palavra012 = {
        nome: "AMINA",
    },
    palavra013 = {
        nome: "AMIDA",
    },
    palavra014 = {
        nome: "NITRILA",
    },
    palavra015 = {
        nome: "ANTRACENO",
    },
    palavra016 = {
        nome: "NAFTALENO",
    },
    palavra017 = {
        nome: "CARBONILA",
    },
    palavra018 = {
        nome: "BENZENO",
    },
    palavra019 = {
        nome: "HIDROXILA",
    },
    palavra020 = {
        nome: "TOLUENO",
    }
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length);   
    palavraSecretaSorteada = palavras[indexPalavra].nome;
}

montarPalavraNaTela();
function montarPalavraNaTela(){

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
   
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#f3f5fc";
    document.getElementById(tecla).style.color = "#0a3871";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("POXA!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você acertou a palavra secreta.");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./Imagems/imagemdois.jpg')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./Imagems/imagemtres.jpg')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./Imagems/imagemquatro.jpg')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./Imagems/imagemcinco.jpg')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./Imagems/imagemseis.jpg')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./Imagems/imagemsete.jpg')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./Imagems/imagemum.jpg')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});