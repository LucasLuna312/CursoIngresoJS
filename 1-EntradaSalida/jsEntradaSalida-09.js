/*
Lucas Mariano Luna DIV I
E/S-09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var sueldoConAumento;
	var aumento;

	sueldo = txtIdSueldo.value;
	sueldo = parseFloat(sueldo);
	sueldoConAumento = txtIdResultado.value;
	sueldoConAumento = parseFloat(sueldoConAumento);

	aumento = sueldo * 10/100;

	sueldoConAumento = sueldo + aumento;

	sueldoConAumento = txtIdResultado.value = sueldoConAumento;


	console.log(sueldoConAumento);
	

}

	