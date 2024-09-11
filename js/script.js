const respostasCorretas = [2, 1, 3, 0, 3, 0, 1, 1, 2, 3]; 
function verificarRespostas() {
let acertos = 0;
let erros = 0;

const resposta1 = document.querySelector('input[name="pergunta1"]:checked');
if (resposta1 && parseInt(resposta1.value) === respostasCorretas[0]) {
acertos++;
} else {

erros++;
}


const resposta2 = document.querySelector('input[name="pergunta2"]:checked');
if (resposta2 && parseInt(resposta2.value) === respostasCorretas[1]) {
acertos++;
} else {
erros++;
}


const resposta3 = document.querySelector('input[name="pergunta3"]:checked');
if (resposta3 && parseInt(resposta3.value) === respostasCorretas[2]) {
acertos++;
} else {

erros++;
}

const resposta4 = document.querySelector('input[name="pergunta4"]:checked');
if (resposta4 && parseInt(resposta4.value) === respostasCorretas[3]) {
acertos++;
} else {

erros++;
}

const resposta5 = document.querySelector('input[name="pergunta5"]:checked');
if (resposta5 && parseInt(resposta5.value) === respostasCorretas[4]) {
acertos++;
} else {

erros++;
}

const resposta6 = document.querySelector('input[name="pergunta6"]:checked');
if (resposta6 && parseInt(resposta6.value) === respostasCorretas[5]) {
acertos++;
} else {

erros++;
}

const resposta7 = document.querySelector('input[name="pergunta7"]:checked');
if (resposta7 && parseInt(resposta7.value) === respostasCorretas[6]) {
acertos++;
} else {

erros++;
}

const resposta8 = document.querySelector('input[name="pergunta8"]:checked');
if (resposta8 && parseInt(resposta8.value) === respostasCorretas[7]) {
acertos++;
} else {

erros++;
}

const resposta9 = document.querySelector('input[name="pergunta9"]:checked');
if (resposta9 && parseInt(resposta9.value) === respostasCorretas[8]) {
acertos++;
} else {

erros++;
}

const resposta10 = document.querySelector('input[name="pergunta10"]:checked');
if (resposta10 && parseInt(resposta10.value) === respostasCorretas[9]) {
acertos++;
} else {

erros++;
}

localStorage.setItem("acertos", acertos);
localStorage.setItem("erros", erros);


window.location.href = "resultado.html";
}