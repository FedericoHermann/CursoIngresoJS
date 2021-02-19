/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	//declaración de variables.
	var sexoIngresado;

	//Se toman valores del usuario
	sexoIngresado = prompt("ingrese f ó m .");

	sexoIngresado = sexoIngresado.toLocaleLowerCase()

	//Evaluo que el caracter ingresado corresponda a "f" o "m"	
	while (sexoIngresado !="f" && sexoIngresado !="m") 
	{
		alert(`Por Favor ingrese solamente " f " para Femenino y " m " para Masculino`);

		//Se toman nuevamente valores del usuario
		sexoIngresado = prompt("ingrese f ó m .");

		sexoIngresado = sexoIngresado.toLocaleLowerCase()
	} 

	if (sexoIngresado == "f") 
	{
		sexoIngresado = "Femenino";
	} 
	else 
	{
		sexoIngresado = "Masculino";
	}
	
	//Muestra a traves de la caja de texto.
	txtIdSexo.value=sexoIngresado;

}//FIN DE LA FUNCIÓN