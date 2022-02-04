/*
Lucas Mariano Luna DIV I
E/S-07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = txtIdNumeroUno.value;

	numeroDos = txtIdNumeroDos.value; 

	suma = parseInt(numeroUno)+parseInt(numeroDos);

	alert(suma);



}

  

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno = txtIdNumeroUno.value;

	numeroDos = txtIdNumeroDos.value; 

	resta = parseInt(numeroUno)-parseInt(numeroDos);

	alert(resta);

}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplo;

	numeroUno = txtIdNumeroUno.value;

	numeroDos = txtIdNumeroDos.value; 

	multiplo = parseInt(numeroUno)*parseInt(numeroDos);

	alert(multiplo);

}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var división;

	numeroUno = txtIdNumeroUno.value;

	numeroDos = txtIdNumeroDos.value; 

	división = parseInt(numeroUno)/parseInt(numeroDos);

	alert(división);

}

