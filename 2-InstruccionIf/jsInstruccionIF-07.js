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
	if (edad < 18 || estadoC != "Soltero") 
	{
		alert(`Es muy pequeño para NO ser soltero.`);
	}


}//FIN DE LA FUNCIÓN