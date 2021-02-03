function mostrar()
{

	//declaro variables
	let edad;

	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	//Publico en pantalla

	if (edad >=13 && edad <=17) {
		alert (`Usted es Adolescente`);
	}

}//FIN DE LA FUNCIÓN