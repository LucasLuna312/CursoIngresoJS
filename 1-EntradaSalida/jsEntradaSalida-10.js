/*
Lucas Mariano Luna DIV I
E/S-10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var sueldoConDescuento;
	var descuento;

	sueldo = txtIdImporte.value;
	sueldo = parseFloat(sueldo);

	sueldoConDescuento = parseFloat(sueldoConDescuento);

	descuento = sueldo * 25/100;

	sueldoConDescuento = sueldo - descuento;

	sueldoConDescuento = txtIdResultado.value = sueldoConDescuento;




 }
