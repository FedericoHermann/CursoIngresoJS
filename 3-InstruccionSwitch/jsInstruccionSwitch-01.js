function mostrar()
{
	//Declaro Variables
	let mes;

	//Asigno valores
	mes = document.getElementById("txtIdMes").value;

	//preparo la condición

	switch (mes) {
		case "Enero":
			alert("Que comiences bien el año")
			break;

		case "Marzo":
			alert("a clases!!!.")
			break;

		case "Julio":
			alert("se vienen las vacaciones!!!.")
			break;

		case "Diciembre":
			alert("Felices Fiestas!!!.")
			break;
	
		default:
			break;
	}

	



}//FIN DE LA FUNCIÓN