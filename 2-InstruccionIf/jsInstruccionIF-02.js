function mostrar() {
	//asigno Variables
	let edad;


	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	//Publico en pantalla
	if (edad >= 18) 
	{
		alert("Usted es mayor de edad")
	}


}//FIN DE LA FUNCIÓN