function mostrar() 
{

	//Declaro Variables
	let destino;

	//asigno valores
	destino = document.getElementById("txtIdDestino").value;

	//Calculo condición

	switch (destino) 
	{
		case "Bariloche":
			alert(`Punto Cardinal: Oeste`)
			break;

		case "Cataratas":
			alert(`Punto Cardinal: Norte`)
			break;

		case "Mar del plata":
			alert(`Punto Cardinal: Este`)
			break;

		case "Ushuaia":
			alert(`Punto Cardinal: Sur`)
			break;

		default:
			break;
	}



}//FIN DE LA FUNCIÓN