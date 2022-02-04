/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;
	var mensaje;
	

	largo = parseInt(document.getElementById('txtIdLargo').value);
	ancho = parseInt(document.getElementById('txtIdAncho').value);

	perimetro = (ancho + largo) * 2;

	alambre = perimetro * 3;

	mensaje = "Usteded necesita comprar: " + alambre + " metros de alambre";

	alert(mensaje);

}
function Circulo () 
{
 	var radio
 	var perimetro;
 	var cantAlambre;
 	var mensaje;

 	radio = document.getElementById('txtIdRadio').value;
 	radio = parseInt(radio);

 	perimetro = 2 * radio * Math.PI;

 	cantAlambre = perimetro * 3;

 	mensaje = "necesita comprar " +cantAlambre.toFixed(2) + " metros de alambre";

 	alert(mensaje);




	
}
function Materiales () 
{

	var largo; 
	var ancho;
	var area;
	var mensaje;
	var cal;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);

	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	area = largo * ancho;
	cemento = area * 2;
	cal = area * 3;

	mensaje = "Para hacer el contra piso se requiere ";
	mensaje += cemento + " bolsas de cemento y " + cal + " bolsas de cal";

	alert(mensaje);
	

}