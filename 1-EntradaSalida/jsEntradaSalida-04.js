/* 
Lucas Mariano Luna DIV I
E/S-04

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreDelEmpleado;

	nombreDelEmpleado = prompt("Ingrese el nombre de su tatara abuelo");

	document.getElementById('txtIdNombre').value = nombreDelEmpleado;
}

