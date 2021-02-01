/*

Hermann Federico

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'

Ejercicio 03*/

function mostrar()
{
	let dato;

	dato = document.getElementById("txtIdNombre").value;

	alert(dato);

	document.getElementById("txtIdNombre").value = "";
	//Deja con carácter vacío el valor de la caja de texto creada en HTML
}


