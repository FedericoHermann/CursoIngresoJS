/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//reservo memoria para alojar las variables correspondientes a los datos necesarios
	let nombre;
	let edad;

		//tomo el valor recavado por el user input de nombre en la variable "nombre"
		nombre = document.getElementById("txtIdNombre").value;

		//tomo el valor recavado por el user input de edad en la variable "edad"
		edad = document.getElementById("txtIdEdad").value;
	
		//pone en pantalla mediante un cuadro de diálogo el valor de ambas variables dentro de una cadena de texto 
		//anteriormente: alert("Su nombre es "+nombre+" y su edad es "+edad+" años.");
	alert(`Su nombre es ${nombre} y tiene ${edad} años.`);
}

