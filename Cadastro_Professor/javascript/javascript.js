function calcular(){

	var formulario = document.getElementById("formulario");
	    var kilos= +formulario.kilos.value;
		var metros = +formulario.metros.value;
		var centimetros = +formulario.centimetros.value;
		 
		var altura = (metros * 100 + centimetros)/100; 

		var imc = kilos / (altura * altura);

		formulario.imc.value = imc;

}
/*document.write(x); imprime dentro da tela */
/*toUpperCase(); Letras maiuscula */


	/*function ligar() {
			document.getElementById("xti").src ="img/lampada_on.png";	

		  var nome = prompt("qual o seu nome?");

		  alert("Prazer em conhcer voce " +nome);

		  var x = 6;

		  alert(x==6);

//<img id="xti" onclick="ligar();" src="img/lampada_off.png" />
		}
			*/
/*
function calcular(){

	var formulario = document.getElementById("formulario");
	    var kilos= +formulario.kilos.value;
		var metros = +formulario.metros.value;
		var centimetros = +formulario.centimetros.value;
		 
		var altura = (metros * 100 + centimetros)/100; 

		var imc = kilos / (altura * altura);

		formulario.imc.value = imc;

}
 */

 /*
 var paises = new Array("Brasil","Canáda","Rússia","Orlando","EUA");

	for(var i =0; i < paises.length; i ++){
		alert(paises[i]);
	}

alert(paises.push("Argentina")); //adiciona ao fim da fila
alert(paises);
alert(paises.shift()); // remove o primeiro da fila 
alert(paises);
alert(paises.pop()); //remove o ultimo da fila
alert(paises);
alert(paises.unshift("entrou errado")); //adiciona no inicio da fila
alert(paises); 
*/ 

// document.getElementByTagName(); recupera todos os elementos que tenham uma determinada tag
//confirm("");