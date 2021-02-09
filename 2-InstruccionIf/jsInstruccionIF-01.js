function mostrar() {

	//declaro variables
	let edad;

	//tomo la edad  

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	//Publico la edad en pantalla

	if (edad == 15) {
		alert(`Niña Bonita!`)
	} else {
		alert(`Su edad es: ${edad} años.`)
	}



}//FIN DE LA FUNCIÓN