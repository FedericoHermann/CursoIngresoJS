function mostrar() {
	//Declaro Variables
	let mes;

	//Asigno valores
	mes = document.getElementById("txtIdMes").value;

	//preparo la condición
	switch (mes) {
		case "Febrero":
			alert("Este mes tiene 28 días.")
			break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 días.")
			break;

		default:
			alert("Este mes tiene 30 días.")
			break;

	}

}
//FIN DE LA FUNCIÓN