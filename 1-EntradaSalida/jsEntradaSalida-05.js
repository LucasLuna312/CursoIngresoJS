/*
Lucas Mariano Luna DIV I
E/S-05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	var mensaje; 

	//nombre = txtIdNombre.value;
	//edad = txtIdEdad.value;


	nombre = document.getElementById('txtIdNombre').value;
    
    edad = document.getElementById('txtIdEdad').value;

    mensaje = " Usted se llama " + nombre + " y tiene " + edad + " años "

    
	alert(mensaje);

    

	
}

    //txtIdNombre
	//txtIdEdad

 //nombre = txtIdNombre.value;
	//nombre = document.getElementById('txtIdNombre').value;
    //edad = txtIdEdad.value;
    //edad = document.getElementById('txtIdEdad').value;
