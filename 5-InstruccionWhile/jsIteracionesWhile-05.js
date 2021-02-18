/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	//declaración de variables.
	var sexoIngresado;

	//Se toman valores del usuario
	sexoIngresado = prompt("ingrese f ó m .");

	//Evaluo que el caracter ingresado corresponda a "f" o "m"	
	if (sexoIngresado !="f" && sexoIngresado !="m" && sexoIngresado != "F" && sexoIngresado != "M") 
	{
		alert(`Por Favor ingrese solamente " F " o " f " para Femenino y " M " o " m " para Masculino`);

	} 
	else 
	{
		switch (sexoIngresado) 
		{
			case "f": //evaluo condicion
			case "F":
				sexoIngresado = "Femenino";
				break;
		
			default:
				sexoIngresado = "Masculino";
				break;
		}
	}
	
	//Muestra a traves de la caja de texto.
	txtIdSexo.value=sexoIngresado;

}//FIN DE LA FUNCIÓN