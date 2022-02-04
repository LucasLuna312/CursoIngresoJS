/*1.
Lucas Mariano Luna DIV I
E/S-TPs-1
	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;

	precio1 = parseFloat(document.getElementById('txtIdPrecioUno').value);
	precio2 = parseFloat(document.getElementById('txtIdPrecioDos').value);
	precio3 = parseFloat(document.getElementById('txtIdPrecioTres').value);

	suma = precio1 + precio2 + precio3;

	alert("El resultado es " + suma);
	

}

function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var promedio;

	precio1 = document.getElementById('txtIdPrecioUno').value;
	precio1 = parseFloat(precio1);
	precio2 = document.getElementById('txtIdPrecioDos').value;
	precio2 = parseFloat(precio2);
	precio3 = document.getElementById('txtIdPrecioTres').value;
	precio3 = parseFloat(precio3);

	promedio = (precio1 + precio2 + precio3)/3;	

	alert("el promedio es " + promedio);

}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var finalConIva;

	precio1 = document.getElementById('txtIdPrecioUno').value;
	precio1 = parseFloat(precio1);
	precio2 = document.getElementById('txtIdPrecioDos').value;
	precio2 = parseFloat(precio2);
	precio3 = document.getElementById('txtIdPrecioTres').value;
	precio3 = parseFloat(precio3);

	finalConIva = (precio1 * precio2 * precio3) * 21/100;

	

	alert("el precio final con iva es " + finalConIva);

}