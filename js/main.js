/*
var nome = "Natália";

alert("Bem-vindo, " + nome + "!");
console.log(nome);
*/

/*
var lista = ["maçã", "pêra", "laranja"];

alert (lista[1]);
lista.push("uva"); //add elemento
lista.pop(); //remove elemento

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - ")); //configura o que vc deseja inserir entre um elemento e outro
*/

/*
var fruta = {nome: "maçã", cor: "vermelha"} // dicionário
console.log(fruta);
console.log(fruta.nome);

var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}] // lista de dicionários
console.log(frutas);
console.log(frutas[1].nome);
*/

/*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var d = new Date();
alert(d.getMonth());
alert(d.getHours());
alert(d.getDay());
*/

/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 2));
*/

/*
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    } else {
        validar = false;
    } 
    return validar;    
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar!");
}

function redirecionar(){
    window.open("http://google.com");
    //window.location.href = "http://google.com";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar!");
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto!");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
    //alert("Trocar texto!");
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}