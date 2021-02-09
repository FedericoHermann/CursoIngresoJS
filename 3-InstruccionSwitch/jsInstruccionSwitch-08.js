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
		case "Ushuaia":
			alert(`Aqui hace Frío`)
			break;

		case "Cataratas":
		case "Mar del plata":
			alert(`Aquí hace Calor`)
			break;

		default:
			break;
	}
}