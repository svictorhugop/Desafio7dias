
const name = prompt("Qual o seu nome?");
const age = prompt("Quantos anos você tem?")
const lP = prompt("Qual liguagem de programação você está estudando?")
const resp = prompt("Você gosta de estudar "+lP+"?") 

document.getElementById('l1').innerHTML = "Olá "+name+", você tem "+age+" anos e já está aprendendo "+lP+"!"

if(resp == "Sim" || resp == "S"){
    document.getElementById("l2").innerHTML = "Muito bom! Continue estudando e você terá muito sucesso."
} else if(resp == "Não" || resp == "N"){
    document.getElementById("l3").innerHTML =" \rAhh que pena... Já tentou aprender outras linguagens?"
}else if(resp != "Não" || resp != "Sim" || resp != "S" || resp != "N"){
    alert("Não entendi sua resposta. Escreva Sim ou Não para a pergunta!");
}
