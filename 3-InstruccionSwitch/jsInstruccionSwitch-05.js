function mostrar() {
	//declaro variable
	let hora;

	//Asigno valor
	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);

	//Preparo condición

	switch (hora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana")
			break;

		default:
			break;
	}







}//FIN DE LA FUNCIÓN