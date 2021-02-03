function mostrar()
{
	//declaro variables
	let edad;

	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	//Publico en pantalla
	if (edad >=18) {
		alert(`Usted es mayor de edad`);

	} else {
		
		if (edad >=13 && edad <=17) {
			alert (`Usted es Adolescente`);
		
		} else  {
			alert(`Usted es un niño`);
		}
		
	}


}//FIN DE LA FUNCIÓN