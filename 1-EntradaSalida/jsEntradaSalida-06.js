/*
Lucas Mariano Luna DIV I
E/S-06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	
   

	numeroUno = txtIdNumeroUno.value;

	numeroDos = txtIdNumeroDos.value; 

	suma = parseInt(numeroUno)+parseInt(numeroDos);


	alert("El resultado es " + suma);



}

//txtIdNumeroUno
//txtIdNumeroDos