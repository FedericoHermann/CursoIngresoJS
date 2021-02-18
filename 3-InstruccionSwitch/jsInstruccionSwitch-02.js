function mostrar() 
{
	//Declaro Variables
	let mes;

	//Asigno valores
	mes = document.getElementById("txtIdMes").value;

	//preparo la condición

	switch (mes) 
	{
		case "Enero":		
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el Invierno")
			break;

		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.")
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.")
			break;

		default:
			break;
	}

}//FIN DE LA FUNCIÓN