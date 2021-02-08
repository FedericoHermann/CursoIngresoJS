function mostrar()
{
	//declaro variables
	let edad;
	let estadoC;

	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	
	edad = parseInt(edad);

	//tomo el estado civil
	estadoC = document.getElementById("estadoCivil").value;
	
	//Publico en pantalla
	if (edad > 18 || estadoC == "Soltero" ) {
		alert(`Es soltero y no es menor.`);
	}


}//FIN DE LA FUNCIÓN