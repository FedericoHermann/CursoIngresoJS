function mostrar() {

	//declaro variables
	let estacion;
	let destino;
	let estadia;
	let estadiaAjus; //Valor de la estadía ajustado por destino y estación.

	//Asigno valores
	estacion = document.getElementById("txtIdEstacion").value;

	destino = document.getElementById("txtIdDestino").value;

	estadia = 15000; //Valor básico de la estadía en cualquier lugar.

	//Considero los destinos en base a la estación elegida

	if (estacion == "Invierno") { //calculo Invierno

		switch (destino) {
			case "Bariloche":
				estadiaAjus = estadia * 1.2;
				alert(`Su estadía tiene un valor de $${estadiaAjus}`);
				break;

			case "Cataratas":
			case "Cordoba":
				estadiaAjus = estadia - (estadia * 0.1);
				alert(`Su estadía tiene un valor de $${estadiaAjus}`);
				break;

			case "Mar del plata":
				estadiaAjus = estadia - (estadia * 0.2);
				alert(`Su estadía tiene un valor de $${estadiaAjus}`);
				break;

			default:
				alert(`Su estadía tiene un valor de $${estadia}`);
				break;
		}
	} else {
		if (estacion == "Verano") { // calculo Verano
			switch (destino) {
				case "Bariloche":
					estadiaAjus = estadia - (estadia * 0.2);
					alert(`Su estadía tiene un valor de $${estadiaAjus}`);
					break;

				case "Cataratas":
				case "Cordoba":
					estadiaAjus = estadia * 1.1;
					alert(`Su estadía tiene un valor de $${estadiaAjus}`);
					break;

				case "Mar del plata":
					estadiaAjus = estadia * 1.2;
					alert(`Su estadía tiene un valor de $${estadiaAjus}`);
					break;

				default:
					alert(`Su estadía tiene un valor de $${estadia}`);
					break;
			}
		} else {
			if (estacion == "Otoño" || estacion == "Primavera") { //Calculo Otoño y Primavera
				switch (destino) {
					case "Bariloche":
						estadiaAjus = estadia * 1.1;
						alert(`Su estadía tiene un valor de $${estadiaAjus}`);
						break;

					case "Cataratas":
						estadiaAjus = estadia * 1.1;
						alert(`Su estadía tiene un valor de $${estadiaAjus}`);
						break;

					case "Mar del plata":
						estadiaAjus = estadia * 1.1;
						alert(`Su estadía tiene un valor de $${estadiaAjus}`);
						break;

					default:
						alert(`Su estadía tiene un valor de $${estadia}`);
						break;
				}
			}
		}
	}


}//FIN DE LA FUNCIÓN