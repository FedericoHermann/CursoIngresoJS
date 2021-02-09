function mostrar() 
{
	//declaro variables
	let estacion;
	let destino;

	//asigno valores
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	//evaluo condiciones

	if (estacion == "Invierno") 
	{ //evaluamos invierno
		switch (destino) 
		{
			case "Bariloche":
				alert(`Se Viaja`);
				break;

			default:
				alert(`No se Viaja`);
				break;
		}
	} 
	else 
	{
		if (estacion == "Verano") 
		{ //evaluamos verano
			switch (destino) 
			{
				case "Cataratas":
				case "Mar del plata":
					alert(`Se Viaja`);
					break;

				default:
					alert(`No se Viaja`);
					break;
			}

		}
		else 
		{
			if (estacion == "Otoño") 
			{ //evaluamos Otoño
				alert(`Se Viaja`)

			}
			else
			{
				switch (destino) 
				{
					case "Bariloche":
						alert(`No se Viaja`);
						break;

					default:
						alert(`Se Viaja`)
						break;
				}
			}
		}
	}




}//FIN DE LA FUNCIÓN